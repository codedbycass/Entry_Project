import Navbar from '../components/Navbar'
import Post from '../components/Post'
import Feed from '../components/Feed'
import { useState, useEffect } from "react"

export default function Home() {
    //display fetches on parent; will be passed down to child (Feed.js)
    const [getEntry, setGetEntry] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
    //make fetch global
    useEffect(() => {
        fetchEntry()
    }, [])

    const fetchEntry = async () => {
        try {
            const response = await fetch(`http://localhost:8000/api/getEntries`) // this fetch displays data from MD
            const data = await response.json()
        setGetEntry(data.entries)
        } catch (error) {
        setError(error)
        } finally {
        setIsLoading(false)
        }
    }
    if (isLoading) {
    return <p>Loading team data...</p>
    }
    if (error) {
    return <p>Error fetching data: {error.message}</p>
    }

    const handleNewPost = () => {
        fetchEntry()
    }

    return(
        <div>
            < Navbar />
            <h1>Hello, User</h1>
            <h2>It is 12:00pm</h2>
            < Post onNewPost={handleNewPost}/>
            < Feed getEntry={getEntry} setGetEntry={setGetEntry}/>
        </div>
    )
}