import React from 'react';

const Bar = (props) => {
	const {
		color,
		opacity,
		width,
		height,
		rx,
		x,
		y,
		transform
	} = props;

	return (
		<rect
			fill={color}
			opacity={opacity}
			x={x}
			y={y}
			width={width}
			height={height}
			rx={rx}
			transform={transform}
		/>
	);
};

export default Bar;