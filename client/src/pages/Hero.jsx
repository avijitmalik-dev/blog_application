import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="bg-gray-50 h-full h-screen flex flex-col ">
      <div className=" flex flex-row justify-end items-center p-5">
        <Link to="/form">
          <button className="w-40 bg-sky-700 rounded-sm text-white py-2 px-4">
            Creae new 
          </button>
        </Link>
      </div>
      <div className="">
        {/*left side */}

        <div className="p-5 grid grid-cols-3 gap-3">
          <div className="border border-black">
            <h1 className="bg-gray-400">title line</h1>
            <p className="p-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
              architecto natus illum facere in? Repellat fuga deleniti nam
              aliquam explicabo veniam minus ea, dignissimos nobis molestias
              consequatur facilis quidem iste!
            </p>
            <h3 className="bg-gray-300">auther</h3>
          </div>
          <div className="border border-black">
            <h1>title line</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
              architecto natus illum facere in? Repellat fuga deleniti nam
              aliquam explicabo veniam minus ea, dignissimos nobis molestias
              consequatur facilis quidem iste!
            </p>
            <h3>auther</h3>
          </div>
          <div className="border border-black">
            <h1>title line</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
              architecto natus illum facere in? Repellat fuga deleniti nam
              aliquam explicabo veniam minus ea, dignissimos nobis molestias
              consequatur facilis quidem iste!
            </p>
            <h3>auther</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
