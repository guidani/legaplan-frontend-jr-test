'use client'
import { createTodo } from "@/app/actions";
import { useState } from "react";
import Button, { ButtonStyle } from "../button/Button";
import styles from "./modal.module.scss";


type Props = {
  show: boolean;
  handleClose: () => void;
  onAdd?: (text: string) => void;
}

const Modal = ({ show, handleClose }: Props) => {
  const [todoText, setTodoText] = useState<string>('');

  if (!show) return null;

  const handleAdd = () => {
    if (todoText.trim()) {
      // onAdd(todoText.trim());
      setTodoText('');
    }
  };

  return (
    <div className={styles.modal_overlay} onClick={handleClose}>
      <div className={styles.modal_window} onClick={(e) => e.stopPropagation()}>
        <h2 className={styles.modal_title}>Nova tarefa</h2>
        <form action={createTodo}>
          <label className={styles.input_label} htmlFor="title">Título</label>
          <input
            type="text"
            placeholder="Digite algo..."
            className={styles.modal_input}
            name="title"
            id="title"
            onChange={(e) => setTodoText(e.target.value)}
          />
          <div className={styles.modal_buttons}>
            <Button text="Adicionar" buttonStyle={ButtonStyle.primary} handler={handleAdd} />
            <Button text="Cancelar" buttonStyle={ButtonStyle.neutral} handler={handleClose} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
