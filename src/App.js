import "./App.css";
import {useEffect, useState} from 'react'
import axios from "axios";
import { Route, Routes, Link } from "react-router-dom";
import Adds from "./add";
import List from "./list";
import Detail from './detail'
import Edit from './edit'


function App() {
  const [notiData, setNotiData] = useState([]);
  const getDatas = async () => {
    axios.get('https://jsonplaceholder.typicode.com/comments').then(
      (res)=>{
      const datas =res.data.slice(0,10).map((data)=>{
        // axios는 프로퍼티가 fetch랑 달라서 res.data로 받아야한다.
        return{
          notiTit: data.name,
          notiId : data.id,
          notiName : data.email,
          notiText : data.body
        }
      })
      setNotiData(datas)
      }).catch((err)=>{console.log(err)})
    }
  //   const res = await fetch("https://jsonplaceholder.typicode.com/comments")
  //   .then(
  //     (res) => res.json())
  //     const datas =res.slice(0,10).map((data)=>{
  //       return{
  //         notiId : data.id,
  //         notiName : data.email,
  //         notiText : data.body
  //       }
  //     })
  //     // console.log(datas)
  //     setNotiData(datas)
  // };
  useEffect(()=>{
    getDatas()
  },[])
  // console.log(notiData)
  
  function notiCreate(notiTit,notiName,notiText){
    // console.log(notiTit,notiName,notiText)
    axios.post('https://jsonplaceholder.typicode.com/comments',{notiTit,notiName,notiText})
  .then((res)=>{console.log(res.data)})}

  return (
    <div className="App">
      <div>
        <Link to="/">
          <h1>Main</h1>
        </Link>
        <Link to="/Add">
          <h1>Add</h1>
        </Link>
        <Link to="/List">
          <h1>List</h1>
        </Link>
      </div>
      <div>
        <Routes>
          <Route path="" element={<></>} />
          <Route path="/Add" element={<Adds notiCreate={notiCreate} />} />
          <Route path="/List" element={<List notiData={notiData} />} />
          <Route path="/List/:id" element={<Detail notiData={notiData}/>} />
          <Route path="/Edit/:id" element={<Edit notiData={notiData}/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
