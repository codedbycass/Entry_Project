import React, { useState } from "react";
import './Post.css'

export default function Form({ onNewPost }) {
  const [entryDate, setEntryDate] = useState("");
  const [sleep, setSleep] = useState("");
  const [wake, setWake] = useState("");
  const [reflections, setReflections] = useState("");
  const [movement, setMovement] = useState("");
  const [periodStatus, setPeriodStatus] = useState("");
  const [sexualActivity, setSexualActivity] = useState("");
  const [food, setFood] = useState("");
  const [media, setMedia] = useState("");
  const [photo, setPhoto] = useState(null);
  
  //toggle for UX
  const [toggle, setToggle] = useState(false) // this is the initial state upon page
  //function to toggle inputs
  const toggleInputs = () => {
    setToggle(!toggle) // Toggle true and false
  }

  //format date
  const formatDate = (dateString) => {
    const date = {year: 'numeric', month: '2-digit', day: '2-digit'}
    return new Date(dateString).toLocaleDateString(undefined, date)
  }
  //format time
  const formatTime = (timeString) => {
    const time = { hour: 'numeric', minute: 'numeric', hour12: true };
    return new Date(`2000-01-01T${timeString}`).toLocaleTimeString(undefined, time);
  };
  //Submit button
  const handleSubmit = (event) => {
    event.preventDefault();
  
  //format before submitting
  const formattedEntryDate = formatDate(entryDate)
  const formattedSleepTime = formatTime(sleep)
  const formattedWakeTime = formatTime(wake)
  // const postData = {
  //   entryDate: entryDate,
  //   sleep: sleep,
  //   wake: wake,
  //   reflections: reflections,
  //   movement: movement,
  //   periodStatus: periodStatus,
  //   sexualActivity: sexualActivity,
  //   food: food,
  //   media: media,
  //   file: photo,
  // };

  const formData = new FormData();
    formData.append('entryDate', formattedEntryDate);
    formData.append('sleep', formattedSleepTime);
    formData.append('wake', formattedWakeTime);
    formData.append('reflections', reflections);
    formData.append('movement', movement);
    formData.append('periodStatus', periodStatus);
    formData.append('sexualActivity', sexualActivity);
    formData.append('food', food);
    formData.append('media', media);
    formData.append('file', photo);

      // Log FormData entries
  for (const entry of formData.entries()) {
    console.log(entry);
  }

    fetch("http://localhost:8000/api/createPost", {
      method: "POST",
      body: formData
      // headers: {
      //   "Content-Type": "application/json",
      // },
      // body: JSON.stringify(postData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        //Reset form fields to blank when submitted
        setEntryDate("");
        setSleep("");
        setWake("");
        setReflections("");
        setMovement("");
        setPeriodStatus("");
        setSexualActivity("");
        setFood("");
        setMedia("");
        setPhoto(null)
        onNewPost();
      })
      .catch((error) => {
        console.error("Error:", error);
      })
  }

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0]
    setPhoto(file)
  }

  return (
    <form onSubmit={handleSubmit} className="postContainer">
      <div className="half">
      <label>
        Today is:
        <input
          type="date"
          value={entryDate}
          name="entryDate"
          placeholder="What time did you sleep last night?"
          onChange={(e) => setEntryDate(e.target.value)}
          required
        />
      </label>
      <label>
        Photo of the day:
        <input
          type="file"
          accept="image/*"
          name="file"
          onChange={handlePhotoUpload}
        />
      </label>
      </div>
      <label>
        Reflect:
        <input
          type="text"
          value={reflections}
          name="reflections"
          placeholder="What are you thinking?"
          onChange={(e) => setReflections(e.target.value)}
          required
        />
      </label>
      <label>
        Move:
        <input
          type="text"
          value={movement}
          name="movement"
          placeholder="How did you move today?"
          onChange={(e) => setMovement(e.target.value)}
          required
        />
      </label>
      <label>
        Taste:
        <input
          type="text"
          value={food}
          name="food"
          placeholder="What did you eat today?"
          onChange={(e) => setFood(e.target.value)}
          required
        />
      </label>
      <label>
        Indulge:
        <input
          type="text"
          value={media}
          name="media"
          placeholder="Did you read, watch, or listen to anything today?"
          onChange={(e) => setMedia(e.target.value)}
          required
        />
      </label>

      <div className="toggleContainer">
      <h3 onClick={toggleInputs}>Add more health stats +</h3>

        { toggle && (
          <>
        <div className="half">
          <label id="periodStatus">
            <select name="periodStatus" onChange={(e) => setPeriodStatus(e.target.value)}>
              <option value="">Period Status</option>
              <option value="None">None</option>
              <option value="Spotty">Spotty</option>
              <option value="Light">Light</option>
              <option value="Medium">Medium</option>
              <option value="Heavy">Heavy</option>
              <option value="Extra Heavy">Extra Heavy</option>
            </select>
          </label>
          <label id="sexualActivity">
            <select name="sexualActivity" onChange={(e) => setSexualActivity(e.target.value)}>
              <option value="">Sexual Activity</option>
              <option value="None">None</option>
              <option value="Solo">Solo</option>
              <option value="Protected">Protected</option>
              <option value="Unprotected">Unprotected</option>
            </select>
            <label/>
          </label>
        </div>
        <div className="half">
          <label>
          Slept at:
          <input
            type="time"
            value={sleep}
            name="sleep"
            placeholder="What time did you sleep last night?"
            onChange={(e) => setSleep(e.target.value)}
            required
          />
          </label>
          <label>
            Woke at:
            <input
              type="time"
              value={wake}
              name="wake"
              placeholder="What time did you wake up today"
              onChange={(e) => setWake(e.target.value)}
              required
            />
          </label>
        </div>
      </>
      )}
      </div>

      <button type="submit" className="submitBtn">Submit</button>
    </form>
  )
}
