import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import ProgressStepper from "../components/ProgressStepper"
import { getStatus } from "../services/api"

export default function Processing() {
  const { jobId } = useParams()
  const [step, setStep] = useState(0)
  const navigate = useNavigate()

  useEffect(() => {
    const interval = setInterval(async () => {
      const res = await getStatus(jobId)

      setStep(res.data.step)

      if (res.data.done) {
        clearInterval(interval)
        navigate(`/results/${jobId}`)
      }
    }, 1500)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="max-w-md mx-auto mt-20 bg-white shadow p-10 rounded">
      <h3 className="font-bold text-lg mb-6">Generating Teaser...</h3>
      <ProgressStepper current={step} />
    </div>
  )
}
