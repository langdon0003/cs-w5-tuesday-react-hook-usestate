import React from "react";

export default function CommonButton({ data }) {
  const { count, isPlus, number, setCount, isClear } = data;

  const handleClick = () => {
    if (isClear) {
      return setCount(0);
    }

    return isPlus
      ? setCount(count + parseInt(number))
      : setCount(count - parseInt(number));
  };

  return (
    <button onClick={handleClick}>
      {isClear ? "Clear" : isPlus ? "+" : "-"}
      {number}
    </button>
  );
}
