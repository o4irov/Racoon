let arr_slice = 
[
  "IT решения для вашего бизнеса",
  "Сайты",
  "Приложения",
  "Аутсорсинг",
  "Web дизайн",
  "IT консалтинг",
  "SMM",
  "Техническая поддержка",
  "Аутстафинг",
  "IT инфраструктура",
  "Онлайн реклама"
],
  intervalID,
  scrollPos = 0,
  flag,
  count = 0;
export function scrollTrackingList(elem,func){
	let wt = $(window).scrollTop(),
      wh = $(window).height(),
      et = $(elem).offset().top,
      eh = $(elem).outerHeight();
 
	if ( wh + wt >= et + eh ){
	    return StartInterval(listMove,2000)
      
	}else{
    return clear(1);
  }
}
export function scrollTrackingBlock(elem,func){
	let wt = $(window).scrollTop(),
      wh = $(window).height(),
      et = $(elem).offset().top,
      eh = $(elem).outerHeight();
 
	if ( wh + wt >= et + eh ){
    func
      
	}
}
export function scrollDirection(){
  var st = $(window).scrollTop();
  if (st > scrollPos){
    if(!flag){
      objectMoveUp()
    }

  } else {
    if(flag){
      objectMoveDown()
    }
  
  }
  scrollPos = st;
}

function listMove(){
  let 
    blockServices = $('#blockServices > li');
 
    arr_slice = [].concat(arr_slice.slice(1),arr_slice.slice(0,1));
    

    blockServices.eq(0).find('span').animate({'opacity': 0}, 700, function(){
      $(this).html(arr_slice[0]).animate({'opacity': 1}, 700);    
    });
    blockServices.eq(1).animate({'opacity': 0}, 600, function(){
      $(this).html(arr_slice[1]).animate({'opacity': 0.29}, 600);    
    });
    blockServices.eq(2).animate({'opacity': 0}, 500, function(){
      $(this).html(arr_slice[2]).animate({'opacity': 0.20}, 500);    
    });
    console.log( $('#blockServices > li > span#test2').width())
}

function objectMoveUp(){
  let
      obj= $("#servicesIMage*");
 for(let i = 0; i< obj.length; i++){
  obj.eq(i).fadeIn().animate({top:obj.eq(i).position().top+20}, 300)
}
flag = true;

}
function objectMoveDown(){
  let
      obj= $("#servicesIMage*");
 for(let i = 0; i< obj.length; i++){
obj.eq(i).fadeIn().animate({top:obj.eq(i).position().top-10}, 300)
 }
 flag = false;
}
export function objectAnimate(elem,delay,count,p){
  $(elem).animate({[p]:count}, delay)
  
}
function StartInterval(func,delay) {
  if(count == 0){
    count = 1;
    return intervalID = setInterval(func, delay);
}
}
function clear() {
  if(count == 1){
    count = 0;
    return clearInterval(intervalID);
  }
}