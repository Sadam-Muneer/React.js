import React, { useState, useCallback, useEffect, useRef } from "react";

const PassGenerator = () => {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  // useRef
  const passRef = useRef(null);

  const generatePassword = useCallback(() => {
    let password = "";
    let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) string += "0123456789";
    if (charAllowed) string += "!@#$%^&*()_+-={}[]|:;'<>,.?/~";

    for (let i = 0; i < length; i++) {
      const char = Math.floor(Math.random() * string.length);
      password += string.charAt(char);
    }

    setPassword(password);
  }, [length, numberAllowed, charAllowed]);
  const copyPassword = useCallback(() => {
    passRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);
  useEffect(() => {
    generatePassword();
  }, [length, charAllowed, numberAllowed, generatePassword]);

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-2 my-8 text-orange-500 bg-gray-800">
      <h1 className="text-white text-center py-3">Password Generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3"
          placeholder="Password"
          readOnly
          ref={passRef}
        />
        <button
          onClick={copyPassword}
          className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
        >
          Copy
        </button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            min={8}
            max={100}
            value={length}
            onChange={(e) => {
              setLength(Number(e.target.value));
            }}
            className="cursor-pointer"
          />
          <label>Length: {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            checked={numberAllowed}
            id="numberinput"
            onChange={() => {
              setNumberAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="numberinput">Number</label>
        </div>

        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            checked={charAllowed}
            id="charinput"
            onChange={() => {
              setCharAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="charinput">Characters</label>
        </div>
      </div>
    </div>
  );
};

export default PassGenerator;
