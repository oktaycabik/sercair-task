import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";

function Card({ data }) {
  const [show, setShow] = useState(false);
  const [filterData, setFilterData] = useState({});
  const [discount, setDiscount] = useState("");
  const detailsData = (name) => {
    const res = data.find((a) => a.deviceName === name);
    setDiscount("");
    localStorage.setItem("product", JSON.stringify(res));
    setFilterData(res);
    setShow(true);
  };

  useEffect(() => {
    const product = localStorage.getItem("product");

    if (product) {
      setFilterData(JSON.parse(product));

      setShow(true);
      setDiscount("%50 İndirim");
    }
    localStorage.removeItem("product");
  }, []);

  return (
    <div className="row">
      {data.map((res, key) => (
        <div key={key} className="col-md-4">
          <div
            style={{ backgroundColor: "#ececec" }}
            className="card mt-4 border border-white"
          >
            <img className="card-img" src={res.imageUrl} alt="" />
            <div className="card-body">
              <div className="card-title">
                <h5>
                  <b>Sercair</b>
                </h5>
              </div>
              <div className="card-text">{res.deviceName}</div>
              <div
                className="btn btn-color mt-2 w-100"
                onClick={() => detailsData(res.deviceName)}
              >
                DETAY
              </div>
            </div>
          </div>
        </div>
      ))}

      <div>
        <Modal
          show={show}
          onHide={() => setShow(false)}
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
          className="mt-5 opa"
        >
          <Modal.Body
            className="modal-style"
            style={{ backgroundColor: "#ececec" }}
          >
            <div style={{ backgroundColor: "#ececec" }} className="card mt-4 ">
              <img className="card-img" src={filterData?.imageUrl} alt="" />
              <div className="card-body">
                <div className="card-title">
                  <h5>
                    <b>Sercair</b>
                  </h5>
                </div>
                <div className="card-text">{filterData?.deviceName}</div>
                <div className="card-text">{filterData?.desc}</div>
                <h1 className="card-text text-center mt-1 text-color">
                  {discount}
                </h1>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
}

export default Card;
