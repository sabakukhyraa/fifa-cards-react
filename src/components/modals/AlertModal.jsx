import ModalButton from "../shared/ModalButton.jsx";

export default function AlertModal({ isAlertOpen, alertHandler }) {
  return (
    <div
      className={`back-shadow !items-center ${
        isAlertOpen ? "!fixed" : "!hidden"
      }`}
    >
      <div className="p-6 space-y-6 bg-white rounded-lg">
      <h1 className="p-4 font-bold text-title3">You don't have enough money</h1>
      <ModalButton className={"!w-full"} onClick={alertHandler} type={"red"} content={"Back"} />
      </div>
    </div>
  );
}
