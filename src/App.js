import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useSelector } from "react-redux";

//pages
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";
import { ToastContainer, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const { user } = useSelector((state) => state.user);
  console.log(user);
  const { token } = user;
  console.log(token);
  return (
    <div className="dark">
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={token ? <Home /> : <Navigate to="/login" />}
          />
          <Route
            exact
            path="/login"
            element={!token ? <Login /> : <Navigate to="/" />}
          />
          <Route
            exact
            path="/register"
            element={!token ? <Register /> : <Navigate to="/" />}
          />
        </Routes>
      </Router>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Flip}
        icon
      />
    </div>
  );
}

export default App;
