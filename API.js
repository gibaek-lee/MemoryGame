(function(){
  window.api ={};
  var standard = '';

  api.startEvent = function(){
    $('.textBox').animate({opacity : 0}, 1500);
  } // 최초 실행시 기본 data를 외우기 위해 보여줘야 함

  api.clickDefalutEvent = function(){
    $(this).css('opacity' ,1); // 기본적으로 클릭하면 내용물을 보여준다.
    if(standard.length === 0 ) {   // 첫번째 클릭인경우(standard가 없는경우) : standard에 값을 지정
      standard = $(this).text();    // 두번째 클릭에서의 조건을 돌아가게 해준다.
    }
    else{
      if(standard === $(this).text()){ // 두번째 클릭에 맞는경우 display에 대한 변화 X
        if(dataMG.getClearCount()>0){
          dataMG.delClearCount();
          console.log('Now, level clear count is '+dataMG.getClearCount());
          if(dataMG.getClearCount()===0){alert('clear!')};
          standard = '';// 다시 첫번째 클릭 조건으로 돌아가기 위해
        }
      }else{
        $('.textBox').animate({'opacity': 0},1000); // 두 text값이 다른경우 다시 가려주기 위해
        if(dataMG.getClearCount()>0){
          standard = '';// 다시 첫번째 클릭 조건으로 돌아가기 위해
        }
      }
    }
  };

  api.pushBoxWithDataSet = function(){
    /*var level1Data = $('body').data("levelSetting").level1[0];
    var level2Data = $('body').data("levelSetting").level2[0];
    var level3Data = $('body').data("levelSetting").level3[0];*/
    var level1Data = dataMG.getLvData(1);
    var level2Data = dataMG.getLvData(2);
    var level3Data = dataMG.getLvData(3);

    if($('.textBox').length===4){
      var dataArr = level1Data.card;
      dataMG.setClearCount(level1Data.count);
    }else if($('.textBox').length===6){
      var dataArr = level2Data.card;
      dataMG.setClearCount(level2Data.count);
    }else if($('.textBox').length===8){
      var dataArr = level3Data.card;
      dataMG.setClearCount(level3Data.count);
    }
    console.log('now, you are in level'+(dataMG.getClearCount()-1));
    console.log('This level clear count is '+dataMG.getClearCount());
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
    standard = '';
  }

  function templetFactory(){
    var $childNode1 = $('<div class="childNode"><div id ="4" class="textBox"></div></div>'),
        $childNode2 = $('<div class="childNode"><div id ="5" class="textBox"></div></div>'),
        $childNode3 = $('<div class="childNode"><div id ="6" class="textBox"></div></div>'),
        $childNode4 = $('<div class="childNode"><div id ="7" class="textBox"></div></div>');

    if($('.textBox').length===4){
      $('.container').append($childNode1);
      $('.container').append($childNode2);
    }else if($('.textBox').length===6){
      $('.container').append($childNode3);
      $('.container').append($childNode4);
    }
  } // 우선 level2까지의 경우만 만들기.

  api.levelUp = function(){
    if(dataMG.getClearCount() === 0){
      templetFactory();
      api.reset();
    }
    //if(dataMG.getClearCount() === 4)
  }

})();
