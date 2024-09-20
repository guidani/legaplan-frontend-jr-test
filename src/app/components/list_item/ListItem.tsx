"use client"
import { deleteTodos } from "@/app/actions";
import styles from "./listItem.module.scss";

type Props = {
  done: boolean;
  text: string;
  id?: string;
  changeHandler?: () => void
}

export default function ListItem({ id, text, done, changeHandler }: Props) {

  return (
    <li className={styles.list_item}>
      <div className={styles.leading}>
        <form action="" method="PUT">
          <input type="checkbox" name="chk" className={`${done ? styles.checkbox_checked : styles.checkbox}`} onChange={changeHandler} />
        </form>
      </div>
      <div className={styles.support_text}>
        <span className={styles.list_item_text}>{text}</span>
      </div>
      <div className={styles.trailing_icon}>
        <form action={deleteTodos} method="DELETE">
          <input type="text" name="id" id="id" hidden value={id} />
          <button className={styles.btn} type="submit">
            {/* <Image src={"/trash.svg"} alt="trash" width={34} height={34} /> */}
            DEL
          </button>
        </form>
      </div>
    </li>)
}