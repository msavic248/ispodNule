// src/utils/gsap.js
import gsap from 'gsap';

// If you plan to use GSAP plugins (e.g., ScrollTrigger, Draggable, Flip, etc.),
// import them here and register them with GSAP.
//
// Example for ScrollTrigger:
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// gsap.registerPlugin(ScrollTrigger);
//
// Example for Flip:
// import { Flip } from 'gsap/Flip';
// gsap.registerPlugin(Flip);

// You can also set any global GSAP defaults here if needed.
// For example:
// gsap.defaults({
//   duration: 0.5,
//   ease: 'power2.out'
// });

// Export the configured GSAP instance
export default gsap;

// If you registered plugins and want components to import them specifically,
// you can export them too:
// export { gsap, ScrollTrigger, Flip };
