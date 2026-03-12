const FeedbackCard = ({ data }) => {
  return (
    <div className="card feedback-card">

      <div className="top mb-2">
        <h3>{data.name}</h3>
      </div>

      <p className="email">{data.email}</p>

      <div className="badges">
        <span className="badge category">{data.category}</span>
        <span className={`badge priority ${data.priority.toLowerCase()}`}>
          {data.priority}
        </span>
      </div>

      <p className="desc">{data.description}</p>

    </div>
  );
};

export default FeedbackCard;