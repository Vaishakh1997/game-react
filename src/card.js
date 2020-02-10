import React, { Component } from "react";

class Card extends Component {
     state={

     }

     render() {
          let bgcolor = this.props.color;
          return (
               <div style={{ backgroundColor: bgcolor }} 
                    className="card"
                    id={this.props.id}
                    onClick= {this.props.handle}
               >
                    <p>{this.props.shape}</p>
               </div>
          );
     }
}

export default Card;

