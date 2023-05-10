import logo from "../../assets/images/logo.svg";
const Footer = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          padding: "56px 24px",
          borderTop: "1px solid lightgray",
          marginTop: "56px",
          justifyContent: "space-evenly",
          //  position: "fixed",
          bottom: 0,
          width: "100%",
          left: 0,
        }}
      >
        <div>
          <img src={logo} width={"120px"} />
          <p>© KiranaKart Technologies Private Limited</p>
        </div>
        <div>
          <ul>
            <li>
              <h3>Home</h3>
            </li>
            <li>
              <h3>Delivery Areas</h3>
            </li>
            <li>
              <h3>Careers</h3>
            </li>
            <li>
              <h3>Customer Support</h3>
            </li>
            <li>
              <h3>Press</h3>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <h3>Privacy Policy</h3>
            </li>
            <li>
              <h3>Terms of Use</h3>
            </li>
            <li>
              <h3>Responsible Disclosure Policy</h3>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <h3>Download App</h3>
              <button>Get it on playstore</button>
              <button>Get it on app store</button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
