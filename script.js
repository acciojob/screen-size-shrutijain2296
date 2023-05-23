//your JS code here. If required.
const divTag = document.createElement("div");
divTag.Id = "sizeInfo";
const sizeElement = document.createElement("h1");
sizeElement.innerText = `Width: ${window.innerWidth} and Height: ${window.innerHeight}`
divTag.append(sizeElement);
window.onresize = function(){
	sizeElement.innerText = `Width: ${window.innerWidth} and Height: ${window.innerHeight}`
}