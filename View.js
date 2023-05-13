import axios from "axios";
import React, { useEffect, useState } from "react";

export default function View(){
    const [items, setItems]  = useState([]);
    
    useEffect(() => {
        loaditems();
    },[]);

    const loaditems=async()=>{
        const result=await axios.get("http://localhost:8080/items");
        setItems(result.data );
    }
    
    
    return(
        <>
        <div className="viewCont">
            <table>
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Description</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        items.map((item,index)=>{
                            return(
                            <tr>
                                <td>{item.name}</td>
                                <td>{item.description}</td>
                            </tr>)
                        })
                    }
                </tbody>
            </table>
        </div>
        </>
    )
}