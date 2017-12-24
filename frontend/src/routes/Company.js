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
            ],
            type : '전체'
        
        }
        
        this.handleClick = this.handleClick.bind(this);
        this.handleCategory = this.handleCategory.bind(this);
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
    
    handleClick(company_id){
        console.log(company_id);
        
        this.props.history.push(`/company/${company_id}`);//뒤로가기를 위해 history 쌓아놓기)
    }

    handleCategory(e){
        this.setState({type:e.target.innerHTML});
    }

    
    render(){
        const { wanted, type } = this.state;
        
        const newArray = wanted.filter( (v) => {
            if( type === '전체'){
                return v;
            }
            return v.type === type;

        })
        
    
        console.log(newArray);
        
        
        const list = wanted.map( (v) => {
            return (

                <Card
                    cardLink = {this.handleClick}
                    key={v.id}
                    company_id ={v.id}
                    
                    company={v.name} recuit={v.recruit} rebate={v.rebate}
                    recom={v.recommendation} favorite={v.favorite}/>
                   );

        })

        return(
            <div>
                <ul className="category">
                    <li onClick={this.handleCategory}>전체</li>
                    <li onClick={this.handleCategory}>프론트엔드개발자</li>
                    <li onClick={this.handleCategory}>백엔드개발자</li>
                    <li onClick={this.handleCategory}>앱개발자</li>
                </ul>
                <div className="container">
                    {list}
                </div>
           </div>
        );
    }
}

export default Company;


