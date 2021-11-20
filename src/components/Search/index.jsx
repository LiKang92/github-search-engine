import React,{Component} from 'react'
import axios from 'axios'

export default class Search extends Component {
  

  search = () => {
    const { updateSearch} = this.props
    updateSearch({
      isFirst:false, 
      isLoading:true
    })
    const {value} = this.inputKey
    axios.get(`http://api.github.com/search/users?q=${value}`).then(
      (response) => {
        updateSearch({
          users:response.data.items,
          isLoading:false
        })

      },
      (error) => {
        updateSearch({
          isLaoding:false,
          error:error.message
        })
      }
    )
  }
  
  press = (e) => {
    if(e.key === 'Enter'){
      this.search()
    }
  }

  render(){
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input onKeyUp={this.press} ref={c => this.inputKey = c} type="text" placeholder="enter the name you search" />&nbsp;<button onClick={this.search}>Search</button>
        </div>
      </section>
    )
  }
}