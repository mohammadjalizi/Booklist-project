import React, { Component } from 'react'

export default class Book extends Component {
  render() {
    return (
      <>

                        <tr className='  '>
                            <th className=' m'>{this.props.titile}</th>
                            <th className=' m'>{this.props.author}</th>
                            <th className=' m-4'>{this.props.year}</th>
                        </tr>
                 
      
      </>
    )
  }
}

