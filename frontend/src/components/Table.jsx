
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";


const Table = () => {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState("");
    const [filteredData, setFilteredData] = useState([]);

    const navigate = useNavigate();
  
   useEffect(() => {
    fetch("http://localhost:3000/", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => setData(data));
  
      console.log(data);
  },[]);
  
  const onSearchChangeHandler = (e) => {
    setSearch(e.target.value);
  };
  
  useEffect(() => {
    const timer =  setTimeout(() => {
      const filteredData = data.filter((user) => {
        return user.name.toLowerCase().includes(search.toLowerCase()) || user.email.toLowerCase().includes(search.toLowerCase());
      });
      setFilteredData(filteredData);
      return () => {
        clearTimeout(timer);
      }
    }, 1000);
   
  },[search,data]);

  const postHandler = () => {
    navigate('/posts')
  }

  return (
    <div>
        <div> 
      <input type="text" placeholder="Search by Name" style={{width:"100%",height:"30px",margin:"10px 0px"}} onChange={onSearchChangeHandler}/>
        <table>
          <thead>
            <tr>
              <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' , backgroundColor:"skyblue" , color:"white" }}>ID</th>
              <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left', backgroundColor:"skyblue",color:"white" }}>Name</th>
              <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left', backgroundColor:"skyblue",color:"white" }}>Email</th> 
              <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left', backgroundColor:"skyblue",color:"white" }}>City</th>
              <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left', backgroundColor:"skyblue",color:"white" }}>Phone</th> 
            </tr>
          </thead>
          {filteredData.map((user,index) => ( 
          <tbody  key={user.id}>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left', backgroundColor: index % 2 === 0 ? 'gray' : 'lightgray' }}>{user.id}</td>           
              <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left', backgroundColor: index % 2 === 0 ? 'gray' : 'lightgray , decoration:"none' }}><Link to={`/posts/${user.id}`}>{user.name}</Link></td>           
              <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left',backgroundColor: index % 2 === 0 ? 'gray' : 'lightgray' }}>{user.email}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left',backgroundColor: index % 2 === 0 ? 'gray' : 'lightgray' }}>{user.address.city}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' ,backgroundColor: index % 2 === 0 ? 'gray' : 'lightgray'}}>{user.phone}</td>
            </tr>
          </tbody>
          ))}
        </table>
      </div>
    </div>
  )
}

export default Table
