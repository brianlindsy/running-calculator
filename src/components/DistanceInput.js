import React from 'react';

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
      <form class="form-inline">
         <label for="distance">Distance </label>
         <input type="text" class="form-control" id="distance" value={this.props.distance} onChange={this.updateDistance}/>
         <button type="submit" class="btn btn-primary" onClick={this.props.calculateDistance}>Distance</button>
      </form>
      );
   }
}
export default DistanceInput;