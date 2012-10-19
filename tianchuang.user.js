// ==UserScript==
// @name           tianchuanExclude
// @namespace      fuluchii.me
// @description    去掉天窗里那些不需要的本子和社团信息
// @include        http://doujin.bangumi.tv/event/*
// ==/UserScript==
	
var ROOT_LIST = document.getElementById('columnInSubjectA');

var reg = /APH|盗墓笔记|瓶邪|银魂|黑塔利亚|Fate|青之|夏目|静临|家庭教师|火影|fate|兔虎|虎兔|邪瓶|古剑|福尔摩斯|福华|我的朋友|BBC|FATE|TIGER|剑侠|仙剑|fate|黑子的篮球/;
	
function get_content(group){
    var p = childs[j].innerHTML;
	var t = "";
     if(reg.test(p)==false){
	    return p;
	 }else{
	 return undefined;
	 }
}

var groups = document.evaluate(
	'//*[@class="browserFull"]',
	document,
	null,
	XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,
	null);
var content = '<ul class="browserFull">';
for(var i = 0;i<groups.snapshotLength;i++){
    var childs = groups.snapshotItem(i).childNodes;
	var count = 0;
	for(var j = 0;j<childs.length;j++){
	var t = get_content(childs[j]);
	if(t!=undefined){
	    content = content+'<li class="item odd clearit">'+t+'</li>';
		}
	}
}
ROOT_LIST.innerHTML = content+"</ul>";







