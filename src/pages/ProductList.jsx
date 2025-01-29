import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import '../styles/ProductList.css';
import { addItem } from './CartSlice';

function ProductList({ onCartClick }) {
    const dispatch = useDispatch();

    const plantArray = [
        {
            id: 1,
            name: "Snake Plant",
            price: 25.99,
            description: "Low-maintenance indoor plant that purifies air",
            image: "https://images.unsplash.com/photo-1593482892290-f54317f868e4?auto=format&fit=crop&q=80&w=300&h=300"
        },
        {
            id: 2,
            name: "Peace Lily",
            price: 29.99,
            description: "Beautiful flowering plant that thrives in low light",
            image: "https://images.unsplash.com/photo-1598880940371-c756c6052e48?auto=format&fit=crop&q=80&w=300&h=300"
        },
        {
            id: 3,
            name: "Monstera Deliciosa",
            price: 39.99,
            description: "Trendy tropical plant with unique leaf patterns",
            image: "https://images.unsplash.com/photo-1587049352859-2c9a1a1a9f4e?auto=format&fit=crop&q=80&w=300&h=300"
        },
        {
            id: 4,
            name: "Fiddle Leaf Fig",
            price: 45.99,
            description: "Popular indoor plant with large, glossy leaves",
            image: "https://images.unsplash.com/photo-1582388745640-2a0b29b9e7e0?auto=format&fit=crop&q=80&w=300&h=300"
        },
        {
            id: 5,
            name: "Aloe Vera",
            price: 15.99,
            description: "Succulent plant known for its medicinal properties",
            image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&q=80&w=300&h=300"
        },
        {
            id: 6,
            name: "Spider Plant",
            price: 19.99,
            description: "Easy-to-grow plant with arching leaves and baby plantlets",
            image: "https://images.unsplash.com/photo-1587049352859-2c9a1a1a9f4e?auto=format&fit=crop&q=80&w=300&h=300"
        },
        {
            id: 7,
            name: "ZZ Plant",
            price: 34.99,
            description: "Tough, low-maintenance plant with waxy, dark green leaves",
            image: "https://images.unsplash.com/photo-1587049352859-2c9a1a1a9f4e?auto=format&fit=crop&q=80&w=300&h=300"
        },
        {
            id: 8,
            name: "Pothos",
            price: 12.99,
            description: "Versatile vining plant that thrives in various conditions",
            image: "https://images.unsplash.com/photo-1587049352859-2c9a1a1a9f4e?auto=format&fit=crop&q=80&w=300&h=300"
        },
        {
            id: 9,
            name: "Rubber Plant",
            price: 39.99,
            description: "Large-leaved plant that adds a tropical touch to any room",
            image: "https://images.unsplash.com/photo-1587049352859-2c9a1a1a9f4e?auto=format&fit=crop&q=80&w=300&h=300"
        },
        {
            id: 10,
            name: "Boston Fern",
            price: 22.99,
            description: "Classic fern with lush, arching fronds",
            image: "https://images.unsplash.com/photo-1587049352859-2c9a1a1a9f4e?auto=format&fit=crop&q=80&w=300&h=300"
        },
        {
            id: 11,
            name: "Jade Plant",
            price: 18.99,
            description: "Succulent with thick, fleshy leaves that store water",
            image: "https://images.unsplash.com/photo-1587049352859-2c9a1a1a9f4e?auto=format&fit=crop&q=80&w=300&h=300"
        },
        {
            id: 12,
            name: "Calathea",
            price: 24.99,
            description: "Ornamental plant with strikingly patterned leaves",
            image: "https://images.unsplash.com/photo-1587049352859-2c9a1a1a9f4e?auto=format&fit=crop&q=80&w=300&h=300"
        },
        {
            id: 13,
            name: "Chinese Evergreen",
            price: 27.99,
            image: "https://images.unsplash.com/photo-1587049352859-2c9a1a1a9f4e?auto=format&fit=crop&q=80&w=300&h=300"
        }
    ];            

    const handleAddToCart = (plant) => {
        dispatch(addItem({ ...plant, quantity: 1 }));
    };

    return (
        <div>
            <div className="navbar">
                <div className="tag">
                    <a href="/" className="tag_home_link">
                        <img src="https://cdn.pixabay.com/photo/2020/08/05/13/12/eco-5465432_1280.png" alt="" />
                        <h3>Where Green Meets Serenity</h3>
                    </a>
                </div>
                <div style={{flex: 1, textAlign: 'center'}}>
                    <a href="/" style={{textDecoration: 'none', color: 'white'}}>Plants</a>
                </div>
                <div>
                    <a href="#" onClick={onCartClick} style={{textDecoration: 'none', color: 'white'}}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" height="45" width="45">
                            <rect width="256" height="256" fill="none"></rect>
                            <circle cx="80" cy="216" r="12"></circle>
                            <circle cx="184" cy="216" r="12"></circle>
                            <path d="M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,179.9,176H84.1a15.9,15.9,0,0,1-15.4-11.6L32.5,37.8A8,8,0,0,0,24.8,32H8" fill="none" stroke="#faf9f9" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                        </svg>
                    </a>
                </div>
            </div>

            <div className="product-grid">
                {plantArray.map((plant) => (
                    <div key={plant.id} className="product-card">
                        <img src={plant.image} alt={plant.name} className="product-image" />
                        <h3 className="product-title">{plant.name}</h3>
                        <p>{plant.description}</p>
                        <div className="product">${plant.price}</div>
                        <button 
                            className="product-button"
                            onClick={() => handleAddToCart(plant)}
                        >
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

ProductList.propTypes = {
    onCartClick: PropTypes.func.isRequired
};

export default ProductList;
