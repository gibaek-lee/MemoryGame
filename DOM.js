$(document).ready(function(){
  
  $('body').data("levelSetting",
                    {"level1" : [['A','A','B','B'],false],
                     "level2" : [['A','A','B','B','C','C'],false],
                     "level3" : [[1,1,2,2,3,3,4,4],false],
                     "level4" : [[1,1,2,2,3,3,4,4,5,5],false],
                     "level5" : [[1,1,2,2,3,3,4,4,5,5,6,6],false] 
                    }); 
    // dataset을 미리 만들어 배열을 만들 필요 없이 JSON형식의 데이터를 불러와서 사용
    // flag값을 부여해서 level up & down 을 판별할 수 있게 해준다.
    // http://www.nextree.co.kr/p10155 
    // data를 미리 설정해주는것과 각 level마다 data를 만드는 것 중 어떤게 효율적일까?? 
  
  api.startEvent();  
  api.pushBoxWithDataSet(); // 최초에 실행되야 하는 함수들 
  console.log($('body').data("levelSetting").level1[1]);

  $('div .textBox').on('click',_.debounce(api.clickDefalutEvent,200)); // 급하게 빨리 누를 시 버그가 생기는것을 방지 
 
  $('.Resetbutton').on('click', api.reset); // 클릭시 reset 시키는 역활  

  $('.Levelup').on('click', api.levelUp);
  
});