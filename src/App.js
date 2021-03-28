import React, { Suspense } from 'react';
import { CssBaseline } from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './components/Layout';

const App = () => {
  return (
    <Suspense fallback="loading">
        <CssBaseline />
        <BrowserRouter>
          <Layout>
            <Switch>
              <Route exact path="/" component={Home} />
            </Switch>
          </Layout>
        </BrowserRouter>
    </Suspense>
  );
};

export default App;
