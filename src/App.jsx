import React, {Component} from 'react'
import './App.css'
import Search from './components/Search'
import Cards from './components/Cards'

export default class what extends Component{
  


  render(){
    return (
      <div className="container">
        <Search/>
        <Cards/>
      </div>
    )
  }
}