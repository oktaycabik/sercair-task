import { useState, useEffect } from "react";
import { getData } from "./api";
import Card from "./components/Card";
import Header from "./components/Header";
function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    (async () => {
      const result = await getData();
      setData(result);
    })();
  }, []);

  return (
    <>
      <Header />
      <div className="container">
        <>
          <div className="row">
            <Card data={data} />
          </div>
        </>
      </div>
    </>
  );
}

export default App;
