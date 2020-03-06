import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import './style.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import AppHeader from './components/Header/index.js';
import List from './containers/List/index.js';
import Detail from './containers/Detail/index.js'; 
const { Header, Footer, Content } = Layout;



class App extends Component {
	render() {
		return (
      <BrowserRouter>
			<Layout style={{ minWidth: 1300, height: '100%'}}>
      		<Header className="header"><AppHeader /></Header>
      		


      		<Content className="content">
              <Switch>
                <Route path='/detail' component={Detail} />
                <Route path='/:id?' component={List}/>
                
              </Switch>
          </Content>
      		<Footer className="footer">


          @copyright Yuandi Wu 2020</Footer>
    	</Layout>	
      </BrowserRouter>

		)
	}
}

ReactDOM.render(<App />, document.getElementById('root'));


