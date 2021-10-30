import {gsap} from 'gsap';
import {CSSPlugin, ScrollTrigger} from 'gsap/all';


// Force plugin registrations to not get dropped during build
gsap.registerPlugin(CSSPlugin, ScrollTrigger);

/**
 * This class bundles `gsap` methods together for fast use.
 * @author Tal Jacob
 */
export class GsapWrapper {

    private timeline!: gsap.core.Timeline;

    /** Not required. */
    private lastSelector!: any;

    constructor() {
        this.timeline = gsap.timeline();
    }

    public onComplete(callBackFunction: any): GsapWrapper {
        this.timeline = this.timeline.to(window, 0, {
            onComplete: callBackFunction
        });
        return this;
    }

    public fromTo(targets: any, vars: any, position?: any): GsapWrapper {
        this.timeline = this.timeline.fromTo(targets, vars, position);
        this.lastSelector = targets;
        return this;
    }

    public from(targets: any, vars: any, position?: any): GsapWrapper {
        this.timeline = this.timeline.from(targets, vars, position);
        this.lastSelector = targets;
        return this;
    }

    public to(targets: any, vars: any, position?: any): GsapWrapper {
        this.timeline = this.timeline.to(targets, vars, position);
        this.lastSelector = targets;
        return this;
    }

    public moveLeftToRight(selector: any): GsapWrapper {
        this.timeline = this.timeline.to(selector, {duration: 1, x: 100});
        this.lastSelector = selector;
        return this;
    }

    public fadeDown(selector: any): GsapWrapper {
        this.timeline = this.timeline.from(selector, {
            opacity : 0,
            duration: 1,
            y       : -50
        });
        this.lastSelector = selector;
        return this;
    }

    public fadeUp(selector: any): GsapWrapper {
        this.timeline = this.timeline.from(selector, {
            opacity : 0,
            duration: 1,
            y       : 30
        });
        this.lastSelector = selector;
        return this;
    }

    public fadeRightToLeft(selector: any): GsapWrapper {
        this.timeline = this.timeline.from(selector, {
            backgroundPosition: '200px 0px',
            opacity           : 0,
            duration          : 1,
            x                 : 100
        });
        this.lastSelector = selector;
        return this;
    }

    public fadeOut(selector: any): GsapWrapper {
        this.timeline = this.timeline.to(selector, {
            opacity : 0,
            duration: 0.5
        });
        this.lastSelector = selector;
        return this;
    }

    public fadeIn(selector: any): GsapWrapper {
        this.timeline = this.timeline.to(selector, {
            opacity : 0,
            duration: 0
        }).to(selector, {
            opacity : 1,
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
    public transitionBackgroundColorViaHTMLStyle(selector: any,
                                                 cssBackgroundColor: string): GsapWrapper {
        this.timeline = this.timeline.to(selector, {
            duration       : 1,
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
    public staggerDown(selector: any): GsapWrapper {
        this.timeline = this.timeline.from(selector, {
            opacity : 0,
            duration: 1,
            y       : -50,
            stagger : 0.6
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
    public staggerScrollTriggerLeftToRight(selector: any): GsapWrapper {
        this.timeline = this.timeline.to(selector, {
            stagger      : 0.2,
            duration     : 2,
            x            : 500,
            ease         : "linear",
            scrollTrigger: {
                trigger: selector,
                // markers: true,
                start  : "top: 75%",
                end    : "bottom: 25%",
                scrub  : 4
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
    public staggerScrollTriggerFadeInRightToLeft(selector: any): GsapWrapper {
        this.timeline = this.timeline.from(selector, {
            stagger      : 0.2,
            opacity      : 0,
            duration     : 0.5,
            x            : 50,
            ease         : "linear",
            scrollTrigger: {
                trigger: selector,
                // markers: true,
                start  : "top: 75%",
                end    : "bottom: 45%",
                scrub  : 4
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
    public staggerScrollTriggerFadeInLeftToRightWithRotate(selector: any): GsapWrapper {
        this.timeline = this.timeline.from(selector, {
            stagger      : 0,
            opacity      : 0,
            duration     : 0.2,
            x            : -100,
            rotate       : 7,
            ease         : "back",
            scrollTrigger: {
                trigger: selector,
                // markers: true,
                start  : "top: 100%",
                end    : "bottom: 80%",
                scrub  : 5
            }
        });
        this.lastSelector = selector;
        return this;
    }

    /**
     * Start the animation when `selector` enters the viewport (once).
     * Note: enable `markers` to debug.
     */
    public scrollTriggerLeftToRight(selector: any): GsapWrapper {
        this.timeline = this.timeline.to(selector, {
            duration     : 2,
            x            : 500,
            ease         : "linear",
            scrollTrigger: {
                trigger: selector,
                // markers: true,
                start  : "top: 75%",
                end    : "bottom: 25%",
                scrub  : 4
            }
        });
        this.lastSelector = selector;
        return this;
    }

    /**
     * Start the animation when `selector` enters the viewport (once).
     * Note: enable `markers` to debug.
     */
    public scrollTriggerLeftToRightModerate(selector: any): GsapWrapper {
        this.timeline = this.timeline.to(selector, {
            duration     : 0.5,
            x            : 100,
            ease         : "linear",
            scrollTrigger: {
                trigger: selector,
                // markers: true,
                start  : "top: 0",
                end    : "bottom: 25%",
                scrub  : 4
            }
        });
        this.lastSelector = selector;
        return this;
    }

    public scrollToElementById(elementIdToScrollTo: any): GsapWrapper {
        this.timeline = this.timeline.to(window, {
            duration: 1,
            scrollTo: `#${elementIdToScrollTo}`
        });
        this.lastSelector = window;
        return this;
    }

    public scrollToHeight(height: any): GsapWrapper {
        this.timeline =
            this.timeline.to(window, {duration: 1, scrollTo: height});
        this.lastSelector = window;
        return this;
    }

}
