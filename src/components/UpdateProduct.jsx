
import React, { useEffect, useState } from "react";
import { Grid2, Paper, Typography, TextField, Button } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./Custom-hooks/useFetch";
import axios from "axios";

const UpdateProduct = () => { 
    
    let paperStyle = {
    width: 400,
    margin: "20px auto",
    padding: "20px",
  };

  let [UpdateProduct, setUpdateProduct] = useState(null);

  let {id}= useParams()
  let navigate2 = useNavigate()

useEffect(()=>{
    axios.get(`http://localhost:5000/products/${id}`)
    .then( res => setUpdateProduct(res.data))
  },[])


  let handleUpdate = (e)=>{
    e.preventDefault()
    fetch(`http://localhost:5000/products/${id}`,{
        method: "PUT",
        headers : {
            "Content-Type": "application/json"
        },
        body : JSON.stringify(UpdateProduct)
    })
    .then(()=>{
        alert("Saves Succesfully")
      navigate2("/products")

  })}


 
  let handleChange = (e)=>{
    let {value,name}= e.target
    let fieldname = name.split('rating.')[1]

    if(name.includes("rating.")){
        setUpdateProduct({
            ...UpdateProduct,
            rating:{
                ...UpdateProduct.rating,
                [fieldname]:value
            }
        })

    }
    else{
        setUpdateProduct({...UpdateProduct,[name]:value})

    }

  }
  if(UpdateProduct!==null){
      return (
        <Paper elevation={20} style={paperStyle}>
          <Typography variant="h5" textAlign="center">
            Update Product
          </Typography>
          <Grid2 component="form" style={{ display: "grid", gap: "20px" }} onSubmit={handleUpdate}>
            <TextField
              value={UpdateProduct.title}
              name="title"
              label="Title"
              variant="outlined"
              fullWidth
              onChange={handleChange}
            />
            <TextField
              value={UpdateProduct.category}
              name="category"
              label="Category"
              variant="outlined"
              fullWidth
              onChange={handleChange}
            />
            <Grid2 container spacing={2}>
              <Grid2 size={6}>
                <TextField
                  value={UpdateProduct.rating.rate}
                  name="rating.rate"
                  label="Rate"
                  variant="outlined"
                  onChange={handleChange}
                />
              </Grid2>
              <Grid2 size={6}>
                <TextField
                  value={UpdateProduct.rating.count}
                  name="rating.count"
                  label="Count"
                  variant="outlined"
                  onChange={handleChange}
                />
              </Grid2>
            </Grid2>
            <Button type="submit"  variant="contained" fullWidth color="success">
              Save
            </Button>
          </Grid2>
        </Paper>
        // <div>konesan</div>
      );
  }
  else{
    <div>Loading...</div>
  }
}

export default UpdateProduct




