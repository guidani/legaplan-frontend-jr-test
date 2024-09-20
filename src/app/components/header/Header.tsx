import Image from "next/image";
import styles from "./header.module.scss";

export default function Header() {
  return <header className={styles.header}>
    <div className={styles.logo}>
      <Image src={"/logo.svg"} alt="logo" width={34} height={34} />
      <span>FocalPoint</span>
    </div>
    <div className={styles.welcome}>
      <span>Bem-vindo de volta, Marcus</span>
    </div>
    <div className={styles.date}>
      <span>Segunda, 01 de dezembro de 2025</span>
    </div>
  </header>
}