import React ,{useState,useEffect} from 'react'
import axios from 'axios'
import * as styles from './Categories.module.css'
function Categories() {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);
    const getProducts = async () => {
      try{
        const {data} = await axios.get(`https://ecommerce-node4-five.vercel.app/products`)
        console.log(data.products)
        setProducts(data.products)
        setIsLoading(false)
      }catch(error){
        console.log(error)
        setIsLoading(false)
        setError(true)
      }
         
        
    }
    useEffect(()=>{
      getProducts()
    },[])
    if (isLoading) {
      return <div>Loading...</div>
    }
    return (
      <>
      {error ? <div>Error</div> :''}
      {
       
          products.map(products =>
            
            <div className={styles.category}  key={products._id}>
            <img src={products.mainImage.secure_url} />  
            <h1>{products.name}</h1>
           
            </div>
          )
         }
      </>
    )
}

export default Categories