$(document).ready(function(){

    _.delay(api.startEvent, 2000);
 
  $('body').data("levelSetting",
                    {"level1" : ['A','A','B','B'],
                     "level2" : [1,1,2,2,3,3],
                     "level3" : [1,1,2,2,3,3,4,4],
                     "level4" : [1,1,2,2,3,3,4,4,5,5],
                     "level5" : [1,1,2,2,3,3,4,4,5,5,6,6] }); 
    // dataset을 미리 만들어 배열을 만들 필요 없이 

//   api.pushTotextBox(); // 최초에 textBox에 넣어주는 것을 실행 
  api.pushBoxWithDataSet();

  $('div .textBox').on('click',api.clickDefalutEvent); // 실행 event(기본 및 두 숫자 확인)
 
  $('.Resetbutton').on('click', api.reset); // 클릭시 reset 시키는 역활  

  $()
});