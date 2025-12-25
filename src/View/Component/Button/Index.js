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
        {props.btn1}

      </Link>
       {props.text}
    </button>
  );
}

export default Button;

// import { Link } from "react-router-dom";

// function Button({ btn, to, className }) {
//   return (
//     <Link to={to} className={className}>
//       {btn}
//     </Link>
//   );
// }

// export default Button;
