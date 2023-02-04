import React, { Component } from 'react'
import Booklist from '../BookList/Booklist'
import { BsBook } from "react-icons/bs";

export default class Header extends Component {
  render() {
    return (
      <>
<h1>  <BsBook/> BookList     </h1>
<Booklist/>

      </>
    )
  }
}
