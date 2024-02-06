import "../App.css"
import "./SignInBox.css"
import { useState, useEffect } from "react"
import { useNavigate} from "react-router-dom"

export default function SignInBox({}) {
    const navigate = useNavigate()
    const [errorMessage, setErrorMessage] = useState("")
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })
    console.log(formData)
    function handleChange(event) {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }
    async function handleLogin(event) {
        event.preventDefault()
        try {
            console.log("Before fetch")
            const response = await fetch('http://localhost:8000/api/login', {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(formData),
                credentials: "include"
            })
            console.log("After fetch")
            console.log("Response status:", response.status)
            if (response.ok) {
                // const data = await response.json()
                // setIsAuthenticated(true)
                // // console.log("Before navigation")
                // // navigate("/account")
                // // console.log("After navigation")
                // localStorage.setItem('isAuthenticated', 'true')
                navigate("/account")
            } else {
                const errorMessage = await response.text()
                setErrorMessage(`An error occured during sign in: ${errorMessage}`)
            }
        } catch (err) {
            setErrorMessage("An error occured during sign in", err)
        }
    }
    return(
        <div className="signInContainer">
            <h1>Sign in to account</h1>
            <form className="postContainer" onSubmit={handleLogin}>
                <label>
                    Enter email:
                    <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                </label>
                <label>
                    Enter Password:
                    <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    />
                </label>
                <button className="NextBtn">Next →</button>
            </form>
            <h4 className="account">Don't have an account? <span><a href="/signup" className="emphasizeText">Create an account</a></span></h4>
        </div>
    )
}