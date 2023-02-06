import React, { Component } from 'react'

export default class Book extends Component {
  render() {
    return (
      <>

                        <tr className='  bg-[#bfdbfe] P-2 gap-4'>
                            <th className=' my-2'>{this.props.titile}</th>
                            <th className=' my-2'>{this.props.author}</th>
                            <th className=' my-2'>{this.props.year}</th>
                        </tr>
                 
      
      </>
    )
  }
}

