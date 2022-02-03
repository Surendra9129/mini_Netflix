import React from 'react';
import './home.scss'
import {AcUnit} from '@material-ui/icons'
import Navbar from '../../navbar/Navbar';
import Featured from '../../featured/Featured';
import List from '../../list/List';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios'
const Home = ({type}) => {
    const [lists,setLists]=useState([])
    const [genre,setGenre]=useState(null)
    useEffect(()=>{
        const getRandomLists=async()=>{
            try{
               const res=await axios.get(`lists${type ? "?type" + type : " "}${genre ? '&genre=' + genre : " "}`,{
                    headers:{
                        token: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZjdkOTIzZjY1NTY3OGQzOGFhMTNmMSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MzYzMzAyMiwiZXhwIjoxNjQ0MDY1MDIyfQ.NHYLz36gcLmAnRMYnPnqxY6x5-ym6HngpUxq9tUX1dw'
                    }
               }
            )
            // console.log(res)
                setLists(res.data)
            }catch(err){
              console.log(err)
            }
        }
        getRandomLists();
    },[type,genre])
    return (
        <div className='home'>
             <Navbar/>
           <Featured type={type}/>
           {
               lists.map((list ,i)=>{
               return <List key={i} list={list}/>
               })
           }
        </div>
    );
};

export default Home;