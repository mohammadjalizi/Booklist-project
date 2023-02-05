import React, { Component } from 'react'

export default class Book extends Component {
  render() {
    return (
      <>
    <thead>
                        <tr>
                            <th>{prosp.titile}</th>
                            <th>{this.props.author}</th>
                            <th>Year</th>
                        </tr>
                    </thead>
      
      </>
    )
  }
}
