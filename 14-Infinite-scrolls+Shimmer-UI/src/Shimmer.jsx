const Shimmer = () => {
  return [...Array(10)].map((_, index) => (
    <div key={index} className="p-5 m-5 border border-zinc-400 rounded-lg">
      <div className="h-64 w-64 bg-gray-300"></div>
      <p className="text-gray-300 text-lg">_________________________________</p>
    </div>
  ));
};

export default Shimmer;
