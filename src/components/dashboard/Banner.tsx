import min_delivery from "../../assets/images/min_delivery.png";
const Banner = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "74px",
        color: "#ffffff",
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundImage: `url("https://cdn.zeptonow.com/mweb-prod/_next/static/media/eta_normal_sm_bg.5c27a237.png")`,
        fontSize: "20px",
        fontWeight: 600,
        justifyContent: "center",
      }}
    >
      Delivwering in 10 mins
    </div>
  );
};
export default Banner;
