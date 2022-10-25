import React from 'react'

function Main_Header() {

    let stl = {
        top: "w-full h-[50px] border-2 border-green-600 flex justify-around items-center bg-primary text-txt text-[23px]",

    };
    return (
        <div className={stl.top}></div>
    )
}

export default Main_Header