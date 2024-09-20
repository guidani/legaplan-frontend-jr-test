import Image from "next/image";
import styles from "./listItem.module.scss";

type Props = {
  done: boolean;
  text: string;
  id?: string;
}

export default function ListItem({ text, done }: Props) {
  return <li className={styles.list_item}>
    <div className={styles.leading}>
      <input type="checkbox" name="chk" className={`${done ? styles.checkbox_checked : styles.checkbox}`} />
    </div>
    <div className={styles.support_text}>
      <span className={styles.list_item_text}>{text}</span>
    </div>
    <div className={styles.trailing_icon}>
      <Image src={"/trash.svg"} alt="trash" width={34} height={34} />
    </div>
  </li>
}