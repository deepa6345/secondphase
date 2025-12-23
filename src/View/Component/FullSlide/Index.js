import Header from "../Header/Index";
import Paragraph from "../Paragraph/Index";
import Slide from "../Slide/Index";
import "../../../Style/Component/FullSlide/Style.css";
function FullSlide() {
  return (
    <div style={{ display: "flex", padding: "3rem", gap: "1rem" }}>
      <div>
        <Header head="Launch your Web Tech practice site in minutes"className="mheader"/>

        <Paragraph
          p="A clean, modern starter template with Login, Signup, Dashboard, Profile and Logout pages using only HTML/CSS/JS and browser localStorage. Perfect for learning and practicing web development fundamentals."
        />
      </div>

      <div>
        <Slide />
      </div>
    </div>
  );
}

export default FullSlide;
