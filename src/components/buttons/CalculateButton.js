import React from 'react';
import Button from '@material-ui/core/Button';

class CalculateButton extends React.Component {
   constructor(props) {
      super(props);

      this.handleButtonClick = this.handleButtonClick.bind(this);
   };

   handleButtonClick(e){
      this.props.calculateFunc(e);
   }

   render(){
      return(
      <Button onClick={this.handleButtonClick} variant="contained" color="primary">{this.props.name}</Button>
      );
   }
}
export default CalculateButton;