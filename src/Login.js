import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";

function Login() {

    const [usertype, setUsertype] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        const obj = { email: username, password, userType: usertype };
        // console.log(obj);
        axios
            .post("http://localhost:8080/LoginVerify", obj)
            .then((res) => {
                console.log(res);
                if (res.data === "admin") {

                    navigate("/admin");
                    alert("Login successfully");
                }
                if (res.data === "user") {
                    navigate("/user");
                    alert("Login successfully");
                }
            })
            .catch((err) => {
                console.log(err);
                alert(err.data ? err.data : "Failed to login");
            });
    }

    console.log("Hello");
    return (
        <div>

            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">Virtual Plant Store</Navbar.Brand>
                    <Nav className="ms-auto">
                        

                    </Nav>
                </Container>
            </Navbar>
            
            <div className="card p-3 w-50 mx-auto mt-5">
                <h2 className="text-center">Login Page</h2>
                <form onSubmit={handleSubmit}>
                    <label>Select Usertype</label>
                    <select
                        className="form-select text-center"
                        value={usertype}
                        onChange={(e) => setUsertype(e.target.value)}
                        required
                    >
                        <option value="" hidden>
                            Select Usertype
                        </option>
                        <option value="admin">Admin</option>
                        <option value="User">User</option>
                    </select>
                    <label>Enter email</label>
                    <input
                        type="email"
                        className="form-control"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    <label>Enter Password</label>
                    <input
                        type="password"
                        className="form-control"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button className="btn btn-primary" type="submit">
                        login
                    </button>
                </form>
            </div>
        </div>
    );

}
export default Login
