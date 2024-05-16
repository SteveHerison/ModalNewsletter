import IconSucesso from "../assets/images/icon-success.svg";

const ModalSucesso = ({ email, setShowModal }) => {
  return (
    <div className="h-full w-full justify-center items-center flex">
      <div className="p-6 bg-white w-96  rounded-xl flex flex-col gap-5">
        <img src={IconSucesso} alt="" className="w-16" />
        <h1 className="text-5xl">Thanks for subscribing!</h1>
        <p>
          A confirmation email has been sent to <strong>{email}</strong>. Please
          open it and click the button inside to confirm your subscription.
        </p>
        <button
          className="bg-blue-950 p-3 rounded-xl text-white"
          onClick={() => setShowModal(true)}>
          Dismiss message
        </button>
      </div>
    </div>
  );
};

export default ModalSucesso;
