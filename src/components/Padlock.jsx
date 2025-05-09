import PropTypes from "prop-types";

const DEFAULT_FILL = "#000000";
const DEFAULT_SIZE = "1em";

export default function Padlock({ fill = DEFAULT_FILL, size = DEFAULT_SIZE }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 900 1280"
      preserveAspectRatio="xMidYMid meet"
      fill={fill}>
      <g
        transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)"
        stroke="none">
        <path
          d="M4260 12794 c-585 -53 -980 -159 -1445 -389 -281 -139 -476 -263
        -710 -451 -542 -435 -976 -1051 -1200 -1704 -116 -339 -178 -643 -205 -1006
        -6 -84 -10 -564 -10 -1207 l0 -1067 -329 0 c-286 0 -332 -2 -345 -16 -15 -14
        -16 -343 -16 -3468 0 -3332 1 -3453 18 -3469 17 -16 343 -17 4484 -17 4313 0
        4465 1 4481 18 16 17 17 272 17 3470 0 3124 -1 3452 -16 3466 -13 14 -59 16
        -345 16 l-329 0 0 1068 c0 1060 -3 1201 -36 1457 -131 1032 -699 1978 -1559
        2596 -161 117 -316 208 -530 314 -410 203 -791 315 -1255 371 -128 15 -570 27
        -670 18z m645 -1083 c316 -50 565 -130 848 -273 519 -263 944 -692 1206 -1218
        138 -278 209 -503 264 -835 20 -126 21 -162 24 -1272 l4 -1143 -2751 0 -2751
        0 4 1143 c3 1110 4 1146 24 1272 55 332 126 557 264 835 364 731 1031 1259
        1832 1449 84 20 323 58 412 65 127 10 493 -4 620 -23z"
        />
      </g>
    </svg>
  );
}

Padlock.propTypes = {
  fill: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
