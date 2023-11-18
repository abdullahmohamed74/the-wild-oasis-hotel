import React from 'react';
import ReactDOM from 'react-dom/client';
import { ErrorBoundary } from 'react-error-boundary';

import { DarkModePovider } from './contexts/darkModeCotext.jsx';
import ErrorFallback from './ui/ErrorFallback.jsx';
import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => window.location.replace('/')}
    >
      <DarkModePovider>
        <App />
      </DarkModePovider>
    </ErrorBoundary>
  </React.StrictMode>
);
