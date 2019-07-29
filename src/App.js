import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
 state = {
      color : 0
    }

  render () {

   

    const colorList = ['#29D883', '#2EDA20', '#280FD4', '#9400D4', '#D4AA0E', '#D21119', '#30090A', '#B5CC67', '#23CF1A']

    const changeColor = ()=> {
      let col = Math.floor(Math.random() * colorList.length)

      this.setState({
        color: col
      })
    }

    const col_style = {
      'background-color': colorList[this.state.color]
    }

    return (
    <div className="App" style={col_style}>
     <header>
       Make the button
     </header>
     <section>
        Make a simple web app that chenges the background color when a button is pressed.
     </section>
     <section>
       <button onClick={()=>changeColor()}>HERE</button>
     </section>
       
        
   
    </div>
  )

  }
    

  
}
export default App;