import styles from "./logos.module.css";
import FundraisingRegulatorLogo from "./FundraisingRegulatorLogo";
import VisaLogo from "./VisaLogo";
import MastercardLogo from "./MastercardLogo";
import PayPalLogo from "./PayPalLogo";

const OnceLogos = () => {
  return (
    <>
      <section>
        <div className={styles["logos__container-logos"]}>
          <VisaLogo />
          <MastercardLogo />
          <PayPalLogo />
          <FundraisingRegulatorLogo />
        </div>
      </section>
    </>
  );
};

export default OnceLogos;
