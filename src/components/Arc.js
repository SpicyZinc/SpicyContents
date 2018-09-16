import React, { Component } from 'react';
import * as d3 from "d3";

const innerRadius = 90;
const outerRadius = 110;
const cornerRadius = 5;

const pieGenerator = d3.pie();
const arcData = pieGenerator([580, 60, 120, 170]);


class Arc extends Component {

	componentDidMount() {
		const context = this.setContextGroup();
		this.setBackground(context);
		this.setForeground(context);
		this.addLabel(context);
	}

	setBackground(context) {
		return context
			.data(pieGenerator([1]))
			.append('path')
			.style('fill', '#e6e6e6')
			.attr('d', this.arc());
	}

	setForeground(context) {
		
		console.log(arcData);

		return context
			.selectAll("path")
			.data(arcData)
			.enter()
			.append('path')
			.style('fill', (d) => d3.color("hsl(120, 50%, " + d.index * 0.5 / 6 * 100 + "%)"))
			.attr('class', 'credit-arc')
			.attr('id', (d) => "arc_" + d.index) // Unique id for each slice
			.attr('d', this.arc());
	}

	addLabel(context) {
		return context
			.selectAll(".arcsText")
			.data(arcData)
			.enter()
			.append("text")
			.attr("class", "arcsText")
			.append("textPath")
			.attr("xlink:href", function(d) {return "#arc_"+d.index;})
			.text(function(d) {return d.value;});
	}

	arc() {
		return d3.arc()
			.innerRadius(innerRadius)
			.outerRadius(outerRadius)
			.cornerRadius(cornerRadius);
	}

	setContextGroup() {
		return d3.select(this.refs.arc)
			.append('svg')
			.attr('height', '300px')
			.attr('width', '300px')
			.attr('id', 'd3-arc')
			.append('g')
			.attr('transform', `translate(150, 150)`)
	}

	render() {
		return (
			<div ref="arc"></div>
		)
	}
}

export default Arc;