import React, { Component } from 'react'
import Booklist from '../BookList/Booklist'
import { BsBook } from "react-icons/bs";

export default class Header extends Component {
  render() {
    return (
      <>
      <div className='BK'>  
<h1 className='  bg-yellow-300 w-[40%] py-3 my-4  m-auto flex justify-center items-center '>  <BsBook/> BookList     </h1>
<Booklist/>
</div>
      </>
    )
  }
}
