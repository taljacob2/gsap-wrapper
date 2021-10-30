"use strict";

/**
 * This class bundles `gsap` methods together for fast use.
 * @author Tal Jacob
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
        this.timeline = this.timeline.to(selector, {duration: 1, x: 100});
        this.lastSelector = selector;
        return this;
    }

    fadeDown(selector) {
        this.timeline = this.timeline.from(selector, {
            opacity : 0,
            duration: 1,
            y       : -50
        });
        this.lastSelector = selector;
        return this;
    }

    fadeUp(selector) {
        this.timeline = this.timeline.from(selector, {
            opacity : 0,
            duration: 1,
            y       : 30
        });
        this.lastSelector = selector;
        return this;
    }

    fadeRightToLeft(selector) {
        this.timeline = this.timeline.from(selector, {
            backgroundPosition: '200px 0px',
            opacity           : 0,
            duration          : 1,
            x                 : 100
        });
        this.lastSelector = selector;
        return this;
    }

    fadeOut(selector) {
        this.timeline = this.timeline.to(selector, {
            opacity : 0,
            duration: 0.5
        });
        this.lastSelector = selector;
        return this;
    }

    fadeIn(selector) {
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
    transitionBackgroundColorViaHTMLStyle(selector, cssBackgroundColor) {
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
    staggerDown(selector) {
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
    staggerScrollTriggerLeftToRight(selector) {
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
    staggerScrollTriggerFadeInRightToLeft(selector) {
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
    staggerScrollTriggerFadeInLeftToRightWithRotate(selector) {
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
    scrollTriggerLeftToRight(selector) {
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
    scrollTriggerLeftToRightModerate(selector) {
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

    scrollToElementById(elementIdToScrollTo) {
        this.timeline = this.timeline.to(window, {
            duration: 1,
            scrollTo: `#${elementIdToScrollTo}`
        });
        this.lastSelector = window;
        return this;
    }

    scrollToHeight(height) {
        this.timeline =
            this.timeline.to(window, {duration: 1, scrollTo: height});
        this.lastSelector = window;
        return this;
    }
}

exports.GsapWrapper = GsapWrapper;
