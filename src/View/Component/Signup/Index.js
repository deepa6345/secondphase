import Header from "../Header/Index";

function Signup() {
  return (
    <div>
      <Header head="Create Your Account" />
      <form>
        <input type="text" placeholder="Username" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}

export default Signup;
