import React from 'react';
import Product from '../models/Product';

interface InputProps {
    label: string;
    placeholder?: string;
    name: string;
    type: 'text' | 'number' | 'email' | 'password' | 'select';
    min?: number;
    max?: number;
    pattern?: string;
    value: string;
    setValue: (value: string) => void;
}

const Input: React.FC<InputProps> = (
    {
        label = 'Label',
        placeholder,
        name,
        type,
        min,
        max,
        pattern,
        value,
        setValue }) => {

    return (
        <div className="field">
            <label htmlFor={name}>{label}</label>
            <input
                required
                placeholder={placeholder ? placeholder : ''}
                id={name}
                name={name}
                type={type}
                minLength={min ? min : undefined}
                maxLength={max ? max : undefined}
                pattern={pattern ? pattern : undefined}
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
        </div>
    );
};

export default Input;
