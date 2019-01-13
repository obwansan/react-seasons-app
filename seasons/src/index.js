import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {

state = { lat: null, errorMessage: ''};

componentDidMount() {
		window.navigator.geolocation.getCurrentPosition(
			position => this.setState({ lat: position.coords.latitude }),
			err => this.setState({ errorMessage: err.message})
	);
}

// A 'helper function'. Use them to avoid having conditional logic in 
// the render method.
renderContent() {
  if (this.state.errorMessage && !this.state.lat) {
    return <div>Error: {this.state.errorMessage}</div>
  }
  if (!this.state.errorMessage && this.state.lat) {
    return <SeasonDisplay lat={this.state.lat} />;
  }
  return <Spinner message="Please accept location request"/>
}

// There is no 'border red' class, it's just an example of a change you might 
// need to make to what you render. If you didn't put the conditional logic in 
// a helper function you'd have to apply the border class to each condition.
	render() {
    return (
      <div className="border red">
        {this.renderContent()}
      </div>
    )
  };
}

ReactDOM.render(
	<App />,
	document.querySelector('#root')
);
