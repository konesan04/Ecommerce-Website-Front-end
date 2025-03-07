import useFetch from "./Custom-hooks/useFetch"

const Home = ()=>{

    let{products} =useFetch("https://api.escuelajs.co/api/v1/products")
    return (
        <h1>Home - Total Products - {products.length}</h1>
    )
}

export default Home