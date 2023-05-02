import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { registerThunk } from "../../users/users-thunks";
import { Link, useNavigate } from "react-router-dom";
import { Dropdown } from "semantic-ui-react";
import {
    MDBContainer,
    MDBTabs,
    MDBTabsItem,
    MDBTabsLink,
    MDBTabsContent,
    MDBTabsPane,
    MDBBtn,
    MDBIcon,
    MDBInput,
    MDBCheckbox
}
    from 'mdb-react-ui-kit';

function LoginComponent() {
    // const { currentUser } = useSelector((state) => state.users);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [userType, setUserType] = useState("");
    const [validatePassword, setValidatePassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState(null);
    // const { currentUser } = useSelector((state) => state.users);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userTypeOptions = [
        {
            key: "Student",
            text: "Student",
            value: "STUDENT",
        },
        {
            key: "Professor",
            text: "Professor",
            value: "PROFESSOR",
        },
        {
            key: "Admin",
            text: "Admin",
            value: "ADMIN",
        },
    ];
    const togglePasswordTypeHandler = (lastState) => {
        setShowPassword(!lastState);
    };
    const handleRegisterBtn = () => {
        if (password !== validatePassword) {
            setError("Passwords must match!");
            return;
        } else if (
            username === "" ||
            password === "" ||
            validatePassword === "" ||
            userType === ""
        ) {
            setError("Error! Fields below must be filled!");
            return;
        }
        setError(null);
        console.log("userType is: ", userType);
        const newUser = { username, password, userType };
        // dispatch(registerThunk(newUser)).then((res) => {
        //     console.log(res);
        //     if (res.error) {
        //         setError("Registration failed! Username already exists!");
        //     } else {
        //         navigate("/login");
        //     }
        // });
    };
    const [justifyActive, setJustifyActive] = useState('tab1');

    const handleJustifyClick = (value) => {
        if (value === justifyActive) {
            return;
        }

        setJustifyActive(value);
    };
    return (
        <MDBContainer className="p-3 my-5 d-flex flex-column w-50" style={{backgroundColor: "white"}}>

            <MDBTabs pills justify className='mb-3 d-flex flex-row justify-content-between'>
                <MDBTabsItem>
                    <MDBTabsLink onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'}>
                        Login
                    </MDBTabsLink>
                </MDBTabsItem>
                <MDBTabsItem>
                    <MDBTabsLink onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'}>
                        Register
                    </MDBTabsLink>
                </MDBTabsItem>
            </MDBTabs>

            <MDBTabsContent>

                <MDBTabsPane show={justifyActive === 'tab2'}>
                    <h1>Register</h1>
                    {error && <div className="alert alert-danger">{error}</div>}
                    <div className="d-control">
                        <label htmlFor="userType">User Type</label>
                        <Dropdown
                            placeholder="Please Select Your User Type*"
                            fluid
                            required
                            selection
                            clearable
                            options={userTypeOptions}
                            value={userType}
                            id="userType"
                            onChange={(e, item) => {
                                setUserType(item.value);
                            }}
                        ></Dropdown>
                        <label htmlFor="username">Username</label>
                        <input
                            className="form-control mb-2 d-control-input"
                            value={username}
                            placeholder="Please input a unique username"
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                        <label htmlFor="password">Password</label>
                        <div className="input-group d-control mt-2">
                            <input
                                className="form-control d-control-input"
                                id="password"
                                type={showPassword ? "text" : "password"}
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <div
                                className="btn bg-white"
                                onClick={() => togglePasswordTypeHandler(showPassword)}
                            >
                                {!showPassword ? (
                                    <i className="bi bi-eye-slash"></i>
                                ) : (
                                    <i className="bi bi-eye"></i>
                                )}
                            </div>
                        </div>

                        <label htmlFor="password2">Retype Password</label>
                        <div className="input-group d-control mt-2">
                            <input
                                className="form-control d-control-input"
                                id="password2"
                                type={showPassword ? "text" : "password"}
                                placeholder="Retype password"
                                value={validatePassword}
                                onChange={(e) => setValidatePassword(e.target.value)}
                                required
                            />
                            <div
                                className="btn bg-white"
                                onClick={() => togglePasswordTypeHandler(showPassword)}
                            >
                                {!showPassword ? (
                                    <i className="bi bi-eye-slash"></i>
                                ) : (
                                    <i className="bi bi-eye"></i>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="d-actions">
                        <button
                            onClick={handleRegisterBtn}
                            className="d-actions-button w-100"
                        >
                            Register
                        </button>
                        <Link to="/login">
                            <button type="button" className="d-actions-toggle">
                                Already have an account? Login here
                            </button>
                        </Link>
                    </div>

                    {/*<MDBInput wrapperClass='mb-4' label='Name' id='form1' type='text'/>*/}
                    {/*<MDBInput wrapperClass='mb-4' label='Username' id='form1' type='text'/>*/}
                    {/*<MDBInput wrapperClass='mb-4' label='Email' id='form1' type='email'/>*/}
                    {/*<MDBInput wrapperClass='mb-4' label='Password' id='form1' type='password'/>*/}

                    {/*<div className='d-flex justify-content-center mb-4'>*/}
                    {/*</div>*/}
                    {/*<Form.Group className="py-2" controlId="role">*/}
                    {/*    <Form.Select*/}
                    {/*        defaultValue={role}*/}
                    {/*        onChange={event => setRole(event.target.value)}*/}
                    {/*    >*/}
                    {/*        <option value="student">Student</option>*/}
                    {/*        <option value="professor">Professor</option>*/}
                    {/*    </Form.Select>*/}
                    {/*</Form.Group>*/}
                    {/*<button type="submit"*/}
                    {/*        className="mb-4 w-100 btn btn-primary text-black hero-btn"*/}
                    {/*>*/}
                    {/*    Sign up*/}
                    {/*</button>*/}
                    {/*<MDBBtn className="mb-4 w-100">Sign up</MDBBtn>*/}

                </MDBTabsPane>
                <MDBTabsPane show={justifyActive === 'tab1'}>
                    <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email'/>
                    <div className="input-group d-control mt-4">
                        <input
                            className="form-control d-control-input"
                            type={showPassword ? "text" : "password"}
                            id="password"
                            // onChange={handlePasswordChange}
                            // value={passwordInput}
                            placeholder="Password"
                        />
                        <div
                            className="btn bg-white" style={{borderColor: "#9F8E8E"}}
                            onClick={() => togglePasswordTypeHandler(showPassword)}
                        >
                            {!showPassword ? (
                                <i className="bi bi-eye-slash"></i>
                            ) : (
                                <i className="bi bi-eye"></i>
                            )}
                        </div>
                    </div>
                    {/*<MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password'/>*/}

                    <MDBBtn className="mb-4 w-100">Sign in</MDBBtn>
                    <p className="text-center">Not a member? <a href="#!">Register</a></p>

                </MDBTabsPane>
            </MDBTabsContent>


        </MDBContainer>
    );
}

export default LoginComponent;
