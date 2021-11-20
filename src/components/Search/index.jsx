import React,{Component} from 'react'
import axios from 'axios'

export default class Search extends Component {
  

  search = () => {
    const {value} = this.inputKey
    axios.get(`http://api.github.com/search/users?q=${value}`).then(
      (response) => {
        console.log(response.data);
      },
      (error) => {
        console.log(error);
      }
    )
  }
  
  render(){
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input ref={c => this.inputKey = c} type="text" placeholder="enter the name you search" />&nbsp;<button onClick={this.search}>Search</button>
        </div>
      </section>
    )
  }
}