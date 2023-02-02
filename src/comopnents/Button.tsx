import React from 'react';

interface BtnProps {
    small?: boolean;
    outline?: boolean;
    text: string;
    link?: boolean;
    type: 'button' | 'submit' | 'reset';
    onClick?: () => void;
}

const Button: React.FC<BtnProps> = ({
        type,
        link,
        small,
        outline,
        text,
        onClick = () => {}
    }) => {

    return (
        <button onClick={onClick} type={type} className={`${small ? 'btn--small' : ''} ${outline ? 'btn--outline' : ''} ${link ? 'btn--link' : ''}`}>
            {text}
        </button>
    );
};

export default Button;