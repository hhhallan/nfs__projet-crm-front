import React from 'react';
import Product from '../models/Product';

interface InputProps {
    field: string,
    type: string,
    data?: any[],
}

const Input = ({field = "name", type = "text", data}:InputProps) => {
    // Mets la 1e lettre en maj
    const label = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

    // Enlève les accents
    const input = (str: string) =>
        str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(' ', '-');
    
    return (type === "select") ? 
    (
        <div className="form__group">
            <label htmlFor={input(field)}>{label(field)}</label>
            <select name={field}>
                {data.map(data => (
                    <option value={data.first_name}>{data.first_name}</option>
                ))}
            </select>

        </div>
    ) :
    (
        <div className="form__group">
            <input required placeholder={label(field)} name={input(field)} type={type}/>
            <label htmlFor={input(field)}>{label(field)}</label>
        </div>
    );
};

export default Input;