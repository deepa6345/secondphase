import "../../../Style/Component/Slide/Style.css";
function Slide() {
  return (
    <div className="slider">

      <div className="slide active">
        <h2>Complete Auth Flow</h2>
        <p>Beautiful dark/light mode with smooth transitions.</p>
      </div>

      <div className="slide">
        <h2>Fast Performance</h2>
        <p>Optimized code with smooth animations.</p>
      </div>

      <div className="slide">
        <h2>Responsive Design</h2>
        <p>Perfect look on all devices.</p>
      </div>

      <div className="arrows">
        <span className="arrow prev">&#10094;</span>
        <span className="arrow next">&#10095;</span>
      </div>

      <div className="navigation">
        <span className="dot active"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>

    </div>
  );
}

export default Slide;
