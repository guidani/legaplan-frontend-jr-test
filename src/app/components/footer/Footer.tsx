"use client"
import { useState } from "react";
import Button, { ButtonStyle } from "../button/Button";
import Modal from "../modal/Modal";
import ModalDeletarTarefa from "../modal_deletar_tarefa/ModalDeletarTarefa";
import styles from "./footer.module.scss";

export default function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalDelOpen, setIsModalDelOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  const toggleModalDeletarTarefa = () => {
    setIsModalDelOpen(!isModalDelOpen);
  };
  return (<footer className={styles.footer}>
    <div className={styles.add_btn}>
      <Button text="Adicionar nova tarefa" buttonStyle={ButtonStyle.primary} handler={toggleModal} />
    </div>
    <Modal show={isModalOpen} handleClose={toggleModal} />
    <ModalDeletarTarefa show={isModalDelOpen} handleClose={toggleModalDeletarTarefa} />
  </footer>)

}