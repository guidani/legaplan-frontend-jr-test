"use client"
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import ListItem from "./components/list_item/ListItem";
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
                <ListItem text="aosuidhaiushdiaushd" done={false} />
                <ListItem text="aosuidhaiushdiaushd" done={false} />
                <ListItem text="aosuidhaiushdiaushd" done={false} />
                <ListItem text="aosuidhaiushdiaushd" done={false} />
                <ListItem text="aosuidhaiushdiaushd" done={false} />
              </ul>
            </div>

          </div>
          <div className={styles.list_title}><span>Tarefas finalizadas</span></div>
          <div className={styles.list}>
            <div className={styles.list_items}>
              <ul>
                <ListItem text="asd" done />
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
