import React, { Component } from 'react'
import appStoreService from '../services/app-store-service'
import { Redirect } from 'react-router-dom'

class CreateApp extends Component {
  state={
    name: '', 
    price: 0,
    description: '',
    category: '',
    image: '',
  }
  handleOnChange = (event) => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (e) => {
    const { name, image, price, category, description } = this.state
    e.preventDefault()
    appStoreService.addOneApp({
      name,
      image,
      price,
      category,
      description,
      redirect: false
    })
    .then(response => {
      // console.log(response)
      this.setState({
        redirect: true
      })
    })
    .catch(error => console.log(error))
  }
  render() {
    const { name,redirect, image, price, category, description } = this.state
    return (
      <>
      <h1 className="">Create New App</h1>
      <div className="container form-control">
      <form className onSubmit={this.handleSubmit}>
        <label htmlFor="name" className="">Name</label>
          <input type="text" name="name" value={name} id="name" onChange={this.handleOnChange} className="form-control bordered-warning"></input>

        <label htmlFor="image" className="">Image</label>
          <input type="text" name="image" value={image} onChange={this.handleOnChange} id="image" className="form-control"></input>

        <label htmlFor="price" className="">Price</label>
          <input type="number" name="price" value={price} onChange={this.handleOnChange} id="price" className="form-control"></input>

        <label htmlFor="description" className="">Description</label>
          <textarea type="text" name="description" value={description} onChange={this.handleOnChange} id="description" rows='5' cols= '5' className="form-control "></textarea>

        <label htmlFor="category" className="">Category</label>
          <select value={category} name="category" onChange={this.handleOnChange} className="form-control">
            <option value=""></option>
            <option value="photografy">Photografy</option>
            <option value="developer-tools">Developer-Tools</option>
            <option value="game">Game</option>
            <option value="bussiness">Bussiness</option>
          </select>

          <button type="submit" className="btn btn-success btn-lg mt-5 mb-2">Add New App</button>
      </form>
      {redirect ? <Redirect to= '/apps'/>: null}
      </div>
      </>
    )
  }
}
export default CreateApp