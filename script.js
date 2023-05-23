//your JS code here. If required.

const divTag = document.createElement("div");
divTag.id = "sizeInfo";
const sizeElement = document.createElement("h1");
sizeElement.innerText = `Width: ${window.innerWidth} and Height: ${window.innerHeight}`
document.body.append(divTag);
divTag.append(sizeElement)
window.onresize = function(){
	sizeElement.innerText = `Width: ${window.innerWidth} and Height: ${window.innerHeight}`
}