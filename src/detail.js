import { useParams, useNavigate } from "react-router-dom";
// useNavigate = 함수로 호출해주고, 괄호안에 가고싶은 페이지를 넣어주면 끝

const Detail = ({ notiData }) => {
  const navigate = useNavigate()
  const { id } = useParams();
  const idx = id - 1;
  const data = notiData[idx];
  console.log(data.notiName);

  function notiReturn(){
    navigate('/List')
  }
  function notiRemove(){
    // remove(id)
    navigate('/')
  }
  return (
    <div>
      <h3>
        {id},{data.notiName}
      </h3>
      <p>{data.notiText}</p>
      <button onClick={notiRemove}>삭제</button>
      <button onClick={notiReturn}>돌아가기</button>
    </div>
  );
};

export default Detail;