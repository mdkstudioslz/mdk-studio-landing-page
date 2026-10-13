import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { HelmetProvider } from 'react-helmet-async';
import { RouterProvider } from 'react-router-dom';

import './index.css';
import router from './routes.jsx';
import { Analytics } from "@vercel/analytics/react"
import './i18n';

const queryClient = new QueryClient();

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          <Analytics />
          <RouterProvider router={router} />
        </QueryClientProvider>
      </HelmetProvider>
    </StrictMode>,
  );
} else {
  console.error('Elemento root não encontrado!');
}