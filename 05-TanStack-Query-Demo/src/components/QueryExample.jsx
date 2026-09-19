import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

async function fetchPosts() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=5"
  );

  return res.json();
}

function QueryExample() {

  const [isLoadData, setIsLoadData] = useState(false);

  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    enabled: isLoadData
  });

  return (
    <div className="section">
      {isLoading && <p>Loading...</p>}

      {error && <p>Something went wrong</p>}

      <button onClick={() => setIsLoadData(true)}>Load Data</button>
      <button onClick={() => refetch()}>Refetch</button>

      {data?.map((post) => (
        <div key={post.id} className="card">
          <h4>{post.title}</h4>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

export default QueryExample;