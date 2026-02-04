import axios from "axios"

const API = axios.create({
  baseURL: "http://localhost:8000/api"
})

export const generateTeaser = (formData) =>
  API.post("/generate", formData)

export const getStatus = (jobId) =>
  API.get(`/status/${jobId}`)

export const getResult = (jobId) =>
  API.get(`/result/${jobId}`)
