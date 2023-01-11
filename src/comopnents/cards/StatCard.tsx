import React from 'react';

interface StatsProps {
    title?: string,
    data?: string,
    percentage?: string
}

const StatCard = ({data = "100k", percentage = "+100%", title = "Title"}:StatsProps) => {
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

export default StatCard;