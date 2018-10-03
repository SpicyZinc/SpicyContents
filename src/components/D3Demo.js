import React, { Component } from 'react';
import Arc from './d3-arc/Arc';
import GraphLayer from './d3-react/Layer';

const data = [580, 60, 120, 170];

class D3Demo extends Component {

	render() {
		return (
			<div>
				<Arc data={data} />
				<hr />

				<GraphLayer />
			</div>
		)
	}
}

export default D3Demo;