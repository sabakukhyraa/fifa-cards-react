export default function BaseButton({onClick, content}) {
  return (
    <button onClick={onClick} className="px-8 py-2 font-semibold leading-4 bg-transparent border rounded-lg text-regular border-red text-red hover:text-white hover:bg-red animation">{content}</button>
  )
}
