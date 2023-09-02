const Login = () => {
  return (
    <form>
      <div className="">
        <label>Email:</label>
        <input type="text"></input>
      </div>
      <div className="">
        <label>Password</label>
        <input type="password"></input>
      </div>
      <div className="">
        <button class="text-white bg-black">Login</button>
      </div>
    </form>
  );
};

export default Login;
