export type itemsType ={
    id:number;
    name: string;
    price:number;
    color:string;
    description:string;
    category:string;
    

}

const Items = ({item}:itemsType) => {
    
    
    
    return (
        <div className="bg-purple-300 p-2 m-4 rounded">
            <h1 className="text-xl">Product Name:{item.name}</h1>
            <p>Price: ${item.price}</p>
            <p>Color:{item.color} </p>
            <p>Item Description:{item.description}</p>
            <p>Category:{item.category}</p>
            
            
        </div>
    );
};

export default Items;