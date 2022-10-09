import React, { useState } from 'react';
import style from './addpost.module.css';
import { Avatar } from '@mui/material';
import { deepOrange } from '@mui/material/colors';


export default function AddPost() {
    const [image, setImage] = useState(null)
    return (
        <>

            {
                image ?
                    (
                        <div>Hello World</div>

                    ) :
                    (
                        <div className={style.wrapper}>
                            <div className={style.add} onClick={() => {console.log('ferroca')}}>
                                <Avatar sx={{ bgcolor: deepOrange[500] }}>+</Avatar>
                            </div>
                        </div>
                    )
            }
        </>
    );
}
