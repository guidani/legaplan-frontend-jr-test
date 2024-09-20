"use client"
import { useState } from "react";
import Button, { ButtonStyle } from "../button/Button";
import FormAddTodo from "../formAddTodo/page";
import Modal from "../modal/Modal";
import styles from "./footer.module.scss";

export default function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);


  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (<footer className={styles.footer}>
    <div className={styles.add_btn}>
      <Button text="Adicionar nova tarefa" buttonStyle={ButtonStyle.primary} handler={toggleModal} type="submit" />
    </div>
    <Modal show={isModalOpen} handleClose={toggleModal}>
      <FormAddTodo />
    </Modal>

  </footer>)

}