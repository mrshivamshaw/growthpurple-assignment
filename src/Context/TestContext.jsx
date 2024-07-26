import {createContext, useState, useContext} from 'react'

const TestContext = createContext();
export const useTest = () => useContext(TestContext)

export const TestProvider = ({ children }) => {
    const [currentChapter, setCurrentChapter] = useState({
      name: '',
      questions: [],
    });
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [completedQuestions, setCompletedQuestions] = useState([]);
    const [unansweredQuestions, setUnansweredQuestions] = useState([]);
    const [reviewedQuestions, setReviewedQuestions] = useState([]);
    const [modalActive, setModalActive] = useState(false);
    
    const startChapterTest = (name,questions) => {
        // console.log(questions,name);
      setCurrentChapter({
        name : name,
        questions : questions
      })
      // console.log(currentChapter);
      setCurrentQuestionIndex(0);
      setCompletedQuestions([]);
      setUnansweredQuestions(questions.map((_, index) => index));
      setReviewedQuestions([]);
    };
  
    const nextQuestion = () => {
      setCurrentQuestionIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;
        if (nextIndex >= currentChapter.questions.length) {
          // End of the test
          return prevIndex;
        }
        return nextIndex;
      });
    };
  
    const previousQuestion = () => {
      setCurrentQuestionIndex((prevIndex) => {
        const prevQuestionIndex = prevIndex - 1;
        if (prevQuestionIndex < 0) {
          // Beginning of the test
          return prevIndex;
        }
        return prevQuestionIndex;
      });
    };
  
    const markQuestionAsCompleted = () => {
      setCompletedQuestions((prevCompleted) => {
        if (!prevCompleted.includes(currentQuestionIndex)) {
          return [...prevCompleted, currentQuestionIndex];
        }
        return prevCompleted;
      });
      setUnansweredQuestions((prevUnanswered) =>
        prevUnanswered.filter((index) => index !== currentQuestionIndex)
      );
    };
  
    const markQuestionAsUnanswered = () => {
      setUnansweredQuestions((prevUnanswered) => {
        if (!prevUnanswered.includes(currentQuestionIndex)) {
          return [...prevUnanswered, currentQuestionIndex];
        }
        return prevUnanswered;
      });
      setCompletedQuestions((prevCompleted) =>
        prevCompleted.filter((index) => index !== currentQuestionIndex)
      );
    };
  
    const markQuestionAsReviewed = () => {
      setReviewedQuestions((prevReviewed) => {
        if (!prevReviewed.includes(currentQuestionIndex)) {
          return [...prevReviewed, currentQuestionIndex];
        }
        return prevReviewed;
      });
    };
  
    const value = {
      currentChapter,
      currentQuestionIndex,
      questions: currentChapter ? currentChapter.questions : [],
      completedQuestions,
      unansweredQuestions,
      reviewedQuestions,
      startChapterTest,
      nextQuestion,
      previousQuestion,
      markQuestionAsCompleted,
      markQuestionAsUnanswered,
      markQuestionAsReviewed,
      modalActive,
      setModalActive,
    };
  
    return (
      <TestContext.Provider value={value}>
        {children}
      </TestContext.Provider>
    );
  };