import React, {useContext, lazy, Suspense} from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { UserContext } from '@shared/contexts/user.context';

// const NavBar = lazy(() => import('../HomePage/Navbar'));
const Layout = lazy(() => import('@shared/layout/layout.component'));
const Login = lazy(() => import('../login/Login'));
const Register = lazy(() => import('../Register/Register'));
const FileUpload = lazy(() => import('../FileUpload/FileUpload'));
const Dashboard = lazy(() => import('../Dashboard/Dashboard'));
const Department= lazy(() => import('../Department/Department'));
const Reports = lazy(() => import('../Reports/Reports'));
const Productwise = lazy(() => import('../ProductWiseTime/Productwise'));
const BranchWiseTime = lazy(()=> import('../BranchWiseTime/BranchWiseTime'));

const RouterLinks = ()=>{
    const { currentUser } = useContext(UserContext);

    return (
        <>
        <Suspense>
            <Router>
                <Routes>
                    {/* LOGIN PAGE */}
                    <Route index element={!currentUser ? <Login />: <Navigate to="/home" replace />}></Route>

                    {/* SIGNUP PAGE */}
                    <Route path="register" element={!currentUser ? <Register />: <Navigate to="/home" replace />}></Route>
                
                    <Route path="/" element={ <Layout /> }>
                        
                        {/* HOME/DASHBOARD PAGE */}
                        <Route path="home" element={ currentUser ? <Dashboard />: <Navigate to="/" replace /> }></Route>

                        {/* TIMESHEET PAGE */}
                        <Route path="timesheet" element={ currentUser ? <BranchWiseTime/>: <Navigate to="/" replace /> }></Route>

                        {/* TIMESHEET PAGE */}
                        <Route path="productwise" element={ currentUser ? <Productwise/>: <Navigate to="/" replace /> }></Route>

                        {/* FILE UPLOAD PAGE */}
                        <Route path="fileupload" element={ currentUser ? <FileUpload />: <Navigate to="/" replace /> }></Route>

                        {/* DASHBOARD PAGE */}
                        <Route path="department" element={ currentUser ? <Department/>: <Navigate to="/" replace /> }></Route>

                        {/* REPORTS PAGE */}
                        <Route path="reports" element={ currentUser ? <Reports/>: <Navigate to="/" replace /> }></Route>
                        
                    </Route>
                    
                </Routes>
            </Router>
        </Suspense>
        </>
    )
}

export default RouterLinks;