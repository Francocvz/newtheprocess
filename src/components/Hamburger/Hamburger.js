import { Hbg } from "./HamburgerStyles";

const Hamburger = (props) => {
  return (
    <Hbg click={props.click}>
      <div className={props.click ? "hbg-container  " : "hbg-container open"}>
        <div className="burger1"></div>
        <div className="burger2"></div>
        <div className="burger3"></div>
      </div>
    </Hbg>
  );
};
export default Hamburger;
