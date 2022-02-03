import React from 'react';
import './watch.scss'
import {KeyboardBackspaceOutlined} from '@material-ui/icons'
import { Link, useLocation } from 'react-router-dom';
const Watch = () => {
    const location=useLocation()
     const movie=location.movie
    return (
        <div className='watch'>
            <Link to='/'>
            <div className='back'>
            <KeyboardBackspaceOutlined />
            home
            </div>
            </Link>
            <iframe width="100%" height="100%" src={movie.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    );
};

export default Watch;