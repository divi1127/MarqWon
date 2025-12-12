// src/components/ScrollToTop.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Forces the browser window to scroll to the top (0, 0) whenever 
 * the route changes. This ensures new pages always start fresh.
 */
export default function ScrollToTop() {
  // Get the current location object from React Router
  const { pathname } = useLocation();

  useEffect(() => {
    // When the 'pathname' (route) changes, scroll to the top of the viewport.
    window.scrollTo(0, 0);
    
    // You can also add a log here to confirm it's working:
    // console.log(`SCROLL RESTORED: Navigated to ${pathname}`);
    
  }, [pathname]); // Dependency array: Re-run the effect only when the pathname changes

  return null; // This component doesn't render anything visually
}