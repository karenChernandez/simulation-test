import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';



class Dashboard extends Component{
    constructor(){
        super();

        this.state={
            allBoots:[]
        }
    }
componentDidMount(){
    axios.get('/api/boots').then(results =>{
        console.log('RESULTS', results)
        this.setState({allBoots:results.data})
    })
}
    handleDelete(id){
        axios.delete(`/api/boots/${id}`)
        .then(res=>{
            console.log("HandleDelete", res)
            this.setState({allBoots:res.data})
        })
    }

    handleEdit(){}

    
render(){
    console.log('what is state?', this.state.allBoots)
    let mappedBoot= this.state.allBoots.map(boot=>{
        return <div key={boot.id}>
            <h1>{boot.name}</h1>
            <h1>{boot.price}</h1>
            <img src={boot.boot_image}/>
            <button onClick={()=>this.handleDelete(boot.id)}>Delete</button>
            <Link to={`/Edit/${boot.id}`}>
            <button>Edit</button>
            </Link>
            
        </div>
    })
    return(<div>
        <h1>This is the Dashboard!!!</h1>
        {mappedBoot}
    </div>
    )
}
}
export default Dashboard;