import React from "react"
import { Link } from "react-router-dom"

export default function CTASection() {
  return (
    <div style={{
      background: "var(--foreground)",
      color: "white",
      borderRadius: "var(--radius-xl)",
      padding: "64px",
      textAlign: "center",
      margin: "80px auto",
      maxWidth: "1100px"
    }}>
      <h2 style={{ fontSize: "40px" }}>Ready to 10x your deal flow?</h2>
      <p style={{ opacity: 0.9 }}>Join forward-thinking investment firms using Kelp today.</p>

      <Link to="/upload" style={{
        display: "inline-block",
        marginTop: "20px",
        background: "white",
        color: "black",
        padding: "14px 40px",
        borderRadius: "8px",
        textDecoration: "none"
      }}>
        Generate Teaser Now
      </Link>
    </div>
  )
}
