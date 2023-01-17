import Router from "./routes";
import { AuthProvider } from "./context/AuthContext";
import { BookProvider } from "./context/BookContext";
function App() {
  return (
    <AuthProvider>
      <BookProvider>
        <Router />
      </BookProvider>
    </AuthProvider>
  );
}

export default App;
