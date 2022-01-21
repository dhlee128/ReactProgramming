import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import FunctionStateDemo from './components/samples/FunctionStateDemo'
import UseEffectDemo from './components/samples/UseEffectDemo'
import UseEffectFetchApi from './components/samples/UseEffectFetchApi'
import FetchApiPractice from './components/samples/FetchApiPractice'
import TextBoxOnChangeEventHandler from './components/samples/TextBoxOnChangeEventHandler'

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/counter' component={Counter} />
        <Route path='/fetch-data' component={FetchData} />
        <Route path='/functionStateDemo' component={FunctionStateDemo} />
        <Route path='/useEffectDemo' component={UseEffectDemo} />
        <Route path='/useEffectFetchApi' component={UseEffectFetchApi} />
        <Route path='/fetchApiPractice' component={FetchApiPractice} />
        <Route path='/textBoxOnChangeEventHandler' component={TextBoxOnChangeEventHandler} />
      </Layout>
    );
  }
}
