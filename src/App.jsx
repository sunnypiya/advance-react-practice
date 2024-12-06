import "./App.css";
import CurrentUser from "./components/current-user";
import Modal from "./components/Modal";
import UserInfo from "./components/user-info";

function App() {
  return (
    <>
      <CurrentUser>
        <Modal>
          <h1>This is my modal</h1>
        </Modal>
        <hr />
        <UserInfo />
      </CurrentUser>
    </>
  );
}

export default App;
