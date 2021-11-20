import React, {Component} from 'react'
import './App.css'
import Search from './components/Search'
import Cards from './components/Cards'

export default class what extends Component{
  
  state = {
    users:[],
    isFirst:true,
    isLoading:false,
    error:''
  }

  updateSearch = (updateObj) => {
    this.setState(updateObj)
  }


  render(){
    return (
      <div className="container">
        <Search updateSearch={this.updateSearch}/>
        <Cards {...this.state}/>
      </div>
    )
  }
}