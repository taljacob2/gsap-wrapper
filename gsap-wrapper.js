"use strict";

/**
 * This class bundles `gsap` methods together for fast use.
 *
 * <p>
 * Note: the `selector` may be an `#id`, `.class`, `tag` as you wish.
 * All functions return `Tween` / `gsap.timeline()`.
 * </p>
 *
 *
 * ------------------------------------------------
 *
 * <b>For NPM:</b>
 *
 * @requires `npm install gsap`
 *
 *
 * <b>For example:</b>
 * <p>
 *    <tt>app.component.ts:</tt>
 *    @code {
 *    import {GsapWrapper} from "./gsap/gsap-wrapper.js";
 *
 *    export class AppComponent implements AfterViewInit {
 *
 *      @ViewChild('appSpinner') appSpinner!: ElementRef;
 *      @ViewChild('appHero') appHero!: ElementRef;
 *
 *        ngAfterViewInit(): void {
 *            let gsapWrapper = new GsapWrapper();
 *            gsapWrapper.to(this.appSpinner.nativeElement, {
 *            duration: 2,
 *            zIndex  : 9999,
 *            position: "fixed"
 *            }).to(this.appSpinner.nativeElement, {
 *            duration: 1,
 *            opacity : 0,
 *            zIndex  : 9999,
 *            position: "fixed"
 *            }).onComplete(() => this.appSpinner.nativeElement.remove())
 *              .fadeRightToLeft(this.appHero.nativeElement);
 *        }
 *    }
 *    }
 *
 * </p>
 *
 * <p>
 *    <tt>app.component.html</tt>
 *    @code{
 *
 *          <div #appSpinner>
 *            <app-spinner></app-spinner>
 *          </div>
 *          <div #appHero>
 *            <app-hero></app-hero>
 *          </div>
 *    }
 * </p>
 *
 * ------------------------------------------------
 *
 * <b>For Native JS:</b>
 *
 * @requires https://cdnjs.cloudflare.com/ajax/libs/gsap/3.8.0/gsap.min.js
 *           https://cdnjs.cloudflare.com/ajax/libs/gsap/3.8.0/ScrollToPlugin.min.js
 *   https://cdnjs.cloudflare.com/ajax/libs/gsap/3.8.0/ScrollTrigger.min.js to
 *   be imported in the <tt>index.html</tt> beforehand.
 *           (For some reason, this CDN cannot be imported here...)
 *
 *
 * <b>For example:</b>
 * <p>
 *    <tt>index.html:</tt>
 *    @code {
 *    <script
 *      src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.8.0/gsap.min.js"></script>
 *    <script
 *      src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.8.0/ScrollToPlugin.min.js"></script>
 *    <script
 *      src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.8.0/ScrollTrigger.min.js"></script>
 *    <script src="main.js" type="module"></script>
 *    }
 * </p>
 *
 * <p>
 *    <tt>main.js:</tt>
 *    @code {
 *    import {GsapWrapper} from "./gsap/gsap-wrapper.js";
 *    let gsapWrapper = new GsapWrapper();
 *    gsapWrapper.fadeUp(".class-name");
 *    }
 * </p>
 *
 * ------------------------------------------------
 *
 * @see Guide from gsap 3: https://greensock.com/3-migration/
 */
