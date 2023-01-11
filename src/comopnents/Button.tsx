import React from 'react';

interface BtnProps {
    small?: boolean,
    outline?: boolean,
    text?: string
}

const Button = ({small, outline, text = "Button"}:BtnProps) => {
    return (
        <button type="button" className={`${small ? 'btn--small' : ''} ${outline ? 'btn--outline' : ''}`}>
            {text}
        </button>
    );
};

export default Button;