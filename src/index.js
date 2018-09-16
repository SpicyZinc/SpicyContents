import React from 'react';
import ReactDOM from 'react-dom';

import App from './app';

const title = 'Maybe everything App!';

ReactDOM.render(
	<App title={title} />,
	document.getElementById('app')
);
