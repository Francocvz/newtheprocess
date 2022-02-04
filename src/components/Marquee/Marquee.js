import { MarqueeSection } from "./MarqueeStyles";

const Marquee = (props) => {
  return (
    <MarqueeSection>
      <button class="marquee" cursor-type="marquee-btn">
        <div
          class="marquee__inner"
          aria-hidden="true"
          cursor-type="marquee-btn"
        >
          <span cursor-type="marquee-btn">- {props.title}</span>
          <span cursor-type="marquee-btn">- {props.title}</span>
          <span cursor-type="marquee-btn">- {props.title}</span>
          <span cursor-type="marquee-btn">- {props.title}</span>
        </div>
      </button>
    </MarqueeSection>
  );
};
export default Marquee;
