import { useMutation } from "@tanstack/react-query";
import { useState } from "react";

async function createPost(newPost) {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts",
    {
      method: "POST",
      body: JSON.stringify(newPost),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }
  );

  return res.json();
}

function MutationExample() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const {
    mutate,
    data: newPost,
    isPending,
    isError,
    error,
  } = useMutation({
    mutationFn: createPost,
  });

  return (
    <div className="section">
      <h2>2. Mutations</h2>

      <p>Mutations are used to create, update, or delete data.</p>

      <input
        placeholder="Post title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Post body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />

      <button
        onClick={() => {
          mutate({ title, body, userId: 1 });
        }}
      >
        Create Post
      </button>

      {isPending && <p>Creating post...</p>}

      {isError && (
        <p>Something went wrong: {error.message}</p>
      )}

      {newPost && (
        <div className="card">
          <h4>{newPost.title}</h4>
          <p>{newPost.body}</p>
        </div>
      )}
    </div>
  );
}

export default MutationExample;