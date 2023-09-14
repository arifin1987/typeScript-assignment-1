import Items, { itemsType } from "./components/Items"
import Trending from "./components/Trending"






function App() {
  

  const electronicItems:itemsType[]=[
    {id:1,name:'dell laptop', price: 5000, color:'Black', description:'This is a high quality product',category:'trending'},
    {id:2,name:'lenovo printer', price: 6000, color:'Black', description:'This is a high quality product',category:'trending'},
    {id:3,name:'Samsung Mobile', price: 1000, color:'Black', description:'This is a high quality product',category:'trending'},
    {id:4,name:'Samsung Pad', price: 4000, color:'Black', description:'This is a high quality product',category:'trending'},
    {id:5,name:'Huawei Laptop', price: 7000, color:'Black', description:'This is a high quality product',category:'good'},
    {id:6,name:'Canon Printer', price: 9000, color:'Black', description:'This is a high quality product',category:'good'},
    {id:7,name:'DEll Monitor', price: 3000, color:'Black', description:'This is a high quality product',category:'good'},
    {id:8,name:'Dell Keyboard', price: 2000, color:'Black', description:'This is a high quality product',category:'good'},
  ]
  
  const trendingProduct:itemsType[] = electronicItems.filter((elect)=> elect.category=== "trending")
  console.log(trendingProduct);
  

  return (
    <>

    <div className="grid grid-cols-4 gap-4 m-8">
      {
        electronicItems.map(item => <Items
        key={item.id}
        item = {item}
        
        ></Items>)
      }
    </div>
    <div>
      <h1 className="text-4xl text-center">Trending Products</h1>
      <div className="grid grid-cols-4 gap-4 m-8">
      {
        
        trendingProduct.map(trend => <Trending
        trend={trend}
        
        ></Trending>)
      }

      </div>
      
      
      
    </div>
   
    
     
    </>
  )
}

export default App




