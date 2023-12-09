import React from 'react'

import {useLoaderData} from 'react-router-dom'


function Github() {
  // const [data,setData] = useState([])
  // useEffect(()=>{
  //   fetch('https://api.github.com/users/keshavsharma54126')
  //   .then((response)=>(response.json()))
  //   .then((data)=>{
  //     console.log(data)
  //     setData(data)
  //     console.log(data)
  //   })
  // },[])

  const data = useLoaderData()
  return (
    <div className="text-center m-4 p-4 text-3xl bg-gray-700 text-white">Github followers : {data.followers} 
       <img src={data.avatar_url} alt="git picture" width={300}/>
     </div>
  )
}

export default Github

export const githubLoader = async ()=>{
  try{
    const response = await fetch('https://api.github.com/users/keshavsharma54126')
    if(!response.ok){
      throw new Error('Network response was not ok')
    }
    const data =  await response.json()
    console.log(data)
    return data
  }
  catch(e){
    throw new Error('error occured :'+e)
  }
}

