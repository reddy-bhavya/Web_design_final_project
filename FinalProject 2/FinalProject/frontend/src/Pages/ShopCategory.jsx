import React, { useContext, useState, useEffect } from 'react';
import './CSS/ShopCategory.css';
import { ShopContext } from '../Context/ShopContext';
import dropdown_icon from '../Components/Assets/dropdown_icon.png';
import Item from '../Components/Items/Item';

export const ShopCategory = (props) => {
    const { all_product } = useContext(ShopContext);
    const [sortedProducts, setSortedProducts] = useState([]);
    const [visibleProducts, setVisibleProducts] = useState(12);
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    const [sortByMenuOpen, setSortByMenuOpen] = useState(false);

    useEffect(() => {
        // Enable or disable the "Explore more" button based on the number of products
        setIsButtonDisabled(all_product.length <= 12);
    }, [all_product]);

    const handleSortByPriceHigh = async () => {
        const response = await fetch('http://localhost:3000/sortbypricehigh');
        const data = await response.json();
        setSortedProducts(data);
        setSortByMenuOpen(false); // Close the dropdown menu after selecting an option
    };

    const handleSortByPriceLow = async () => {
        const response = await fetch('http://localhost:3000/sortbypricelow');
        const data = await response.json();
        setSortedProducts(data);
        setSortByMenuOpen(false); // Close the dropdown menu after selecting an option
    };

    const handleSortByDateAdded = async () => {
        const response = await fetch('http://localhost:3000/sortbydateadded');
        const data = await response.json();
        setSortedProducts(data);
        setSortByMenuOpen(false); // Close the dropdown menu after selecting an option
    };

    const loadMoreProducts = () => {
        setVisibleProducts(prevVisibleProducts => prevVisibleProducts + 12);
    };

    return (
        <div className='shop-category'>
            <img className='shopcategory-banner' src={props.banner} alt="" style={{ height: '400px' }} />
            <div className="shopcategory-indexSort">
                <p>
                    <span>Showing 1-{visibleProducts}</span> out of {props.category === 'all' ? all_product.length : all_product.filter(item => item.category === props.category).length} products
                </p>
                <div className="shopcategory-sort">
                    <div className="sort-dropdown" onClick={() => setSortByMenuOpen(!sortByMenuOpen)}>
                        Sort by
                        <img src={dropdown_icon} alt="Dropdown" className={`dropdown-icon ${sortByMenuOpen ? 'open' : ''}`} />
                    </div>
                    {sortByMenuOpen && (
                        <div className="sort-options">
                            <div onClick={handleSortByPriceHigh} className="sort-option" style={{ borderBottom: '1px solid #ccc', padding: '5px 0' }}>Price High to Low</div>
                            <div onClick={handleSortByPriceLow} className="sort-option" style={{ borderBottom: '1px solid #ccc', padding: '5px 0' }}>Price Low to High</div>
                            <div onClick={handleSortByDateAdded} className="sort-option" style={{ padding: '5px 0' }}>Date Added</div>
                        </div>
                    )}
                </div>
            </div>

            <div className="shopcategory-products">
                {sortedProducts.length > 0 ? sortedProducts.slice(0, visibleProducts).map((item, i) => (
                    <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                )) : all_product.map((item, i) => {
                    if ((props.category === 'all' || props.category === item.category) && i < visibleProducts) {
                        return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                    } else {
                        return null;
                    }
                })}
            </div>
            <button className="shopcategory-loadmore" onClick={loadMoreProducts} disabled={isButtonDisabled}>
                Explore more
            </button>
        </div>
    );
};
