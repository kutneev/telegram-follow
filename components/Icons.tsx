import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export function TelegramLogo(props: IconProps) {
  return (
    <svg viewBox="0 0 1000 1000" fill="none" aria-hidden="true" {...props}>
      <defs>
        <linearGradient id="telegram-logo-gradient" x1="500" x2="500" y1="0" y2="992.58" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2AABEE" />
          <stop offset="1" stopColor="#229ED9" />
        </linearGradient>
      </defs>
      <circle cx="500" cy="500" r="500" fill="url(#telegram-logo-gradient)" />
      <path
        d="M226.328 494.722C372.089 431.217 469.285 389.35 517.917 369.122C656.773 311.367 685.625 301.335 704.431 301.004C708.568 300.931 717.816 301.956 723.806 306.817C728.865 310.921 730.257 316.466 730.923 320.357C731.589 324.249 732.418 333.114 731.759 340.041C724.234 419.102 691.675 610.965 675.111 699.515C668.102 736.984 654.301 749.548 640.941 750.777C611.905 753.449 589.856 731.588 561.733 713.153C517.727 684.306 492.866 666.349 450.15 638.2C400.784 605.669 432.786 587.789 460.919 558.569C468.282 550.921 596.215 434.556 598.691 424C599.001 422.68 599.288 417.759 596.365 415.16C593.441 412.562 589.126 413.45 586.012 414.157C581.599 415.159 511.298 461.625 375.11 553.556C355.155 567.259 337.081 573.935 320.887 573.585C303.034 573.199 268.693 563.491 243.164 555.192C211.851 545.014 186.964 539.633 189.132 522.346C190.26 513.343 202.659 504.135 226.328 494.722Z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

export function UsersIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M8.5 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z" stroke="currentColor" strokeWidth="1.8" />
      <path d="M2.8 20c.7-3.5 2.8-5.2 5.7-5.2 2.8 0 5 1.7 5.7 5.2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M16 11.2a3 3 0 1 0-.3-5.9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M15.8 14.9c2.5.3 4.3 2 4.9 5.1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function ShieldIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M12 3.2 5 6v5.3c0 4.5 2.8 7.7 7 9.5 4.2-1.8 7-5 7-9.5V6l-7-2.8Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="m8.8 12.1 2.1 2.1 4.5-4.6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function SendIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="m20.2 4.2-7.1 16-3.2-6.4-6.4-3.2 16.7-6.4Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="m9.9 13.8 4.8-4.8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function TrendIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M4 16.5 9.2 11l3.6 3.2L20 6.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14.8 6.5H20v5.2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="m5 12.6 4.2 4.1L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
