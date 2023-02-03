import React, {useState} from 'react';
import defaultImage from '../../assets/img/defaultImage.jpg';

interface ProductCardProps {
    cardData: {
        title: string,
        price: string,
        image: string
    };
}

const ProductCard: React.FC<ProductCardProps> = ({cardData: {title, price, image}}) => {
   const [src, setSrc] = useState(defaultImage);

    return (
        <div>
            <div className="card">
                <img src={defaultImage}
                     onLoad={() => setSrc(image)}
                     onError={() => setSrc(defaultImage)}
                     alt={title}
                />
                <div className="card-content">
                    <span>{price}</span>
                    <span>{title}</span>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;