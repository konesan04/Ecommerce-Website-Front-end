import {Button, Paper, TextField, Typography} from "@mui/material"
import React from "react"
import {useForm} from "react-hook-form"
import * as Yup from "yup"
import {yupResolver} from "@hookform/resolvers/yup"

let schema = Yup.object().shape({
    name : Yup.string().required("Name is Required").matches(/^[A-Z][a-z]+ [A-Z][a-z]+$/, "Enter your Fullname with a space"),
    email : Yup.string().email().required("Email is Require").matches(/^[a-z0-9]+@[a-z]{3,6}.[a-z]{3,4}$/, "Enter valid email"),
    age : Yup.number().integer().positive().required("Name is Required").min(15, "Enter Age between 15 to 20").max(25, "Enter Age between 15 to 20"),
    password : Yup.string().required("Password is Required"),
    cPassword : Yup.string().required("Password is required").oneOf([Yup.ref("password"),null],"Password not matched"),
})

const Signup = ()=>{

    let paperStyle = {
        width: 400,
        margin: "20px auto",
        padding: "20px",
        display:"grid",
        gap: "15px"
      };

    let {register,handleSubmit, formState:{errors}} = useForm({resolver : yupResolver(schema)})

    let handleData = (Data)=>{
        console.log(Data)

    }

    return (
        <Paper elevation={20} style={paperStyle} component="form" onSubmit={handleSubmit(handleData)}>
            <Typography variant="h6" textAlign="center">Create Account</Typography>
            <TextField label="Name" {...register("name")} error={!!errors.name} helperText={errors.name?.message} />
            <TextField label="Email" {...register("email")} error={!!errors.email} helperText={errors.email?.message}/>
            <TextField label="Age" {...register("age")} error={!!errors.age} helperText={errors.age?.message}/>
            <TextField label="Password" {...register("password")} error={!!errors.password} helperText={errors.password?.message}/>
            <TextField label="Confirm Password" {...register("cPassword")} error={!!errors.cPassword} helperText={errors.cPassword?.message}/>
            <Button variant="contained" type="submit">SignUp</Button>

        </Paper>
    )
}

export default Signup