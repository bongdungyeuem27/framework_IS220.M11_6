import React, { useState, useEffect } from "react";
import * as trademarkApi from "../../apis/trademark";
import Item from "./Item";
import _ from "lodash";
import "./style.css";
import AddModal from "./AddModal";
import Cookies from "universal-cookie";
import LoadingContainer from "../../../Common/helper/loading/LoadingContainer";

const cookie = new Cookies();

export default function Index(props) {
  const [showModal, setShowModal] = useState(false);
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  function closeModal() {
    setShowModal(false);
  }
  function openModal() {
    setShowModal(true);
  }

  async function loadtrademark() {
    setLoading(true);
    var token = cookie.get("token");
    var refreshtoken = cookie.get("refreshtoken");
    await trademarkApi
      .allTrademark(token, refreshtoken)
      .then((success) => {
        if (success.status === 200) {
          setList(success.data.value.$values);
        }
      })
      .catch((error) => {
        console.error(error);
      });
    setLoading(false);
  }

  useEffect(() => {
    // Update the document title using the browser API
    loadtrademark();
  }, []);

  async function editFunction(trademark) {
    var listtemp = list;
    _.remove(listtemp, (n) => {
      return n.mathuonghieu === trademark.mathuonghieu;
    });

    listtemp.push(trademark);

    await setList(listtemp);
  }

  async function addFunction(trademark) {
    var listtemp = list;

    listtemp.push(trademark);

    await setList(listtemp);
  }

  async function deleteFunction(trademark) {
    var listtemp = list;

    _.remove(listtemp, (n) => {
      return n.mathuonghieu === trademark.mathuonghieu;
    });
    await setList(listtemp);
  }

  return (
    <main className="main-content position-relative border-radius-lg left-menu">
      <AddModal
        showModal={showModal}
        closeModal={closeModal}
        addFunction={addFunction}
      ></AddModal>
      <LoadingContainer loading={loading}></LoadingContainer>
      {/* End Navbar */}
      <div className="container-fluid py-4">
        <div className="row">
          <div className="col-12">
            <div className="card my-4">
              <div className="card-header p-0 position-relative mt-n4 mx-3">
                <div className="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3">
                  <h6 className="text-white text-capitalize ps-3 danhsachsanpham-title">
                    Danh sách thương hiệu
                  </h6>
                  <button
                    className="btn bg-gradient-dark mb-0 mt-4 add-khachhang-button"
                    onClick={openModal}
                  >
                    + Thêm thương hiệu
                  </button>
                </div>
              </div>
              <div className="card-body px-0 pb-2">
                <div className="table-responsive p-0">
                  <table className="table align-items-center mb-0">
                    <thead>
                      <tr>
                        <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                          <b>Ảnh</b>
                        </th>
                        <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                          <b>Tên thương hiệu</b>
                        </th>
                        <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                          <b>Xuất xứ</b>
                        </th>
                        <th className="text-secondary opacity-7" />
                      </tr>
                    </thead>
                    <tbody>
                      {(function () {
                        var result = null;
                        result = list.map((value, key) => {
                          return (
                            <Item
                              trademark={value}
                              key={key}
                              addFunction={addFunction}
                              deleteFunction={deleteFunction}
                              editFunction={editFunction}
                            ></Item>
                          );
                        });
                        return result;
                      })()}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
