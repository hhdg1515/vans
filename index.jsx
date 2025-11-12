import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom"

// Luxury Auto Care site components
import LuxuryLayout from "./components/luxury/layout/LuxuryLayout"
import LuxuryHome from "./pages/Luxury/Home"
import LuxuryAbout from "./pages/Luxury/About"
import Services from "./pages/Services/Services"
import BrandIndex from "./pages/Brands/BrandIndex"
import BrandDetail from "./pages/Brands/BrandDetail"
import CaseStudyDetail from "./pages/Brands/CaseStudyDetail"
import ArticlesIndex from "./pages/Articles/ArticlesIndex"
import NotFound from "./pages/NotFound"

// Language Context
import { LanguageProvider } from "./src/contexts/LanguageContext"

import "./server"

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          {/* Luxury Auto Care Website */}
          <Route path="/" element={<LuxuryLayout />}>
            <Route index element={<LuxuryHome />} />
            <Route path="about" element={<LuxuryAbout />} />
            <Route path="services" element={<Services />} />

            {/* Brand Case Studies */}
            <Route path="brands">
              <Route index element={<BrandIndex />} />
              <Route path=":brandSlug" element={<BrandDetail />} />
              <Route path=":brandSlug/:caseStudySlug" element={<CaseStudyDetail />} />
            </Route>

            {/* Articles Index */}
            <Route path="articles" element={<ArticlesIndex />} />
          </Route>

          {/* 404 - Not Found */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  )
}

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);
