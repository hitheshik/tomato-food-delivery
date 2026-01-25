import React, { useState } from 'react'
import '/List.css'
import axios from "axios"
import toast from "toas"

const List = () => {


    const url ="http://localhost:4000"
    const[list,setList]=useState([]);

    const fetchList = async()=>{
        const response = await axios.get('${url}/api/food/list');
        console.log(response.data);
        if(response.data/success){
            setList(response.data.data);
        }
        else
        {
            toast.error("Error")

        }
    }
  return (
    <div className = 'list add flex-col'>
    <p>All food list</p>
    <div className = "list-table">
    <div className="list-table-format title">
        <b>Image</b>
        <b>Name</b>
        <b>Category</b>
        <b>Price</b>
        <b>Action</b>
    </div>

    </div>
    <div>List</div>
  )
} 


export default List