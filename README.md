# GsapWrapper
This class bundles `gsap` methods together for fast use.

> *NOTE:* the `selector` may be an `#id`, `.class`, `tag` as you wish.
All functions return `Tween` / `gsap.timeline()`.
---
## For Native JS:

Requires:
 - https://cdnjs.cloudflare.com/ajax/libs/gsap/3.8.0/gsap.min.js
 - https://cdnjs.cloudflare.com/ajax/libs/gsap/3.8.0/ScrollToPlugi
 - https://cdnjs.cloudflare.com/ajax/libs/gsap/3.8.0/ScrollTrigger
 
     to be imported in the <tt>index.html</tt> beforehand.     
    *(For some reason, this CDN cannot be imported within `.js` files.)*

  
------------------------------------------------
## Import:

#### **Import the provided code to your files:**

<tt>index.html:</tt>
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.8.0/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.8.0/ScrollToPlugin.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.8.0/ScrollTrigger.min.js"></script>
<script src="main.js" type="module"></script>
```

<tt>main.js:</tt>
```js
import {GsapWrapper} from "./gsap/gsap-wrapper.js";

GsapWrapper.fadeUp(".class-name"); // Example of use.
```
------------------------------------------------
