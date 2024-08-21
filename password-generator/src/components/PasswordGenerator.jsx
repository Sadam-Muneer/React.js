import React, { useState } from "react";
const [length, setLength] = useState(8);
const [numberAllowed, setNumberAllowed] = useState(false);
const [charAllowed, setCharAllowed] = useState(false);
const [password, setPassword] = useState("");
const generatePassword = () => {};

const PasswordGenerator = () => {
  return (
    <div>
      <h1 className="text-center text-4xl text-white">Password Generator</h1>
    </div>
  );
};

export default PasswordGenerator;
