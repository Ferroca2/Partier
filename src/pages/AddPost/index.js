import React, { useState } from 'react';
import style from './addpost.module.css';
import { Avatar } from '@mui/material';
import { deepOrange } from '@mui/material/colors';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {AccountCircle, Description, AttachMoneyOutlined, ConfirmationNumberOutlined} from '@mui/icons-material';
import { Web3Storage } from 'web3.storage'
import Web3Modal from 'web3modal'
import { ethers } from "ethers"


export default function AddPost() {
    const [image, setImage] = useState(null)


    function getAccessToken () {
        return process.env.STORAGE_TOKEN
    }
    function makeStorageClient () {
        return new Web3Storage({ token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweEE5NDEyNzVkM2VhYjdDNDhjQ0JhM0U3OWJGMjQzQ2MwRjgyNzZmNTYiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NjUzMTYwMzMxMTgsIm5hbWUiOiJwYXJ0aWVyIn0.yYJdd3ihsbgUMbroqj5pOkMJae7xCrcBZe6W2XQgkpE' })
    }
    async function onChange(e) {
        const file = e.target.files
        console.log(file[0].name)
        const name = file[0].name.replace(/\s/g, '%20')
        try{
            const client = makeStorageClient()
            const cid = await client.put(file)
            console.log('stored files with cid:', cid)
            const objectUrl = `https://${cid}.ipfs.w3s.link/${name}`
            setImage(objectUrl)
        }catch(err){
            console.log(err)
        }
    }

    async function CreateTickets() {

    }
    return (
        <>

            {
                image ?
                    (
                        <div className={style.formWrapper}>
                            <img src={image} alt='' className={style.post}/>
                            <Box sx={{ display: 'flex', alignItems: 'flex-end', my: 2 }} style={{width: '80%'}}>
                                <AccountCircle sx={{ color: deepOrange[500], mr: 1, my: 0.5 }} />
                                <TextField id="input-with-sx" label="Username" variant="standard" style={{width: '100%'}}/>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'flex-end', my: 2 }} style={{width: '80%'}}>
                                <Description sx={{ color: deepOrange[500], mr: 1, my: 0.5 }} />
                                <TextField id="input-with-sx" label="Description" variant="standard" style={{width: '100%'}}/>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'flex-end', my: 2 }} style={{width: '80%'}}>
                                <AttachMoneyOutlined sx={{ color: deepOrange[500], mr: 1, my: 0.5 }} />
                                <TextField id="input-with-sx" label="Price" variant="standard" style={{width: '100%'}}/>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'flex-end', my: 2 }} style={{width: '80%'}}>
                                <ConfirmationNumberOutlined sx={{ color: deepOrange[500], mr: 1, my: 0.5 }} />
                                <TextField id="input-with-sx" label="Number of tickets" variant="standard" style={{width: '100%'}}/>
                            </Box>
                            <button className={style.button}>POST</button>
                        </div>
                    ) :
                    (
                        <div className={style.wrapper}>
                            <label className={style.add} htmlFor='asset'>
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
