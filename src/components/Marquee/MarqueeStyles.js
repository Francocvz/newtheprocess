import styled from "styled-components";

export const MarqueeSection = styled.div`
  .marquee {
    position: relative;
    --offset: 20vw;
    --move-initial: calc(-25% + var(--offset));
    --move-final: calc(-50% + var(--offset));
    background: none;
    border: none;
    box-shadow: none;
  }

  .marquee__inner {
    width: fit-content;
    display: flex;
    position: relative;
    transform: translate3d(var(--move-initial), 0, 0);
    animation: marquee 15s linear infinite;
  }

  .marquee span {
    font-size: 5rem;
    font-weight: 900;
    padding: 0 2vw;
    white-space: nowrap;
    color: orange;
  }

  @keyframes marquee {
    0% {
      transform: translate3d(var(--move-initial), 0, 0);
    }

    100% {
      transform: translate3d(var(--move-final), 0, 0);
    }
  }
`;
