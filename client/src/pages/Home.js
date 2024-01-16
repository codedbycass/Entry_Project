import Navbar from '../components/Navbar'
import Post from '../components/Post'
import Feed from '../components/Feed'
import { useState, useEffect } from "react"

export default function Home() {
    //refresh on submission
    const [refreshPosts, setRefreshPosts] = useState(false)
    const handleNewPost = () => {
      setRefreshPosts(true)
    }
    return(
        <div>
            < Navbar />
            <h1>Hello, User</h1>
            <h2>It is 12:00pm</h2>
            < Post onNewPost={handleNewPost}/>
            < Feed refresh={refreshPosts} setRefresh={setRefreshPosts}/>
        </div>
    )
}