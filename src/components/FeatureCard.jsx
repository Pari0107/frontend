import React from "react"

export default function FeatureCard({ title, desc, icon }) {
  return (
    <div style={{
      padding: "32px",
      background: "var(--card)",
      border: "1px solid var(--border)",
      borderRadius: "var(--radius-lg)"
    }}>
      <div style={{
        width: 48,
        height: 48,
        background: "var(--secondary)",
        borderRadius: "var(--radius-md)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 24
      }}>
        {icon}
      </div>

      <h3>{title}</h3>
      <p style={{ color: "var(--muted-foreground)" }}>{desc}</p>
    </div>
  )
}
