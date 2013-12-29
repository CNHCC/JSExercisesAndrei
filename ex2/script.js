

function peste(){	
	if (document.getElementById("target").style.display=="none")
		{ document.getElementsByTagName("button")[0].onclick=function()
	{
		document.getElementById("target").style.display="block"
	}
};};
window.onload=function() {peste()};
function peste2()	
{
	if (document.getElementById("target").style.display=="block")
	{
	document.getElementsByTagName("button")[0].onclick=function()
	{
		document.getElementById("target").style.display="none"
	}};};
	









