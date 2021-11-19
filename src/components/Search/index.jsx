import React,{Component} from 'react'
import axios from 'axios'

export default class Search extends Component {
  componentDidMount() {
    axios(`/api1/search/users?q=likang92`).then((data) => {
      console.log(data);
    })
  }
  
  render(){
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input type="text" placeholder="enter the name you search" />&nbsp;<button>Search</button>
        </div>
      </section>
    )
  }
}