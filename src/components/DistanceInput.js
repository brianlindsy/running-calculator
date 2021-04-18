import React from 'react';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';

class DistanceInput extends React.Component {
   constructor(props) {
      super(props);

      this.updateDistance = this.updateDistance.bind(this);
   };

   updateDistance(e) {
      this.props.updateDistance(e.target.value);
   }

   render(){
      return(
      <FormControl class="form-inline">
         <TextField id="standard-basic" variant="outlined" label="Total Distance" value={this.props.distance} onChange={this.updateDistance}/>
      </FormControl>
      );
   }
}
export default DistanceInput;