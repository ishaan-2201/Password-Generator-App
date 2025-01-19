import React, { useState } from "react";
import usePasswordGenerator from "./hooks/use-password-generator";

const App = () => {
  const [length, setLength] = useState(4);
  const [checkBoxData, setCheckBoxData] = useState([
    { title: "Include Uppercase Letters", state: false },
    { title: "Include Lowercase Letters", state: false },
    { title: "Include Numbers", state: false },
    { title: "Include Symbols", state: false },
  ]);
  const [copied, setCopied] = useState(false);
  const handleCheckBoxChange = (index) => {
    const updatedCheckBoxData = [...checkBoxData];
    updatedCheckBoxData[index].state = !updatedCheckBoxData[index].state;
    setCheckBoxData(updatedCheckBoxData);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(password);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  const getPasswordStrength = () => {
    if (!password) return "";
    const passLength = password.length;
    if (passLength < 4) return "Very Weak";
    else if (passLength < 8) return "Poor";
    else if (passLength < 12) return "Medium";
    else if (passLength < 16) return "Strong";
    else return "Very Strong";
  };
  const { password, errorMessage, generatePassword } = usePasswordGenerator();
  return (
    <div className="bg-[#24232b] p-[24px]">
      {password && (
        <div className="flex text-white justify-between text-[20px] font-bold pb-[20px]">
          <div>{password}</div>
          <button
            onClick={handleCopy}
            className="p-[10px] border-0 rounded-[5px] bg-[#2a8b8b] text-white font-bold cursor-pointer h-[30px] text-[10px]"
          >
            {copied ? "COPIED" : "COPY"}
          </button>
        </div>
      )}

      <div className="flex flex-col text-white text-[20px] font-bold pb-[24px]">
        <span className="flex justify-between pb-[24px] w-full">
          <label>Character Length</label>
          <label>{length}</label>
        </span>
        <input
          type="range"
          min={4}
          max={20}
          value={length}
          onChange={(e) => {
            setLength(e.target.value);
          }}
        />
      </div>

      <div className="grid grid-cols-[auto_auto] text-[16px] font-bold text-white">
        {checkBoxData.map((item, index) => (
          <div key={index} className="flex gap-[5px] pb-[25px]">
            <input
              type="checkbox"
              checked={item.state}
              onChange={() => handleCheckBoxChange(index)}
            />
            <label>{item.title}</label>
          </div>
        ))}
      </div>

      {getPasswordStrength() && (
        <div className="w-full flex justify-between pb-[12px] text-white">
          Strength: <span className="font-bold">{getPasswordStrength()}</span>
        </div>
      )}

      {errorMessage && (
        <div className="text-red-500 pb-[5px]">{errorMessage}</div>
      )}

      <button
        className="border-0 rounded-[5px] bg-[#2a8b8b] text-white font-bold cursor-pointer w-full text-[20px] p-[20px]"
        onClick={() => generatePassword(checkBoxData, length)}
      >
        GENERATE PASSWORD
      </button>
    </div>
  );
};

export default App;
