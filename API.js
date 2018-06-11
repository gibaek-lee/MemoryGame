(function(){
  window.api ={};
  api.standard = '';

  api.startEvent = function(){
    $('.textBox').animate({opacity : 0}, 1500);
  } // 최초 실행시 기본 data를 외우기 위해 보여줘야 함
  
  api.clickDefalutEvent = function(){
    $(this).css('opacity' ,1); // 기본적으로 클릭하면 내용물을 보여준다. 
    if(api.standard.length === 0 ) {   // 첫번째 클릭인경우(standard가 없는경우) : standard에 값을 지정
      api.standard = $(this).text();   // 두번째 클릭에서의 조건을 돌아가게 해준다.
    }
    else{
      if(api.standard === $(this).text()){ // 두번째 클릭에 맞는경우 display에 대한 변화 X
        api.standard = '';  // 다시 첫번째 클릭 조건으로 돌아가기 위해
        }
      else{
        $('.textBox').animate({'opacity': 0},1000); // 두 text값이 다른경우 다시 가려주기 위해 
        api.standard = '';
        }
    } 
  };

  // underscore 라이브러리를 이용해야하기 때문에(_.debounce) 사용 보류 
  // api.pushTotextBox = function(){
  //   var container = []; 
    
  //   for(var i=1; i<=$('.textBox').length/2; i++){
  //     container.push(i);
  //     container.push(i);
  //   } // 넣어야할 기본 배열을 만들어 준다. 
    
  //   var shuffledArr = _.shuffle(container); // 배열 섞어주기

  //   for (i=0; i<$('.textBox').length; i++) {
  //     var id = '#'+i; // 기존에 id값을 0~n 까지 정한 이유!! 센스 굿!!
  //     $(id).append(''+shuffledArr[i]+'').html();
  //   } // textBox에 넣어주는 역활을 해준다. (정민님)
  // } 

  api.pushBoxWithDataSet = function(){
    var textBoxLength = $('.textBox').length;
    var level1Flag = $('body').data("levelSetting").level1,
        level2Flag = $('body').data("levelSetting").level2,
        level3Flag = $('body').data("levelSetting").level3;

    if(textBoxLength === 4) {
      var dataArr = level1Flag[0];
    }
    else if(textBoxLength === 6){
      var dataArr = level2Flag[0];
    } 
    else if(textBoxLength === 8){
      var dataArr = level3Flag[0];
    } 

    console.log(dataArr);
    
    var shuffledArr = _.shuffle(dataArr); // 배열 섞어주기

    for (i=0; i<$('.textBox').length; i++) {
      var id = '#'+i; // 기존에 id값을 0~n 까지 정한 이유!! 센스 굿!!
      $(id).append(''+shuffledArr[i]+'').html();
    }
  }  

  api.reset = function(){
    $('.textBox').empty(); // textBox의 내용물(text값)을 비우는 api
    api.pushBoxWithDataSet();
    $('.textBox').css('opacity','1'); // 게임 중간에 reset을 누르는 경우 다시 보여주기 위해서!!
    api.startEvent() // 다시 가리기
    api.standard = '';
  }

  api.templetFactory = function(){
    var $childNode1 = $('<div class="childNode"><div id ="4" class="textBox"></div></div>'),
        $childNode2 = $('<div class="childNode"><div id ="5" class="textBox"></div></div>'),
        $childNode3 = $('<div class="childNode"><div id ="6" class="textBox"></div></div>'),
        $childNode4 = $('<div class="childNode"><div id ="7" class="textBox"></div></div>'),
        textBoxLength = $('.textBox').length;
    
    if(textBoxLength === 4){
      $('.container').append($childNode1);
      $('.container').append($childNode2);
    }
    else if(textBoxLength === 6){
      $('.container').append($childNode3);
      $('.container').append($childNode4);
    }
  }  

  // api.vaildationLevel = function(){
  //   var level1Flag = $('body').data("levelSetting").level1[1],
  //       level2Flag = $('body').data("levelSetting").level2[1],
  //       level3Flag = $('body').data("levelSetting").level3[1];

  //   if(!level1Flag){
  //     level1Flag = true;
  //   }
  //   else if(level1Flag && !level2Flag){
  //     level2Flag = true;
  //   }
  //   else if(level2Flag && !level3Flag){
  //     level3Flag = true;
  //   }
  //   console.log(level1Flag,level2Flag,level3Flag);
  // } 
  // flag를 이용한 방법으로 컨트롤이 안됌... 

  api.levelUp = function(){
    api.templetFactory();
    // api.vaildationLevel();
    api.reset();
  }
      
})();
  




