import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/Register";
import LoginPage from "./pages/LoginPage";
import { AuthProvider } from "./context/AuthContext";
import { TaskProvider } from "./context/TaskContext";
import TasksPage from "./pages/TasksPage";
import TaskFormPage from "./pages/TaskFormPage";
import ProfilePage from "./pages/ProfilePage";
import HomePage from "./pages/HomePage";
import ProtectedRoute from "./ProtectedRoute";
import NavBar from "./components/NavBar";

function App() {
  
  return (
    <div>
      <AuthProvider>  
        <TaskProvider>
          <BrowserRouter>
            <main className="container mx-auto px-10">
            <NavBar/>
            <Routes>
              <Route path="/" element={<HomePage/>} />
              <Route path="/login" element={<LoginPage/>} />
              <Route path="/register" element={<RegisterPage/>} />
              <Route element={<ProtectedRoute/>}>
                <Route path="/tasks" element={<TasksPage/>} />
                <Route path="/add-task" element={<TaskFormPage/>} />
                <Route path="/task/:id" element={<TaskFormPage/>} />
                <Route path="/profile" element={<ProfilePage/>} />
              </Route>
            </Routes>
            </main>
          </BrowserRouter>
        </TaskProvider>
      </AuthProvider>
      
    </div>
  );
}

export default App;
