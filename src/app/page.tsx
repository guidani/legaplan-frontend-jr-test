"use client"
import Image from "next/image";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import styles from "./page.module.scss";

export default function Home() {
  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const [isModalDelOpen, setIsModalDelOpen] = useState(false);

  // const toggleModal = () => {
  //   setIsModalOpen(!isModalOpen);
  // };
  // const toggleModalDeletarTarefa = () => {
  //   setIsModalDelOpen(!isModalDelOpen);
  // };
  return (
    <div className={styles.page}>
      <Header />
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
      <Footer />
      {/* <footer className={styles.footer}>
        <div className={styles.add_btn}>
          <Button text="Adicionar nova tarefa" buttonStyle={ButtonStyle.primary} handler={toggleModal} />
        </div>
      </footer>
      <Modal show={isModalOpen} handleClose={toggleModal} />
      <ModalDeletarTarefa show={isModalDelOpen} handleClose={toggleModalDeletarTarefa} /> */}
    </div>
  );
}
