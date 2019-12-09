import React, { Component } from 'react'
import appStoreService from '../services/app-store-service'
import { Link }from 'react-router-dom'


class AppList extends Component {
  state = {
    apps: [],
  }
  componentDidMount(){
    appStoreService.getAllApps()
    .then(response =>{
      this.setState({
        apps: response.data.listApps
      })
    })
  }
  handleDeleteClick = (id) => {
    const { apps } = this.state
    appStoreService.deleteOneApp(id)
      .then(()=> {
        const filteredApps = apps.filter((singleApp) => {
          return singleApp._id !== id
        })
          this.setState({
            apps: filteredApps
          })
      })
  }
  render(){
    const{ apps } = this.state
    return (
      <div className="">
        <h1>App List</h1>
        <Link to='apps/createApp'><button className="btn btn-primary mb-3"> Create New App</button></Link>
        <div className="container d-flex">
        <div className="row justify-content-center">
          {apps.length > 0 ? apps.map((app)=> {
            return (
              <div className="card m-3 w-40" key={app._id}>
                <article>
                  <div className="card-header">
                    <h3>{app.name}</h3>
                  </div>
                  <div className="card-body">         
                    <img src={app.image} className="w-70 h-40" alt={app.name}/>
                    <p className="mt-3">Price: {app.price} $</p>
                    <p>Category: {app.category}</p>
                  </div>
                  <button type="button" className="btn btn-danger mb-3 ml-2" onClick={()=>{
                    this.handleDeleteClick(app._id)
                  }}> Delete </button>
                  <Link to={`/apps/detail/${app._id}`}><button type="button" className="btn btn-success ml-2 mb-3">Detail</button></Link>
                  <Link to={`/apps/updateApp/${app._id}`}><button type="button" className="btn btn-warning mr-2 ml-2 mb-3">Update</button></Link>
                </article>
              </div>
            )
          }): <p>Loading...</p>}
        </div>
  </div>
      </div>
    )
  }
}

export default AppList
