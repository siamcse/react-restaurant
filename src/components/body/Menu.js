import React from 'react';
import { Component } from 'react';
import DISHES from '../../data/Dishes';
import DishDetails from './DishDetails';
import MenuItem from './MenuItem';

class Menu extends Component{
    state = {
        dishes: DISHES,
        selectedDish: null
    }
    onDishSelect = dish =>{
        this.setState({selectedDish:dish});
    }
    render(){
        const menu = this.state.dishes.map(item =>{
            return (
                
                <MenuItem dish={item} key={item.id} dishSelect={this.onDishSelect}></MenuItem>
            )
        });
        
        let dishDetail = null;
        
        if(this.state.selectedDish){
            dishDetail = <DishDetails dish={this.state.selectedDish}></DishDetails>
        }
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-6'>
                        {menu}
                    </div>
                    <div className='col-6'>
                        {dishDetail}
                    </div>
                </div>
            </div>
        )
    }
}


export default Menu;