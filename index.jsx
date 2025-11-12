import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom"

// Luxury Auto Care site components - Layout imported synchronously for immediate display
import LuxuryLayout from "./components/luxury/layout/LuxuryLayout"

// Lazy load page components for code splitting (reduces initial bundle by 60-70%)
const LuxuryHome = React.lazy(() => import("./pages/Luxury/Home"))
const LuxuryAbout = React.lazy(() => import("./pages/Luxury/About"))
const Services = React.lazy(() => import("./pages/Services/Services"))
const BrandIndex = React.lazy(() => import("./pages/Brands/BrandIndex"))
const BrandDetail = React.lazy(() => import("./pages/Brands/BrandDetail"))
const CaseStudyDetail = React.lazy(() => import("./pages/Brands/CaseStudyDetail"))
const ArticlesIndex = React.lazy(() => import("./pages/Articles/ArticlesIndex"))
const NotFound = React.lazy(() => import("./pages/NotFound"))

// Language Context
import { LanguageProvider } from "./src/contexts/LanguageContext"

import "./server"

// Loading fallback component for lazy-loaded pages
function PageLoader() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      fontSize: '16px',
      color: '#666'
    }}>
      Loading...
    </div>
  )
}

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          {/* Luxury Auto Care Website */}
          <Route path="/" element={<LuxuryLayout />}>
            <Route index element={
              <Suspense fallback={<PageLoader />}>
                <LuxuryHome />
              </Suspense>
            } />
            <Route path="about" element={
              <Suspense fallback={<PageLoader />}>
                <LuxuryAbout />
              </Suspense>
            } />
            <Route path="services" element={
              <Suspense fallback={<PageLoader />}>
                <Services />
              </Suspense>
            } />

            {/* Brand Case Studies */}
            <Route path="brands">
              <Route index element={
                <Suspense fallback={<PageLoader />}>
                  <BrandIndex />
                </Suspense>
              } />
              <Route path=":brandSlug" element={
                <Suspense fallback={<PageLoader />}>
                  <BrandDetail />
                </Suspense>
              } />
              <Route path=":brandSlug/:caseStudySlug" element={
                <Suspense fallback={<PageLoader />}>
                  <CaseStudyDetail />
                </Suspense>
              } />
            </Route>

            {/* Articles Index */}
            <Route path="articles" element={
              <Suspense fallback={<PageLoader />}>
                <ArticlesIndex />
              </Suspense>
            } />
          </Route>

          {/* 404 - Not Found */}
          <Route path="*" element={
            <Suspense fallback={<PageLoader />}>
              <NotFound />
            </Suspense>
          } />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  )
}

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);
