
import { ServicesData } from "../DummyData/landingParaData";
import "../../../Style/Component/Services/Style.css";

function Services() {
  return (
    <div className="tt">
      <h1 className="head">What's Include</h1>
      <div className="services-grid">

        {ServicesData.map((item) => (
          <div className="someone">

            <h3 >{item.title}</h3>
            <p >{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
