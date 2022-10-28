import { useState } from "react";
import UserInformation from "./components/UserInformation";
import SearchContainer from "./components/SearchContainer";
import Cabecera from "./components/Cabecera";
import Swal from "sweetalert2";
import "./App.css";

const App = () => {
  const [inputText, setInputText] = useState("");

  const [user, setUser] = useState(null);

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };
  async function searchUser() {
    try {
      const response = await fetch(`https://api.github.com/users/${inputText}`);
      const data = await response.json();

      if (data.message === "Not Found") {
        Swal.fire("Error", "El usuario que buscas no existe", "error");
        return;
      }
      setUser(data);
      setInputText("");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="container">
      <Cabecera />
      <SearchContainer
        inputText={inputText}
        handleInputChange={handleInputChange}
        searchUser={searchUser}
      />
      {/* Hacer una validacion, el div que siga se muestre siempre y cuando tenga datos */}
      {user && <UserInformation user={user} />}
    </div>
  );
};

export default App;
