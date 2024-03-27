import { Play, Repeat1, SkipBack, SkipForward } from "lucide-react";
import React from "react";

const Show = () => {
  return (
    <>
      <div className="flex items-center justify-around gap-4 m-16">
        <img
          src="https://c.saavncdn.com/987/BIBA-English-2019-20190201201359-500x500.jpg"
          alt="BIBA"
          className="rounded-md w-[25%] m-auto cursor-pointer"
        />
        <div className="flex flex-col items-start justify-center gap-4 w-fit">
          <h4 className="font-bold text-5xl text-slate-900 dark:text-slate-50 w-fit mx-2 cursor-pointer">
            BIBA
          </h4>
          <p className="text-slate-600 dark:text-slate-400 text-lg w-[50%] mx-2 cursor-pointer">
            Marshmello, Pritam Chakraborty, Shirley Setia, Pardeep Singh Sran,
            Dev Negi
          </p>
        </div>
      </div>
      <div className="fixed bottom-0 left-0 right-0 bg-white/50 dark:bg-white/10 backdrop-blur-sm flex flex-col items-center justify-center gap-2 py-4">
        <div className="relative w-full flex items-center justify-center hover:last:bg-black group py-2 px-28 cursor-pointer z-50">
          <div className="h-3 w-3 bg-transparent group-hover:bg-slate-700 dark:group-hover:bg-white rounded-full absolute right-[50%] z-20 cursor-pointer" />
          <div className="w-full h-1 bg-gray-200 dark:bg-gray-700 relative rounded-full overflow-hidden only:overflow-visible cursor-pointer">
            <div className="w-full h-1 bg-slate-700 dark:bg-white group-hover:bg-slate-400 rounded-full absolute -left-[50%] z-10 overflow-visible flex items-center justify-end"></div>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="bg-slate-500/10 p-2 rounded-full text-slate-800 dark:text-slate-200 cursor-pointer">
            <SkipBack />
          </div>
          <div className="bg-slate-500/10 p-2 rounded-full text-slate-800 dark:text-slate-200 cursor-pointer">
            <Play />
          </div>
          <div className="bg-slate-500/10 p-2 rounded-full text-slate-800 dark:text-slate-200 cursor-pointer">
            <SkipForward />
          </div>
          <div className="bg-slate-500/10 p-2 rounded-full text-slate-800 dark:text-slate-200 cursor-pointer">
            <Repeat1 />
          </div>
        </div>
      </div>
    </>
  );
};

export default Show;
