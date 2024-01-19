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
            {entryObj.map((entry) => 
                <div>
                    <h2>Date Entered: {entry.entryDate}</h2>
                    <h2>Sleep: {entry.sleep}</h2>
                    <h2>Wake: {entry.wake}</h2>
                    <h2>Reflections: {entry.reflections}</h2>
                    <h2>Movement: {entry.movement}</h2>
                    <h2>Period Status: {entry.periodStatus}</h2>
                    <h2>Sexual Activity: {entry.sexualActivity}</h2>
                    <h2>Food: {entry.food}</h2>
                    <h2>Media: {entry.media}</h2>
                </div>
            )}
        </div>
    )
}