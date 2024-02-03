import "../App.css"
import "./SignInBox.css"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function CreateAccountBox() {
    const navigate = useNavigate()
    const [errorMessage, setErrorMessage] = useState("")
    const handleSignUp = async (e) => {
        e.preventDefault()
        const formData = {
            username: e.target.username.value,
            email: e.target.email.value,
            password: e.target.password.value,
            confirmPassword: e.target.confirmPassword.value
        }
        try {
            const response = await fetch('https://localhost:3000/signup', {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
                credentials: "include"
            })
            if (response.ok) {
                navigate("/")
                window.location.reload()
            } else {
                const data = await response.json()
                if (data.errors) {
                const errorMsg = data.errors.map((error) => error.msg).join(", ")
                setErrorMessage(errorMsg)
            }
            }
        } catch (err) {
            setErrorMessage("An error occurred during signup. Please try again.")
            console.error("An error occurred during signup:", err)
        }
        }
    return(
            <div className="createAccountContainer">
            <h1>Create an account</h1>
            <form 
                className="postContainer" 
                onSubmit={handleSignUp}
                method="POST"
                action="http://localhost:3000/signup"
                >
                <label>
                    Username:
                    <input
                    type="text"
                    name="username"
                    />
                </label>
                <label>
                    Email:
                    <input
                    type="email"
                    name="email"
                    required
                />
                </label>
                <label>
                    Password:
                    <input
                    type="password"
                    name="password"
                    required
                    />
                </label>
                <label>
                    Confirm Password:
                    <input
                    type="password"
                    name="password"
                    required
                    />
                </label>
                <button type="submit" className="NextBtn">Next →</button>
            </form>
            <h4 className="account">Already have an account? <span ><a href="/signup" className="emphasizeText">Login</a></span></h4>
        </div>
    )
}