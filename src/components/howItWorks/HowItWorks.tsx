const HowItWorks = () => {
  return (
    <div style={{ marginTop: "48px" }}>
      <p style={{ textAlign: "center", marginBottom: "24px" }}>How It Works</p>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <div
          style={{
            width: "320px",
            boxShadow: "0 20px 10px rgba(0,0,0,.12)",
            border: "1px solid rgba(43,30,53,.1)",
            padding: "16px 48px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            borderRadius: "8px",
          }}
        >
          <img
            src={
              "https://cdn.zeptonow.com/mweb-prod/images/pdp/place-order.svg"
            }
            width={"104px"}
            style={{
              color: "transparent",
              objectFit: "contain",
              overflow: "hidden",
              margin: "auto",
            }}
          />
          <div style={{ textAlign: "center" }}>
            <h3 style={{ fontSize: "20px", marginBottom: "8px" }}>
              Place an order
            </h3>
            <p style={{ fontSize: "14px" }}>
              Choose from a wide range of daily essentials
            </p>
          </div>
        </div>
        <div
          style={{
            width: "320px",
            boxShadow: "0 20px 10px rgba(0,0,0,.12)",
            border: "1px solid rgba(43,30,53,.1)",
            padding: "16px 48px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            borderRadius: "8px",
          }}
        >
          <img
            src={
              "https://cdn.zeptonow.com/mweb-prod/images/pdp/do-not-blink.svg"
            }
            width={"104px"}
            style={{
              color: "transparent",
              objectFit: "contain",
              overflow: "hidden",
              margin: "auto",
            }}
          />
          <div style={{ textAlign: "center" }}>
            <h3 style={{ fontSize: "20px", marginBottom: "8px" }}>
              Don’t Blink
            </h3>
            <p style={{ fontSize: "14px" }}>
              Our delivery partner will be at your door
            </p>
          </div>
        </div>
        <div
          style={{
            width: "320px",
            boxShadow: "0 20px 10px rgba(0,0,0,.12)",
            border: "1px solid rgba(43,30,53,.1)",
            padding: "16px 48px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            borderRadius: "8px",
          }}
        >
          <img
            src={"https://cdn.zeptonow.com/mweb-prod/images/pdp/enjoy.svg"}
            width={"104px"}
            style={{
              color: "transparent",
              objectFit: "contain",
              overflow: "hidden",
              margin: "auto",
            }}
          />
          <div style={{ textAlign: "center" }}>
            <h3 style={{ fontSize: "20px", marginBottom: "8px" }}>Enjoy</h3>
            <p style={{ fontSize: "14px" }}>
              Boom! You’ll never have to wait for groceries again
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
