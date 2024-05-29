import React, { useEffect, useRef } from 'react';
import { TweenMax, TimelineMax, Elastic, Linear, Expo } from 'gsap';
import './Flower.css';  
const LEAF_SVG = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 23.7 51.8" style="enable-background:new 0 0 23.7 51.8;" xml:space="preserve"><path d="M11.8,0c0,0-26.6,24.1,0,51.8C38.5,24.1,11.8,0,11.8,0z"/></svg>';

const Flower = () => {
  const flowerRef = useRef(null);
  const flowerLeavesRef = useRef(null);

  useEffect(() => {
    const Selector = {
      CENTER: '.flower__center',
      LEAF: '.flower__leaf',
      LEAF_INNER: '.flower__leaf-inner',
      LEAVES: '.flower__leaves'
    };
    const ClassName = {
      CENTER: 'flower__center',
      LEAF: 'flower__leaf'
    };

    const flowerElement = flowerRef.current;
    const flowerLeavesElement = flowerLeavesRef.current;
    const numberOfLeaves = 7;
    const rotation = 360 / numberOfLeaves;
    const path = [
      { x: 15, y: 0 },
      { x: 16, y: -1 },
      { x: 17, y: 0 },
      { x: 16, y: 1 },
      { x: 15, y: 0 }
    ];
    const location = { x: path[0].x, y: path[0].y };
    const tn1 = TweenMax.to(location, numberOfLeaves, {
      bezier: { curviness: 1.5, values: path },
      ease: Linear.easeNone
    });

    const addLeaves = () => {
      for (let i = 0; i < numberOfLeaves; i++) {
        const leafElement = document.createElement('div');
        leafElement.className = ClassName.LEAF;
        leafElement.innerHTML = `<div class="flower__leaf-inner">${LEAF_SVG}</div>`;
        tn1.time(i);
        TweenMax.set(leafElement, {
          x: location.x - 11,
          y: location.y - 37,
          rotation: rotation * i - 90
        });
        flowerLeavesElement.appendChild(leafElement);
      }
      animate();
    };

    const animate = () => {
      const leaves = flowerLeavesElement.querySelectorAll(Selector.LEAF_INNER);
      const center = flowerElement.querySelector(Selector.CENTER);
      const timeline = new TimelineMax({
        onComplete: () => {
          timeline.restart(true);
        }
      });
      timeline
        .add(
          TweenMax.fromTo(center, 1, { scale: 0 }, { scale: 1, ease: Elastic.easeOut.config(1.1, 0.75) }),
          0
        )
        .add(
          TweenMax.staggerTo(leaves, 1, { scale: 1, ease: Elastic.easeOut.config(1.1, 0.75) }, 0.2),
          0.3
        )
        .add(TweenMax.to(leaves, 0.3, { scale: 1.25, ease: Elastic.easeOut.config(1.5, 1) }))
        .add(TweenMax.to(flowerLeavesElement, 1, { duration: 1.5, rotation: 360, ease: Expo.easeInOut }), 1.7)
        .add(TweenMax.to(leaves, 0.5, { scale: 0, ease: Elastic.easeInOut.config(1.1, 0.75) }))
        .add(TweenMax.to(center, 0.5, { scale: 0, ease: Elastic.easeInOut.config(1.1, 0.75) }), '-=0.37');
    };

    addLeaves();

    return () => {
      // Cleanup code if needed
    };
  }, []);

  return (
    <div className="flower-body" >
    <div className="flower" ref={flowerRef}>
      <div className="flower__center"></div>
      <div className="flower__leaves" ref={flowerLeavesRef}></div>
    </div>
    </div>
  );
};

export default Flower;
