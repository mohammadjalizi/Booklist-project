import React, { Component } from 'react'

export default class Booklist extends Component {

    constructor(props){
super(props)


this.state={

books:[],
titile:'',
author: '',
year: '',


}


    }
    submitHandler(event){
event.preventDefault()
let {titile,author,year}=this.state

 this.setState({


 })
    }
    titleHandler(event){
this.setState({
    titile:event.target.value
})
g
    }
    authorHandler(event){
        this.setState({
            author:event.target.value
        })
    }
    yearHandler(event){

    }
  render() {
    return (
   <>
  <form  className='  bg-orange-500 p-6 w-2/5 m-auto  ' autocomplete="off" onSubmit={this.submitHandler}>
                    <div className=" my-2">
                        <label for="title">Title</label>
                        <input type="text"  className=" block w-full rounded-full p-2" onChange={this.titleHandler} value={this.state.title} />
                    </div>

                    <div className="my-2">
                        <label for="author">Author</label>
                        <input type="text"  className=" block w-full rounded-full" onChange={this.authorHandler} value={this.state.author} />
                    </div>

                    <div className="my-2">
                        <label for="year">Year</label>
                        <input type="text"  className=" block w-full  rounded-full" onChange={this.yearHandler} value={this.state.year} />
                    </div>
                    <input type="submit" value="Add Book" className="btn btn-warning btn-block add-btn" />
                </form>
                <table class=" w-2/5 m-auto my-3">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Year</th>
                        </tr>
                    </thead>
                    <tbody id="book-list">
                      
                    </tbody>
                </table>


   
   
   
   </>
    )
  }
}
