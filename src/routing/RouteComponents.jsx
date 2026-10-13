import { useEffect, lazy } from 'react';
import { useNavigate, useParams, Navigate, Outlet } from 'react-router-dom';

export const PrivacyApp = lazy(() => import('../PrivacyApp.jsx'));
export const MathTrailPrivacyApp = lazy(() => import('../MathTrailPrivacyApp.jsx'));
export const MathTrailDeleteAccountApp = lazy(() => import('../MathTrailDeleteAccountApp.jsx'));

// Component to handle auto-detection and redirecting the root "/" to "/:lang"
export const RootRedirect = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const browserLanguage = navigator.language.slice(0, 2).toLowerCase();
    const availableLanguages = ["en", "pt", "es"];
    const targetLang = availableLanguages.includes(browserLanguage) ? browserLanguage : "pt";
    navigate(`/${targetLang}`, { replace: true });
  }, [navigate]);

  return null;
};

// Component to handle redirecting "/privacy-policy" to "/:lang/privacy-policy"
export const PrivacyRedirect = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const browserLanguage = navigator.language.slice(0, 2).toLowerCase();
    const availableLanguages = ["en", "pt", "es"];
    const targetLang = availableLanguages.includes(browserLanguage) ? browserLanguage : "pt";
    navigate(`/${targetLang}/privacy-policy`, { replace: true });
  }, [navigate]);

  return null;
};

// Component to handle redirecting "/mathtrail/privacy-policy" to "/:lang/mathtrail/privacy-policy"
export const MathTrailPrivacyRedirect = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const browserLanguage = navigator.language.slice(0, 2).toLowerCase();
    const availableLanguages = ["en", "pt", "es"];
    const targetLang = availableLanguages.includes(browserLanguage) ? browserLanguage : "pt";
    navigate(`/${targetLang}/mathtrail/privacy-policy`, { replace: true });
  }, [navigate]);

  return null;
};

// Component to handle redirecting "/mathtrail/delete-account" to "/:lang/mathtrail/delete-account"
export const MathTrailDeleteAccountRedirect = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const browserLanguage = navigator.language.slice(0, 2).toLowerCase();
    const availableLanguages = ["en", "pt", "es"];
    const targetLang = availableLanguages.includes(browserLanguage) ? browserLanguage : "pt";
    navigate(`/${targetLang}/mathtrail/delete-account`, { replace: true });
  }, [navigate]);

  return null;
};

// Layout component to validate language code
export const LanguageLayout = () => {
  const { lang } = useParams();
  const availableLanguages = ["en", "pt", "es"];

  if (!availableLanguages.includes(lang?.toLowerCase())) {
    return <Navigate to="/pt" replace />;
  }

  return <Outlet />;
};

