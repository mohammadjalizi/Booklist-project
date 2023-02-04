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
  render() {
    return (
   <>
  <form  className='  bg-orange-500  ' autocomplete="off" onSubmit={this.submitHandler}>
                    <div className="form-group">
                        <label for="title">Title</label>
                        <input type="text" id="title" className="form-control" onChange={this.titleHandler} value={this.state.title} />
                    </div>

                    <div className="form-group">
                        <label for="author">Author</label>
                        <input type="text" id="author" className="form-control" onChange={this.authorHandler} value={this.state.author} />
                    </div>

                    <div className="form-group">
                        <label for="year">Year</label>
                        <input type="text" id="year" className="form-control" onChange={this.yearHandler} value={this.state.year} />
                    </div>
                    <input type="submit" value="Add Book" className="btn btn-warning btn-block add-btn" />
                </form>
                <table class="table table-striped mt-5 text-center">
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
