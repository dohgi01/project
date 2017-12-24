import React, { Component } from 'react';
import axios from 'axios';
import View from '../components/View';

import './css/Details.css';

class Details extends Component {

    
    constructor(){
        super();
        
        this.state = {
            details : null,
        }
        
    }
    
    componentDidMount(){ 
        const company_id = this.props.match.params.id;
        
        axios.get(`http://localhost:4000/company/${company_id}`)
            .then( (response)=>{
//                console.log(response.data);
            
            this.setState({details : response.data});
        });
    }
    
    render(){
        
        const { details } = this.state;
        
        return(
            <div className="details">
                <View recruit={details && details.recruit}
                    name={details && details.name}
                    favorite={details && details.favorite}/>
            </div>

        )
    }
}

export default Details;


