
const Trending = ({trend}) => {
    
    
    return (
        <div className="bg-red-300 p-2 m-4 rounded">
        <h1 className="text-xl">Product Name:{trend.name}</h1>
        <p>Price: ${trend.price}</p>
        <p>Color:{trend.color} </p>
        <p>Product Description:{trend.description}</p>
        <p>Category:{trend.category}</p>
        
        
    </div>
    );
};

export default Trending;