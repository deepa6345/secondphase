import "../../../Style/Component/Header/Style.css";

function Header({ head, className, }) {
  return (
    <div className={className}>
      <h1>{head}</h1>
      {/* <h1>{title}</h1> */}

    </div>
  );
}

export default Header;
