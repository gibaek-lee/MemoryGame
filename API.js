(function(){
  window.api ={};
  api.standard = '';

  api.startEvent = function(){
    $('.textBox').css('color','white'); // 시작시 외우라고 보여주기 위해서 만든 함수
  }
  
  api.clickDefalutEvent = function(){
    $(this).css('color' ,'black'); // 기본적으로 클릭하면 none <-> block
    if(api.standard.length === 0 ) {   // 첫번째 클릭인경우(standard가 없는경우) : standard에 값을 지정
      api.standard = $(this).text();    // 두번째 클릭에서의 조건을 돌아가게 해준다.
      console.log(api.standard);
    }
    else{
      if(api.standard === $(this).text()){ // 두번째 클릭에 맞는경우 display에 대한 변화 X
        api.standard = '';  // 다시 첫번째 클릭 조건으로 돌아가기 위해
        console.log(api.standard);
      }
      else{
        $('.textBox').css('color', 'white'); // 두 text값이 다른경우 다시 가려주기 위해 
        api.standard = '';
        console.log(api.standard);
      }
    } 
  };

  api.pushTotextBox = function(){
    var container = []; 
    
    for(var i=1; i<=$('.textBox').length/2; i++){
      container.push(i);
      container.push(i);
    } // 넣어야할 기본 배열을 만들어 준다. 
    
    var shuffledArr = _.shuffle(container); // 배열 섞어주기

    for (i=0; i<$('.textBox').length; i++) {
      var id = '#'+i; // 기존에 id값을 0~n 까지 정한 이유!! 센스 굿!!
      $(id).append(''+shuffledArr[i]+'').html();
    } // textBox에 넣어주는 역활을 해준다. (정민님)
  } 

  api.pushBoxWithDataSet = function(){
    var shuffledArr = _.shuffle($('body').data("levelSetting").level1); // 배열 섞어주기

    for (i=0; i<$('.textBox').length; i++) {
      var id = '#'+i; // 기존에 id값을 0~n 까지 정한 이유!! 센스 굿!!
      $(id).append(''+shuffledArr[i]+'').html();
    }

  }

  api.reset = function(){
    $('.textBox').empty(); // textBox의 내용물(text값)을 비우는 api
    $('.textBox').css('color', 'white'); // 기존에 가려주는 역활을 했던 color : white를 다시 넣어줘서 가려준다. 
    // api.pushTotextBox(); // 새롭게 넣어주기 위해 위에 있던 함수를 재실행
    api.pushBoxWithDataSet();
    $('.textBox').css('color','black'); // 다시 보여줘야하니까 
    _.delay(api.startEvent, 2000); // 다시 가리기
  }

  api.levelup = function(){

  }
      
})();
  




