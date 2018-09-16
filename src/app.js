import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	HashRouter,
	Route,
	Link,
	Switch,
	Redirect
} from 'react-router-dom'

import Hello from './components/Hello';
import About from './components/About';
import Arc from './components/Arc';

class App extends Component {

	render() {
		const {
			title
		} = this.props;

		return (
			<HashRouter>
				<div className="App">
					{title}
					<div className="container">
						<ul>
							<li><Link to="/hello">Hello</Link></li>
							<li><Link to="/about">About</Link></li>
							<li><Link to="/d3">D3</Link></li>
						</ul>
						<hr />

						<Switch>
							<Route exact path="/hello" component={Hello} />
							<Route exact path="/about" component={About} />
							<Route exact path="/d3" component={Arc} />
						</Switch>
					</div>
				</div>
			</HashRouter>
		);
	}
}

export default App;