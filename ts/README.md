# GsapWrapper

## For NPM:

Requires `npm install gsap`
  
  
  **For example (Angular):**
  
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
  
