import "./App.css";

function App() {
  const userId = "dsaccsa";
  return (
    <>
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
          <h1>통합회원 </h1>
          <p style={{ marginBottom: "12px" }}>클럽 포털 통합회원 어쩍구 현황</p>
          <iframe
            width="1280px"
            height="720px"
            src={`http://localhost:39050/#/report/publish/5f9cba01-5254-449c-bb46-40789793b15f?embed=true`}
            frameBorder={0}
            allowFullScreen={true}
          ></iframe>
        </div>
      </section>
    </>
  );
}

export default App;
