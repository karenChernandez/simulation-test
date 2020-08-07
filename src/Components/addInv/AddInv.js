import React, { Component } from 'react';
import axios from 'axios';


class AddInv extends Component{
    constructor(){
        super()

        this.state={
            productName: '',
            price: '',
            image: ''
            
        }
    }
    handleImage(img){
        this.setState({image:img})
    }
    handleProductName(itemName){
        this.setState({productName:itemName})
    }

    handlePrice(newPrice){
        this.setState({price:newPrice})
    }
    handleAdd(){
        axios.post('/api/boots',{
            image:this.state.image,
            productName:this.state.productName,
            price:this.state.price
        }).then(res=>{
            console.log('What is RES!', res)
            alert("Item has been Added!")
        })
    }
    handleEdit(){
        axios.put(`/api/boots/${this.state.image}`, {
            image: this.state.image,
            productName: this.state.productName,
            price: this.state.price
        }).then(res=>{
            alert('it has been Updated!')
        })
    }

    


    render(){
        return(<div>

            <h1>Image URL:</h1>
            <input placeholder="Image URL" onChange={(event)=>this.handleImage(event.target.value)}></input>
            <h1>Product Name:</h1>
            <input placeholder="Product Name" onChange={(event)=>this.handleProductName(event.target.value)}></input>
            <h1>Price:</h1>

            <input placeholder="$" onChange={(event)=>this.handlePrice(event.target.value)}></input>
           
           { this.props.handleAdd ?
           <button onClick={()=>this.handleAdd()}>Add Inventory</button>
           :
            <button onClick={()=>this.handleEdit()}>Edit</button> }
        </div>
        );
    }
}
export default AddInv;