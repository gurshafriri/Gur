let Pieces = ['Dori', "Mobile", "Tabur"]

let Pieces_map = {
	'Dori': {
		workSummary: "Dori Shafriri",
		workYear: "2022",
		workMaterial: "water and protein",
		workDetails: "Made in collaboration with Inbar Gellert, Dori is Considered Gur & Inbar's most important piece as well as the work achieving the highest degree of perfection.",
		src: "images/dori.jpg"}
	,
	'Mobile': {
		workSummary: "Mobile",
		workYear: "2020",
		workMaterial: "mixed ensamble",
		workDetails: "Mobile takes the uneven sides of objects and turn them around themselves. Premired by Meitar Ensamble.",
		src: "images/mobile.jpg"},
	'Tabur': {
		workSummary: "Tabur",
		workYear: "2018",
		workMaterial: "choir and percussion",
		workDetails: "within the void you will find the sound of voice and steel ecoing back from the walls. Premiered by Tabur Choir",
		src: "images/tabur.jpg"}
	}

Pieces.forEach(piece => {
		workSummary = Pieces_map[piece].workSummary
		workDetails = Pieces_map[piece].workDetails
		workMaterial = Pieces_map[piece].workMaterial
		workYear = Pieces_map[piece].workYear
		src = Pieces_map[piece].src
		const details = `
		<div class="work">
			<details>
				<summary id="work-name">
					<canvas id="line" width="30" height="3"></canvas>${workYear} <strong>${workSummary}</strong>, ${workMaterial}</summary>
					<div><p class="work-details">${workDetails}</p> 
					<img class="work-details" src=${src} width="400" alt="${workSummary}">
					</div>
			</details>
		</div>`
		const el = document.createElement('div')
		el.innerHTML = details
		document.body.appendChild(el)
		}) 
