import { Link } from "react-router-dom";

function Button(props) {
  return (
    <button
      style={{
        padding: "8px 15px",
        border: "2px solid #4ECDC4",
        borderRadius: "6px",
        margin: "0 5px",
        cursor: "pointer",
        backgroundColor: props.filled ? "#4ECDC4" : "transparent",
        fontSize: "18px",
      }}
    >
      <Link
        to={props.to}
        style={{
          color: "white",
          textDecoration: "none",
        }}
      >
        {props.btn}
      </Link>
    </button>
  );
}

export default Button;
