import React, { Component } from 'react'

export default class Book extends Component {
  render() {
    return (
      <>

                        <tr>
                            <th>{this.props.titile}</th>
                            <th>{this.props.author}</th>
                            <th>{this.state.year}</th>
                        </tr>
                 
      
      </>
    )
  }
}

