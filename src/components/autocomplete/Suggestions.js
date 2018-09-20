import React from 'react'

const Suggestions = (props) => {

	const {
		onClick,
		activeSuggestion,
		filteredOptions,
		showSuggestions,
		query
    } = props;

	let optionsListComponent = null;

	if (showSuggestions && query) {
		if (filteredOptions.length) {
			optionsListComponent = (
				<ul className="suggestions">
					{
						filteredOptions.map((option, index) => {
							let className = "";
							if (index === activeSuggestion) {
								className = "option-active";
							}

							return (
								<li
									className={className}
									key={option}
									onClick={onClick}
								>
									{option}
								</li>
							);
						})
					}
				</ul>
			);
		} else {
			optionsListComponent = (
				<div className="no-suggestions">
					<em>No suggestions, you're on your own!</em>
				</div>
			);
		}
	}

	return optionsListComponent;
};

export default Suggestions;