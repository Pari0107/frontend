import { useParams } from "react-router-dom"
import SlidePreview from "../components/SlidePreview"

export default function Results() {
  const { jobId } = useParams()

  return (
    <div className="p-12 space-y-8">
      <h2 className="text-2xl font-bold">Generated Investment Teaser</h2>

      <div className="grid grid-cols-3 gap-6">
        <SlidePreview title="Business Overview" />
        <SlidePreview title="Financial Performance" />
        <SlidePreview title="Investment Highlights" />
      </div>

      <div className="flex gap-4">
        <a
          href={`http://localhost:8000/api/result/${jobId}?type=ppt`}
          className="bg-kelpAccent text-white px-6 py-2 rounded shadow"
        >
          Download PPT
        </a>

        <a
          href={`http://localhost:8000/api/result/${jobId}?type=citation`}
          className="bg-kelpBlue text-white px-6 py-2 rounded shadow"
        >
          Download Citations
        </a>
      </div>
    </div>
  )
}
