import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext';
import Breadcrum from '../Components/Breadcrums/Breadcrum';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DesciptionBox from '../Components/DescriptionBox/DesciptionBox';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';
import NewCollections from '../Components/NewCollections/NewCollections';

const Product = () => {
    const { all_product } = useContext(ShopContext);
    const { productId } = useParams();
    const product = all_product.find((e) => e.id === Number(productId));

    return (
        <div>
            {product && (
                <>
                    <Breadcrum product={product} />
                    <ProductDisplay product={product} />
                    <DesciptionBox />
                    {/* <RelatedProducts/> */}
                    <NewCollections />
                </>
            )}
        </div>
    );
}

export default Product;
