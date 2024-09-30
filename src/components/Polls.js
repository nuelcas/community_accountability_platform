// src/components/Poll.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Polls.css";
import Contact from "./Contact";

const Poll = () => {
  const [polls, setPolls] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");
  // const [selectedPolls, setSelectedPolls] = useState(null);
  const [voted, setVoted] = useState(false);

  useEffect(() => {
    // Fetch all polls from the backend
    const fetchPolls = async () => {
      try {
        const response = await axios.get("https://strawpoll.com/e7ZJa8KmPg3");
        setPolls(response.data);
      } catch (err) {
        console.error("Error fetching polls", err);
      }
    };

    fetchPolls();
  }, []);

  const handleVote = async (pollId) => {
    if (!selectedOption || !pollId) return;
    try {
      await axios.post(`http://localhost:5000/api/polls/${pollId}/vote`, {
        option: selectedOption,
      });
      setVoted(true);
    } catch (err) {
      console.error("Error submitting vote", err);
    }
  };

  return (
    <div className="container">
      <div className="poll-container">
        <h2>Community Polls</h2>
        <p className="polls-mission">
          Your voice matters! At CAP, we encourage community participation
          through transparent polling. Let’s work together to hold leaders
          accountable and make decisions that reflect the community’s needs.
        </p>
        {polls.map((poll) => (
          <div key={poll.id} className="poll-card">
            <h3>{poll.question}</h3>
            <div className="options-container">
              {poll.options.map((option, index) => (
                <div key={index} className="option">
                  <input
                    type="radio"
                    id={`option${index}-${poll.id}`}
                    name={`poll-${poll.id}`}
                    value={option}
                    onChange={(e) => setSelectedOption(e.target.value)}
                  />
                  <label htmlFor={`option${index}-${poll.id}`}>{option}</label>
                </div>
              ))}
            </div>
            <button
              onClick={() => handleVote(poll.id)}
              disabled={voted}
              className={`vote-button ${voted ? "disabled" : ""}`}
            >
              {voted ? "Vote Submitted" : "Submit Vote"}
            </button>
            {voted && <p className="thank-you">Thank you for voting!</p>}
          </div>
        ))}
      </div>
      <Contact />
    </div>
  );
};

export default Poll;
