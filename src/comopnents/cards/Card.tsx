import React from "react";

interface StatsCardProps {
   title?: string
   children: React.ReactNode
}

const Card: React.FC<StatsCardProps> = ({ title, children }) => {
    return (
       <div className="card" style={{ 'width': '100%' }} >
            {title && <h4 className="card-title-empty" style={{paddingBottom: 8}}>{title}</h4>}
            <div className="card-content-empty">
                {children}
            </div>
        </div>
    );
};

export default Card;