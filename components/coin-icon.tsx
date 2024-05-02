export function CoinIcon({ w }: { w: string }) {
  return (
    <svg
      className="inline-block"
      xmlns="http://www.w3.org/2000/svg"
      width={w}
      height={w}
      viewBox="0 0 24 24"
      fill="none"
    >
      <ellipse
        rx="8.5"
        ry="9"
        transform="matrix(-1 0 0 1 10.5 12)"
        stroke="#000000"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13 8.8C12.3732 8.29767 11.5941 8 10.7498 8C8.67883 8 7 9.79086 7 12C7 14.2091 8.67883 16 10.7498 16C11.5941 16 12.3732 15.7023 13 15.2"
        stroke="#000000"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M11 3C14.6667 3 22 3.9 22 12C22 20.1 14.6667 21 11 21" stroke="#000000" strokeWidth="2" />
    </svg>
  );
}
