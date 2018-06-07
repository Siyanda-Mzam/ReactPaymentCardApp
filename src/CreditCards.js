import React, { Component } from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import 'react-credit-cards/lib/styles.scss'

class CreditCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: '1234 5678 9101 6554',
      name: 'Siyabonga',
      expiry: '07/22',
      cvc: '222'

    }
  }
  render() {
    const inlineStyling = {
      display: 'block'
    }
    return (
      <div>
        <form className='grid-container'>
          <div>
            <label style={inlineStyling} >Number</label>
            <input className='number' type="number" name="fname" />
          </div>
          <div>
            <label>Name</label>
            <input className='name' type="text" name="fname" />
          </div>
          <div>
            <label>Expiry</label>
            <input className='expiry' type="text" name="fname" />
          </div>
          <div>
            <label>CCV</label>
            <input className='ccv' type="text" name="fname" />
          </div>
        </form>
        <Cards
          number={this.state.number}
          name={this.state.name}
          expiry={this.state.expiry}
          cvc={this.state.cvc}
          focused={this.state.focused}
        />
      </div>
    )
  }
}

export default CreditCard;