import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <div className="bg-kelpDark text-white px-8 py-4 flex justify-between shadow-lg">
      <h1 className="font-bold text-xl">Kelp Dealflow AI</h1>
      <Link to="/" className="opacity-80 hover:opacity-100">
        Home
      </Link>
    </div>
  )
}
