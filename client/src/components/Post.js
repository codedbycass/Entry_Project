import React, { useState } from "react";

export default function Form({ onNewPost }) {
  const [entryDate, setEntryDate] = useState({});
  const [sleep, setSleep] = useState("");
  const [wake, setWake] = useState("");
  const [reflections, setReflections] = useState("");
  const [movement, setMovement] = useState("");
  const [periodStatus, setPeriodStatus] = useState("");
  const [sexualActivity, setSexualActivity] = useState("");
  const [food, setFood] = useState("");
  const [media, setMedia] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const postData = {
      entryDate: entryDate,
      sleep: sleep,
      wake: wake,
      reflections: reflections,
      movement: movement,
      periodStatus: periodStatus,
      sexualActivity: sexualActivity,
      food: food,
      media: media, 
    };

    fetch("http://localhost:8000/api/createPost", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        //Reset form fields to blank when submitted
        setEntryDate({});
        setSleep("");
        setWake("");
        setReflections("");
        setMovement("");
        setPeriodStatus("");
        setSexualActivity("");
        setFood("");
        setMedia("");
        onNewPost();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Entry Date & Time:
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
        Sleep:
        <input
          type="datetime-local"
          value={sleep}
          name="sleep"
          placeholder="What time did you sleep last night?"
          onChange={(e) => setSleep(e.target.value)}
          required
        />
      </label>
      <label>
        Wake:
        <input
          type="datetime-local"
          value={wake}
          name="wake"
          placeholder="What time did you wake up today"
          onChange={(e) => setWake(e.target.value)}
          required
        />
      </label>
      <label>
        Reflections:
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
        Movement:
        <input
          type="text"
          value={movement}
          name="movement"
          placeholder="How did you move today?"
          onChange={(e) => setMovement(e.target.value)}
          required
        />
      </label>
      <label id="periodStatus">
        <select name="periodStatus" onChange={(e) => setPeriodStatus(e.target.value)}>
          <option value="">Period Status</option>
          <option value="None">None</option>
          <option value="Light">Light</option>
          <option value="Heavy">Heavy</option>
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
      <label>
        What's cooking:
        <input
          type="text"
          value={food}
          name="food"
          onChange={(e) => setFood(e.target.value)}
          required
        />
      </label>
      <label>
        Media?
        <input
          type="text"
          value={media}
          name="media"
          placeholder="Did you read, watch, or listen to anything lately?"
          onChange={(e) => setMedia(e.target.value)}
          required
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
