import React, {Component} from 'react'

export default class Cards extends Component {

  render(){
    
    const {users, isLoading, isFirst, error} = this.props
    return (
      <div className="row">
        {
          isFirst?<h1>Welcome</h1>:
          isLoading?<h3>Searching</h3>:
          error?<h3>{error}</h3>:
          users.map((user) => {
            return (
              <div key={user.id} className="card">
                <a href={user.html_url} target="_blank">
                  <img src={user.avatar_url} style={{ width: '100px' }} />
                </a>
                <p className="card-text">{user.login}</p>
              </div>
            )
          })
        }
      </div>
    )
  }
}