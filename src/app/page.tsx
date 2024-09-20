"use client"

import { useEffect, useState } from "react";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import ListItem from "./components/list_item/ListItem";
import styles from "./page.module.scss";

interface Todo {
  id: string;
  title: string;
  done: boolean;
}

export default function Home() {
  const [allTodos, setAllTodos] = useState<Todo[]>([])
  const [incomplete, setIncomplete] = useState<Todo[]>([]);
  const [complete, setComplete] = useState<Todo[]>([]);

  async function getTodos() {
    const data = await fetch("http://localhost:4000/todos", {
      next: {
        tags: ['get-todos']
      }
    });
    const todos = await data.json();
    setAllTodos(allTodos);
    const incompleteTodos = todos.filter((todo: Todo) => !todo.done);
    setIncomplete(incompleteTodos);

    const completeTodos = todos.filter((todo: Todo) => todo.done);
    setComplete(completeTodos);
  }



  useEffect(() => {
    getTodos();
    return () => { }
  }, [incomplete, complete])

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
                {incomplete.map((todo: Todo) =>
                  <ListItem text={`${todo.title}`} key={todo.id} done={todo.done} id={todo.id} />
                )}
              </ul>
            </div>

          </div>
          <div className={styles.list_title}><span>Tarefas finalizadas</span></div>
          <div className={styles.list}>
            <div className={styles.list_items}>
              <ul>
                {complete.map((todo: Todo) =>
                  <ListItem text={`${todo.title}`} key={todo.id} done={todo.done} id={todo.id} />
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
