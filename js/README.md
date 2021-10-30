# GsapWrapper

## For Native JS:
  
  Requires:
   - https://cdnjs.cloudflare.com/ajax/libs/gsap/3.8.0/gsap.min.js
   - https://cdnjs.cloudflare.com/ajax/libs/gsap/3.8.0/ScrollToPlugin.min.js
   - https://cdnjs.cloudflare.com/ajax/libs/gsap/3.8.0/ScrollTrigger.min.js
   
       to be imported in the <tt>index.html</tt> beforehand.     
      *(For some reason, this CDN cannot be imported within `.js` files.)*
     
  ### Import:
  
  #### **Import the provided code to your files:**
  
  `index.html:`
  ```html
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.8.0/gsap.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.8.0/ScrollToPlugin.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.8.0/ScrollTrigger.min.js"></script>
  <script src="main.js" type="module"></script>
  ```
  
  `main.js:`
  ```js
  import {GsapWrapper} from "./gsap/gsap-wrapper.js";
  let gsapWrapper = new gsapWrapper();
  gsapWrapper.fadeUp(".class-name"); // Example of use.
  ```
