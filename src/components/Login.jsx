const Login = () => {
  return (
    // <form action="" className="form-login">
    //   <div className="form-group">
    //     <h3 className="form-title"> Login</h3>
    //   </div>
    //   <div className="form-group">
    //     <label htmlFor="" className="form-label">Email</label>
    //     <input type="text" className="form-input" />
    //   </div>
    //   <div className="form-group">
    //     <label htmlFor="" className="form-label">Password</label>
    //     <input type="password" className="form-input"  />
    //   </div>
    //   <div className="form-group">
    //     <a href="" className="form-register-link">Register Now</a>
    //   </div>
    //   <div className="form-button">
    //     <button className="button">Login</button>
    //   </div>
    // </form>
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
