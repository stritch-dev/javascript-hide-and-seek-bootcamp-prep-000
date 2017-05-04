
function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector("#nested .target");
}

function increaseRankBy(n){
  let nodeList = document.querySelectorAll(".ranked-list li");
  let i = 0;
    //Array.prototype.forEach.call(nodeList, function(node){
     //node.innerHTML = parseInt(node.innerHTML) + n ;
    //});

    Array.prototype.forEach.call(nodeList, function (node)  {
     node.innerHTML = parseInt(node.innerHTML) + n ;
    });
}

function deepestChild(){
  let nodeList = document.querySelectorAll("div#grand-node div");
  return nodeList[nodeList.length-1];
} 
