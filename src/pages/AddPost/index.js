import React, { useState } from 'react';
import style from './addpost.module.css';
import { Avatar } from '@mui/material';
import { deepOrange } from '@mui/material/colors';
import Post from '../../components/post';
import { create as ipfsHttpClient } from "ipfs-http-client"


const projectId = '2Ft09cDQD2CfB123ANVnyzKf8f4';
const projectSecret = process.env.INFURA_KEY;
var buffer = window.Buffer
const auth =
    'Basic ' + buffer.from(projectId + ':' + projectSecret).toString('base64');
const client = ipfsHttpClient({
    host: 'ipfs.infura.io',
    port: 5001,
    protocol: 'https',
    headers: {
        authorization: auth,
    },
});

export default function AddPost() {
    const [image, setImage] = useState(null)

    async function onChange(e) {
        const file = e.target.files[0]
        try{
            const added = await client.add(file, {progress: (prog) => console.log(`recieved ${prog}`)})
            const url = `https://ipfs.infura.io/ipfs/${added.path}`
            setImage(url)
        }catch(err){
            console.log(err)
        }
    }
    return (
        <>

            {
                image ?
                    (
                        <div>
                            <Post/>
                        </div>

                    ) :
                    (
                        <div className={style.wrapper}>
                            <label className={style.add} for='asset'>
                                <input
                                id='asset'
                                type="file"
                                name="Asset"
                                className="my-4"
                                onChange={onChange}
                                style={{display: 'none'}}
                                />
                                <Avatar sx={{ bgcolor: deepOrange[500] }}>+</Avatar>
                            </label>
                        </div>
                    )
            }
        </>
    );
}
