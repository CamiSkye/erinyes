import { useState, useEffect, CSSProperties } from "react";
import { useTranslation } from "react-i18next";

// ===========================
// CookieBanner
// ===========================

export default function CookieBanner() {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) setVisible(true);
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  const refuseCookies = () => {
    localStorage.setItem("cookie-consent", "refused");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div style={styles.banner}>
      <p style={styles.text}>{t("cookies.text")}</p>
      <div style={styles.buttons}>
        <button onClick={acceptCookies} style={styles.accept}>{t("cookies.accept")}</button>
        <button onClick={refuseCookies} style={styles.refuse}>{t("cookies.refuse")}</button>
      </div>
    </div>
  );
}

const styles: { [key: string]: CSSProperties } = {
  banner: {
    position: "fixed", bottom: 0, left: 0, width: "100%",
    background: "#111", color: "#fff", padding: "15px",
    display: "flex", justifyContent: "space-between", alignItems: "center",
    zIndex: 1000,
  },
  text:    { margin: 0, fontSize: "14px" },
  buttons: { display: "flex", gap: "10px" },
  accept:  { background: "#4CAF50", border: "none", padding: "8px 12px", color: "#fff", cursor: "pointer" },
  refuse:  { background: "#f44336", border: "none", padding: "8px 12px", color: "#fff", cursor: "pointer" },
};