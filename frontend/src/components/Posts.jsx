import React,{useState , useEffect} from 'react'
import {useParams} from "react-router"

const Posts = () => {
    const [data , setData] = useState([])


    const params = useParams();
    const userId = params.userId;
    console.log(params.userId);
    useEffect(() => {
        fetch("http://localhost:3000/posts", {
          method: "GET",
          headers:{
            userid : userId,
          }
        })
          .then((response) => response.json())
          .then((data) => setData(data));
      
          console.log(data);
      },[]);
      console.log(data , "data")
  return (
    <div>
     <table>
          <thead>
            <tr>
              <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' , backgroundColor:"skyblue" , color:"white" }}>ID</th>
              <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left', backgroundColor:"skyblue",color:"white" }}>Title</th>
              <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left', backgroundColor:"skyblue",color:"white" }}>Body</th> 
            </tr>
          </thead>
          {data.map((user, index) => (
  <tbody key={user.id}>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left', backgroundColor: index % 2 === 0 ? 'gray' : 'lightgray' }}>{user.id}</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left', backgroundColor: index % 2 === 0 ? 'gray' : 'lightgray' }}>{user.title}</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left', backgroundColor: index % 2 === 0 ? 'gray' : 'lightgray' }}>{user.body}</td>
    </tr>
  </tbody>
))}
          </table>
      
    </div>
  )
}

export default Posts
