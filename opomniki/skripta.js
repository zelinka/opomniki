window.addEventListener('load', function() {
	//stran nalozena
	
	
	//v primeru napake lahko kar v browserju development tools in tam v konzoli preverjam
	
	function izvediPrijavo() {
		//TODO
		
		var uporabnik = document.querySelector("#uporabnisko_ime").value;
		document.querySelector("#uporabnik").innerHTML = uporabnik;
		document.querySelector(".pokrivalo").style.visibility = "hidden";
		//alert(uporabnik);
		
	}
	
	//nastavi se listener za gumb
	//samo ID v narekovajih ce mam tam <peijavniGumb> ... <peijavniGumb>
	// . ce imam class s tem imenom
	// # uporabim ker imam ID
	document.querySelector("#prijavniGumb").addEventListener("click", izvediPrijavo);
		
	//Posodobi opomnike
	var posodobiOpomnike = function() {
		var opomniki = document.querySelectorAll(".opomnik");
		
		for (i = 0; i < opomniki.length; i++) {
			var opomnik = opomniki[i];
			var casovnik = opomnik.querySelector("span");
			var cas = parseInt(casovnik.innerHTML);
	
			//TODO: 
			// - če je čas enak 0, izpiši opozorilo "Opomnik!\n\nZadolžitev NAZIV_OPOMNIK je potekla!"
			// - sicer zmanjšaj čas za 1 in nastavi novo vrednost v časovniku
		}
	}
	setInterval(posodobiOpomnike, 1000);
	
});