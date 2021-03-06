import React from 'react';

const Card = (props) => {

    
    let classes = (props.favorite ===1) ? 'favorite active':'favorite';
    
    if(props.favorite === 1){
        classes = 'favorite active';
    } else{
        classes = 'favorite';
    }
    return (
        <div className="list">
            <div className="card"
                onClick = { ()=> { props.cardLink(props.company_id)} }>
                        <div className="thums">
                            <div className="img"></div>
                            <div className="logo"></div>
                        </div>
                        <div className="info">
                            <h3 className="hide">{props.recuit}</h3>
                            <div className="company hide">{props.company}</div>
                            <div className="rebate hide">채용보상금 {props.rebate.toLocaleString('en')} 원</div>
                        </div>
                        <div className="opt">
                            <div className="recom">
                                {(props.recom>0) && <span>{props.recom} 명 추천</span>}
                            </div>
                            <div className={classes}></div>
                            <div></div>
                        </div>
                    </div>
        </div>
    )
}

export default Card;