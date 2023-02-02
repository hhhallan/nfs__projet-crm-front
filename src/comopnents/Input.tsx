import React from 'react';

interface InputProps {
    field: string;
    type: 'text' | 'email' | 'password' | 'select';
    placeholder?: string;
    value: string;
    setValue: (value: string) => void;
}
// Mets la 1e lettre en maj
const label = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

// Enlève les accents
const input = (str: string) => str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

const Input: React.FC<InputProps> = ({ placeholder, field = 'field', type, value, setValue }) => {
    return (
        <div className="form__group">
            <input
                required
                placeholder={placeholder ? placeholder : ''}
                type={type}
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <label htmlFor={input(field)}>{label(field)}</label>
        </div>
    );
};

export default Input;
