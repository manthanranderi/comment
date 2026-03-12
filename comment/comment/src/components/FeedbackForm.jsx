import { useState, useEffect } from "react";

const FeedbackForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    category: "",
    priority: "",
    description: "",
  });

  const [errors, setErrors] = useState({});
  const [valid, setValid] = useState(false);

  const validate = () => {
    let err = {};

    if (!formData.name.trim()) err.name = "Name required";

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      err.email = "Valid email required";

    if (!formData.category) err.category = "Select category";

    if (!formData.priority) err.priority = "Select priority";

    if (formData.description.length < 10)
      err.description = "Minimum 10 characters";

    setErrors(err);
    setValid(Object.keys(err).length === 0);
  };

  useEffect(() => {
    validate();
  }, [formData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!valid) return;

    const data = {
      ...formData,
      time: new Date().toLocaleString(),
    };

    onSubmit(data);

    setFormData({
      name: "",
      email: "",
      category: "",
      priority: "",
      description: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <form className="card form" onSubmit={handleSubmit}>

      <h2>Submit Feedback</h2>

      <input
        name="name"
        placeholder="Full Name"
        value={formData.name}
        onChange={handleChange}
      />
      {errors.name && <p className="error">{errors.name}</p>}

      <input
        name="email"
        placeholder="Email Address"
        value={formData.email}
        onChange={handleChange}
      />
      {errors.email && <p className="error">{errors.email}</p>}

      <select
        name="category"
        value={formData.category}
        onChange={handleChange}
      >
        <option value="">Select Category</option>
        <option>Bug</option>
        <option>Suggestion</option>
        <option>Complaint</option>
        <option>Other</option>
      </select>
      {errors.category && <p className="error">{errors.category}</p>}

      <select
        name="priority"
        value={formData.priority}
        onChange={handleChange}
      >
        <option value="">Select Priority</option>
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>
      {errors.priority && <p className="error">{errors.priority}</p>}

      <textarea
        name="description"
        placeholder="Describe your issue"
        rows="4"
        value={formData.description}
        onChange={handleChange}
      />
      {errors.description && <p className="error">{errors.description}</p>}

      <button disabled={!valid}>Submit</button>

    </form>
  );
};

export default FeedbackForm;