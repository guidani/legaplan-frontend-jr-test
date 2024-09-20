import { createTodo } from "@/app/actions";
import Button, { ButtonStyle } from "../button/Button";
import styles from './formAddTodo.module.scss';

export default function FormAddTodo() {
  return <form action={createTodo} method="POST">
    <label className={styles.input_label} htmlFor="title">Título</label>
    <input
      type="text"
      placeholder="Digite algo..."
      className={styles.form_input}
      name="title"
      id="title"
    />
    <div className={styles.form_buttons}>
      <Button text="Adicionar" buttonStyle={ButtonStyle.primary} type="submit" />
      <Button text="Cancelar" buttonStyle={ButtonStyle.neutral} type="button" />
    </div>
  </form>
}