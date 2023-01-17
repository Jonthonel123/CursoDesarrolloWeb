import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Navigate, Link } from "react-router-dom";
import { Box, Button, TextField } from "@mui/material";
import Swal from "sweetalert2";
import "./index.css";

const Login = () => {
  const { login, isAuth } = useContext(AuthContext);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleLogin = () => {
    if (!user.email || !user.password) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Completa el correo y la contraseña",
      });
      return;
    }
    const inicio = login(user.email, user.password);
    if (!inicio) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "usuario o correo invalido",
      });
    }
  };
  if (isAuth()) {
    return <Navigate to={"/"} />;
  }

  return (
    <div className="bg__login">
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <div className="card  p-3" style={{ width: 400 }}>
          <h1 className="text-center">Login</h1>
          <div className="mt-4">
            <Box my={3}>
              <TextField
                mt={3}
                size="small"
                fullWidth
                type="email"
                label="Email"
                onChange={handleInputChange}
                name="email"
                value={user.email}
                id="exampleFormControlInput1"
              />
            </Box>
            <Box>
              <TextField
                mt={3}
                size="small"
                fullWidth
                type="password"
                label="Password"
                onChange={handleInputChange}
                name="password"
                value={user.password}
                id="exampleFormControlInput1"
              />
            </Box>
            <Box my={3}>
              <Button variant="contained" fullWidth onClick={handleLogin}>
                Ingresar
              </Button>
            </Box>
            <Box my={3}>
              <Button
                variant="outlined"
                color="secondary"
                fullWidth
                component={Link}
                to="/signup"
              >
                Registro
              </Button>
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
