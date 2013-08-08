chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.sendMessage(tab.id, {start: "hello"}, function(response) {
    console.log(response.farewell);
  });
});

chrome.extension.onMessage.addListener(
  function(request, sender, sendResponse) {
    if(sender.tab){
      if (request.found === true){
        chrome.tabs.reload(sender.tab.id, {}, function(){
          chrome.tabs.sendMessage(sender.tab.id, {start: "hello"}, function(response) {});
        });
      }else{
        alert("success");
      }
    }
});

