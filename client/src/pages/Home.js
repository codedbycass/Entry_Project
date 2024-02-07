// import Post from '../components/Post'
// import Feed from '../components/Feed'
// import Date from '../components/Date'
import { useState, useEffect } from "react"
import Footer from '../components/Footer'
import HomeParagraph from '../components/HomeParagraph'

export default function Home() {
    return(
        <div className="homeContainer">
            < HomeParagraph />
            < Footer />
        </div>
    )
}