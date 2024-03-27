import React from "react";
import { Link } from "react-router-dom";

let musicData = [
  {
    src: "https://c.saavncdn.com/987/BIBA-English-2019-20190201201359-500x500.jpg",
    alt: "BIBA",
    title: "BIBA",
    desc: "Marshmello, Pritam Chakraborty, Shirley Setia, Pardeep Singh Sran, Dev Negi",
  },
  {
    src: "https://c.saavncdn.com/987/BIBA-English-2019-20190201201359-500x500.jpg",
    alt: "BIBA",
    title: "BIBA",
    desc: "Marshmello, Pritam Chakraborty, Shirley Setia, Pardeep Singh Sran, Dev Negi",
  },
  {
    src: "https://c.saavncdn.com/987/BIBA-English-2019-20190201201359-500x500.jpg",
    alt: "BIBA",
    title: "BIBA",
    desc: "Marshmello, Pritam Chakraborty, Shirley Setia, Pardeep Singh Sran, Dev Negi",
  },
  {
    src: "https://c.saavncdn.com/987/BIBA-English-2019-20190201201359-500x500.jpg",
    alt: "BIBA",
    title: "BIBA",
    desc: "Marshmello, Pritam Chakraborty, Shirley Setia, Pardeep Singh Sran, Dev Negi",
  },
  {
    src: "https://c.saavncdn.com/987/BIBA-English-2019-20190201201359-500x500.jpg",
    alt: "BIBA",
    title: "BIBA",
    desc: "Marshmello, Pritam Chakraborty, Shirley Setia, Pardeep Singh Sran, Dev Negi",
  },
  {
    src: "https://c.saavncdn.com/987/BIBA-English-2019-20190201201359-500x500.jpg",
    alt: "BIBA",
    title: "BIBA",
    desc: "Marshmello, Pritam Chakraborty, Shirley Setia, Pardeep Singh Sran, Dev Negi",
  },
  {
    src: "https://c.saavncdn.com/987/BIBA-English-2019-20190201201359-500x500.jpg",
    alt: "BIBA",
    title: "BIBA",
    desc: "Marshmello, Pritam Chakraborty, Shirley Setia, Pardeep Singh Sran, Dev Negi",
  },
  {
    src: "https://c.saavncdn.com/987/BIBA-English-2019-20190201201359-500x500.jpg",
    alt: "BIBA",
    title: "BIBA",
    desc: "Marshmello, Pritam Chakraborty, Shirley Setia, Pardeep Singh Sran, Dev Negi",
  },
  {
    src: "https://c.saavncdn.com/987/BIBA-English-2019-20190201201359-500x500.jpg",
    alt: "BIBA",
    title: "BIBA",
    desc: "Marshmello, Pritam Chakraborty, Shirley Setia, Pardeep Singh Sran, Dev Negi",
  },
  {
    src: "https://c.saavncdn.com/987/BIBA-English-2019-20190201201359-500x500.jpg",
    alt: "BIBA",
    title: "BIBA",
    desc: "Marshmello, Pritam Chakraborty, Shirley Setia, Pardeep Singh Sran, Dev Negi",
  },
  {
    src: "https://c.saavncdn.com/987/BIBA-English-2019-20190201201359-500x500.jpg",
    alt: "BIBA",
    title: "BIBA",
    desc: "Marshmello, Pritam Chakraborty, Shirley Setia, Pardeep Singh Sran, Dev Negi",
  },
  {
    src: "https://c.saavncdn.com/987/BIBA-English-2019-20190201201359-500x500.jpg",
    alt: "BIBA",
    title: "BIBA",
    desc: "Marshmello, Pritam Chakraborty, Shirley Setia, Pardeep Singh Sran, Dev Negi",
  },
  {
    src: "https://c.saavncdn.com/987/BIBA-English-2019-20190201201359-500x500.jpg",
    alt: "BIBA",
    title: "BIBA",
    desc: "Marshmello, Pritam Chakraborty, Shirley Setia, Pardeep Singh Sran, Dev Negi",
  },
  {
    src: "https://c.saavncdn.com/987/BIBA-English-2019-20190201201359-500x500.jpg",
    alt: "BIBA",
    title: "BIBA",
    desc: "Marshmello, Pritam Chakraborty, Shirley Setia, Pardeep Singh Sran, Dev Negi",
  },
  {
    src: "https://c.saavncdn.com/987/BIBA-English-2019-20190201201359-500x500.jpg",
    alt: "BIBA",
    title: "BIBA",
    desc: "Marshmello, Pritam Chakraborty, Shirley Setia, Pardeep Singh Sran, Dev Negi",
  },
  {
    src: "https://c.saavncdn.com/987/BIBA-English-2019-20190201201359-500x500.jpg",
    alt: "BIBA",
    title: "BIBA",
    desc: "Marshmello, Pritam Chakraborty, Shirley Setia, Pardeep Singh Sran, Dev Negi",
  },
  {
    src: "https://c.saavncdn.com/987/BIBA-English-2019-20190201201359-500x500.jpg",
    alt: "BIBA",
    title: "BIBA",
    desc: "Marshmello, Pritam Chakraborty, Shirley Setia, Pardeep Singh Sran, Dev Negi",
  },
  {
    src: "https://c.saavncdn.com/987/BIBA-English-2019-20190201201359-500x500.jpg",
    alt: "BIBA",
    title: "BIBA",
    desc: "Marshmello, Pritam Chakraborty, Shirley Setia, Pardeep Singh Sran, Dev Negi",
  },
  {
    src: "https://c.saavncdn.com/987/BIBA-English-2019-20190201201359-500x500.jpg",
    alt: "BIBA",
    title: "BIBA",
    desc: "Marshmello, Pritam Chakraborty, Shirley Setia, Pardeep Singh Sran, Dev Negi",
  },
  {
    src: "https://c.saavncdn.com/987/BIBA-English-2019-20190201201359-500x500.jpg",
    alt: "BIBA",
    title: "BIBA",
    desc: "Marshmello, Pritam Chakraborty, Shirley Setia, Pardeep Singh Sran, Dev Negi",
  },
  {
    src: "https://c.saavncdn.com/987/BIBA-English-2019-20190201201359-500x500.jpg",
    alt: "BIBA",
    title: "BIBA",
    desc: "Marshmello, Pritam Chakraborty, Shirley Setia, Pardeep Singh Sran, Dev Negi",
  },
  {
    src: "https://c.saavncdn.com/987/BIBA-English-2019-20190201201359-500x500.jpg",
    alt: "BIBA",
    title: "BIBA",
    desc: "Marshmello, Pritam Chakraborty, Shirley Setia, Pardeep Singh Sran, Dev Negi",
  },
  {
    src: "https://c.saavncdn.com/987/BIBA-English-2019-20190201201359-500x500.jpg",
    alt: "BIBA",
    title: "BIBA",
    desc: "Marshmello, Pritam Chakraborty, Shirley Setia, Pardeep Singh Sran, Dev Negi",
  },
];

const Home = () => {
  return (
    <div className="mx-10 mb-10 p-2 flex flex-wrap gap-4 items-center justify-around">
      {musicData.map((data, idx) => (
        <Link to={"/:id"}>
          <div
            className="w-48 m-2 rounded-md bg-white dark:bg-slate-900/20 gap-2 flex flex-col cursor-pointer hover:p-2 transition-all"
            key={idx}
          >
            <img src={data.src} alt={data.alt} className="rounded-md mx-2" />
            <h4 className="font-bold text-slate-900 dark:text-slate-50 mx-2">
              {data.title}
            </h4>
            <p className="text-slate-600 dark:text-slate-400 text-xs w-[90%] mx-2">
              {data.desc}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Home;
