import React, { useState } from "react";
import IconLightMode from "@theme/Icon/LightMode";
import IconDarkMode from "@theme/Icon/DarkMode";
import styles from "./styles.module.css";
import clsx from "clsx";

export default function PageBlender(): JSX.Element {
  const [isCheck, setIsCheck] = useState(false);
  return (
    <>
      <div className={`${styles.blender} ${isCheck && styles.active}`}></div>
      <button
        onClick={() => {
          setIsCheck(!isCheck);
        }}
        className={`${styles.toggleButton} ${styles["blend-toggle"]}`}
      >
        {isCheck ? (
          <IconDarkMode
            className={clsx(styles.toggleIcon, styles.darkToggleIcon)}
          />
        ) : (
          <IconLightMode
            className={clsx(styles.toggleIcon, styles.lightToggleIcon)}
          />
        )}
      </button>
    </>
  );
}
