$(document).ready(function(){

  // _.delay(api.startEvent, 2000);
  api.startEvent();
  
  $('body').data("levelSetting",
                    {"level1" : ['A','A','B','B'],
                     "level2" : [1,1,2,2,3,3],
                     "level3" : [1,1,2,2,3,3,4,4],
                     "level4" : [1,1,2,2,3,3,4,4,5,5],
                     "level5" : [1,1,2,2,3,3,4,4,5,5,6,6] }); 
    // dataset을 미리 만들어 배열을 만들 필요 없이 JSON형식의 데이터를 불러와서 사용

//   api.pushTotextBox(); 
  api.pushBoxWithDataSet(); // 최초에 textBox에 넣어주는 것을 실행 

  $('div .textBox').on('click',_.throttle(api.clickDefalutEvent,800)); // 급하게 빨리 누를 시 버그가 생기는것을 방지 
 
  $('.Resetbutton').on('click', api.reset); // 클릭시 reset 시키는 역활  

  $('.Levelup').on('click', api.templetFactory);
  
});