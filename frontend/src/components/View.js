import React from 'react';

const View = (props) => {
    return (
        <div>
                <div className="left">
                    <div className="photo"></div>
                    <div className="desc">
                        <div className="desc_info">
                            <h2>{props.recruit}</h2>
                            <div>{props.name}</div>
                        </div>
                        <div className="desc_body">{props.name}</div>
                    </div>
                </div>
                <div className="right">{props.favorite} 명 추천 </div>
        </div>
    )
}

export default View;