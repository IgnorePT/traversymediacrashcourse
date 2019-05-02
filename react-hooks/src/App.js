import React, { useState } from 'react';


// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//       </div>
//     );
//   }
// }

// export default App;

const App = props => {

  const [state, setState] = useState({
    selectedCharacter: 1,
    side: 'light',
    destroyed: false
  });

  const sideHandler = side => {
    setState({ side: side});
  };

  const charSelectHandler = event => {
    const charId = event.target.value;
    setState({ selectedCharacter: charId});
  };

  const destructionHandler = () => {
    setState({ destroyed: true });
  };

  let content = (
    <React.Fragment>
      <CharPicker 
        side={state.side}
        selectedChar={state.selectedCharacter}
        onCharSelect={charSelectHandler}
      />
    </React.Fragment>
  );

    if(state.destroyed) {
      content = <h1>Total Destruction!</h1>
    }
  

  return content;
}

export default App;