import FeedbackCard from "./FeedbackCard";

const FeedbackList = ({ feedbacks }) => {

  if (feedbacks.length === 0) {
    return <p className="empty">No feedback submitted yet</p>;
  }

  return (
    <div className="feedback-list">

      <h2>Submitted Feedback</h2>

      {feedbacks.map((item, index) => (
        <FeedbackCard key={index} data={item} />
      ))}

    </div>
  );
};

export default FeedbackList;