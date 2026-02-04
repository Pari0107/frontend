import React from "react"

export default function Button({ children, onClick, type="button" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="bg-kelpAccent hover:bg-red-500 text-white px-8 py-3 rounded-xl font-semibold shadow transition"
    >
      {children}
    </button>
  )
}

