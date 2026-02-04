import React from "react"
import { useNavigate } from "react-router-dom"

export default function Results() {
  const navigate = useNavigate()

  return (
    <div className="results-page">

      <div className="results-header">
        <span className="success-badge">Success</span>

        <h1>Your blind investment teaser is ready</h1>

        <div className="results-actions">
          <button className="primary-button">
            Download PPT (.pptx)
          </button>

          <button className="secondary-button">
            Download Citations
          </button>
        </div>
      </div>

      <div className="slides-grid">

        <div className="slide-card">
          <div className="slide-title">Business Overview</div>
          <div className="slide-placeholder big"></div>
          <div className="slide-placeholder small"></div>
          <div className="slide-placeholder small"></div>
        </div>

        <div className="slide-card">
          <div className="slide-title">Financial Performance</div>
          <div className="chart-placeholder">
            <div className="bar"></div>
            <div className="bar tall"></div>
            <div className="bar"></div>
          </div>
        </div>

        <div className="slide-card">
          <div className="slide-title">Investment Highlights</div>
          <div className="slide-placeholder big"></div>
          <div className="slide-placeholder"></div>
          <div className="slide-placeholder"></div>
        </div>

      </div>

      <div className="summary-card">

        <div className="summary-item">
          <span className="summary-label">Detected Sector</span>
          <strong>Enterprise SaaS / Fintech</strong>
        </div>

        <div className="summary-item">
          <span className="summary-label">Revenue Growth</span>
          <strong className="green">42% YoY</strong>
        </div>

        <div className="summary-item">
          <span className="summary-label">EBITDA Margin</span>
          <strong>28%</strong>
        </div>

        <div className="summary-item">
          <span className="summary-label">Customers</span>
          <strong>1,200+</strong>
        </div>

      </div>

      <div className="results-footer">
        <button 
          className="link-button"
          onClick={() => navigate("/upload")}
        >
          Generate another teaser →
        </button>
      </div>

    </div>
  )
}
