import styles from "./mastercard-logo.module.css";

export default function MastercardLogo() {
  return (
    <svg
      className={styles["mastercard-logo"]}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      preserveAspectRatio="xMidYMid meet"
      aria-label="Mastercard accepted">
      <g fill="none" fillRule="evenodd">
        <circle cx="7" cy="12" r="7" fill="#EA001B" />
        <circle cx="17" cy="12" r="7" fill="#FFA200" fillOpacity=".8" />
      </g>
    </svg>
  );
}
