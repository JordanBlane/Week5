import React from 'react';
import './App.css';

class Menu extends React.Component{
  DefineFoods ={
    items:[
      {name:'sandwich', price:'£1.00'},
      {name:'roll', price:'£13.37'},
      {name:'salad', price:'£999.99'}
    ]
  }
  render(){
    return(
      <div>
        <FoodItem cost={this.DefineFoods.items[0].price} item={this.DefineFoods.items[0].name} />
        <FoodItem cost={this.DefineFoods.items[1].price} item={this.DefineFoods.items[1].name} />
        <FoodItem cost={this.DefineFoods.items[2].price} item={this.DefineFoods.items[2].name} />
      </div>
    )
  }
}

function FoodItem(Food){
  return(
    <div className = 'FoodItem'>
      <p> {Food.cost} | {Food.item}</p>
    </div>
  )
}

export default Menu;