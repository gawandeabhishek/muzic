import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await fetch(
        `${import.meta.env.VITE_WEB_URL}/playlist/?query=https://www.jiosaavn.com/featured/romantic-hits-2020---hindi/ABiMGqjovSFuOxiEGmm6lQ__`
      );
      const result = await res.json();
      setTracks(result.songs);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="mx-10 mb-10 min-h-[calc(100vh-10rem)] p-2 flex flex-wrap gap-4 items-center justify-around">
      {tracks.map((data, idx) => (
        <Link to={`/show/${data.album}`} key={idx}>
          <div className="w-48 h-[20rem] m-2 rounded-md bg-white dark:bg-slate-900/20 gap-2 flex flex-col items-center cursor-pointer hover:p-2 transition-all">
            <img
              src={data.image}
              alt={data.album}
              className="rounded-md mx-2"
            />
            <h4 className="font-bold text-slate-900 dark:text-slate-50 mx-2">
              {data.album}
            </h4>
            <p className="text-slate-600 dark:text-slate-400 text-xs w-[90%] mx-2">
              {data.singers}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Home;
