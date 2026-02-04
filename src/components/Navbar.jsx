import React from "react"
import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <header style={{ borderBottom: "1px solid var(--border)", padding: "24px 0" }}>
      <div style={{ maxWidth: "1200px", margin: "auto", display: "flex", justifyContent: "space-between" }}>
        
        <div style={{ fontSize: "20px", fontWeight: "700" }}>
          🌱 Kelp Dealflow
        </div>

        <nav style={{ display: "flex", gap: "32px" }}>
          <a className="nav-item">Features</a>
          <a className="nav-item">How it works</a>
          <a className="nav-item">Pricing</a>
        </nav>

        <div style={{ display: "flex", gap: "12px" }}>
          <button className="btn-outline">Log in</button>
          <Link to="/upload" className="btn-primary">Generate Teaser</Link>
        </div>

      </div>
    </header>
  )
}
