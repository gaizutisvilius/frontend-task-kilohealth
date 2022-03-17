import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

// MUI
import { ThemeProvider, CssBaseline, responsiveFontSizes } from '@mui/material';
import GlobalStyles from '@mui/material/GlobalStyles';

// Theme
import { theme } from './theme';

// Components
import Layout from './hoc/Layout';

// Lazy components
const Checkout = React.lazy(() => {
  return import('./pages/Checkout');
});

const App = () => {
  return (
    <ThemeProvider
      theme={responsiveFontSizes(theme, {
        breakpoints: ['xs', 'sm', 'md'],
        factor: 2.5,
      })}
    >
      <GlobalStyles
        styles={{
          'body, html': {
            overflowX: 'hidden',
          },
          a: {
            '&:active': {
              color: 'unset',
            },
            textDecoration: 'none',
          },
        }}
      />
      <CssBaseline />
      <Layout>
        <Suspense fallback={null}>
          <Routes>
            <Route index element={<Checkout />} />
          </Routes>
        </Suspense>
      </Layout>
    </ThemeProvider>
  );
};

export default App;
