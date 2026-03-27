type BrandMarkProps = {
  size?: number;
  className?: string;
};

export default function BrandMark({ size = 44, className = '' }: BrandMarkProps) {
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden rounded-xl ${className}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <svg
        width={Math.round(size * 0.78)}
        height={Math.round(size * 0.78)}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect x="4" y="4" width="92" height="92" rx="24" fill="#071A3B" stroke="#1F5AA0" strokeWidth="4" />
        <path d="M26 27V73H57" stroke="#DDE7FA" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M46 73V27L74 73V27" stroke="#DDE7FA" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M63 22L78 22" stroke="#FF8A00" strokeWidth="6" strokeLinecap="round" />
        <circle cx="82" cy="22" r="4" fill="#FF8A00" />
      </svg>
    </div>
  );
}
