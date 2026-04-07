type Props = {
  className?: string;
  height?: number;
  white?: boolean;
};

export default function AKLogo({ className = "", height = 50, white = false }: Props) {
  const navy  = white ? "#ffffff" : "#1e3a7a";
  const green = white ? "#90c9a0" : "#2d7a3a";

  // viewBox: 560 wide × 160 tall — matches logo proportions
  return (
    <svg
      viewBox="0 0 560 160"
      height={height}
      width={height * (560 / 160)}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="AK Rental Service"
      role="img"
    >
      {/* ── HOUSE ICON ── */}

      {/* Left roof slope (navy diagonal beam going top-right) */}
      <polygon points="10,105 68,18 88,32 30,118" fill={navy} />

      {/* Right roof slope */}
      <polygon points="68,18 148,105 128,118 68,42" fill={navy} />

      {/* House body (navy rectangle) */}
      <rect x="28" y="108" width="102" height="48" fill={navy} />

      {/* Window — 2×2 grid of white squares */}
      <rect x="42" y="116" width="16" height="16" fill="white" />
      <rect x="60" y="116" width="16" height="16" fill="white" />
      <rect x="42" y="134" width="16" height="16" fill="white" />
      <rect x="60" y="134" width="16" height="16" fill="white" />

      {/* ── GREEN K OVERLAPPING HOUSE ── */}
      {/* K vertical bar */}
      <rect x="88" y="30" width="20" height="110" fill={green} />
      {/* K upper diagonal arm */}
      <polygon points="108,30 148,18 148,42 108,72" fill={green} />
      {/* K lower diagonal arm */}
      <polygon points="108,88 148,118 148,142 108,110" fill={green} />

      {/* ── TEXT: AK ── */}
      <text
        x="178"
        y="90"
        fontFamily="'Arial Black', 'Arial', sans-serif"
        fontWeight="900"
        fontSize="78"
        fill={navy}
        letterSpacing="-1"
      >AK</text>

      {/* ── TEXT: Rental Service ── */}
      <text
        x="178"
        y="138"
        fontFamily="'Arial', sans-serif"
        fontWeight="700"
        fontSize="40"
        fill={green}
      >Rental Service</text>
    </svg>
  );
}
