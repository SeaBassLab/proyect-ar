import React, { Suspense } from 'react';
import { CssBaseline } from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Layout from './components/Layout';

const App = () => {
  return (
    <Suspense fallback="loading">
        <CssBaseline />
        <BrowserRouter>
          <Layout>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route component={NotFound} />
            </Switch>
          </Layout>
        </BrowserRouter>
    </Suspense>
  );
};

export default App;
