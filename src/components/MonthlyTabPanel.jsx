import PropTypes from "prop-types";
import styles from "./monthlyTabPanel.module.css";
import MonthlyForm from "./MonthlyForm";
import MonthlyLogos from "../components/logos/MonthlyLogos";
/**
 * @function MonthlyTab
 * @returns {JSX.Element} - Container with monthly donation tab content
 */
const MonthlyTabPanel = ({ openTab }) => {
  return (
    <main tabIndex={0}>
      <span className={styles["main__span-monthly-tab-panel"]}></span>
      <h1 className={styles.main__h1}>
        I would like to make a monthly donation of
      </h1>
      <MonthlyForm />
      <div className={styles.main__footer}>
        <MonthlyLogos />
        <p className={styles["main__monthly-text"]}>
          All Direct Debits are protected by the Direct Debit Guarantee.
        </p>
        <div aria-live="polite" className={styles["sr-only"]}></div>
          {/* To open the OnceTab */}
        <div className={styles["nav__paragraph"]}>
          <button
            type="button"
            className={styles["nav__button"]}
            onClick={() => {
              openTab("once");
            }}>
            I would like to make a one-off donation
          </button>
        </div>
      </div>
    </main>
  );
};

MonthlyTabPanel.propTypes = {
  openTab: PropTypes.func.isRequired,
};

export default MonthlyTabPanel;
