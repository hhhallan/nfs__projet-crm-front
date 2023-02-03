import React from "react";

interface StatsCardProps {
   title?: string
   children: React.ReactNode
}

const Card: React.FC<StatsCardProps> = ({ title, children }) => {
    return (
       <div className="card" style={{ 'width': '100%' }} >
            {title && <h4 className="card-title" style={{paddingBottom: 8}}>{title}</h4>}
            <div className="card-content" style={{display: 'flex', flexDirection: 'column', gap: 16}}>
                {children}
            </div>
        </div>
    );
};

export default Card;