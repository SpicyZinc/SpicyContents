import React from 'react';
import { max, scaleLinear } from 'd3';
import Bar from './Bar';
import Axis from './Axis';

const data = [
	{
		id: 1,
		x1: 0,
		x2: 15,
		y1: 1800,
		y2: 21600
	},
	{
		id: 2,
		x1: 15,
		x2: 30,
		y1: 1800,
		y2: 21600
	},
	{
		id: 3,
		x1: 30,
		x2: 45,
		y1: 1800,
		y2: 21600
	}
];

const Bars = (props) => {
	const {
		data,
		size,
		color,
		opacity,
		rx,
		xDataMax,
		yDataMax,
		xScale,
		yScale,
		transform
	} = props;

	return (
		<g>
			{
				data.map((d) => {
					const width = d.x1 === d.x2 ? 1 : (xScale(d.x2 - d.x1) - 1);
					const height = size.height / yDataMax * (d.y2 - d.y1);

					return (<Bar
						key={d.id}
						x={xScale(d.x1)}
						y={yScale(d.y2)}
						width={width}
						height={height}
						{...props}
					/>);
				})
			}
		</g>
	);
};

const Layer = (props) => {
	const width = 500;
	const height = 300;
	const size = { width, height };
	const margin = {
		top: 20,
		right: 20,
		bottom: 30,
		left: 50
	};

	const opacity = 0.5;
	const rx = 3; // rounded

	const allX2 = data.reduce((acc, d, i) => {
		return [...acc, d.x2];
	}, []);

	const allY2 = data.reduce((acc, d, i) => {
		return [...acc, d.y2];
	}, []);

	const xDataMax = max(allX2);
	const yDataMax = max(allY2);

	const xScale = scaleLinear()
		.range([0, width])
		.domain([0, xDataMax]);

	const yScale = scaleLinear()
		.range([height, 0])
		.domain([0, yDataMax]);

	const layerBase = {
		data: data,
		size: size,
		color: '#5A5A5C',
		opacity: opacity,
		rx: rx,
		xDataMax: xDataMax,
		yDataMax: yDataMax,
		xScale: xScale,
		yScale: yScale,
		transform: `translate(${margin.left}, ${margin.top})`
	};

	return (
		<svg
			width={`${width + margin.left + margin.right}`}
			height={`${height + margin.top + margin.bottom}`}
		>
			<Bars
				{...layerBase}
			/>

			<Axis
				x={margin.left}
				y={`${height + margin.top + margin.bottom}`}
				length={width}
				horizontal={true}
				color='green'
			/>


			<Axis
				x={margin.left}
				y={`${height + margin.top + margin.bottom}`}
				length={width}
				horizontal={false}
				color='green'
			/>

		</svg>
	);
};

export default Layer;