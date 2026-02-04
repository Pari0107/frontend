import { useState } from "react"
import { useNavigate } from "react-router-dom"
import FileUpload from "../components/FileUpload"
import Button from "../components/Button"
import { generateTeaser } from "../services/api"

export default function Upload() {
  const [company, setCompany] = useState("")
  const [files, setFiles] = useState([])
  const navigate = useNavigate()

  const handleSubmit = async () => {
    const formData = new FormData()
    formData.append("company", company)
    files.forEach(f => formData.append("files", f))

    const res = await generateTeaser(formData)
    navigate(`/processing/${res.data.jobId}`)
  }

  return (
    <div className="max-w-xl mx-auto p-12 bg-white shadow rounded mt-10 space-y-6">
      <h3 className="text-xl font-bold">Upload Data Pack</h3>

      <input
        className="border p-3 w-full rounded"
        placeholder="Company Name"
        value={company}
        onChange={e => setCompany(e.target.value)}
      />

      <FileUpload onFilesChange={setFiles} />

      <Button onClick={handleSubmit}>Generate Teaser</Button>
    </div>
  )
}
