// Modal.js
import styles from "./modal.module.scss";

type Props = {
  show: boolean;
  handleClose: () => void;
}

const Modal = ({ show, handleClose }: Props) => {
  // Verifica se o modal está visível
  if (!show) return null;

  return (
    <div className={styles.modal_overlay} onClick={handleClose}>
      <div className={styles.modal_window} onClick={(e) => e.stopPropagation()}>
        <h2 className={styles.modal_title}>Nova tarefa</h2>
        <label htmlFor="">Título</label>
        <input type="text" placeholder="Digite algo..." className={styles.modal_input} />
        <div className={styles.modal_buttons}>
          <button className={styles.btn_add}>Adicionar</button>
          <button className={styles.btn_cancel} onClick={handleClose}>Cancelar</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
