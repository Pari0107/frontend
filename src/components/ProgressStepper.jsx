import React from "react"
const steps = [
  "Financial Ingestion",
  "Public Data Scraping",
  "Sector Detection",
  "Slide Creation",
  "Visual Sourcing",
  "PPT Generation"
]

export default function ProgressStepper({ current }) {
  return (
    <div className="space-y-3">
      {steps.map((step, index) => (
        <div key={index} className="flex items-center gap-2">
          <div
            className={`w-4 h-4 rounded-full ${
              index <= current ? "bg-kelpAccent" : "bg-gray-300"
            }`}
          />
          <p>{step}</p>
        </div>
      ))}
    </div>
  )
}
