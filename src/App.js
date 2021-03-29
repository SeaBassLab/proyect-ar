import React, { Suspense } from 'react';
import { CssBaseline } from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Electrician from './pages/Electrician';
import Layout from './components/Layout';

const App = () => {
  return (
    <Suspense fallback="loading">
        <CssBaseline />
        <BrowserRouter>
          <Layout>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/electricidad" component={Electrician} />
            </Switch>
          </Layout>
        </BrowserRouter>
    </Suspense>
  );
};

export default App;
