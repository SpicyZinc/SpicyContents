import React from 'react';
import Search from './autocomplete/Search';

const About = () => (
	<div>
		<h1>
			About Myself
		</h1>
		<Search
			options={
				[
					"Alligator",
					"Bask",
					"Crocodilian",
					"Death Roll",
					"Eggs",
					"Jaws",
					"Reptile",
					"Solitary",
					"Tail",
					"Wetlands"
				]
			}
		/>
	</div>
);

export default About;