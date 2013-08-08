/**
chrome.extension.onMessage.addListener(function(req, sender, sendResponse) {
  console.log("FindTarget request receieved");
});

var sendStatusMessage = function(found){
  console.log("sentStatusMessage");
  chrome.extension.sendMessage({found: found}, function(response) {
    console.log("status msg sent")});
};*/

var findTarget = function() {
  //console.log("findTarget");
  the_id = "input";
  /**
  if($("h1:contains('Server Error')")){
    window.location = "http://www.ticketfly.com/purchase/event/334353";
  }*/
  /**
  if($("h2:contains('404')")){
    window.location = "http://www.ticketfly.com/purchase/event/334353";
  }*/
  if(!$(the_id).length){
    //console.log("found");
    //window.location = $("#registerdiv a").first().href
    window.location = "http://www.ticketfly.com/purchase/event/334353";
    //sendStatusMessage(true);
  }else{
    $(the_id).val("beechtree");
    //sendStatusMessage(false);
  }
};

findTarget();
