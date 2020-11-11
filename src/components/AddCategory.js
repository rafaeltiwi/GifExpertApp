import React, { useState } from 'react'
import '../index.css'
// import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('');

    const handleChange = (e) =>{

        setInputValue(e.target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        setCategories( cate => [ inputValue , ...cate] )
        setInputValue('')
       
    }

    const vaciar = () =>{

        setCategories([]);

    }

    return (
        <>
        <form onSubmit={handleSubmit}>

        <input 
            type="text"
            value={inputValue}
            onChange={handleChange}
            className="form-input"
        />
        </form>
        <button className="btn submit" onClick={handleSubmit} >buscar</button>
        <button className="btn" onClick={vaciar} >vaciar</button>
        </>
        
    )
}

