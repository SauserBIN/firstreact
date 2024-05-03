import { Route, Routes, Link} from 'react-router-dom'


const List =({notiData})=>{
    console.log(notiData)
    return(
        <>
        <h1>noti_list</h1>
        <section>
        {notiData.map((noti)=>
        <div key={noti.notiId}>
            <Link to={`/List/${noti.notiId}`}>{noti.notiName}</Link>
            <Link to={`/edit/${noti.notiId}`}>수정</Link>
            </div>)}
        </section>
        </>

    )
}

export default List

        {/* <div>
        <Link to="Detail"><h1>1List</h1></Link>
        </div>
        <Routes>
        <Route path="/Detail" element={<Detail/>} />
        </Routes>
        </div> */}