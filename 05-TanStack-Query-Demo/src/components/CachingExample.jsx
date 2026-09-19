import { useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";

function PostList() {
  const { data, isLoading, isFetching } = useQuery({
    queryKey: ["posts"], // it uniquely ideantifies the query

    queryFn: async () => {
      const res = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_limit=5"
      );

      return res.json();
    },

    staleTime: 1000 * 60,
    gcTime: 1000 * 5,
    // refetchOnWindowFocus: true,
    // refetchOnReconnect: true,
    // refetchInterval: 1000 * 3    //refetches after every 3 secs no matter what, its kind of putting rate limit

  });

  return (
    <div>
      {isLoading && <p>Loading...</p>}

      {isFetching && <p>Background fetching...</p>}

      {data &&
        data.map((post) => (
          <div key={post.id} className="card">
            <p>{post.title}</p>
          </div>
        ))}
    </div>
  );
}

function CachingExample() {
  const [show, setShow] = useState(true);
  const queryClient = useQueryClient();

  function invalidatePosts(){
    // despite useQuery is defined in the child component of the this component, we can refetch it from here which is parent or any other component in the app, this can we used when we know we have inserted a new pots and on insert we want it to get updated and show latest data
    queryClient.invalidateQueries({
        queryKey: ["posts"]
    })
  }
  return (
    <div className="section">
      <h2>3. Caching</h2>

      <p>
        Toggle this component off and on to show that TanStack Query keeps
        data in cache.
      </p>

      <button onClick={invalidatePosts}>
        Invalidate Query
      </button>


      <button onClick={() => setShow(!show)}>
        {show ? "Unmount Component" : "Mount Component"}
      </button>

      {show && <PostList />}
    </div>
  );
}

export default CachingExample;