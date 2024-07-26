import React, { useEffect, useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";

const Nav = () => {

    const [time,setTime] = useState(40 * 60);
    const [showTime, setShowTime] = useState(true);

    useEffect(()=>{
        const timer = setInterval(()=>{
            setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
        }, 1000)

        return () => clearInterval(timer);
    },[])

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
      };

  return (
    <nav className="w-full flex justify-between items-center border border-gray-400 rounded-b-[35px] px-10 pb-4 pt-3">
      <div className="-mr-28">
        <h1 className="text-lg font-semibold">Reading and Writting Module 1</h1>
        <div className="flex justify-start items-center">
          <span className="">Directions</span>
          <span>
            <MdKeyboardArrowDown />
          </span>
        </div>
      </div>

      {showTime ? <div className="flex flex-col justify-between items-center">
        <span className="text-2xl font-semibold">{formatTime(time)}</span>
        <span>
          <button onClick={() => setShowTime(false)} className="px-5 py-1 font-semibold rounded-3xl border-2 border-black">
            Hide
          </button>
        </span>
      </div>
      :
        <div className="flex flex-col justify-between items-center">
          <span className="text-2xl font-semibold">Time Remaining</span>
          <span>
            <button onClick={() => setShowTime(true)} className="px-5 py-1 font-semibold rounded-3xl border-2 border-black">
              Show
            </button>
          </span>
        </div>
      }
      <Link to='/'>
        <button className="px-5 py-1 font-semibold rounded-3xl border-2 border-black">
          Save & Exit
        </button>
      </Link>
    </nav>
  );
};

export default Nav;
