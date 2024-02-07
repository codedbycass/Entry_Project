import Post from '../components/Post'
import Feed from '../components/Feed'
import Date from '../components/Date'
import { useState, useEffect } from "react"
import Footer from '../components/Footer'
import {
    fetchEntry
} from "../utilities/api"

export default function Home() {
    //display fetches on parent; will be passed down to child (Feed.js)
    const [getEntry, setGetEntry] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
    //make fetch global
    useEffect(() => {
        const fetchData = async () => {
            try {
                const entries = await fetchEntry()
                setGetEntry(entries)
            } catch (error) {
                setError(error)
            } finally {
                setIsLoading(false)
            }
        }
        fetchData()
    }, [])
    const handleNewPost = async () => {
        try {
            const entries = await fetchEntry()
            setGetEntry(entries)
        } catch (error) {
            setError(error)
        }
    }
    if (isLoading) {
    return <p>Loading data...</p>
    }
    if (error) {
    return <p>Error fetching data: {error.message}</p>
    }

    return(
        <div>
            < Post onNewPost={handleNewPost}/>
            < Feed getEntry={getEntry} setGetEntry={setGetEntry}/>
            < Footer />
        </div>
    )
}