import { Suspense } from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import App from './App.jsx';
import {
  PrivacyApp,
  MathTrailPrivacyApp,
  MathTrailDeleteAccountApp,
  RootRedirect,
  PrivacyRedirect,
  MathTrailPrivacyRedirect,
  MathTrailDeleteAccountRedirect,
  LanguageLayout
} from './routing/RouteComponents.jsx';

const routes = [
  {
    path: "/",
    element: <RootRedirect />,
  },
  {
    path: "/privacy-policy",
    element: <PrivacyRedirect />,
  },
  {
    path: "/mathtrail/privacy-policy",
    element: <MathTrailPrivacyRedirect />,
  },
  {
    path: "/mathtrail/privacy",
    element: <MathTrailPrivacyRedirect />,
  },
  {
    path: "/privacy-policy/mathtrail",
    element: <MathTrailPrivacyRedirect />,
  },
  {
    path: "/mathtrail/delete-account",
    element: <MathTrailDeleteAccountRedirect />,
  },
  {
    path: "/mathtrail/excluir-conta",
    element: <MathTrailDeleteAccountRedirect />,
  },
  {
    path: "/:lang",
    element: <LanguageLayout />,
    children: [
      {
        path: "",
        element: <App />,
      },
      {
        path: "privacy-policy",
        element: (
          <Suspense fallback={<div className="bg-black min-h-screen" />}>
            <PrivacyApp />
          </Suspense>
        ),
      },
      {
        path: "mathtrail/privacy-policy",
        element: (
          <Suspense fallback={<div className="bg-black min-h-screen" />}>
            <MathTrailPrivacyApp />
          </Suspense>
        ),
      },
      {
        path: "privacy-policy/mathtrail",
        element: (
          <Suspense fallback={<div className="bg-black min-h-screen" />}>
            <MathTrailPrivacyApp />
          </Suspense>
        ),
      },
      {
        path: "mathtrail/delete-account",
        element: (
          <Suspense fallback={<div className="bg-black min-h-screen" />}>
            <MathTrailDeleteAccountApp />
          </Suspense>
        ),
      },
      {
        path: "mathtrail/excluir-conta",
        element: (
          <Suspense fallback={<div className="bg-black min-h-screen" />}>
            <MathTrailDeleteAccountApp />
          </Suspense>
        ),
      },
    ]
  },
  // Catch-all redirect to homepage
  {
    path: "*",
    element: <Navigate to="/" replace />,
  }
];

const router = createBrowserRouter(routes);

export default router;