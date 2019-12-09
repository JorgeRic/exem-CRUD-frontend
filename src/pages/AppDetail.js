import React, { Component } from 'react'
import appStoreService from '../services/app-store-service'
import { Link }from 'react-router-dom'
import Card from '../component/Card'

 class AppDetail extends Component {
   state={
     app: []
   }
   componentDidMount(){
     const {id} = this.props.match.params
     appStoreService.getOneApp(id)
     .then((response)=> {
       this.setState({
         app: response.data
        })
      })
     .catch((error)=>{
       console.log(error)
     })
   }
   goToPreviousPage = () => {
     this.props.history.goBack()
   }
  render() {
    const { app } = this.state
    
    return (
      <div className="container mt-3" key={app._id}>
        <Card app = {app}/>    
        <Link to='/apps'><button type="button" className="btn btn-lg btn-primary">List of Apps</button></Link>
      </div>
    )
  }
}
export default AppDetail