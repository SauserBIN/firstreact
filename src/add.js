import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const Add = ({notiCreate}) => {
  const titRef = useRef()
  const nameRef = useRef()
  const textRef = useRef()
  const [notiVal, setNotiVal] = useState({
    notiTit: "",
    notiName: "",
    notiText: "",
  });
  const { notiTit, notiName, notiText } = notiVal;
  const navigate = useNavigate()
  function changeVal(e){
    setNotiVal({
        ...notiVal,
        [e.target.name]: e.target.value
    })
  }


  function notiSave(){
  if(notiTit.length < 3){
    titRef.current.focus()
    alert('제목이 짧습니다.')
  }
  if(notiName.length < 2){
    nameRef.current.focus()
    alert('이름을 확인 하세요.')
  }
  if(notiText.length < 10){
    textRef.current.focus()
    alert('내용이 너무 짧습니다.')
  }
  
    notiCreate(notiTit, notiName,notiText)
    navigate('/list')    
  }


  

  return (
    <div className="add_btn_wrap">
      <div>
        <label>제목 : </label>
        <input
          type="text"
          name="notiTit"
          ref={titRef}
          placeholder="제목을 입력하세요."
          value={notiTit}
          onChange={changeVal}
        />
      </div>
      <div>
        <label>이름 : </label>
        <input
          type="text"
          name="notiName"
          ref={nameRef}
          placeholder="작성자 이름을 입력하세요."
          value={notiName}
          onChange={changeVal}
        />
      </div>
      <div>
        <label>내용 : </label>
        <textarea
          name="notiText"
          placeholder="내용을 입력하세요."
          ref={textRef}
          value={notiText}
          onChange={changeVal}
        />
      </div>
      <button onClick={notiSave}>저장</button>
      <button>취소</button>
    </div>
  );
};

export default Add;
