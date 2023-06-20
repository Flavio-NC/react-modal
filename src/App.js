import { useState } from "react";
import Modal from "react-modal";
import "./App.css";
import Input from "../src/components/Input";
import Button from "../src/components/Button";


Modal.setAppElement("#root");

function App() {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
 
  return (
    <div className="Container">
      <Button Text="Cadastre-se" onClick={openModal}  />
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        overlayClassName="modal-overlay"
        className="modal-content"
      >
        <Input
          type="text"
          placeholder="Digite seu nome"
        />
        <Input
          type="email"
          placeholder="Digite seu E-mail"
        />
        <Input
          type="password"
          placeholder="Digite sua Senha"/>
      </Modal>
    </div>
  );
}

export default App;
