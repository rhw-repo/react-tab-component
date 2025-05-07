import styles from "./logos.module.css";
import DirectDebitLogo from "./DirectDebitLogo";
import FundraisingRegulatorLogo from "./FundraisingRegulatorLogo";

const MonthlyLogos= () => {
  return (
    <>
      <section>
        <div className={styles["logos__container-logos-monthly"]}>
          <DirectDebitLogo />
          <FundraisingRegulatorLogo />
        </div>
      </section>
    </>
  );
};

export default MonthlyLogos;
