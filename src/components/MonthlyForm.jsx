import { useState } from "react";
import styles from "./form.module.css";
import Padlock from "./Padlock";
import { Tooltip } from "react-tooltip";

const MonthlyForm = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const [customValue, setCustomValue] = useState("");
  const [liveRegionContent, setLiveRegionContent] = useState("");
  const [liveRegionTooltip, setLiveRegionTooltip] = useState("");
  const [liveRegionCustomValue, setLiveRegionCustomValue] = useState("");

  const resetForm = () => {
    setSelectedValue("");
    setCustomValue("");
    setLiveRegionContent("");
    setLiveRegionTooltip("");
    setLiveRegionCustomValue("");
  };

  const handleDivChange = (value) => {
    setSelectedValue(value);
    setCustomValue("");
    setLiveRegionContent(`£${value} selected`);
  };

  const handleCustomValueChange = (e) => {
    if (e.target.value && !isNaN(e.target.value)) {
      setCustomValue(e.target.value);
    }

    setSelectedValue("");
  };

  const handleCustomValueBlur = () => {
    if (customValue && !isNaN(customValue)) {
      setSelectedValue(customValue);
      setLiveRegionCustomValue(`£${customValue} selected`);
    }
  };

  const displayValue = customValue || selectedValue;

  /**
   * Trigger tooltip text to be read aloud by
   * screen readers when OnceForm submit button has focus
   * @param {KeyboardEvent} e - Triggers announcement of tooltip
   * @param {string|number} displayValue - Provides donation amount for tooltip
   */

  const handleFocusTooltip = (e, displayValue) => {
    setLiveRegionTooltip(
      `£${displayValue} Could help answer an emergency call to our Animal Rescue`
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    resetForm();
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.item}>
        <div aria-live="polite" className={styles["sr-only"]}>
          {liveRegionContent}
        </div>
        <button
          type="button"
          className={`${styles["item__item-group"]} ${
            selectedValue === "6" ? styles["item__item-group--toggled"] : ""
          }`}
          onClick={() => {
            handleDivChange("6");
          }}>
          &pound;6
          <span className={styles["item-group__toggle-custom-checkbox"]}></span>
        </button>
      </div>

      <div className={styles.item}>
        <button
          type="button"
          className={`${styles["item__item-group"]} ${
            selectedValue === "12" ? styles["item__item-group--toggled"] : ""
          }`}
          onClick={() => {
            handleDivChange("12");
          }}>
          &pound;12
          <span className={styles["item-group__toggle-custom-checkbox"]}></span>
        </button>
      </div>

      <div className={styles.item}>
        <button
          type="button"
          className={`${styles["item__item-group"]} ${
            selectedValue === "18" ? styles["item__item-group--toggled"] : ""
          }`}
          onClick={() => {
            handleDivChange("18");
          }}>
          &pound;18
          <span className={styles["item-group__toggle-custom-checkbox"]}></span>
        </button>
      </div>

      <div className={styles.item}>
        <button
          type="button"
          className={`${styles["item__item-group"]} ${
            selectedValue === "30" ? styles["item__item-group--toggled"] : ""
          }`}
          onClick={() => {
            handleDivChange("30");
          }}>
          &pound;30
          <span className={styles["item-group__toggle-custom-checkbox"]}></span>
        </button>
      </div>

      {/* Aria-live region to announce customValue selected */}
      <div aria-live="polite" className={styles["sr-only"]}>
        {liveRegionCustomValue}
      </div>
      <input
        aria-label="Choose your own donation amount input"
        className={styles["item__number-input"]}
        inputMode="numeric"
        maxLength={3}
        placeholder="£ Other amount"
        value={customValue}
        onChange={handleCustomValueChange}
        onBlur={handleCustomValueBlur}
      />

      <button
        id="monthly-form-submit-button"
        className={
          styles["form__submit-button"] +
          " " +
          styles["form__submit-button-monthly"]
        }
        onFocus={(e) => handleFocusTooltip(e, displayValue)}>
        Donate &pound;{displayValue || "0"} monthly
        <span className={styles["submit-button-lock-icon"]}>
          <Padlock />
        </span>
      </button>

      {/* Aria-live region to announce tooltip */}
      <div aria-live="polite" className={styles["sr-only"]}>
        {liveRegionTooltip}
      </div>
      <Tooltip
        anchorSelect="#monthly-form-submit-button"
        content={`£${
          displayValue || "0"
        } Could help answer an emergency call to our Animal Rescue`}
        className={styles.tooltip}
        place="bottom-end"
        clickable
      />
    </form>
  );
};

export default MonthlyForm;
