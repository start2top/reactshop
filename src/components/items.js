import React, { Component } from 'react'
import Item from './item'

export default class Items extends Component {

    render () {
    return (
        <div>
            <main>
                {this.props.items.map(el => (
                    <Item key={el.id} item={el} onAdd={this.props.onAdd}/>
                ))}
            </main>
        </div>
      )
 }
}
