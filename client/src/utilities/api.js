//FETCH REQS TO BACKEND ENDPOINT

// ------- ENTRY FETCHES ------- //
//CREATE/POST - router.post('/createPost', upload.single("file"), createPost)
export const createPost = async (formData) => {
    try {
        const response = await fetch('http://localhost:8000/api/createPost', {
            method: "POST",
            body: formData,
        })
        if (!response.ok) {
            throw new Error("Network response was notok")
        }
        const data = await response.json()
        return data
    } catch (error) {
        console.error("Error:", error)
        throw error
    }
}
//GET/READ - in Account.js / router.get('getEntries', getEntries)
export const fetchEntry = async () => {
        try {
            const response = await fetch('http://localhost:8000/api/getEntries');
            const data = await response.json();
            return data.entries;
        } catch (error) {
            throw new Error('Failed to fetch entries: ' + error.message);
        }
    }

//DELETE - in Feed.js / router.delete('deleteEntry/:id', deleteEntry)
export const deletePost = async (postId) => {
    try {
        const response = await fetch(`http://localhost:8000/api/deleteEntry/${postId}`, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            credentials: "include"
        });
        if (!response.ok) {
            throw new Error("Failed to delete the post");
        }
    }  catch (error) {
        throw new Error(`There was an error deleting the post: ${error.message}`);
    }
}



// ------- LOGIN FETCHES ------- //
//CREATE/POST - in CreateAccountBox.js
export const postEntry = async (formData) => {
    try {
        const response = await fetch('http://localhost:8000/api/signup', {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(formData),
            credentials: "include"
        })
        if (response.ok) {
            return true
        } 
        else {
            const errorMessage = await response.text()
            throw new Error(`Please try again: ${errorMessage}`)
        }
    } catch (error) {
        throw new Error(`An error occured during signup: ${error}`)
    }
}


