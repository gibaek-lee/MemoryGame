(function(){
  window.dataMG = {};

  var clearCount = 0;
  var lv1data = {card:['A','A','B','B'],count:2};
  var lv2data = {card:['A','A','B','B','C','C'],count:3};
  var lv3data = {card:['A','A','B','B','C','C','D','D'],count:4};
  var lvDataSet = [lv1data,lv2data,lv3data];

  dataMG.getLvData = function(lv){return lvDataSet[lv-1]};
  dataMG.setClearCount = function(count){clearCount=count};
  dataMG.getClearCount = function(){return clearCount};
  dataMG.delClearCount = function(){clearCount--};

})();
//TODO1. 새로고침할 때 진행하던 level부터 실행되도록
//TODO2. LEVEL data generator
//TODO3. clear한 후에도 버튼이 동작된다.
//TODO4. shading 없애기
//TODO5. card div id 사용해서 동일 card 클릭할 때 count가 줄어들지 않도록 하기
