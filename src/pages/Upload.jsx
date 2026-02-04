import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import FileUpload from "../components/FileUpload"
import Button from "../components/Button"

export default function Upload() {

  const navigate = useNavigate()

  return (
    <div className="upload-page-container">

      <h2>Upload documents for this teaser</h2>
      <p>
        Combine private files with public web data to generate a professional investment teaser.
      </p>

      <section className="upload-card">

        <div className="upload-card-body">

          {/* LEFT SIDE */}
          <div>

            <div className="field-group">
              <label>Company name</label>
              <div className="input-shell">
                e.g. Solaris Tech Solutions
              </div>
            </div>

            <div className="field-group">
              <label>Data pack</label>

              <div 
                className="dropzone"
                onClick={() => document.getElementById("fileInput").click()}
              >
                Drop files here or click to browse
                <br />
                Excel, PDF, CSV supported

                <input
                  id="fileInput"
                  type="file"
                  multiple
                  style={{ display: "none" }}
                  onChange={(e) => {
                    const selectedFiles = Array.from(e.target.files)
                    console.log(selectedFiles)
                  }}
                />
              </div>
            </div>

            <div className="field-group">
              <label>Uploaded files</label>

              <div className="file-item">
                Solaris_FY23_Financials.xlsx
                <span>Ready</span>
              </div>

              <div className="file-item">
                Solaris_Investor_Memo_v5.pdf
                <span>Uploading...</span>
              </div>

              <div className="file-item">
                CRM_export_pipeline_Q1.csv
                <span>Ready</span>
              </div>

            </div>

          </div>

          {/* RIGHT SIDE */}
          <div>

            <div className="upload-card" style={{ padding: "16px", background: "#e6f7f6" }}>
              <strong>How your data is used</strong>
              <ul>
                <li>Encrypted private uploads</li>
                <li>Public data scraped for benchmarks</li>
                <li>All metrics cited</li>
              </ul>
            </div>

            <div className="upload-card" style={{ padding: "16px", marginTop: "12px" }}>
              <strong>Best results include:</strong>
              <ul>
                <li>Financials (Excel)</li>
                <li>Investment memo (PDF)</li>
                <li>KPIs (CSV)</li>
              </ul>
            </div>

          </div>

        </div>

        <div style={{ padding: "16px", display: "flex", justifyContent: "space-between" }}>
          <small>
            Files are processed securely and deleted anytime.
          </small>

          <button className="primary-button" 
	  onClick={() => navigate("/processing")}
>
            Generate investment teaser
          </button>
        </div>

      </section>

    </div>
  );
}
