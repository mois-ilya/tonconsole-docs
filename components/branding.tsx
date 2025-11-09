import Image from 'next/image';

/**
 * TONAPI Branding component with theme support
 * Shows appropriate logo for light/dark theme using dark: CSS classes
 */
export function BrandingComponent() {
  return (
    <div className="flex items-center gap-2.5">
      {/* Dark theme logo - white */}
      <div className="hidden dark:block">
        <Image
          src="/icon.svg"
          alt="TONAPI"
          width={28}
          height={28}
          className="shrink-0"
        />
      </div>

      {/* Light theme logo - black */}
      <div className="block dark:hidden">
        <svg
          width="28"
          height="28"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="shrink-0"
        >
          <path opacity="0.9" d="M20 20V1.11111L1.11108 20H20Z" fill="currentColor" />
          <path opacity="0.7" d="M20 20V38.8889L1.11108 20H20Z" fill="currentColor" />
          <path opacity="0.6" d="M20 20V38.8889L38.8889 20H20Z" fill="currentColor" />
          <g opacity="0.8">
            <path d="M20 20V1.11111L38.8889 20H20Z" fill="currentColor" />
          </g>
        </svg>
      </div>

      {/* Text branding - follows TONAPI guidelines */}
      <span className="text-[15px]">
        <span className="font-bold">TON</span>
        <span className="font-normal ml-0.5">API</span>
      </span>
    </div>
  );
}
