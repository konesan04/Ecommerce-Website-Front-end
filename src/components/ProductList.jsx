import React from 'react'
import  {useState}  from 'react'
import { useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Atom} from 'react-loading-indicators'
import useFetch from './Custom-hooks/useFetch';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { PiShoppingCartFill } from "react-icons/pi";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2'
import {useDispatch, useSelector} from "react-redux"
import { addItem } from '../store/cartSlice';


const ProductList = () => {

  let navigate1 = useNavigate()

  let handleDelete = (id)=>{
    axios.delete(`http://localhost:5000/products/${id}`)
    .then(()=>{
      Swal.fire({
        title: "Drag me!",
        icon: " Deleted successfully",
        draggable: true
      });
      let newProductslist = products.filter(product=>product.id !==id)
      setproducts(newProductslist)
    })
  }

  let cartstate = useSelector((state)=>{return state.cart})
  let {products, error, isLoading, setproducts} = useFetch("https://fakestoreapi.com/products")
  
  let dispatch = useDispatch()
  
  let addItemToCart= (product)=>{
    let checkproduct = cartstate.some(cartProduct => cartProduct.id ===product.id)

if(!checkproduct){

  dispatch(addItem(product))
  Swal.fire({
    title: "Success",
    text: " Item added successfully",
    icon : "success"
  });
}
else{
  Swal.fire({
    title: "Oops!",
    text: "Product already added",
    icon : "error",
    footer : "<p> Add some other products</p>"
  });
}


  }

  
  
  if(isLoading){
    return(
      <div>
        <center>

        <Atom color="#32cd32" size="large" text="Loading....." textColor="red" />
        </center>
      </div>
    )
  }
else{
  return (
    <div>
      <article>
        <span>To Create New Product  </span>
        <Button onClick={()=>navigate1("/newproduct")}> Click me</Button>
      </article>
      <h1>ProductList</h1>
      {products.length !==0 &&(

      <section className='products'>
        {products.map( (product) => (
          <Card style={{ width: '18rem' ,height:"26rem"}} key={product.id} className='product'>
          <center>

          <Card.Img variant="top" src={product.image} style={{width:'9rem',height:"12rem"}}/>
          <Card.Body className='body'>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>
            ${product.price}
            </Card.Text>
 
          </Card.Body>
          <Card.Footer style={{display:"flex", justifyContent:"space-evenly", allignitems:"center"}} className='footer'>
            <Button variant="primary" onClick={()=>addItemToCart(product)}><PiShoppingCartFill /></Button>
            <Button variant="secondary" onClick={()=>{navigate1(`/updateproduct/${product.id}`)

            }}><FaEdit /></Button>
            <Button variant="danger" onClick={()=> handleDelete(product.id)}><MdDelete /></Button>
          </Card.Footer>
          </center>
        </Card>
        ))
        }
      </section>
      )}
      {
        error && <p>{error}</p>
      }
    </div>
  )

}
}

export default ProductList