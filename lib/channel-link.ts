export function normalizeChannelLink(platform: string, value: string): string | null {
  var kind = platform.toLowerCase();
  var text = value.trim();
  if (!text || /\s/.test(text)) return null;

  if (text.charAt(0) === "@") {
    var name = text.slice(1);
    var hosts: Record<string, string> = { telegram: "t.me", vk: "vk.com", instagram: "instagram.com" };
    var validName = kind === "telegram" ? /^[a-zA-Z0-9_]+$/ : /^[a-zA-Z0-9_.]+$/;
    if (!Object.prototype.hasOwnProperty.call(hosts, kind) || !validName.test(name)) return null;
    text = hosts[kind] + "/" + name;
  } else if (kind === "vk" && /^(club|public|id)\d+$/i.test(text)) {
    text = "vk.com/" + text;
  }

  if (!/^[a-z][a-z0-9+.-]*:\/\//i.test(text)) text = "https://" + text;
  try {
    var url = new URL(text);
    if (!["http:", "https:"].includes(url.protocol) || url.username || url.password || url.port) return null;
    var host = url.hostname.toLowerCase().replace(/^www\./, "");
    var allowedHosts: Record<string, string[]> = {
      telegram: ["t.me", "telegram.me"],
      max: ["max.ru"],
      vk: ["vk.com", "vk.ru", "m.vk.com", "m.vk.ru"],
      instagram: ["instagram.com", "m.instagram.com"]
    };
    if (!Object.prototype.hasOwnProperty.call(allowedHosts, kind) || !allowedHosts[kind].includes(host)) return null;
    if (!url.pathname.replace(/\//g, "")) return null;
    url.protocol = "https:";
    url.hostname = host.replace(/^m\./, "");
    return url.href;
  } catch (error) {
    return null;
  }
}
