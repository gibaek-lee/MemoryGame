$(document).ready(function(){
  
  $('body').data("levelSetting",
                    {"level1" : [['A','A','B','B'],false],
                     "level2" : [['A','A','B','B','C','C'],false],
                     "level3" : [['A','A','B','B','C','C','D','D'],false],
                     "level4" : [[1,1,2,2,3,3,4,4,5,5],false],
                     "level5" : [[1,1,2,2,3,3,4,4,5,5,6,6],false] 
                    }); 
    // dataset을 미리 만들어 배열을 만들 필요 없이 JSON형식의 데이터를 불러와서 사용
    // flag값을 부여해서 level up & down 을 판별할 수 있게 해준다.
    // http://www.nextree.co.kr/p10155 
    // data를 미리 설정해주는것과 각 level마다 data를 만드는 것 중 어떤게 효율적일까?? 
  
  api.startEvent();  
  api.pushBoxWithDataSet(); // 최초에 실행되야 하는 함수들 

  $('div').on('click','.textBox',_.debounce(api.clickDefalutEvent,200)); // 급하게 빨리 누를 시 버그가 생기는것을 방지 
  // 아직 생성되지 않은 요소들에도 이벤트를 바인딩해주는 방식 : on함수 parameter 중간에 지정할 요소를 적는다.               

  $('.Resetbutton').on('click', api.reset); // 클릭시 reset 시키는 역활  

  $('.Levelup').on('click', api.levelUp);
  
});