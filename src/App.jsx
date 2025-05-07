/**
 * @author Ruth Westnidge Brown <rwestnidge@gmail.com>
 */
/**
 * Layout
 * @returns {JSX.Element} - Tab component layout.
 */

import { useState } from "react";
import styles from "./app.module.css";
import MonthlyTabPanel from "./components/MonthlyTabPanel";
import OnceTabPanel from "./components/OnceTabPanel";

/**
 * @returns {JSX.Element} - Container with 2 tab buttons &
 * corresponding tab content
 */
const App = () => {
  /**
   * Sets state to track the tab that is open (active)
   * @type {string} activeTab - state variable tracking
   * the current open tab
   * @default "monthly"
   */
  const [activeTab, setActiveTab] = useState("monthly");

  /**
   * Handle tab button click:
   * Updates active tab state
   * @param {string} tabName
   */
  const openTab = (tabName) => {
    setActiveTab(tabName);
  };

  /**
   * Toggle keyboard focus for tab buttons
   * @param {KeyboardEvent} e - event object determines which key pressed
   */
  const handleKeyDown = (e) => {
    if (e.key === "ArrowRight") {
      const nextTab = document.getElementById("tab-2");
      if (nextTab) {
        nextTab.focus();
      }
    }
    if (e.key === "ArrowLeft") {
      const prevTab = document.getElementById("tab-1");
      if (prevTab) {
        prevTab.focus();
      }
    }
  };

  /**
   * Renders buttons using template literal css class name "active"
   * conditionally applies class name "active" to open tab
   * @param {string} activeTab - "monthly" or "once" identifiers
   * @function openTab - sets activeTab state to the clicked tab
   */
  return (
    <>
      <div className={styles["content-container"]}>
        <div className={styles["tab-container"]}>
          <div
            role="tablist"
            aria-label="Buttons to select a tab"
            className={styles["button-container"]}>
            <button
              role="tab"
              id="tab-1"
              aria-selected="false"
              aria-controls="tabpanel-1"
              tabIndex={0}
              className={`${styles.tablinks1} ${
                activeTab === "monthly" ? styles.active : ""
              }`}
              onClick={() => openTab("monthly")}
              onKeyDown={(e) => handleKeyDown(e)}>
              Donate monthly
            </button>
            <button
              role="tab"
              id="tab-2"
              aria-selected="false"
              aria-controls="tabpanel-2"
              tabIndex={-1}
              className={`${styles.tablinks} ${
                activeTab === "once" ? styles.active1 : ""
              }`}
              onClick={() => openTab("once")}
              onKeyDown={(e) => handleKeyDown(e)}>
              Donate once
            </button>
          </div>

          {/* Aria-live region to announce tab selection */}
          <div aria-live="polite" className={styles["sr-only"]}>
            {activeTab === "monthly"
              ? "Donate monthly tab selected."
              : "Donate once tab selected."}
          </div>

          <div className={styles.tabcontent}>
            {activeTab === "monthly" ? (
              <MonthlyTabPanel
                openTab={openTab}
                key="monthly"
                id="tabpanel-1"
                aria-labelledby="tab-1"
                tabIndex="0"
              />
            ) : null}
            {activeTab === "once" ? (
              <OnceTabPanel
                openTab={openTab}
                key="once"
                role="tabpanel-2"
                aria-labelledby="tab-2"
                tabIndex="0"
              />
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
