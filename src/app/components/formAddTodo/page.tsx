"use client"
import { ChangeEvent, useState } from "react";
import Button, { ButtonStyle } from "../button/Button";
import styles from './formAddTodo.module.scss';

export default function FormAddTodo() {
  const [text, setText] = useState<string>("")

  function handleText(e: ChangeEvent<HTMLInputElement>) {
    e.preventDefault()
    setText(e.target.value);
  }

  async function createTodo() {
    if (text.trim() === "") {
      return;
    }

    await fetch("http://localhost:4000/todos", {
      method: "POST",
      body: JSON.stringify({
        title: text,
        done: false
      }),
    });

    setText("");

  }

  return <>
    <label className={styles.input_label} htmlFor="title">Título</label>
    <input
      type="text"
      placeholder="Digite algo..."
      className={styles.form_input}
      name="title"
      id="title"
      value={text}
      onChange={(e) => handleText(e)}
    />
    <div className={styles.form_buttons}>
      <Button text="Adicionar" buttonStyle={ButtonStyle.primary} type="button" handler={createTodo} />
      {/* <Button text="Cancelar" buttonStyle={ButtonStyle.neutral} type="button" /> */}
    </div>
  </>
}