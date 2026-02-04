import React from "react"
export default function SlidePreview({ title }) {
  return (
    <div className="bg-white shadow rounded-lg p-6 h-40 flex items-center justify-center">
      <p className="font-semibold">{title}</p>
    </div>
  )
}
