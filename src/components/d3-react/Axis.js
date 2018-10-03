import React from 'react';
import { select } from 'd3';

class Axis extends React.Component {

	// componentDidMount() {
	// 	this.renderAxis();
	// }

	// componentDidUpdate() {
	// 	this.renderAxis();
	// }

	// renderAxis() {
	// 	let node = this.refs.axis;
	// 	select(node)
	// 		.call(this.props.callFunc)
	// 		.attr('font-family', this.props.fontFamily);
	// }

	prepareCords() {
		const {
			color,
			horizontal,
			length,
			x,
			y,
		} = this.props;

		const coords = {
			x1: x,
			y1: y
		};

		if (horizontal) {
			coords.x2 = horizontal ? x + length : x;
			coords.y2 = horizontal ? y : y + length;
		}

		return coords;
	}

	render() {
		const coords = this.prepareCords();
		return (
			<g
				ref="axis"
				transform={this.props.translate}
			>
				<line
					{...coords}
					stroke={this.props.color}
					strokeWidth={2}
				/>
			</g>
		);
	}
}

export default Axis;