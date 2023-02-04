import React, { Component } from 'react'
import Booklist from '../BookList/Booklist'
import { BsBook } from "react-icons/bs";

export default class Header extends Component {
  render() {
    return (
      <>
      <div className='BK'>  
<h1 className=' flex justify-center items-center '>  <BsBook/> BookList     </h1>
<Booklist/>
</div>
      </>
    )
  }
}
