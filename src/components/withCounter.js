import React, { Component } from 'react'


const UpdatedComponent = (OriginalComponent) => {
  
 class NewComponent extends Component {
  state={
   count: 0
  }
  incrementCount = () => {
   this.setState(prevState => ({count: prevState.count + 1 }));
  }

   render() {
    return (
     <div>
        <OriginalComponent name="Arjun" incrementCount={this.incrementCount} count={this.state.count} />
     </div>
    )
   }
  }

  return NewComponent;
}

export default UpdatedComponent;


// naming convention of above

// const withCounter = (WrappedComponent) => {
  
//  class WithCounter extends Component {
//   state={
//    count: 0
//   }
//   incrementCount = () => {
//    this.setState(prevState => ({count: prevState.count + 1 }));
//   }

//    render() {
//     return (
//      <div>
//         <WrappedComponent name="Arjun" incrementCount={this.incrementCount} count={this.state.count} />
//      </div>
//     )
//    }
//   }

//   return WithCounter;
// }

// export default withCounter;