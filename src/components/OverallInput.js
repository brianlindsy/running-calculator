import React from 'react';
import CalculateButton from './buttons/CalculateButton.js';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';

class OverallInput extends React.Component {
   constructor(props) {
      super(props);

      this.updateTimeHours = this.updateTimeHours.bind(this);
      this.updateTimeMinutes = this.updateTimeMinutes.bind(this);
      this.updateTimeSeconds = this.updateTimeSeconds.bind(this);
   };

   updateTimeHours(e) {
      this.props.updateTimeHours(e.target.value);
   }
   updateTimeMinutes(e) {
      this.props.updateTimeMinutes(e.target.value);
   }
   updateTimeSeconds(e) {
      this.props.updateTimeSeconds(e.target.value);
   }

   render(){
      return(
      <FormControl class="form-inline">
         <TextField id="standard-basic" variant="outlined" label="Final Time Hours"  value={this.props.hours} onChange={this.updateTimeHours}/>
         <TextField id="standard-basic" variant="outlined" label="Final Time Minutes"  value={this.props.minutes} onChange={this.updateTimeMinutes}/>
         <TextField id="standard-basic" variant="outlined" label="Final Time Seconds"  value={this.props.seconds} onChange={this.updateTimeSeconds}/>
         <CalculateButton name="Get Final Time" calculateFunc={this.props.calculateOverallTime}></CalculateButton>
      </FormControl>
      );
   }
}
export default OverallInput;