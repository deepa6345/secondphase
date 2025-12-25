import "../../../Style/Component/About/Style.css";

function About() {
  return (
    <section className="info-section">
      <h2>About This Project</h2>

      <p className="description2">
        This comprehensive template is designed for students and developers
        to practice modern web fundamentals—responsive layouts, accessible
        forms, client-side state management, and component architecture.
      </p>

      <div className="feature-list">
        {[...Array(6)].map((_, index) => (
          <div className="feature-box" key={index}>
            Single-file pages you can open directly in any modern browser
          </div>
        ))}
      </div>
    </section>
  );
}

export default About;
