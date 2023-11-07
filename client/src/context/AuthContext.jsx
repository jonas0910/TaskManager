import { createContext, useState, useContext, useEffect } from "react";
import { registerRequest, loginRequest, verifyTokenRequest } from "../api/auth";
import Cookies from "js-cookie";
import { set } from "mongoose";

export const AuthContext = createContext();
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within AuthProvider");
    }
    return context;
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [errors, setErrors] = useState([]);
    const [loading, setLoading] = useState(true);

    const signup = async (user) => {
        try {
            const res = await registerRequest(user);
            console.log(res.data);
            setUser(res.data);
            setIsAuthenticated(true);
        } catch (error) {
            console.log(error)
            setErrors(error.response.data);
            setUser(null);
        }
    };

    const signin = async (user) => {
        try {
            const res = await loginRequest(user);
            console.log(res);
            setUser(res.data);
            setIsAuthenticated(true);
        } catch (error) {
            setErrors([error.response.data]);
            setUser(null);
            // if(error.isArray(error.response.data)) {
            //     setErrors(error.response.data);
            // } else {
            //     setErrors([error.response.data]);
            // }
        }
    };

    useEffect(() => {
        if (errors.length > 0) {
            const timer = setTimeout(() => {
                setErrors([]);
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [errors]);

    useEffect(() => {
        async function check() {
            const token = Cookies.get("token");
            if (token) {
                try {
                    const res = await verifyTokenRequest(token);
                    console.log(res.data);
                    if (res.data) {
                        setUser(res.data);
                        setIsAuthenticated(true);
                        setLoading(false);
                    } else {
                        setIsAuthenticated(false);
                        setUser(null);
                        setLoading(false);
                    }
                } catch (error) {
                    setIsAuthenticated(false);
                    setUser(null);
                    setLoading(false);
                }
            } else {
                setIsAuthenticated(false);
                setUser(null);
                setLoading(false);
            }
        }
        check();
    }, []);

    const logout = () => {
        Cookies.remove("token");
        setUser(null);
        setIsAuthenticated(false);
    };
    return (
        <AuthContext.Provider
            value={{
                user,
                signup,
                signin,
                isAuthenticated,
                errors,
                loading,
                logout
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};


