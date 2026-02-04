import React from "react"
import Navbar from "../components/Navbar"
import FeatureCard from "../components/FeatureCard"
import CTASection from "../components/CTASection"
import Footer from "../components/Footer"
import { Link } from "react-router-dom"

export default function Landing() {
  return (
    <>
      <Navbar />

      <section style={{ textAlign: "center", padding: "80px 20px" }}>
        <h1 style={{ fontSize: "56px", lineHeight: 1.1 }}>
          Accelerate your deal flow <br /> with intelligent automation
        </h1>

        <p style={{ fontSize: "20px", color: "var(--muted-foreground)", maxWidth: 600, margin: "24px auto" }}>
          Upload raw data packs and let Kelp scrape, analyze, and structure
          your investment thesis into production-ready slides in seconds.
        </p>

        <div style={{ display: "flex", justifyContent: "center", gap: "16px" }}>
          <Link to="/upload" className="btn-primary">Generate Teaser</Link>
          <button className="btn-outline">View Demo</button>
        </div>

        <img
          src="https://storage.googleapis.com/banani-generated-images/generated-images/edacd03f-c431-4396-9fb7-56b6b124c9d9.jpg"
          style={{
            width: "100%",
            maxWidth: "1100px",
            marginTop: "60px",
            borderRadius: "12px",
            border: "1px solid var(--border)"
          }}
        />
      </section>

      <section style={{ background: "var(--secondary)", padding: "80px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "auto" }}>
          
          <h2 style={{ textAlign: "center", fontSize: "36px" }}>
            Why Investment Bankers choose Kelp
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "32px", marginTop: "64px" }}>
            <FeatureCard
              title="Universal Ingestion"
              desc="Drag and drop Excel, PDF, or messy text files. AI extracts key metrics instantly."
              icon="📄"
            />
            <FeatureCard
              title="Public Scraping"
              desc="Enrich private data using public sources, competitors, and trends."
              icon="🌍"
            />
            <FeatureCard
              title="Instant PPT"
              desc="Generate perfectly formatted slides with full citations."
              icon="📊"
            />
          </div>

        </div>
      </section>

      <CTASection />
      <Footer />
    </>
  )
}
