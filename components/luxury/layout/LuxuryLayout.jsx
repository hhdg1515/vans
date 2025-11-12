import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import LuxuryHeader from './LuxuryHeader';
import LuxuryFooter from './LuxuryFooter';

// Import global luxury styles
import '../../../styles/luxury/tokens.css';
import '../../../styles/luxury/global.css';
import '../../../styles/luxury/mb-stage.css';

export default function LuxuryLayout() {
  // Override VanLife body styles for luxury site
  useEffect(() => {
    document.body.style.backgroundColor = '#000000';
    document.body.style.fontFamily = 'Inter, sans-serif';
    document.documentElement.style.backgroundColor = '#000000';

    // Override VanLife main styles
    const mainElement = document.querySelector('main');
    if (mainElement) {
      mainElement.style.marginBottom = '0';
    }

    // Cleanup: restore original styles when leaving luxury site
    return () => {
      document.body.style.backgroundColor = '';
      document.body.style.fontFamily = '';
      document.documentElement.style.backgroundColor = '';

      if (mainElement) {
        mainElement.style.marginBottom = '';
      }
    };
  }, []);

  return (
    <div className="luxury-site">
      <LuxuryHeader />
      <main>
        <Outlet />
      </main>
      <LuxuryFooter />
    </div>
  );
}
