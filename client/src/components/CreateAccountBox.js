import "../App.css"
import "./SignInBox.css"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { postEntry } from "../utilities/api"

export default function CreateAccountBox() {
    const navigate = useNavigate()
    const [errorMessage, setErrorMessage] = useState("")
    const [formData, setFormData] = useState({
        username: "", 
        email: "", 
        password: "",
        confirmPassword: ""}
    )
    console.log(formData)
    function handleChange(event) {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }

    async function handleSignUp(event) {
        event.preventDefault()
        console.log(formData)
        try {
            await postEntry(formData)
            navigate("/login")
        } catch (error) {
            setErrorMessage(error.message)
        }
    }

    return(
            <div className="createAccountContainer">
            <h1>Create an account</h1>
            <form className="postContainer" onSubmit={handleSignUp}>
                <label>
                    Username:
                    <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Email:
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                />
                </label>
                <label>
                    Password:
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Confirm Password:
                    <input
                        type="password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                    />
                </label>
                <button className="NextBtn">Submit →</button>
            </form>
            { errorMessage && <p>{errorMessage}</p>}
            <h4 className="account">Already have an account? <span ><a href="/login" className="emphasizeText">Login</a></span></h4>
        </div>
    )
    }