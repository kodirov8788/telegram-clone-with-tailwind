import React from "react";
import tg from "./Images/tg.webp";

function App() {
  let stl = {
    size: "w-screen h-screen flex justify-center items-center bg-[#212121]",
    form: "flex flex-col items-center p-10 bg-transparent drop-shadow-lg space-y-5 text-white w-[450px] h-fit",
    title: "text-center text-4xl pt-[30px] font-semibold",
    fld: "group flex flex-col justify-center w-96 px-3 pt-1 pb-3 rounded-md border border-[#2F2F2F] hover:border-[#8774E1]",
    lgn: "px-2 text-[13px] text-[#9E9E9E] group-hover:text-[#8774E1]",
    input: "w-full outline-none bg-[#212121]",
    kp_sgn: "flex items-center justify-start w-[95%] h-fit",
    chb: "bg-[#8774E1] mr-[40px] w-[20px] h-[20px]",
    btn: "w-full px-10 py-4 bg-[#8774E1] text-white text-[20px] rounded-md hover:bg-[#7165a9] hover:drop-shadow-md duration-300 ease-in",
  };
  return (
    <div class={stl.size}>
      <form class={stl.form}>
        <img src={tg} alt="" className="w-[150px] h-[150px]" />
        <h1 className={stl.title}>Telegram</h1>
        <p className="text-center text-[#9E9E9E]">
          Please confirm your country code and enter your phone number.
        </p>
        <fieldset className={stl.fld}>
          <legend className={stl.lgn}>Country</legend>
          <select className={stl.input}>
            <option value="UZ" label="Uzbekistan">
              Uzbekistan
            </option>
            <option value="Palestine">Palestine</option>
            <option value="Afghanistan">Afghanistan</option>
            <option value="Albania">Albania</option>

            <option value="Dominican Republic">Dominican Republic</option>
            <option value="TH" label="Thailand">
              Thailand
            </option>
            <option value="TL" label="Timor-Leste">
              Timor-Leste
            </option>
            <option value="TR" label="Turkey">
              Turkey
            </option>
            <option value="TM" label="Turkmenistan">
              Turkmenistan
            </option>
            <option value="AE" label="United Arab Emirates">
              United Arab Emirates
            </option>

            <option value="VN" label="Vietnam">
              Vietnam
            </option>
            <option value="YE" label="Yemen">
              Yemen
            </option>
          </select>
        </fieldset>
        <fieldset className={stl.fld}>
          <legend className={stl.lgn}>Phone Number</legend>

          <input className={stl.input} type="phone" placeholder="Your Number" />
        </fieldset>

        <div className={stl.kp_sgn}>
          <input type="checkbox" className={stl.chb} />
          <label
            class="text-sm font-light"
            for="remember"
            className="text-left"
          >
            Keep me signed in
          </label>
        </div>

        <button class={stl.btn} type="submit">
          Next
        </button>
      </form>
    </div>
  );
}

export default App;
