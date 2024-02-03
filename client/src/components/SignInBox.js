import "../App.css"
import "./SignInBox.css"

export default function SignInBox() {
    return(
        <div className="signInContainer">
            <h1>Sign in to account</h1>
            <form className="postContainer">
                <label>
                    Enter email:
                    <input
                    type="email"
                    // name="entryDate"
                    // placeholder="What time did you sleep last night?"
                    // onChange={(e) => setEntryDate(e.target.value)}
                    // required
                />
                </label>
                <label>
                    Enter Password:
                    <input
                    type="password"
                    />
                </label>
                <button type="submit" className="NextBtn">Next →</button>
            </form>
            <h4 className="account">Don't have an account? <span><a href="/signup" className="emphasizeText">Create an account</a></span></h4>
        </div>
    )
}