import { useState } from "react";
import styled from "styled-components";

const ModalBackground = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  overflow: auto;
  background-color: #00000067;
  width: 100%;
  height: 100%;
`;

const ModalBox = styled.div`
  margin: 12% auto;
  padding: 24px;
  background-color: wheat;
  width: 50%;
`;

const Modal = ({ children, user, setUser }) => {
  const [show, setShow] = useState(false);
  const { name, id } = user;
  return (
    <>
      <button
        onClick={() => {
          setShow(true);
          setTimeout(() => {
            setUser((prev) => ({ ...prev, name: "Shyam Kumar" }));
          }, 2000);
        }}
      >
        Show Modal
      </button>{" "}
      | {name}
      {show && (
        <ModalBackground onClick={() => setShow(false)}>
          <ModalBox
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <button
              onClick={(e) => {
                setShow(false);
              }}
            >
              Close
            </button>
            <hr />
            {children}
          </ModalBox>
        </ModalBackground>
      )}
    </>
  );
};

export default Modal;
