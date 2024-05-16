import { useState } from "react";
import ImgForm from "../assets/images/illustration-sign-up-desktop.svg";
import IconList from "../assets/images/icon-list.svg";
import IconCircle from "../assets/images/circle-thin-svgrepo-com.svg";
import ModalSucesso from "./ModalSucesso";

const Modal = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const [isChecked, setIsChecked] = useState({
    productDiscovery: false,
    measuringUpdates: false,
    muchMore: false,
  });
  const [showModal, setShowModal] = useState(true);

  const handleCheckboxChange = (checkbox) => {
    setIsChecked({
      ...isChecked,
      [checkbox]: !isChecked[checkbox],
    });
  };

  const handleEmailChange = ({ target }) => {
    setEmail(target.value);
    setError(null);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(email)) {
      setError("Valid email required");
    } else {
      setShowModal(false);
      setEmail("");
    }
  };

  return (
    <>
      {showModal && (
        <section className="bg-white p-3 container gap-5 m-auto w-[50rem] flex justify-between items-center rounded-xl">
          <div className="flex flex-col h-full w-full justify-between">
            <div className="flex flex-col gap-10 text-center">
              <h1 className="text-5xl">Stay updated!</h1>
              <p>Join 60,000+ product managers receiving monthly updates on:</p>
            </div>
            <form className="flex flex-col h-full" onSubmit={handleSubmit}>
              <label className="flex gap-1 pt-4">
                <input
                  type="checkbox"
                  checked={isChecked.productDiscovery}
                  onChange={() => handleCheckboxChange("productDiscovery")}
                  className={`${isChecked ? "hidden" : "flex"}`}
                />
                {isChecked.productDiscovery ? (
                  <img src={IconList} alt="" className="w-5" />
                ) : (
                  <img src={IconCircle} alt="" className="w-5" />
                )}
                Product discovery and building what matters
              </label>
              <label className="flex gap-1 py-4">
                <input
                  type="checkbox"
                  checked={isChecked.measuringUpdates}
                  onChange={() => handleCheckboxChange("measuringUpdates")}
                  className={`${isChecked ? "hidden" : "flex"}`}
                />
                {isChecked.measuringUpdates ? (
                  <img src={IconList} alt="" className="w-5" />
                ) : (
                  <img src={IconCircle} alt="" className="w-5" />
                )}
                Measuring to ensure updates are a success
              </label>
              <label className="flex gap-1 pb-4">
                <input
                  type="checkbox"
                  checked={isChecked.muchMore}
                  onChange={() => handleCheckboxChange("muchMore")}
                  className={`${isChecked ? "hidden" : "flex"}`}
                />
                {isChecked.muchMore ? (
                  <img src={IconList} alt="" className="w-5" />
                ) : (
                  <img src={IconCircle} alt="" className="w-5" />
                )}
                And much more!
              </label>

              <div className="flex justify-between p-2">
                <label htmlFor={email}>Email address</label>
                {error && <p className="text-red-500">{error}</p>}
              </div>
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                className="bg-red-200 p-3 rounded-xl"
              />
              <button
                type="submit"
                className="bg-blue-950 p-3 rounded-xl text-white my-4">
                Subscribe to monthly newsletter
              </button>
            </form>
          </div>
          <img src={ImgForm} alt="" />
        </section>
      )}
      {!showModal && <ModalSucesso email={email} setShowModal={setShowModal} />}
    </>
  );
};

export default Modal;
