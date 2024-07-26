import React from "react";
import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdKeyboardArrowUp,
} from "react-icons/md";
import { useTest } from "../../Context/TestContext";

const BottomNavigation = () => {
    const {setModalActive,currentQuestionIndex,currentChapter,nextQuestion,previousQuestion} = useTest();
  return (
    <div className="w-full flex justify-between items-center border-t-2 h-[10%] px-10">
      <h2 className="font-bold">DSAT Practice Test 1</h2>
      <div onClick={() => setModalActive(true)} className="hover:cursor-pointer flex justify-start items-center font-semibold border-2 rounded-3xl px-4 py-2 gap-1">
        <span className="">Question {currentQuestionIndex+1} of {currentChapter?.questions?.length}</span>
        <span>
          <MdKeyboardArrowUp className="text-xl" />
        </span>
      </div>
      <div className="flex justify-between items-center gap-3">
        <button disabled={currentQuestionIndex == 0} onClick={()=>previousQuestion()} className={`${currentQuestionIndex == 0 ? "flex justify-center items-center font-semibold bg-blue-300 text-white rounded-3xl px-6 py-2" : "flex justify-center items-center font-semibold bg-blue-700 hover:bg-blue-800 text-white rounded-3xl px-6 py-2"}`}>
          <span>
            <MdKeyboardArrowLeft className="text-xl mt-1" />
          </span>
          <span className="" >Back</span>
        </button>
        <button disabled={currentQuestionIndex == currentChapter?.questions?.length-1} onClick={()=>nextQuestion()} className={`${currentQuestionIndex == currentChapter?.questions?.length -1 ? "flex justify-center items-center font-semibold bg-blue-300 text-white rounded-3xl px-6 py-2" : "flex justify-center items-center font-semibold bg-blue-700 hover:bg-blue-800 text-white rounded-3xl px-6 py-2" }`}>
          <span className="" >Next</span>
          <span>
            <MdKeyboardArrowRight className="text-xl mt-1" />
          </span>
        </button>
      </div>
    </div>
  );
};

export default BottomNavigation;
