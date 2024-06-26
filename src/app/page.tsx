"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import styles from "./page.module.scss";

const AppPage = () => {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const themeStyle = theme as string; // dark or light

  return (
    <section className={`${styles["mi-componente"]} ${styles[themeStyle]}`}>
      <h1 className={`${styles["title"]} ${styles[themeStyle]}`}>Title page</h1>
      <button
        onClick={() => setTheme("dark")}
        className={`${styles["btn"]} ${styles[themeStyle]}`}
      >
        dark
      </button>
      <button onClick={() => setTheme("light")}>light</button>
    </section>
  );
};

export default AppPage;
