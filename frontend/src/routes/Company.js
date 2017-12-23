import React, { Component } from 'react';
import Card from '../components/Card';
import axios from 'axios';

import './css/Company.css';

class Company extends Component {

    constructor(){
        super();

        this.state = {
            wanted : [
                
                
//                { company : 'GS SHOP', recuit : "보안 솔루션 담당자", rebate : 1000000, recom : 11, favorite : 0},
//                { company : '망고 플레이트', recuit : "Web Frontend", rebate : 1000000, recom : 36, favorite : 1},
//                { company : '메스프레소', recuit : "Android", rebate : 1000000, recom : 0, favorite : 0},
//                { company : '메스프레소', recuit : "IOS 개발자", rebate : 1000000, recom : 0, favorite : 0},
//                { company : '티몬(Timon)', recuit : "빅데이터 엔지니어", rebate : 1000000, recom : 0, favorite : 0},
//                { company : 'XHIFT', recuit : "웹 프론트엔드 개발자", rebate : 1000000, recom : 26, favorite : 0},
                
                // 이 내용은 없고 백엔드에서 데이터 받아오기
            ] 
        
        }
    }
   
    
    
    componentDidMount(){
        
        axios.get('http://localhost:4000/company')
            .then( (response)=>{
//                console.log(response.data);
            const data = this.state.wanted.concat(response.data.company);
            
            this.setState({
                wanted : data
            })
        });
            
    }

    

    render(){
        
        const { wanted } = this.state;
        const list = wanted.map(function(v){
            return (

                <Card key={v.id} company={v.name} recuit={v.recruit} rebate={v.rebate}
                         recom={v.recommendation} favorite={v.favorite}/>
                   );
        })

        return(
            <div className="container">
                {list}
            </div>
        );
    }
}

export default Company;