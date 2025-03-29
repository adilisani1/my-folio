import { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
export default function useLocoScroll(start) {
  useEffect(() => {
    if (!start) return;
    const scrollEl = document.querySelector("#main-content");
    const locoScroll = new LocomotiveScroll({
      el: scrollEl,
      smooth: true,
      multiplier: 1.5,
      class: "is-reveal",
    });
    locoScroll.on("scroll", ScrollTrigger.update);
  }, [start]);
}
