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
  console.log("findTarget");
  the_id = "#registerdiv a";
  if($("h1:contains('Server Error')")){
    window.location = "http://reg13b.cloudapp.net";
  }
  if($("h2:contains('404')")){
    window.location = "http://reg13b.cloudapp.net";
  }
  if($(the_id).length){
    console.log("found");
    console.log($("#registerdiv a"))
    //$(the_id).first().click();
    window.location = $("#registerdiv a").first().href
    //sendStatusMessage(true);
  }else{
    console.log("not found");
    //sendStatusMessage(false);
  }
};

findTarget();
