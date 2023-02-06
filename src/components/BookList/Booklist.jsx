import React, { Component } from 'react'
import Book from './Book'
export default class Booklist extends Component {

    constructor(props){
super(props)


this.state={

books:[],
titile:'',
author: '',
year: '',


}
this.titleHandler=this.titleHandler.bind(this)
this.authorHandler=this.authorHandler.bind(this)
this.yearHandler=this.yearHandler.bind(this)
this.submitHandler=this.submitHandler.bind(this)

    }
    submitHandler(event){
event.preventDefault()
let {titile,author, year}=this.state

if(titile && author&& year){
let NewBook={
id:this.state.books.length+1,
titile,
author,
year


}
this.setState({

    books:[...this.state.books,NewBook]

}   
)
}
    }
    titleHandler(event){
this.setState({
    titile:event.target.value
})

    }
    authorHandler(event){
        this.setState({
            author:event.target.value
        })
    }
    yearHandler(event){
        this.setState({
            year:event.target.value
        })
    }
  render() {
    return (
   <>
  <form  className='  bg-orange-500 p-6 w-2/5 m-auto  '    autocomplete="off"  onSubmit={this.submitHandler}>
                    <div className=" my-2">
                        <label for="title">Titlela </label>
                        <input type="text"  className=" block w-full rounded-full p-2" onChange={this.titleHandler} value={this.state.titile} />
                    </div>

                    <div className="my-2">
                        <label for="author">Author</label>
                        <input type="text"  className=" block w-full rounded-full" onChange={this.authorHandler} value={this.state.author} />
                    </div>

                    <div className="my-2">
                        <label for="year">Year</label>
                        <input type="text"  className=" block w-full  rounded-full" onChange={this.yearHandler} value={this.state.year} />
                    </div>
                    <input type="submit" value="Add Book" className=" bg-gradient-to-r from-teal-200 to-teal-500 p-2  rounded-3xl w-full  cursor-pointer"/>
                </form>
                <table className=" w-2/5 m-auto my-3">
                    <thead>
                        <tr className=' bg-gradient-to-r from-cyan-500 to-blue-500 p- '>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Year</th>
                        </tr>
                    </thead>
                    <tbody  className='  bg-red-500  '>
                      {this.state.books.map(book=>(

                        <Book className="my-4" {...book} key={book}/>
                      ))}
               
                    </tbody>
                </table>


   
   
   
   </>
    )
  }
}

// 