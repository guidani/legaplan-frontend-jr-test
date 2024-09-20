"use server";

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
}

export async function updateTodo(id: string, done: boolean) {
  await fetch(`http://localhost:4000/todos/${id}`, {
    method: "PUT",
    body: JSON.stringify({
      done: !done,
    }),
  });
}
