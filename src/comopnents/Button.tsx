import React from 'react';

interface BtnProps {
    style?: React.CSSProperties
    small?: boolean;
    outline?: boolean;
    text: string;
    link?: boolean;
    type: 'button' | 'submit' | 'reset';
    onClick?: () => void;
}

const Button: React.FC<BtnProps> = ({
        style,
        type,
        link,
        small,
        outline,
        text,
        onClick = () => {}
    }) => {

    return (
        <button style={style} onClick={onClick} type={type} className={`${small ? 'btn--small' : ''} ${outline ? 'btn--outline' : ''} ${link ? 'btn--link' : ''}`}>
            {text}
        </button>
    );
};

export default Button;