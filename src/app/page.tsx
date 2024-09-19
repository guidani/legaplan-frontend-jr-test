"use client"
import Image from "next/image";
import { useState } from "react";
import Button, { ButtonStyle } from "./components/button/Button";
import Modal from "./components/modal/Modal";
import styles from "./page.module.scss";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <Image src={"/logo.svg"} alt="logo" width={34} height={34} />
          <span>FocalPoint</span>
        </div>
        <div className={styles.welcome}>
          <span>Bem-vindo de volta, Marcus</span>
        </div>
        <div className={styles.date}>
          <span>Segunda, 01 de dezembro de 2025</span>
        </div>
      </header>
      <main className={styles.main}>
        <div className={styles.lists}>
          <div className={styles.list_title}>
            <span>
              Suas tarefas de hoje
            </span>
          </div>
          <div className={styles.list}>
            <div className={styles.list_items}>
              <ul>
                <li className={styles.list_item}>
                  <div className={styles.leading}>
                    <input type="checkbox" name="chk" className={styles.checkbox} />
                  </div>
                  <div className={styles.support_text}>
                    <span className={styles.list_item_text}>Lavar as mãos</span>
                  </div>
                  <div className={styles.trailing_icon}>
                    <Image src={"/trash.svg"} alt="trash" width={34} height={34} />
                  </div>
                </li>
                <li className={styles.list_item}>
                  <div className={styles.leading}>

                    <input type="checkbox" name="chk" className={styles.checkbox} />
                  </div>
                  <div className={styles.support_text}>

                    <span className={styles.list_item_text}>Fazer um bolo</span>
                  </div>
                  <div className={styles.trailing_icon}>

                    <Image src={"/trash.svg"} alt="trash" width={34} height={34} />
                  </div>
                </li>
                <li className={styles.list_item}>
                  <div className={styles.leading}>

                    <input type="checkbox" name="chk" className={styles.checkbox} />
                  </div>
                  <div className={styles.support_text}>

                    <span className={styles.list_item_text}>Lavar a louça</span>
                  </div>
                  <div className={styles.trailing_icon}>

                    <Image src={"/trash.svg"} alt="trash" width={34} height={34} />
                  </div>
                </li>
              </ul>
            </div>

          </div>
          <div className={styles.list_title}><span>Tarefas finalizadas</span></div>
          <div className={styles.list}>
            <div className={styles.list_items}>
              <ul>
                <li className={styles.list_item}>
                  <div className={styles.leading}>

                    <input type="checkbox" name="chk" className={styles.checkbox_checked} defaultChecked />
                  </div>
                  <div className={styles.support_text}>
                    <span className={styles.list_item_text_done}>Fazer um bolo</span>
                  </div>
                  <div className={styles.trailing_icon}>
                    <Image src={"/trash.svg"} alt="trash" width={34} height={34} />
                  </div>
                </li>

              </ul>
            </div>
          </div>
        </div>
      </main>
      <footer className={styles.footer}>
        <Button text="Adicionar nova tarefa" buttonStyle={ButtonStyle.primary} handler={toggleModal} />
      </footer>
      <Modal show={isModalOpen} handleClose={toggleModal} />
    </div>
  );
}
