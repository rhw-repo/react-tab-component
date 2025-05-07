import PropTypes from "prop-types";
import styles from "./onceTabPanel.module.css";
import OnceForm from "./OnceForm";
import OnceLogos from "../components/logos/OnceLogos";

/**
 * @function OnceTabPanel
 * @returns {JSX.Element} - Container with one-off donation tab content
 */
const OnceTabPanel = ({ openTab }) => {
  return (
    <main tabIndex={0}>
      <span className={styles["main__span-1"]}></span>{" "}
      <span className={styles["main__span-2"]}></span>
      <h1 className={styles.main__h1}>
        I would like to make a one-off donation of
      </h1>
      <OnceForm />
      <div className={styles["once__footer"]}>
        <OnceLogos />
        <div aria-live="polite" className={styles["sr-only"]}></div>
        {/* To open the MonthlyTab */}
        <div className={styles["nav__paragraph"]}>
          <button
            type="button"
            className={styles["nav__button"]}
            onClick={() => {
              openTab("monthly");
            }}>
            I would like to give monthly
          </button>
        </div>
      </div>
    </main>
  );
};

OnceTabPanel.propTypes = {
  openTab: PropTypes.func.isRequired,
};

export default OnceTabPanel;
