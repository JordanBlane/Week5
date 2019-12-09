import React from "react";
import "./App.css";

var change = false;

class Menu extends React.Component {
  state = {
    fooditems: [
      { name: "Apple", type: "fruit", cost: "£1" },
      { name: "Chips", type: "Awesome", cost: "50p" },
      { name: "Chicken", type: "Meat", cost: "£2" }
    ],
    username: ''
  };

  x = () => {
    if(change == true){
      this.setState({
        fooditems:[
          { name: "Pear", type: "fruit", cost: "£1.50" },
          { name: "Pizza", type: "Awesome", cost: "50p" },
          { name: "Beef", type: "Meat", cost: "£200" }
        ],
        username: this.refs.a.value
      })
      change = false;
    }else{
      this.setState({
        fooditems:[
          { name: "Apple", type: "fruit", cost: "£1" },
          { name: "Chips", type: "Awesome", cost: "50p" },
          { name: "Chicken", type: "Meat", cost: "£2" }
        ],
        username: this.refs.a.value
      })
      change = true;
    }
  }

  render() {
    return (
      <div className="Menu">
        <h1>Tom's Cafe</h1>
        <h2>Food Items on the Menu</h2>
        <FoodItem
          name={this.state.fooditems[0].name}
          type={this.state.fooditems[0].type}
          cost={this.state.fooditems[0].cost}
        />
        <FoodItem
          name={this.state.fooditems[1].name}
          type={this.state.fooditems[1].type}
          cost={this.state.fooditems[1].cost}
        />
        <FoodItem
          name={this.state.fooditems[2].name}
          type={this.state.fooditems[2].type}
          cost={this.state.fooditems[2].cost}
        />
        <input ref="a"type="text"></input>
        <button onClick={this.x}>Click Me</button>
      </div>
    );
  }
}
function FoodItem(props) {
  return (
    <div className="FoodItem">
      <h2>{props.name}</h2>
      <h2>{props.type}</h2>
      <h2>{props.cost}</h2>
    </div>
  );
}
export default Menu;