const data= window.RICKANDMORTY.results; 
window.workData = { 
	uniques: (property)=>{
		let allArr=[];
		for (let i = 0; i <data.length; i++) {
			allArr.push(data[i][property]);
		}
		return [...new Set(allArr)];
	},
	fillSelect: (uniquesArr, combobox)=>{
		
		for (let i = 0; i < uniquesArr.length; i++) {
			let valueSelect= document.getElementById(combobox);
			let list=document.createElement("option");
			list.text= uniquesArr[i];
			if (combobox==="formCharacter") {
				list.value= uniquesArr[i];
			}else{
				list.value= uniquesArr[i];
			}
			valueSelect.add(list);
		}
	},
	showCard: (valueSelect, propiedad, order="a")=>{
		let arr=["image","name","status","species","gender"];
		let arrSpanish=["Imagen","Nombre", "Estado", "Especie","Genero"];
		let filterCondition= data.filter((dato)=>dato[propiedad]===valueSelect);
			window.workData.orderArr(filterCondition,order);
			for (let a = 0; a < filterCondition.length; a++) {
				window.div=document.getElementById("result");
				window.fatherDiv=document.createElement("div");
				window.fatherDiv.className="etiquet";
				window.div.appendChild(window.fatherDiv);
				for (let i = 0; i <arr.length; i++) {
					if (arr[i]=="image") {
						let img=document.createElement("img");
						img.src=filterCondition[a][arr[i]];
						window.fatherDiv.appendChild(img);
					}else{
						let p=document.createElement("p");
						p.innerHTML=arrSpanish[i]+":"+filterCondition[a][arr[i]];
						window.fatherDiv.appendChild(p);
					}
				}
			}
	},
	orderArr: (filterCondition, order="a")=>{
		if (order=="a") {
			window.order=filterCondition.sort((a,b)=> a.name.localeCompare(b.name));

		}else{
			window.order=filterCondition.sort((a,b)=> a.name.localeCompare(b.name)).reverse();
		}
	},
	computeStats: (propiedad, valor)=>{
		let filterCondition= data.filter((dato)=>dato[propiedad]===valor);
		let computes=Math.round(filterCondition.length*100/data.length);
		
		return computes;

	}


}
	