
const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
            if (res.status != "200") {
                console.log(res);
                pokeImage("./images/rocketT.png");
                let elemen = document.getElementById("pokeBox");
                elemen.innerHTML = `<p class = "red">Probably that was not a pokemon name. Or  not has been added to our data base yet.</p>`
                let element = document.getElementById("moveIt");
                element.innerHTML = `<p>Really? </p>`;
            }
            else {
            return res.json();
            }
    } )
    .then((data) => {
        if (data) {
            let pokeImg = data.sprites.other.home.front_default;
            let pokeMoves = data.moves;
            let element = document.getElementById("pokeBox");
                element.innerHTML =     `<br>
                                        <h2>Pokemon Info:</h2>
                                        <ul>
                                        <li>Name: ${data.name}</li>
                                        <li>Pokemon ID: ${data.id}<li>
                                        <li>First Type:  ${data.types[0].type.name}</li>
                                        </ul>
                                        <br>
                                        <br>
                                        <h2>Stats: </h2>
                                        <ul>
                                            <li>HP:                 ${data.stats[0].base_stat}</li>
                                            <li>Attack:             ${data.stats[1].base_stat}</li>
                                            <li>Defense:            ${data.stats[2].base_stat}</li>
                                            <li>Special Attack:     ${data.stats[3].base_stat}</li>
                                            <li>Special Defense:    ${data.stats[4].base_stat}</li>
                                            <li>Speed:              ${data.stats[5].base_stat}</li>                                    
                                        </ul>
                                        <br>
                                        <br>
                                        `;
            pokeImage(pokeImg);
            element = document.getElementById("moveIt");
                element.innerHTML = `<h2>Moves: ${pokeMoves.length} </h2>`;
                for (let i = 0; i < pokeMoves.length; i++ ){
                    element.innerHTML +=    `<p class="calcuf">${i+1}  ${pokeMoves[i].move.name}</p>`;
                    }
            
            }        
    });
}

const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;}
