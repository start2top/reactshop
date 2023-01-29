import React, { Component } from 'react';
import Header from './header';
import Footer from './footer';
import Items from './items';
import Categories from './categories';
import ShowFullItem from './showFullItem';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
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
          category: 'tables',
          price: '69.99$',
        },
        {
          id: 3,
          title: 'Диван',
          img: 'sofa.jpg',
          desc: 'Product description',
          category: 'sofas',
          price: '119.99$',
        },
        {
          id: 4,
          title: 'Лампа',
          img: 'lamp.jpg',
          desc: 'Product description',
          category: 'lamps',
          price: '29.99$',
        },
        {
          id: 5,
          title: 'Кресло',
          img: 'armchair.jpg',
          desc: 'Product description',
          category: 'armchairs',
          price: '44.99$',
        }
      ],
      showFullItem: false,
      fullItem: {}
    }
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)


  }
  
  render()  {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
        <Categories chooseCategory={this.chooseCategory}/>
        <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder}/>

        {this.state.showFullItem && <ShowFullItem onShowItem={this.onShowItem} item={this.state.fullItem} onAdd={this.addToOrder}/>}
        <Footer />
      </div>
    );

    
  }

  onShowItem(item) {
    this.setState({fullItem: item})
    this.setState({showFullItem: !this.state.showFullItem})
  }

  chooseCategory(category) {
    if (category === 'all') {
      this.setState({currentItems : this.state.items})
      return 
    }
    
    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    })
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