class GsapWrapper {
    constructor() {
        this.timeline = gsap.timeline();
    }
    onComplete(callBackFunction) {
        this.timeline = this.timeline.to(window, 0, {
            onComplete: callBackFunction
        });
        return this;
    }
    fromTo(targets, vars, position) {
        this.timeline = this.timeline.fromTo(targets, vars, position);
        this.lastSelector = targets;
        return this;
    }
    from(targets, vars, position) {
        this.timeline = this.timeline.from(targets, vars, position);
        this.lastSelector = targets;
        return this;
    }
    to(targets, vars, position) {
        this.timeline = this.timeline.to(targets, vars, position);
        this.lastSelector = targets;
        return this;
    }
    moveLeftToRight(selector) {
        this.timeline = this.timeline.to(selector, { duration: 1, x: 100 });
        this.lastSelector = selector;
        return this;
    }
    fadeDown(selector) {
        this.timeline = this.timeline.from(selector, {
            opacity: 0,
            duration: 1,
            y: -50
        });
        this.lastSelector = selector;
        return this;
    }
    fadeUp(selector) {
        this.timeline = this.timeline.from(selector, {
            opacity: 0,
            duration: 1,
            y: 30
        });
        this.lastSelector = selector;
        return this;
    }
    fadeRightToLeft(selector) {
        this.timeline = this.timeline.from(selector, {
            backgroundPosition: '200px 0px',
            opacity: 0,
            duration: 1,
            x: 100
        });
        this.lastSelector = selector;
        return this;
    }
    fadeOut(selector) {
        this.timeline = this.timeline.to(selector, {
            opacity: 0,
            duration: 0.5
        });
        this.lastSelector = selector;
        return this;
    }
    fadeIn(selector) {
        this.timeline = this.timeline.to(selector, {
            opacity: 0,
            duration: 0
        }).to(selector, {
            opacity: 1,
            duration: 0.5
        });
        this.lastSelector = selector;
        return this;
    }
    /**
     * NOTE: This method adds an <i>attribute</i> to the HTML element, and NOT
     * to the CSS file.
     *
     * For example:
     * when providing a 'cssBackgroundColor' parameter of 'black' this will
     * result with:
     * <pre>
     *    <code>style="background-color: black;"</code>
     * </pre>
     *
     * @param selector for the element.
     * @param cssBackgroundColor the color for the CSS rule of:
     *                           'background-color'.
     * @return this GsapWrapper.
     */
    transitionBackgroundColorViaHTMLStyle(selector, cssBackgroundColor) {
        this.timeline = this.timeline.to(selector, {
            duration: 1,
            backgroundColor: cssBackgroundColor
        });
        this.lastSelector = selector;
        return this;
    }
    /**
     * Special `stagger` for a collection of `selector` elements.
     *
     * @param selector for a collection of elements.
     * @returns {*} this GsapWrapper
     */
    staggerDown(selector) {
        this.timeline = this.timeline.from(selector, {
            opacity: 0,
            duration: 1,
            y: -50,
            stagger: 0.6
        });
        this.lastSelector = selector;
        return this;
    }
    /**
     * Special `stagger` for a collection of `selector` elements.
     *
     * Note: enable `markers` to debug.
     * @param selector for a collection of elements.
     * @returns {*} this GsapWrapper
     */
    staggerScrollTriggerLeftToRight(selector) {
        this.timeline = this.timeline.to(selector, {
            stagger: 0.2,
            duration: 2,
            x: 500,
            ease: "linear",
            scrollTrigger: {
                trigger: selector,
                // markers: true,
                start: "top: 75%",
                end: "bottom: 25%",
                scrub: 4
            }
        });
        this.lastSelector = selector;
        return this;
    }
    /**
     * Special `stagger` for a collection of `selector` elements.
     *
     * Note: enable `markers` to debug.
     * @param selector for a collection of elements.
     * @returns {*} this GsapWrapper
     */
    staggerScrollTriggerFadeInRightToLeft(selector) {
        this.timeline = this.timeline.from(selector, {
            stagger: 0.2,
            opacity: 0,
            duration: 0.5,
            x: 50,
            ease: "linear",
            scrollTrigger: {
                trigger: selector,
                // markers: true,
                start: "top: 75%",
                end: "bottom: 45%",
                scrub: 4
            }
        });
        this.lastSelector = selector;
        return this;
    }
    /**
     * Special `stagger` for a collection of `selector` elements.
     *
     * Note: enable `markers` to debug.
     * @param selector for a collection of elements.
     * @returns {*} this GsapWrapper
     */
    staggerScrollTriggerFadeInLeftToRightWithRotate(selector) {
        this.timeline = this.timeline.from(selector, {
            stagger: 0,
            opacity: 0,
            duration: 0.2,
            x: -100,
            rotate: 7,
            ease: "back",
            scrollTrigger: {
                trigger: selector,
                // markers: true,
                start: "top: 100%",
                end: "bottom: 80%",
                scrub: 5
            }
        });
        this.lastSelector = selector;
        return this;
    }
    /**
     * Start the animation when `selector` enters the viewport (once).
     * Note: enable `markers` to debug.
     */
    scrollTriggerLeftToRight(selector) {
        this.timeline = this.timeline.to(selector, {
            duration: 2,
            x: 500,
            ease: "linear",
            scrollTrigger: {
                trigger: selector,
                // markers: true,
                start: "top: 75%",
                end: "bottom: 25%",
                scrub: 4
            }
        });
        this.lastSelector = selector;
        return this;
    }
    /**
     * Start the animation when `selector` enters the viewport (once).
     * Note: enable `markers` to debug.
     */
    scrollTriggerLeftToRightModerate(selector) {
        this.timeline = this.timeline.to(selector, {
            duration: 0.5,
            x: 100,
            ease: "linear",
            scrollTrigger: {
                trigger: selector,
                // markers: true,
                start: "top: 0",
                end: "bottom: 25%",
                scrub: 4
            }
        });
        this.lastSelector = selector;
        return this;
    }
    scrollToElementById(elementIdToScrollTo) {
        this.timeline = this.timeline.to(window, {
            duration: 1,
            scrollTo: `#${elementIdToScrollTo}`
        });
        this.lastSelector = window;
        return this;
    }
    scrollToHeight(height) {
        this.timeline = this.timeline.to(window, { duration: 1, scrollTo: height });
        this.lastSelector = window;
        return this;
    }
}
exports.GsapWrapper = GsapWrapper;
