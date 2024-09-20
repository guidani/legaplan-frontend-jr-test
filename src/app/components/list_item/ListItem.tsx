"use client"
import Image from "next/image";
import { useState } from "react";
import ModalDeletarTarefa from "../modal_deletar_tarefa/ModalDeletarTarefa";
import styles from "./listItem.module.scss";

type Props = {
  done: boolean;
  text: string;
  id?: string;
  changeHandler?: () => void
}

export default function ListItem({ id, text, done, changeHandler }: Props) {
  const [isModalDelOpen, setIsModalDelOpen] = useState<boolean>(false);

  const toggleModalDeletarTarefa = () => {
    setIsModalDelOpen(!isModalDelOpen);
  };

  return (
    <>
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

          <input type="text" name="id" id="id" hidden value={id} />
          <button className={styles.btn} type="submit" onClick={toggleModalDeletarTarefa}>
            <Image src={"/trash.svg"} alt="trash" width={34} height={34} />
          </button>
        </div>
      </li>
      <ModalDeletarTarefa show={isModalDelOpen} handleClose={toggleModalDeletarTarefa} id={id} />
    </>
  )
}