import { useState } from "react";
import IconCircle from "../../assets/images/circle-thin-svgrepo-com.svg";
import IconCheck from "../../assets/images/icon-list.svg";

const FormRadio = () => {
  const [check, setCheck] = useState({
    discovery: false,
    Measuring: false,
    much: false,
  });

  const handleCheck = (key) => {
    setCheck({
      ...check,
      [key]: !check[key],
    });
  };
  return (
    <>
      <form className="flex flex-col gap-4">
        <label htmlFor={check.discovery} className="flex gap-3">
          <input
            type="checkbox"
            value={check.discovery}
            onChange={() => handleCheck("discovery")}
            className="hidden"
          />
          {!check.discovery ? (
            <img src={IconCircle} alt="" className="w-5" />
          ) : (
            <img src={IconCheck} alt="" className="w-5" />
          )}
          Product discovery and building what matters
        </label>
        <label htmlFor={check.Measuring} className="flex gap-2">
          <input
            type="checkbox"
            value={check.Measuring}
            onChange={() => handleCheck("Measuring")}
            className="hidden"
          />
          {!check.Measuring ? (
            <img src={IconCircle} alt="" className="w-5" />
          ) : (
            <img src={IconCheck} alt="" className="w-5" />
          )}
          Measuring to ensure updates are a success
        </label>
        <label htmlFor={check.much} className="flex gap-2">
          <input
            type="checkbox"
            value={check.much}
            onChange={() => handleCheck("much")}
            className="hidden"
          />
          {!check.much ? (
            <img src={IconCircle} alt="" className="w-5" />
          ) : (
            <img src={IconCheck} alt="" className="w-5" />
          )}
          And much more!
        </label>
      </form>
    </>
  );
};

export default FormRadio;
