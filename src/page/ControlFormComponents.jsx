import React, { useState } from "react";

function FeedbackForm() {
  const [score, setScore] = useState(10);
  const [comments, setComments] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (score <= 5 && comments.length < 10) {
      alert("Please provide a comment of at least 10 characters for scores 5 or below.");
      return;
    }

    console.log("Feedback submitted:", { score, comments });

    // Reset form
    setScore(10);
    setComments("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Score: {score}⭐
          <input
            type="range"
            min="0"
            max="10"
            value={score}
            onChange={(e) => setScore(Number(e.target.value))}
          />
        </label>
      </div>

      <div>
        <label>
          Comments:
          <textarea
            value={comments}
            onChange={(e) => setComments(e.target.value)}
            placeholder="Tell us what you think..."
          />
        </label>
      </div>

      <button type="submit">Submit Feedback</button>
    </form>
  );
}

export default FeedbackForm;