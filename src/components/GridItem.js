import React from 'react'
import '../index.css';

export const GridItem = ({title,id,url}) => {
    
    return (
        <div className="card">
            <img src={url} alt={title} />
            <div className="container">
                <h4  >{title}</h4>
            </div>
           
        </div>
    )
}
