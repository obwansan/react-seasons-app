import React from 'react';

const Spinner = props => {
  return (
    <div className="ui active dimmer">
        <div className="ui big text loader">
          {props.message}
        </div>
    </div>
  );
}

// All components have a defaultProps property. 
// It's just like having a default parameter variable passed into a function.
// If a message prop is not passed into Spinner, the default will be used.
Spinner.defaultProps = {
  message: 'Loading...'
};

export default Spinner;