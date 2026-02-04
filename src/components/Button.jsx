export default function Button({ children, onClick, type="button" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="bg-kelpAccent text-white px-6 py-2 rounded-lg shadow hover:opacity-90 transition"
    >
      {children}
    </button>
  )
}
