import React from "react";

interface StatsCardProps {
    cardData: {
        title: string,
        data: string,
        percentage: string
    };
}

const StatsCard: React.FC<StatsCardProps> = ({cardData: {title, data, percentage}}) => {
    return (
        <div className="card card-stats">
            <p className="card-title">{title}</p>
            <div className="card-content">
                <span>{data}</span>
                <p>{percentage}</p>
            </div>
        </div>
    );
};

export default StatsCard;