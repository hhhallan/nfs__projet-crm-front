import React from 'react';

interface BtnProps {
    small?: boolean;
    outline?: boolean;
    text: string;
    link?: boolean;
    type: 'button' | 'submit' | 'reset';
}

const Button: React.FC<BtnProps> = ({
        type,
        link,
        small,
        outline,
        text
    }) => {

    return (
        <button type={type} className={`${small ? 'btn--small' : ''} ${outline ? 'btn--outline' : ''} ${link ? 'btn--link' : ''}`}>
            {text}
        </button>
    );
};

export default Button;