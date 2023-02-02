import React from 'react';

interface InputProps {
    field: string,
    type: string,
}

const Input = ({field = "name", type = "text"}:InputProps) => {
    // Mets la 1e lettre en maj
    const label = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

    // Enlève les accents
    const input = (str: string) =>
        str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');


    return (
        <div className="form__group">
            <input required placeholder={label(field)} type={type}/>
            <label htmlFor={input(field)}>{label(field)}</label>
        </div>
    );
};

export default Input;