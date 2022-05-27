import { useState, useEffect } from "react";
import { getData } from "./api";
import {Spinner} from "react-bootstrap"
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
        {
          data.length>0 && (
            <>
        
            <div className="row">
              <Card data={data} />
            </div>
          </>
          )
        }
        {
          data.length===0 &&(
            <div className="d-flex justify-content-center mt-5"> <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner></div>
          )
        }
      
       
      </div>
    </>
  );
}

export default App;
