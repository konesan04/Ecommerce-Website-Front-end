import { useEffect, useState } from "react"
import axios from "axios"

function useFetch (url){
    let [products,setproducts] = useState([])
    let [error,setError] = useState("")
    let [isLoading,setIsLoading] = useState(true)

     useEffect(()=>{
        let fetchApi = async()=>{
            try{
                // let response = await fetch(url)
                let response = await axios.get(url)
                setproducts(response.data)

            }
            catch(error){
                setError(error.message)

            }
            finally{
                setIsLoading(false)

            }

            
        }
        fetchApi()
     },[]);
     return{products, error, isLoading, setproducts}

}

export default useFetch