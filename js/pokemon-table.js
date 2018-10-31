import html from './html.js';


const tableBody = document.getElementById('pokemon-tbody');

function makeRow(pokemon) {
    return html` <tr>
            <td>${pokemon.pokemon}</td>
            <td>${pokemon.url_image}</td>
            <td>${pokemon.type_1}</td>
            <td>${pokemon.type_2}</td>
            <td>${pokemon.hp}</td>
            <td>${pokemon.ability_1}</td>
            <td>${pokemon.ability_2}</td>
            <td>${pokemon.ability_hidden}</td>
            </tr>`;
}
//console.log('8888888', pokemon.pokemon);

const pokemonsTable = {                                //here is where remove and add for filter goes
    init(pokemons) {
        for(let i = 0; i < pokemons.length; i++) {
            const tr = makeRow(pokemons[i]);
            tableBody.appendChild(tr);  
        }
    }
};

export default pokemonsTable;