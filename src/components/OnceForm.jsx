import { useState } from "react";
import styles from "./form.module.css";
import { Tooltip } from "react-tooltip";
import Padlock from "./Padlock";

const OnceForm = () => {
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
      `£${displayValue} Could help an Animal Rescue Team take on an urgent animal rescue`
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
          id="item-group-1"
          className={`${styles["item__item-group"]} ${
            selectedValue === "10" ? styles["item__item-group--toggled"] : ""
          }`}
          onClick={() => {
            handleDivChange("10");
          }}>
          &pound;10
          <span className={styles["item-group__toggle-custom-checkbox"]}></span>
        </button>
      </div>

      <div className={styles.item}>
        <button
          type="button"
          id="item-group-2"
          className={`${styles["item__item-group"]} ${
            selectedValue === "40" ? styles["item__item-group--toggled"] : ""
          }`}
          onClick={() => {
            handleDivChange("40");
          }}>
          &pound;40
          <span className={styles["item-group__toggle-custom-checkbox"]}></span>
        </button>
      </div>

      <div className={styles.item}>
        <button
          type="button"
          id="item-group-3"
          className={`${styles["item__item-group"]} ${
            selectedValue === "75" ? styles["item__item-group--toggled"] : ""
          }`}
          onClick={() => {
            handleDivChange("75");
          }}>
          &pound;75
          <span className={styles["item-group__toggle-custom-checkbox"]}></span>
        </button>
      </div>

      <div className={styles.item}>
        <button
          type="button"
          id="item-group-4"
          className={`${styles["item__item-group"]} ${
            selectedValue === "100" ? styles["item__item-group--toggled"] : ""
          }`}
          onClick={() => {
            handleDivChange("100");
          }}>
          &pound;100
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
        id="once-form-submit-button"
        className={styles["form__submit-button"]}
        onFocus={(e) => handleFocusTooltip(e, displayValue)}>
        Donate &pound;{displayValue || "0"} today
        <span className={styles["submit-button-lock-icon"]}>
          <Padlock />
        </span>
      </button>

      {/* Aria-live region to announce tooltip */}
      <div aria-live="polite" className={styles["sr-only"]}>
        {liveRegionTooltip}
      </div>
      <Tooltip
        anchorSelect="#once-form-submit-button"
        content={`£${
          displayValue || "0"
        } Could help an Animal Rescue Team take on an urgent animal rescue`}
        className={styles["tooltip-once"]}
        place="bottom-end"
        clickable
      />
    </form>
  );
};

export default OnceForm;
