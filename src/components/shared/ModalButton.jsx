export default function ModalButton({ onClick, className, content, type }) {
  return (
    <button
      onClick={onClick}
      className={`py-4 font-semibold leading-4 border rounded-lg text-regular animation w-fit ${
        type === "red" &&
        "bg-red border-red text-white hover:text-red hover:bg-white"
      }
      ${
        type === "white" &&
        "bg-white border-white text-red"
      }
      ${className}
      `}
    >
      {content}
    </button>
  );
}
