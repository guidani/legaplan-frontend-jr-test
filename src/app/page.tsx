import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import ListItem from "./components/list_item/ListItem";
import styles from "./page.module.scss";

interface Todo {
  id: string;
  title: string;
  done: boolean;
}

export default async function Home() {
  const data = await fetch("http://localhost:4000/todos");
  const todos = await data.json();

  const incompleteTodos = todos.filter((todo: Todo) => !todo.done);
  const completeTodos = todos.filter((todo: Todo) => todo.done);

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
                {incompleteTodos.map((todo: Todo) =>
                  <ListItem text={`${todo.title}`} key={todo.id} done={todo.done} />
                )}
              </ul>
            </div>

          </div>
          <div className={styles.list_title}><span>Tarefas finalizadas</span></div>
          <div className={styles.list}>
            <div className={styles.list_items}>
              <ul>
                {completeTodos.map((todo: Todo) =>
                  <ListItem text={`${todo.title}`} key={todo.id} done={todo.done} />
                )}
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
