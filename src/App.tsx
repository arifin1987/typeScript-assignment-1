import Items from "./components/Items"






function App() {

  const electronicItems=[
    {name:'dell laptop', price: 5000, color:'Black', description:'this is a high quality product',category:'trending'},
    {name:'lenovo printer', price: 6000, color:'Black', description:'this is a high quality product',category:'trending'},
    {name:'Samsung Mobile', price: 1000, color:'Black', description:'this is a high quality product',category:'trending'},
    {name:'Samsung Pad', price: 4000, color:'Black', description:'this is a high quality product',category:'trending'},
    {name:'Huawei Laptop', price: 7000, color:'Black', description:'this is a high quality product',category:'good'},
    {name:'Canon Printer', price: 9000, color:'Black', description:'this is a high quality product',category:'good'},
    {name:'DEll Monitor', price: 3000, color:'Black', description:'this is a high quality product',category:'good'},
    {name:'Dell Keyboard', price: 2000, color:'Black', description:'this is a high quality product',category:'good'},
  ]
  
  

  return (
    <>

    <div>
      {
        electronicItems.map(item => <Items
        name = {item.name}
        
        ></Items>)
      }
    </div>
   
    
     
    </>
  )
}

export default App




