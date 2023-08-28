import { useState, useEffect, useRef } from "react";
const SongsQueue = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  // const intervalRef = useRef(null);
  // useEffect(() => {
  //   intervalRef.current = setInterval(() => {
  //     setIsExpanded((prev) => !prev);
  //   }, 4000);

  //   return () => {
  //     clearInterval(intervalRef.current);
  //   };
  // }, []);
  return (
    <section
      className={`bg-blue-100 col-start-3 col-end-4 row-start-1 row-end-4 transition-width ease-in-out duration-1000 ${
        !isExpanded ? "w-[0px]" : "w-[300px]"
      } `}
    >
      <div className="w-[300px] overflow-hidden">
        <div className={`w-[100%]`}>
          <p>song queue section</p>
        </div>
      </div>
    </section>
  );
};

export default SongsQueue;
