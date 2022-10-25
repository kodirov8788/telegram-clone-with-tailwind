import React, { useState } from "react";
import { GoThreeBars } from "react-icons/go";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { Static } from "../static_data";

function Main() {
  const [click, setClick] = useState(false);
  let stl = {
    size: "w-full h-[100vh] border-4 border-red-500 flex",
    left: "bg-primary w-[25%] h-full border-2 border-black relative flex flex-col items-center text-txt ",
    top: "w-full h-[50px] border-2 border-green-600 flex justify-around items-center absolute top-0 left-0 bg-primary text-txt text-[23px]",
    bar: "w-[40px] h-[40px] rounded-full flex justify-center items-center hover:bg-secondary duration-200 hover:duration-200 ",
    search:
      "group w-[80%] h-[95%] border-none flex items-center justify-evenly rounded-full text-[18px] bg-secondary hover:border-2 hover:border-tertiary",
    input:
      "w-[87%] h-[30px] outline-none indent-[3px] bg-transparent rounded-full",
    backup: `${click ? "block" : "hidden"
      } w-full h-[95vh] bg-transparent absolute top-0 left-0 rounded-[15px] z-[2]`,
    sidebar: `${click ? "flex" : "hidden"
      } w-[270px] h-[390px] flex-col justify-around items-center bg-secondary absolute top-[55px] left-2 rounded-[15px] z-[3] `,
    li: "w-[95%] h-[39px] pl-[15px] flex justify-start items-center text-[15px] text-white rounded-[7px] hover:bg-primary",
    icon: "mr-[15px] text-txt",
    content:
      "w-[75%] h-full border-2 border-black flex flex-col relative justify-end",

    msg: "w-[65%] h-[60px] border-2 border-red-500",
  };
  return (
    <div className={stl.size}>
      <div className={stl.backup} onClick={() => setClick(false)}></div>
      <ul className={stl.sidebar}>
        {Static.map((item) => (
          <li className={stl.li}>
            <p className={stl.icon}> {item.icon}</p>
            <p>{item.listName}</p>
          </li>
        ))}
      </ul>
      <div className={stl.left}>
        <div className={stl.top}>
          <div className={stl.bar} onClick={() => setClick(true)}>
            <GoThreeBars />
          </div>

          <div className={stl.search}>
            <HiMagnifyingGlass className="group-hover:text-tertiary" />
            <input type="text" placeholder="Search" className={stl.input} />
          </div>
        </div>
      </div>
      <div className={stl.content}>
        <div className={stl.top}></div>
        <div className={stl.msg}></div>
      </div>
    </div>
  );
}

export default Main;
