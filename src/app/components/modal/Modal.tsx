import styles from "./modal.module.scss";

type Props = {
  show: boolean;
  handleClose: () => void;
  onAdd?: (text: string) => void;
  children: React.ReactNode
}

const Modal = ({ show, handleClose, children }: Props) => {

  if (!show) return null;

  return (
    <div className={styles.modal_overlay} onClick={handleClose}>
      <div className={styles.modal_window} onClick={(e) => e.stopPropagation()}>
        <h2 className={styles.modal_title}>Nova tarefa</h2>
        {children}
      </div>
    </div>
  );
};

export default Modal;
