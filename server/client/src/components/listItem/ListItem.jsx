import React, { useEffect } from 'react';
import './listItem.scss'
import {PlayArrow, Add,ThumbUpOutlined,ThumbDownOutlined} from '@material-ui/icons'
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
const ListItem = ({index,item}) => {
    const [isHovered,setHovered]=useState(false)
    const [movie,setMovie]=useState({})
    useEffect(()=>{
       const getMovie= async ()=>{
     try{
       const res= await axios.get("/movies/find"+item,{
        headers:{
            token: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZjdkOTIzZjY1NTY3OGQzOGFhMTNmMSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MzYzMzAyMiwiZXhwIjoxNjQ0MDY1MDIyfQ.NHYLz36gcLmAnRMYnPnqxY6x5-ym6HngpUxq9tUX1dw'
        }
   });
   setMovie(res.data)
     }catch(err){
         console.log(err);
     }
    }
    getMovie();
},[])
    return (
        <Link to={{pathname:'/watch',movie:movie}}>
        <div className='listItem' style={{left:isHovered && index*225+index*2.5}} onMouseEnter={()=>setHovered(true)} onMouseLeave={()=>setHovered(false)}>
            <img src={movie.img} alt="" />
            {isHovered && (
                <>
                    
                    <iframe src={movie.video} frameborder="0" ></iframe>
            <div className='itemInfo'>
                <div className='icons'>
                 <PlayArrow className='icon'/>
                 <Add className='icon'/>
                 <ThumbUpOutlined className='icon'/>
                 <ThumbDownOutlined className='icon'/>
                </div>
                <div className='itemInfoTop'>
                    <span>{item.duration}</span>
                    <span className='limit'>+{movie.limit}</span>
                    <span>{movie.year}</span>
                </div>
                <div className='genre'>{movie.genre}</div>
                <div className='desc'>{movie.desc}</div>
            </div>
            </>
            )}
        </div>
        </Link>
    );
};

export default ListItem;