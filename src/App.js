import React, { Component } from 'react';
import "./App.css";
import Card from "./card";

let firstColor=''
let firstShape=''
let firstId=''
let secondColor=''
let secondShape=''
let secondId=''
let clicked=false

const colors = ["blue", "red", "green", "orange", "black"];
const shapes = ["circle", "square", "triangle"];
var ar = [];

for (let i = 1; i <= 100; i++) {
     ar.push({'id':i,'shape':shapes[Math.floor(Math.random() * shapes.length)], 'color':colors[Math.floor(Math.random() * colors.length)]
});
}

class App extends Component {
     state = { 
           cards:ar
      }

     render() { 
          return (
               <div className="game">
                    {this.state.cards.map(a => (
                         <Card
                              color={a.color}
                              shape={a.shape}
                              key={a.id}
                              id={a.id}
                              cards={ar}
                              handle={this.handle}
                         />
                    ))}
               </div>
          );
     }

     handle = (event) =>{
          if(clicked===false)
          {
               firstColor=event.target.style.backgroundColor
               firstShape=event.target.innerText
               firstId=parseInt(event.target.id)
               clicked=true 
          }
          else
          {
               secondColor=event.target.style.backgroundColor
               secondShape=event.target.innerText
               secondId=parseInt(event.target.id)

               if(secondColor===firstColor && secondShape===firstShape && firstId!==secondId){
                    ar.forEach(c=>{
                         if((c.color===firstColor&&c.shape===firstShape && c.id===firstId) || (c.color===secondColor&&c.shape===secondShape&& c.id===secondId))
                         {
                              c.color='white'
                         }
                    })
                    this.setState({cards:ar})
               }
               firstShape=''
               firstColor=''
               firstId=''
               secondColor=''
               secondShape=''
               secondId=''
               clicked=false  
          }
     }
}
 
export default App;
