import React from "react";
import { useTest } from "../../Context/TestContext";
import { IoLocationSharp } from "react-icons/io5";
import { FcBookmark } from "react-icons/fc";

const QuestionNumber = ({ num }) => {
  const { currentQuestionIndex, setCurrentQuestionIndex, reviewedQuestions } =
    useTest();
  // console.log(unansweredQuestions);
  return (
    <div
      onClick={() => setCurrentQuestionIndex(num)}
      className="cursor-pointer relative h-[25px] w-[25px] border-2 border-dotted border-black text-center flex justify-center items-center"
    >
      <span>{num + 1}</span>
      {currentQuestionIndex == num ? (
        <span className="absolute -top-[19px]">
          <IoLocationSharp />
        </span>
      ) : (
        ""
      )}

      {reviewedQuestions.includes(num) ? <span className="absolute -right-1 -top-1 text-sm">
        <FcBookmark />
      </span> : <></>}
    </div>
  );
};

export default QuestionNumber;
