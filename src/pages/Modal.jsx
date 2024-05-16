import { useState } from "react";
import FormIn from "../components/formIn";
import ImgModal from "../../assets/images/illustration-sign-up-desktop.svg";
import FormRadio from "../components/FormRadio";
import ModalSucesso from "./ModalSucesso";
import ImgMob from "../../assets/images/illustration-sign-up-mobile.svg";

const Modal = () => {
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [email, setEmail] = useState("");

  const handleSuccess = (email) => {
    setEmail(email);
    setShowSuccessModal(true);
    setTimeout(() => {
      setShowSuccessModal(false);
    }, 2000);
  };
  return (
    <div className="md:h-full md:w-full w-screen h-screen justify-center items-center flex">
      {!showSuccessModal && (
        <section className="bg-white md:p-4 pb-2 flex flex-col-reverse md:flex-row gap-5 md:rounded-xl md:shadow-xl justify-between h-full md:h-[40rem]">
          <div className=" flex flex-col justify-center gap-10 md:w-96 px-3">
            <div>
              <h1 className="text-5xl text-start pb-4">Stay updated!</h1>
              <p>
                Join 60,000+ product managers receiving monthly updates on:{" "}
              </p>
            </div>
            <FormRadio />
            <FormIn onSuccess={handleSuccess} />
          </div>

          <img src={ImgMob} alt="" className="md:hidden" />
          <img src={ImgModal} alt="" className="hidden md:block" />
        </section>
      )}
      {showSuccessModal && <ModalSucesso email={email} />}
    </div>
  );
};

export default Modal;
