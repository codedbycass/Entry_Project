export default function ImagesFeed({ getEntry, setGetEntry }) {
    return (
    <div>
        {getEntry && getEntry.map((entry) => 
        <div key={entry._id}>
            <img src={entry.image} alt="Daily pic" />
        </div>
        )}
    </div>
    )
}
