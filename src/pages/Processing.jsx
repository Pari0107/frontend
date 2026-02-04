import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Processing() {

  const navigate = useNavigate()

  const steps = [
    "Ingesting private financial data",
    "Scraping public business info",
    "Detecting company sector",
    "Extracting key metrics",
    "Structuring slides",
    "Generating PPT & citations"
  ]

  const [currentStep, setCurrentStep] = useState(0)
  const [finished, setFinished] = useState(false)

  useEffect(() => {

    const interval = setInterval(() => {

      setCurrentStep(prev => {

        if (prev < steps.length - 1) return prev + 1

        clearInterval(interval)
        setFinished(true)
        return prev

      })

    }, 1000)

    return () => clearInterval(interval)

  }, [])

  return (
    <div className="processing-page">

      <h2 className="processing-title">
        Generating your investment teaser
      </h2>

      <p className="processing-subtitle">
        Analyzing uploaded documents and enriching with public data
      </p>

      <div className="time-pill">
        ~30 seconds remaining
      </div>

      <div className="processing-card">

        {steps.map((step, index) => {

          const isDone = index < currentStep
          const isActive = index === currentStep

          return (
            <div
              key={index}
              className={`process-row 
                ${isDone ? "done" : ""} 
                ${isActive ? "active" : ""}`}
            >

              <div className="circle">

                {isDone && "✓"}

              </div>

              <span>{step}</span>

            </div>
          )
        })}

      </div>

      <div className="progress-section">

        <p className="current-text">
          {steps[currentStep]}...
        </p>

        <div className="progress-track">
          <div
            className="progress-bar"
            style={{
              width: `${((currentStep + 1) / steps.length) * 100}%`
            }}
          />
        </div>

      </div>

      {/* ONLY ADDITION */}

      {finished && (
        <button
          className="download-btn"
          onClick={() => navigate("/results")}
        >
          Download your PPT
        </button>
      )}

    </div>
  )
}
