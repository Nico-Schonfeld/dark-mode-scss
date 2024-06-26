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

  const themeStyle = theme as string;

  return (
    <div className={`${styles["mi-componente"]} ${styles[themeStyle]}`}>
      <h1>Title page</h1>
      <button onClick={() => setTheme("dark")}>dark</button>
      <button onClick={() => setTheme("light")}>light</button>
    </div>
  );
};

export default AppPage;
