import './style/main.scss';

import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';

import AboutContainer from './component/about-container';
import DashboardContainer from './component/dashboard-container';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 400,
      expenses: []
    }
    this.getApp = this.getApp.bind(this);
  }

  getApp() {
    return {
      state: this.state,
      setState: this.setState.bind(this)
    }
  }

  componentDidUpdate() {
    console.log('__STATE__', this.state);
  }

  render() {
    return (
      <main>
        <BrowserRouter>
          <section>
            <Route exact path='/about' component={AboutContainer} />
            <Route exact path='/' component={() => <DashboardContainer app={this.getApp()} />} />
          </section>
        </BrowserRouter>
     </main>
    )
  }
}

ReactDom.render(<App />, document.getElementById('root'));
