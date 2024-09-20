import Image from "next/image";
import styles from "./header.module.scss";

export default function Header() {
  function getCurrentDate() {
    const today = new Date();

    let formattedDate = new Intl.DateTimeFormat('pt-BR', { day: '2-digit', weekday: 'long', month: 'long', year: "numeric" }).format(today);

    formattedDate = formattedDate.replace('-feira', '');
    formattedDate = formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);

    return formattedDate;
  }
  return <header className={styles.header}>
    <div className={styles.logo}>
      <Image src={"/logo.svg"} alt="logo" width={34} height={34} />
      <span>FocalPoint</span>
    </div>
    <div className={styles.welcome}>
      <span>Bem-vindo de volta, Marcus</span>
    </div>
    <div className={styles.date}>
      <span>{getCurrentDate()}</span>
    </div>
  </header>
}