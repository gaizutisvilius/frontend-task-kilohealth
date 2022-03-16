import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

// MUI
import { ThemeProvider, CssBaseline } from '@mui/material';
import GlobalStyles from '@mui/material/GlobalStyles';

// Theme
import { theme } from './theme';

// Components
import Layout from './hoc/Layout';

// Lazy components
const Home = React.lazy(() => {
  return import('./pages/Home');
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles
        styles={{
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
            <Route index element={<Home />} />
          </Routes>
        </Suspense>
      </Layout>
    </ThemeProvider>
  );
};

export default App;
