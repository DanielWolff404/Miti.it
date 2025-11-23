import { performanceImages, performanceImgPositions } from "../constants/index.js";
import { useGSAP } from "@gsap/react"
import { gsap } from "gsap"
import { useRef } from "react"
import { useMediaQuery } from "react-responsive"
import { ScrollTrigger } from "gsap/ScrollTrigger"






const Performance = () => {

  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });
  const sectionRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
  // text animation
  gsap.fromTo(
    ".content p",
    { opacity : 0, y: 50 },
    {
      opacity: 1,
      y:0,
      duration: 1.5 ,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".content",
        start: "top 80%",
        end: "bottom 20%",
        scrub: true,
        invalidateOnRefresh: true,
      },
    }
  );

  // images animation
if(isMobile) return;

 const tl = gsap.timeline ({
      defaults: { ease: "power1.inOut", duration: 2, overwrite: "auto" },
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "center top",
        scrub: 1,
        invalidateOnRefresh: true,
      },
    });


  performanceImgPositions.forEach((pos) => {

    if(pos.id === "p5") return;

   
    const toVars = {};

    if(pos.left !== undefined) toVars.left = `${pos.left}%`;
    if(pos.right !== undefined) toVars.right = `${pos.right}%`;
    if(pos.bottom !== undefined) toVars.bottom = `${pos.bottom}%`;
    if(pos.transform !== undefined) toVars.transform = pos.transform;

 tl.to(`.${pos.id}`, toVars, 0 );


  });



  }, {scope:sectionRef, dependencies: [isMobile] } );





  return (
    <section id="performance" ref={sectionRef}>
      <h2>Next-level graphics performance. Game on.</h2>

      <div className="wrapper">
        {performanceImages.map(({id,src}) => (
          <img className={`performance-img ${id}`}
           src={src} 
           alt={id} 
           key={id} />
        ))}
      </div>

      <div className="content">
        <p>
          Run graphics-intensive workflows with a responsiveness that keeps up with your imagination. The M4 family of chips features a GPU with a second-generation hardware-accelerated ray tracing engine that renders images faster,
          {""}<span className="text-white">so gaming feels more immersive and realistic than ever.</span>{""}
           
            And Dynamic Caching optimizes fast on-chip memory to dramatically increase average GPU utilization — driving a huge performance boost for the most demanding pro apps and games.</p>


      </div>

    </section>
  )
}

export default Performance
