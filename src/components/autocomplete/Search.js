// https://alligator.io/react/react-autocomplete/
import React, { Component } from 'react';

import Suggestions from './Suggestions';

class Autocomplete extends Component {
	static defaultProps = {
		options: []
	};

	constructor(props) {
		super(props);

		this.state = {
			error: false,
			showSuggestions: false,
			activeOption: 0,
			query: '',
			filteredOptions: []	
		};
	}	

	getOptions = () => {
		const url = 'https://jsonplaceholder.typicode.com/users';
		fetch(url)
			.then((response) => {
				return response.json();
			})
			.then(function(myJson) {
				this.setState({
					filteredOptions: myJson
				});
			})
			.catch(() => this.setState({ error: true }));
	}

	handleInputChange = (e) => {
		const { options } = this.props;
		const query = e.currentTarget.value;
		console.log(query);

		const filteredOptions = options.filter((option) =>
			option.toLowerCase().indexOf(query.toLowerCase()) !== -1);

		this.setState({
			showSuggestions: true,
			query,
			filteredOptions,
		});
		// API call
		// this.setState({
		// 	query: this.search.value
		// }, () => {
		// 	if (this.state.query && this.state.query.length > 1) {
		// 		if (this.state.query.length % 2 === 0) {
		// 			this.getOptions();
		// 		}
		// 	}
		// });
	}

	onClick = e => {
		// Update the user input and reset the rest of the state
		this.setState({
			activeOption: 0,
			filteredOptions: [],
			showSuggestions: false,
			query: e.currentTarget.innerText
		});
	};

	// Event fired when the user presses a key down
	onKeyDown = e => {
		const {
			activeOption,
			filteredOptions
		} = this.state;

		// User pressed the enter key, update the input and close the suggestions
		if (e.keyCode === 13) {
			this.setState({
				activeOption: 0,
				showSuggestions: false,
				query: filteredOptions[activeOption]
			});
		} else if (e.keyCode === 38) { // User pressed the up arrow, decrement the index
			if (activeOption === 0) {
				return;
			}

			this.setState({ activeOption: activeOption - 1 });
		} else if (e.keyCode === 40) { // User pressed the down arrow, increment the index
			if (activeOption === filteredOptions.length - 1) {
				return;
			}

			this.setState({ activeOption: activeOption + 1 });
		}
	};

	render() {

		return (
			<form>
				<input
					placeholder="Search for..."
					value={this.state.query}
					onChange={this.handleInputChange}
					onKeyDown={this.onKeyDown}
				/>
					<Suggestions
						onClick={this.onClick}
						{...this.state}
					/>
			</form>
		)
	}
}

export default Autocomplete;