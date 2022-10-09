import React, { useState, useEffect } from 'react';
import Post from '../../components/post';
import style from './home.module.css'
import Web3Modal from 'web3modal'
import { ethers } from "ethers"
import Partier from '../../Partier.json'
import {CircularProgress} from '@mui/material'

export default function Home() {
    const [loading, setLoading] = useState(true)
    const [posts1, setPosts] = useState(null)
    async function getPosts() {
        const web3Modal = new Web3Modal()
        const connection = await web3Modal.connect()
        const provider = new ethers.providers.Web3Provider(connection)
        const signer = provider.getSigner()

        let contract = new ethers.Contract('0xaE680efdEAb88eaa5F419869f1bc8dFC4704A4d4', Partier.abi, signer)
        let posts = await contract.GetPosts();
        console.log(posts[0][6])
        setPosts(posts)
        setLoading(false)

    }
    useEffect(() => {
        getPosts()
      }, [])
  return (
    <>
        {
            loading ? (
                <div className={style.loading}>
                    <CircularProgress color="warning" />
                </div>
            ) :
            (
                <div className={style.wrapper}>
                    <Post
                        image={posts1[0][6]}
                        description={posts1[0][2]}
                        username={posts1[0][5]}
                    />
                </div>
            )
        }
    </>

  );
}
