import Navbar from '../components/Navbar'
import { useState, useEffect } from "react"

export default function Home() {
  const [getEntry, setGetEntry] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  useEffect(() => {
    const fetchEntry = async () => {
      try {
        const response = await fetch(`http://localhost:8000/api/getEntries`)
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
    return(
        <div>
            < Navbar />
            <h1>This is the actual Home Page</h1>
            {entryObj.map((name) => 
                <h2>{name.firstName}</h2>
            )}
        </div>
    )
}