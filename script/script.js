import { scrollTrackingList,scrollDirection,scrollTrackingBlock,objectAnimate} from "../module/module.js";
$( document ).ready(function() {
$(window).scroll(function(){
// scrollTrackingList('#blockServices')
// scrollDirection()
scrollTrackingBlock('.aboutUs',objectAnimate('#borderSpan',2000,"100%","min-height"))
scrollTrackingBlock('.aboutUs',objectAnimate('#aboutUsText',2000,"36px","font-size"))

scrollTrackingBlock('#sliderTitle',objectAnimate('#slider_titleContainer',2000,"300px","width"))
// scrollTrackingBlock('#sliderTitle',objectAnimate('#sliderTitle',2000,"20px","font-size"))



// scrollTrackingBlock('.slider_title',objectAnimate('#sliderTitle',2000,"38px","height"))
});
})