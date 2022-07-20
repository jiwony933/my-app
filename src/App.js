import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  return (
    <main>
      <div style={{ height: "150px" }}>main 화면</div>
      <div className="buttonBoard">
        <button>캠핑 일정 등록하기 </button>
        <button>캠핑 기록하기 </button>
        <button>캠핑 요리 기록하기</button>
        <button>캠핑 준비 체크리스트</button>
      </div>

      <div className="navi">
        <div>홈</div>
        <div>캠핑장검색</div>
        <div>커뮤니티</div>
        <div>마이페이지</div>
      </div>
    </main>
  );
}

export default App;
