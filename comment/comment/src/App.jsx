import { useState } from "react";
import FeedbackForm from "./components/FeedbackForm";
import  FeedbackList from "./components/FeedbackList";
import "./App.css";

const App = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  const addFeedback = (data) => {
    setFeedbacks([data, ...feedbacks]);
  };

  return (
    <div className="container">
      <FeedbackForm onSubmit={addFeedback} />
      <FeedbackList feedbacks={feedbacks} />
    </div>
  );
};

export default App;