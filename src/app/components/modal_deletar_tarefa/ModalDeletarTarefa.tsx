import Button, { ButtonStyle } from "../button/Button";
import styles from "./modal_deletar_tarefa.module.scss";

type Props = {
  show: boolean;
  handleClose: () => void;
  id?: string
}

const ModalDeletarTarefa = ({ show, handleClose, id }: Props) => {
  if (!show) return null;

  async function deleteTodo() {
    await fetch(`http://localhost:4000/todos/${id}`, {
      method: "DELETE",
    });
  }

  return (
    <div className={styles.modal_overlay} onClick={handleClose}>
      <div className={styles.modal_window} onClick={(e) => e.stopPropagation()}>
        <h2 className={styles.modal_title}>Deletar tarefa</h2>
        <label className={styles.input_label}>Tem certeza que deseja deletar essa tarefa? {id}</label>
        <div className={styles.modal_buttons}>
          <Button text="Deletar" buttonStyle={ButtonStyle.danger} handler={deleteTodo} />
          <Button text="Cancelar" buttonStyle={ButtonStyle.neutral} handler={handleClose} />
        </div>
      </div>
    </div>
  );
};

export default ModalDeletarTarefa;
