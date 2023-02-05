import React, { Component } from 'react'

export default class Book extends Component {
  render() {
    return (
      <>
    <thead>
                        <tr>
                            <th>{prosp.titile}</th>
                            <th>{this.props.author}</th>
                            <th>{this.state.year}</th>
                        </tr>
                    </thead>
      
      </>
    )
  }
}
