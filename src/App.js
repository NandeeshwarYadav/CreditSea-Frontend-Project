
import {Route,Routes} from "react-router-dom"


import './App.css';
import LoanForm from './components/LoanForm';
import SignUp from './components/SignUp'
import Login from './components/Login'
import UserDashboard from './components/UserDashboard'
import VerifierDashboard from './components/VerifierDashboard'
import ProtectedRoute from './components/ProtectedRoute'
import AdminDashboard from "./components/AdminDashboard";



const App=()=>
   <Routes>
    <Route path="/login" element={<Login/>} />

    <Route path="/signup" element={
      <ProtectedRoute>
        <SignUp />
      </ProtectedRoute>
    } />
    <Route path="/user" element={
      <ProtectedRoute>
        <UserDashboard />
      </ProtectedRoute>
    } />
    <Route path="/verifier" element={
      <ProtectedRoute>
        <VerifierDashboard />
      </ProtectedRoute>
    } />
     <Route path="/admin" element={
      <ProtectedRoute>
        <AdminDashboard />
      </ProtectedRoute>
    } />
    <Route path="/apply-loan" element={
      <ProtectedRoute>
        <LoanForm />
      </ProtectedRoute>
    } />
  

  </Routes>


export default App;
