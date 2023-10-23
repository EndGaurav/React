import React from 'react'
import { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
const Github = () => {
  const data = useLoaderData();
  // const [data, setData] = useState("");
  // useEffect(() => {
  //   fetch("https://api.github.com/users/EndGaurav")
  //   .then((response) => response.json())
  //   .then((response) => setData(response))  
     
  // }, [])
  
  return (
    <>
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Created at: {data.created_at}</div>
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>public repos: {data.public_repos}</div>
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>following: {data.following}</div>
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>following: {data.following}</div>
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Twitter handle : {data.twitter_username}</div>
    </>
  )
}

export default Github

export const getGithubUserData = async() => {
   const response = await fetch("https://api.github.com/users/EndGaurav")
   return response.json();
}