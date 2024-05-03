import { useParams } from "react-router-dom";
import { useState } from "react";

const Edit = ({notiData}) => {
  const { id } = useParams();
  const idx = id - 1;
  const data = notiData[idx];
//   1부터시작이었는데 배열0번부터 시작하게 만들려고

  console.log(notiData);
  const [editData, setEditData] = useState(
//     {
//     notiId: data.notiId,
//     notiName: data.notiName,
//     notiText: data.notiText,
//     notiTit: data.notiTit,
//   }
  notiData[idx]
//   이거 써도된다. 전체데이터에서 쓰다보니 fillter까진 안써도된다.
  );
  const {notiId, notiName, notiText, notiTit}   = editData;

  console.log(data);
  function editChange(e) {
    setEditData({ ...editData, [e.target.name]: e.target.value });
    // input에 있는 name에 값이 들어가면 value에 그 값을 onChange해라.
  }

  return (
    <div key={notiId}>
      <h1>Edit</h1>
      <input name="notiName" value={notiName} onChange={editChange}></input>
      <input name="notiTit" value={notiTit} onChange={editChange}></input>
      <textarea
        name="notiText"
        value={notiText}
        onChange={editChange}
      ></textarea>
    </div>
  );
};

export default Edit;
