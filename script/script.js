import { scrollTrackingList, scrollDirection, scrollTrackingBlock, objectAnimate } from "../module/module.js";
$(document).ready(function () {
    $(window).scroll(function () {
        // scrollTrackingList('#blockServices')
        // scrollDirection()
        if (document.documentElement.scrollTop > 1200) {
            scrollTrackingBlock('.aboutUs', objectAnimate('#borderSpan', 2500, "100%", "min-height"))
            scrollTrackingBlock('.aboutUs', objectAnimate('#aboutUsText', 2500, "36px", "font-size"))

            //scrollTrackingBlock('#sliderTitle', objectAnimate('#slider_titleContainer', 2500, "700px", "width"))
            //scrollTrackingBlock('#sliderTitle', objectAnimate('#sliderTitle', 2500, "68px", "height"))
            //scrollTrackingBlock('#sliderTitle', objectAnimate('#sliderTitle', 2500, "42px", "font-size"))
            document.getElementById('slider_titleContainer').style.transform = 'translateX(0)'
        }
    });
    //TODO uncomment
    // setTimeout(function(){
    //     window.scrollTo(0, 0);
    // }, 1);
})