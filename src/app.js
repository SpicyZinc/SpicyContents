import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	HashRouter,
	Route,
	Link,
	Switch,
	Redirect
} from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store';
import Hello from './components/Hello';
import About from './components/About';
import D3Demo from './components/D3Demo';
import ToDo from './components/todo/ToDo';

class App extends Component {

	render() {
		const {
			title
		} = this.props;

		return (
			<Provider store={store}>
				<HashRouter>
					<div className="App">
						{title}
						<div className="container">
							<ul>
								<li><Link to="/hello">Hello</Link></li>
								<li><Link to="/about">About</Link></li>
								<li><Link to="/d3">D3</Link></li>
								<li><Link to="/todo">TODO DEMO</Link></li>
							</ul>
							<hr />

							<Switch>
								<Route exact path="/hello" component={Hello} />
								<Route exact path="/about" component={About} />
								<Route exact path="/d3" component={D3Demo} />
								<Route exact path="/todo" component={ToDo} />
							</Switch>

						</div>
					</div>
				</HashRouter>
			</Provider>
		);
	}
}

export default App;