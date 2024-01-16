import React, {useState, useEffect} from "react"

export default function Feed() {
    const [getEntry, setGetEntry] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
    useEffect(() => {
    const fetchEntry = async () => {
        try {
            const response = await fetch(`http://localhost:8000/api/getEntries`) // this fetch displays data from MD
            const data = await response.json()
        setGetEntry(data)
        } catch (error) {
        setError(error)
        } finally {
        setIsLoading(false)
        }
    }
    fetchEntry()
    }, [])
    if (isLoading) {
    return <p>Loading team data...</p>
    }
    if (error) {
    return <p>Error fetching data: {error.message}</p>
    }
    const entryObj = getEntry.entries
    return (
        <div>
            <h1>This is the post feed</h1>
            {entryObj.map((name) => 
                <h2>{name.firstName}</h2>
            )}
        </div>
    )
}