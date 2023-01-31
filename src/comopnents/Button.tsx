import React from 'react';

interface BtnProps {
    small?: boolean,
    outline?: boolean,
    text?: string,
    link?: boolean,
    type?: string
}

const Button = ({link, type = "button", small, outline, text = "Button"}:BtnProps) => {
    return (
        <button type={type} className={`${small ? 'btn--small' : ''} ${outline ? 'btn--outline' : ''} ${link ? 'btn--link' : ''}`}>
            {text}
        </button>
    );
};

export default Button;