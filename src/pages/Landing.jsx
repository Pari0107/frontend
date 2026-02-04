import { Link } from "react-router-dom"
import Button from "../components/Button"

export default function Landing() {
  return (
    <div className="p-20 text-center">
      <h2 className="text-4xl font-bold mb-4">Automated Deal Flow AI</h2>
      <p className="text-gray-600 mb-10">
        Instantly generate blind investment teasers using AI-powered data fusion.
      </p>

      <Link to="/upload">
        <Button>Start Generating</Button>
      </Link>
    </div>
  )
}
