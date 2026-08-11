import { useState } from "react";
import mithi from "./assets/mithi.png";
import "./App.css";
import useFetch from "./utility/hooks/useFetch";
import {
  GITHUB_API_URL,
  GITHUB_USER,
  GITHUB_REPOS_URL,
} from "./utility/constants";
import RepoCard from "./RepoCard";

function App() {
  const response = useFetch(GITHUB_API_URL + GITHUB_USER);
  const repos = useFetch(GITHUB_REPOS_URL);

  return (
    <>
      <div className="flex m-4 p-4">
        {/* left section */}
        <div className="m-2 p-2 flex-1/4">
          <img
            className="border-2 border-gray-500 w-1/2 rounded-full"
            src={mithi}
            alt="github user"
          />
          <h2 className="text-xl font-bold py-1">{response?.name}</h2>
          <h3 className="text-md">@{response?.login}</h3>
          <button className="bg-gray-200 cursor-pointer w-full py-2 my-4 rounded-2xl">
            Edit Profile
          </button>
        </div>
        {/* right section */}
        <div className="m-2 p-2 width-[90%] border border-gray-200 flex-3/4">
          <div className="font-bold text-xl">Popular Repositories</div>
          <div className="flex justify-stretch flex-wrap">
            {repos?.map((repo) => (
              <RepoCard key={repo.id} repo={repo} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
