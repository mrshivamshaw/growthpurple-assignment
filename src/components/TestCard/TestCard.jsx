import React from "react";
import { IoMdLock } from "react-icons/io";

const TestCard = ({ name, questions }) => {
  return (
    <div className="h-[170px] w-[27vw] border py-4 px-7 rounded-xl shadow-xl bg-white">
      <div className="flex h-full flex-col justify-between items-start ">
        <div className="flex  flex-col justify-start items-start gap-[2px]">
          <h1 className="text-lg font-semibold">{name}</h1>
          <div className="flex justify-start items-center  rounded-lg">
            <IoMdLock className="bg-white border-2 h-7 p-[2px] w-7 border-slate-400 rounded-full z-20"/>
            <div className="flex gap- rounded-r-xl px-2 text-sm bg-slate-200 -ml-1 z-10">
              <span>My Progress</span>
              <span>0 / {questions.length}</span>
            </div>
          </div>
        </div>
        <div className="w-full h-auto flex justify-end items-center">
          <button className="bg-blue-700 px-10 py-2 text-white font-semibold rounded-lg">Start</button>
        </div>
      </div>
    </div>
  );
};

export default TestCard;
