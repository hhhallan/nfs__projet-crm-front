import React, {useState} from 'react';
import defaultImage from '../../assets/img/defaultImage.jpg';
import Product from '../../models/Product';

interface ProductCardProps {
    product: Product
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
   const [src, setSrc] = useState(defaultImage);

    const ToPrice = (prix: number): string => {
        const formattedPrice = prix.toFixed(2).replace(".", ",");
        const formattedPriceWithSpaces = formattedPrice.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        return `${formattedPriceWithSpaces} €`;
    }

    return (
        <div>
            <div className="card">
                <img src={src}
                     onLoad={() => setSrc(product.image!)}
                     onError={() => setSrc(defaultImage)}
                     alt={product.name}
                />
                <div className="card-content">
                    <div style={{'display': 'flex', flexDirection: 'column', gap: '12px', width: '100%'}}>
                        <span style={{fontSize: 18}}>{product.name?.substring(0,25) + (product.name!.length > 25 ? '...' : '')}</span>
                        <div style={{'display': 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%'}}>
                            <span style={{fontSize: 12}}>{ToPrice(product.price!)}</span>
                            <span style={{fontSize: 12}}>{product.plateforme}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;