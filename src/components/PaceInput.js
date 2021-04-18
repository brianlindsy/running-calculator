import React from 'react';
import CalculateButton from './buttons/CalculateButton.js';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';

class PaceInput extends React.Component {
   constructor(props) {
      super(props);

      this.updatePaceHours = this.updatePaceHours.bind(this);
      this.updatePaceMinutes = this.updatePaceMinutes.bind(this);
      this.updatePaceSeconds = this.updatePaceSeconds.bind(this);
   };

   updatePaceHours(e) {
      this.props.updatePaceHours(e.target.value);
   }
   updatePaceMinutes(e) {
      this.props.updatePaceMinutes(e.target.value);
   }
   updatePaceSeconds(e) {
      this.props.updatePaceSeconds(e.target.value);
   }

   render(){
      return(
      <FormControl class="form-inline">
         <TextField id="standard-basic" variant="outlined" label="Pace Hours" value={this.props.hours} onChange={this.updatePaceHours}/>
         <TextField id="standard-basic" variant="outlined" label="Pace Minutes" value={this.props.minutes} onChange={this.updatePaceMinutes}/>
         <TextField id="standard-basic" variant="outlined" label="Pace Seconds" value={this.props.seconds} onChange={this.updatePaceSeconds}/>
         <CalculateButton name="Get Pace" calculateFunc={this.props.calculatePace}></CalculateButton>
      </FormControl>
      );
   }
}
export default PaceInput;