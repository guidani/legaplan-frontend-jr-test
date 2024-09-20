"use server";

import { revalidateTag } from "next/cache";

export async function createTodo(formData: FormData) {
  if (!formData.get("title")) {
    return;
  }

  const rawFormData = {
    id: new Date().getTime,
    title: formData.get("title"),
    done: false,
  };

  await fetch("http://localhost:4000/todos", {
    method: "POST",
    body: JSON.stringify(rawFormData),
  });

  revalidateTag("get-todos");
}

export async function updateTodo(id: string, done: boolean) {
  await fetch(`http://localhost:4000/todos/${id}`, {
    method: "PUT",
    body: JSON.stringify({
      done: !done,
    }),
  });
}

export async function deleteTodos(formData: FormData) {
  if (!formData.get("id")) {
    return;
  }

  console.log("hi");

  const id = formData.get("id");
  await fetch(`http://localhost:4000/todos/${id}`, {
    method: "DELETE",
  });

  revalidateTag("get-todos");
}
