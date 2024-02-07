import './Feed.css'
import Date from './Date'
import ImagesFeed from './ImgsFeed'
import { deletePost } from '../utilities/api'

export default function Feed({ getEntry, setGetEntry}) {
    const handleDeletePost = async (postId) => {
        try {
            await deletePost(postId)
            setGetEntry((currentPosts) =>
                currentPosts.filter((post) => post._id !== postId)
            )
        } catch (error) {
            console.error(error.message)
        }
    }
    // sort entries by date (recent to oldest)
    const sortedEntries = getEntry.sort((a, b) => b.entryDate.localeCompare(a.entryDate));
    return (
        <div>
            <h1>It's currently <Date /></h1>
        <div className="feedContainer">
            <div className="textContainer">
                {sortedEntries.map((entry) =>
                    <div className="entryPost">
                        <div className="imgDay">
                            <h2 id="entryDate"> ({entry.entryDate})</h2>
                            <img src={entry.image} alt="Daily pic" style={{width: '100%'}}/>
                        </div>
                        <div className="postFormat">
                            <h2 className="sectionHeader">(Reflections)</h2>
                            <p className="entryText">{entry.reflections}</p>
                            <h2 className="sectionHeader">(Movement)</h2>
                            <p className="entryText">{entry.movement}</p>
                            <h2 className="sectionHeader">(Food)</h2> 
                            <p className="entryText">{entry.food}</p>
                            <h2 className="sectionHeader">(Media)</h2> 
                            <p className="entryText">{entry.media}</p>
                            <h2 className="sectionHeader">(Health Stats)</h2>
                            <div className="tabs">
                                    <p>Period: <span className="entryText">{entry.periodStatus}</span></p>
                                    <p>Sex:<span className="entryText">{entry.sexualActivity}</span></p>
                                    <p>Sleep: <span className="entryText">{entry.sleep}</span></p>
                                    <p>Wake: <span className="entryText">{entry.wake}</span></p>
                            </div>
                        </div>
                        <button onClick={() => handleDeletePost(entry._id)}>Delete</button>
                    </div>
                )}
            </div>
            <div className="imgsContainer">
                <ImagesFeed getEntry={getEntry} setGetEntry={setGetEntry} />
            </div>
        </div>
        </div>
    )
}