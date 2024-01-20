
export default function Feed({ getEntry, setGetEntry}) {
    const deletePost = async (postId) => {
        try {
            const response = await fetch(`http://localhost:8000/api/deleteEntry/${postId}`, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            credentials: "include"
        })
        if (response.ok) {
            // Update local state using setPosts from parent
            setGetEntry((currentPosts) =>
                currentPosts.filter((post) => post._id !== postId)
            )
        } else {
            console.error("Failed to delete the post", await response.json())
        }
        } catch (error) {
        console.error("There was an error deleting the post: ", error)
        }
    }
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
                    <button onClick={() => deletePost(entry._id)}>Delete</button>
                </div>
            )}
        </div>
    )
}