import { useState, useEffect, useRef } from "react";
const SongsQueue = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const intervalRef = useRef(null);
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      // setIsExpanded((prev) => !prev);
    }, 5000);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);
  return (
    <section className="col-start-3 col-end-4 row-start-2 row-end-3 bg-pink-300 w-min">
      <div
        className={`overflow-hidden h-full bg-blue-100 transition-all p-2 duration-300 ease-in-out grid grid-rows-[300px] justify-items-center content-center ${
          !isExpanded ? "w-[100px]" : "w-[300px]"
        }`}
      >
        <div className={`w-[100%] bg-red-400 rounded-md`}>
          <p>song queue section</p>
        </div>
      </div>
    </section>
  );
};

/*

<div
        className={`overflow-hidden bg-blue-100  transition-width ease-in-out duration-1000 ${
          !isExpanded ? "w-[0px]" : "w-[300px]"
        }`}
      >
        <div className={`w-[100%]`}>
          <p>song queue section</p>
        </div>
      </div>

*/

export default SongsQueue;
