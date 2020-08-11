 
window.workData.fillSelect(window.workData.uniques("name"),"formCharacter");
window.workData.fillSelect(window.workData.uniques("status"),"formStatus");
window.workData.fillSelect(window.workData.uniques("species"),"formSpecies");
window.workData.fillSelect(window.workData.uniques("gender"),"formGender");
function cleanDiv(){
	document.getElementById("result").innerHTML="";
}
document.getElementById("btnSingle").addEventListener("click", ()=>{
	cleanDiv();
	document.getElementById("single").style.display="block";
	document.getElementById("multiple").style.display="none";
	document.getElementById("percent").style.display="none";
})
document.getElementById("btnMultiple").addEventListener("click", ()=>{
	cleanDiv();
	document.getElementById("single").style.display="none";
	document.getElementById("percent").style.display="none";
	document.getElementById("multiple").style.display="block";
})
document.getElementById("btnStatistics").addEventListener("click", ()=>{
	cleanDiv();
	document.getElementById("single").style.display="none";
	document.getElementById("multiple").style.display="none";
	document.getElementById("percent").style.display="block";

})
document.getElementById("btnAlives").addEventListener("click", ()=>{
	document.getElementById("divCalculate").innerHTML= "El porcentaje de personajes vivos es de " + workData.computeStats("status", "Alive")+ "%";
})
document.getElementById("formCharacter").addEventListener("change", ()=>{
	//workData.cleanDiv();
	cleanDiv();
	let valueSelect=document.getElementById("formCharacter").value;
	window.workData.showCard(valueSelect,"name");
	document.getElementById("lastSearch").value="name";
	document.getElementById("lastValue").value=valueSelect;
})
document.getElementById("formStatus").addEventListener("change", ()=>{
	cleanDiv();
	let valueSelect=document.getElementById("formStatus").value;
	window.workData.showCard(valueSelect, "status");
	document.getElementById("lastSearch").value="status";
	document.getElementById("lastValue").value=valueSelect;
})
document.getElementById("formSpecies").addEventListener("change", ()=>{
	cleanDiv();
	let valueSelect=document.getElementById("formSpecies").value;
	window.workData.showCard(valueSelect,"species");
		document.getElementById("lastSearch").value="species";
		document.getElementById("lastValue").value=valueSelect;


})
document.getElementById("formGender").addEventListener("change", ()=>{
	cleanDiv();
	let valueSelect=document.getElementById("formGender").value;
	window.workData.showCard(valueSelect,"gender");
	document.getElementById("lastSearch").value="gender";
	document.getElementById("lastValue").value=valueSelect;


})

document.getElementById("a-z").addEventListener("click", ()=>{
	cleanDiv();
	let lastSearch= document.getElementById("lastSearch").value;
	let lastValue=document.getElementById("lastValue").value;
	window.workData.showCard(lastValue,lastSearch,"a");
})
document.getElementById("z-a").addEventListener("click" , ()=>{
	cleanDiv();
	let lastSearch= document.getElementById("lastSearch").value;
	let lastValue=document.getElementById("lastValue").value;
	window.workData.showCard(lastValue,lastSearch,"z");
});
