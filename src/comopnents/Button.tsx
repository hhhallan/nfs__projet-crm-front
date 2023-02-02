import React from 'react';

interface BtnProps {
    small?: boolean,
    outline?: boolean,
    text?: string,
    link?: boolean
}

const Button: React.FC<BtnProps> = ({link, small, outline, text = "Button"}) => {
    return (
        <button className={`${small ? 'btn--small' : ''} ${outline ? 'btn--outline' : ''} ${link ? 'btn--link' : ''}`}>
            {text}
        </button>
    );
};

export default Button;