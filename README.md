# GsapWrapper
This class bundles `gsap` methods together for fast use.

> *NOTE:* the `selector` may be an `#id`, `.class`, `tag` as you wish.
All functions return `Tween` / `gsap.timeline()`.


- ## For NPM:

   Requires `npm install gsap`
  
  
  **For example:**
  
  `app.component.ts:`
  ```ts
  import {GsapWrapper} from "./gsap/gsap-wrapper.js";
  
  export class AppComponent implements AfterViewInit {
    
      @ViewChild('appSpinner') appSpinner!: ElementRef;
      @ViewChild('appHero') appHero!: ElementRef;
      
      ngAfterViewInit(): void {
          let gsapWrapper = new GsapWrapper();
          gsapWrapper.to(this.appSpinner.nativeElement, {
          duration: 2,
          zIndex  : 9999,
          position: "fixed"
          }).to(this.appSpinner.nativeElement, {
          duration: 1,
          opacity : 0,
          zIndex  : 9999,
          position: "fixed"
          }).onComplete(() => this.appSpinner.nativeElement.remove())
            .fadeRightToLeft(this.appHero.nativeElement);
    
      }
  }
  ```  
   
  `app.component.html:`
  ```html
  <div #appSpinner>
    <app-spinner></app-spinner>
  </div>
  <div #appHero>
   <app-hero></app-hero>
  </div>
  ```  
  
---

- ## For Native JS:
  
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
  
  GsapWrapper.fadeUp(".class-name"); // Example of use.
  ```
