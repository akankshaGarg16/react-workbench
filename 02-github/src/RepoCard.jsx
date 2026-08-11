const RepoCard = ({ repo }) => {
  console.log(repo);
  return (
    <div className="border border-gray-200 p-4 m-2 rounded-lg w-[500px]">
      <div className="flex justify-between items-center">
        <a
          href={repo.html_url}
          className="text-blue-500 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          {repo.name}
        </a>
        <span className="border border-gray-300 rounded-2xl px-2 py-0.5 text-sm text-gray-600 ml-2">
          {repo.private ? "Private" : "Public"}
        </span>
      </div>

      <div className="text-xs text-gray-600 mt-2">{repo.description}</div>

      <div className="m-4">
        {repo.name === "it-cert-automation-practice" ? (
          <div className="flex items-center gap-1">
            <span className="w-3 h-3 bg-blue-800 rounded-full"></span>
            <span className="text-xs text-gray-600">Python</span>
          </div>
        ) : (
             <div className="flex items-center gap-1">
            <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
            <span className="text-xs text-gray-600">Javascript</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default RepoCard;
