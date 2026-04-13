import { useState } from "react";
import "./App.css";

function App() {
  const [iframeSrc, setIframeSrc] = useState<string>();

  const handleTokenIssue = async () => {
    try {
      const response = await fetch(
        "http://192.168.0.135:28080/syncBox/v1/api/connections/reports/embed",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            connectionId: "541c0baa-d6e0-43ad-b84a-182a1c38e477",
            sheetId: "e71a95bb-2508-4f17-a0a0-d715756c0a7d",
            userId: "su_lee",
          }),
        },
      );

      if (!response.ok) {
        throw new Error(`API 호출 실패: ${response.status}`);
      }

      const data = await response.json();
      // resultList 안에 src가 있다고 가정
      const newSrc = data.resultList;
      console.log(data);
      if (newSrc) {
        setIframeSrc(
          newSrc.replace("192.168.0.135:28080", "http://localhost:39050"),
        );
      } else {
        console.error("resultList 안에 src가 없습니다.", data);
      }
    } catch (err) {
      console.error("토큰 발급 실패", err);
    }
  };

  return (
    <section id="center">
      <div
        style={{
          display: "flex",
          flexFlow: "column nowrap",
          alignItems: "start",
        }}
      >
        <p style={{ fontSize: "12px" }}>
          클럽포털 {">"} 어쩌구 {">"} 통합회원
        </p>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <h1>통합회원 </h1>
          <button style={{ height: "36px" }} onClick={handleTokenIssue}>
            토큰 발급
          </button>
        </div>
        <p style={{ marginBottom: "12px" }}>클럽 포털 통합회원 어쩍구 현황</p>
        {iframeSrc && (
          <iframe
            key={iframeSrc}
            width="1080px"
            height="720px"
            src={iframeSrc}
            frameBorder={0}
            allowFullScreen
          />
        )}
      </div>
    </section>
  );
}

export default App;
