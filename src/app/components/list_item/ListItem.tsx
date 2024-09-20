"use client"
import Image from "next/image";
import { useState } from "react";
import ModalDeletarTarefa from "../modal_deletar_tarefa/ModalDeletarTarefa";
import styles from "./listItem.module.scss";

type Props = {
  done: boolean;
  text: string;
  id?: string;
  changeHandler?: (id: string) => void
}

export default function ListItem({ id, text, done }: Props) {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [isModalDelOpen, setIsModalDelOpen] = useState<boolean>(false);

  const toggleModalDeletarTarefa = () => {
    setIsModalDelOpen(!isModalDelOpen);
  };

  async function updateTodo() {
    setIsChecked(!isChecked);
    try {
      await fetch(`http://localhost:4000/todos/${id}`, {
        method: "PUT",
        body: JSON.stringify({
          title: text,
          done: !done
        }),
      });
    } catch (error) {
      console.error('Failed to update todo', error);
    }

  }

  return (
    <>
      <li className={styles.list_item}>
        <div className={styles.leading}>
          <input type="checkbox" name="chk" defaultChecked={done ? true : false} className={`${done ? styles.checkbox_checked : styles.checkbox}`} onChange={updateTodo} />
        </div>
        <div className={styles.support_text}>
          {isChecked ? "sim" : "no"}
          <span className={done ? styles.list_item_text_done : styles.list_item_text}>{text}</span>
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