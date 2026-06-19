function FeedbackForm() {
  return (
    <section className="card">
      <h2>Feedback Form</h2>

      <form className="form">
        <input type="text" placeholder="Your Name" />

        <input type="email" placeholder="Email Address" />

        <select>
          <option>Excellent</option>
          <option>Good</option>
          <option>Average</option>
        </select>

        <textarea
          rows="5"
          placeholder="Write your feedback..."
        ></textarea>

        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default FeedbackForm;