import React, {useState, useEffect} from "react"

export default function Feed({ getEntry, setGetEntry}) {
    
    return (
        <div>
            <h1>This is the post feed</h1>
            {getEntry.map((entry) => 
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