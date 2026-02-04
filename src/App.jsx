import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Landing from "./pages/Landing"
import Upload from "./pages/Upload"
import Processing from "./pages/Processing"
import Results from "./pages/Results"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/processing" element={<Processing />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </BrowserRouter>
  )
}
