let pieces = ['Dori', "Mobile", "Tabur"]

let PiecesMap = {
	'Dori': {
		workSummary: "Dori Shafriri",
		workYear: "2022",
		workMaterial: "water and protein",
		workDetails: "Made in collaboration with Inbar Gellert, Dori is Considered Gur & Inbar's most important piece as well as the work achieving the highest degree of perfection.",
		src: "images/dori.jpg",
		claps:0}
	,
	'Mobile': {
		workSummary: "Mobile",
		workYear: "2020",
		workMaterial: "mixed ensamble",
		workDetails: "Mobile takes the uneven sides of objects and turn them around themselves. Premired by Meitar Ensamble.",
		src: "images/mobile.jpg",
		claps: 0},
	'Tabur': {
		workSummary: "Tabur",
		workYear: "2018",
		workMaterial: "choir and percussion",
		workDetails: "Within the void you will find the sound of voice and steel ecoing back from the walls. Premiered by Tabur Choir",
		src: "images/tabur.jpg",
		claps: 0}
	}


pieces.forEach(piece => {
		for (key in PiecesMap[piece]) {
			this[key] = PiecesMap[piece][key]
		}
		const details = `
		<div class="work">
			<details id='${piece}'>
				<summary id="work-name">
					<canvas id="line" width="30" height="3"></canvas>${workYear} <strong>${workSummary}</strong>, ${workMaterial}</summary>
					<div><p class="work-details">${workDetails}</p> 
					<img class="work-details" src=${src} width="400" alt="${workSummary}">
					</div>
					<button id="clapbutton-${piece}" class="button-18" role="button">Clap!</button>
			</details>
		</div>`
		const el = document.createElement('div')
		el.innerHTML = details
		document.body.appendChild(el)
		document.getElementById("clapbutton-"+piece).onclick = function(){clap(piece)}
		}) 


// document.getElementById("clapbutton").onclick = function(){clap()}

function clap(piece){
	var fullWidth = window.innerWidth;
    var fullHeight = window.innerHeight;

	var elem = document.createElement("div");
    elem.id = 'clap'
    elem.textContent = `👏🏼`;
    elem.style.position = "absolute";
    elem.style.left = Math.round(Math.random() * fullWidth) + "px";
    elem.style.top = Math.round(Math.random() * fullHeight) + "px";
    document.body.appendChild(elem);

    countClaps(piece)
    
    setTimeout(function(){
    document.getElementById("clap").remove();
	}, 1500);

}


function countClaps(piece) {
    
    PiecesMap[piece]['claps'] = PiecesMap[piece]['claps'] + 1
    if (PiecesMap[piece]['claps'] == 1) {
    	const clapCounter = document.createElement('p')
    	clapCounter.id = "clapCounter-"+piece
    	clapCounter.className = 'claps-counter'
    	document.getElementById(piece).appendChild(clapCounter)			
    }
    document.getElementById("clapCounter-"+piece).innerHTML = PiecesMap[piece]['claps']
   	
}

