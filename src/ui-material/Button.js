import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

class Button extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      clicks: 0
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    console.log('clicked', e);
  }

  render() {
    return (
      <RaisedButton 
        label="RaisedButton"
        onClick={this.handleClick} 
      />    
    );  
  }
}

export default Button;
