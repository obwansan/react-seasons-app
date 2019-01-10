import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
	// The constructor method is called immediately when an instance of
	// the class is created. Therefore its a good place to initialize state.
	constructor(props) {
		super(props);

		this.state = { 
			lat: null,
			errorMessage: ''
		};

		// getCurrentPosition() takes two callback functions: first is called if 
		// it gets a poition, second is called if not.
		// The callback functions run asynchronously, i.e. they run when getCurrentPosition() 
		// gets or doesn't get a position, not when the constructor method calls getCurrentPosition().
		// You can see the delay: 'Latitude:' is rendered immediately, but the number only after a 
		// couple of seconds.
		window.navigator.geolocation.getCurrentPosition(
			position => {
				this.setState({ lat: position.coords.latitude });
			},
			err => {
				this.setState({ errorMessage: err.message} );
			}
	);
}
	
	render() {
			if (this.state.errorMessage && !this.state.lat) {
				return <div>Error: {this.state.errorMessage}</div>
			}
			if (!this.state.errorMessage && this.state.lat) {
				return <div>Latitude: {this.state.lat}</div>;
			}
			return <div>Loading!</div>
  };
}

ReactDOM.render(
	<App />,
	document.querySelector('#root')
);
