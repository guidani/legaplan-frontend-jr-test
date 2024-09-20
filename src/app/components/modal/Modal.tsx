import Button, { ButtonStyle } from "../button/Button";
import styles from "./modal.module.scss";

type Props = {
  show: boolean;
  handleClose: () => void;
}

const Modal = ({ show, handleClose }: Props) => {
  if (!show) return null;

  return (
    <div className={styles.modal_overlay} onClick={handleClose}>
      <div className={styles.modal_window} onClick={(e) => e.stopPropagation()}>
        <h2 className={styles.modal_title}>Nova tarefa</h2>
        <label className={styles.input_label}>Título</label>
        <input type="text" placeholder="Digite algo..." className={styles.modal_input} />
        <div className={styles.modal_buttons}>
          <Button text="Adicionar" buttonStyle={ButtonStyle.primary} />
          <Button text="Cancelar" buttonStyle={ButtonStyle.neutral} handler={handleClose} />
        </div>
      </div>
    </div>
  );
};

export default Modal;
