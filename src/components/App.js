import React, { Component } from 'react';
import Header from './header';
import Footer from './footer';
import Items from './items';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      items: [
        {
          id: 1,
          title: 'Стул',
          img: 'chair.jpg',
          desc: 'Product description',
          category: 'chairs',
          price: '49.99$'
        },
        {
          id: 2,
          title: 'Стол',
          img: 'table.jpg',
          desc: 'Product description',
          category: 'chairs',
          price: '69.99$',
        },
        {
          id: 3,
          title: 'Диван',
          img: 'sofa.jpg',
          desc: 'Product description',
          category: 'chairs',
          price: '119.99$',
        },
        {
          id: 4,
          title: 'Лампа',
          img: 'lamp.jpg',
          desc: 'Product description',
          category: 'chairs',
          price: '29.99$',
        },
        {
          id: 5,
          title: 'Кресло',
          img: 'armchair.jpg',
          desc: 'Product description',
          category: 'chairs',
          price: '44.99$',
        }
      ]
    }
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)

  }
  
  render()  {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
        <Items items={this.state.items} onAdd={this.addToOrder}/>
        <Footer />
      </div>
    );

    
  }

  deleteOrder(id) {
    this.setState({orders: this.state.orders.filter(el => el.id !== id)})
  }

  addToOrder(item) {
    let isInArray = false
    this.state.orders.forEach(el => {
      if(el.id === item.id) 
      isInArray = true
    })
    if (!isInArray)
    this.setState({orders: [...this.state.orders, item]}, () => {
    })
  }
}

export default App;
