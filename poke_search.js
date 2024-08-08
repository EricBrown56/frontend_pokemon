async function fetchPokemonData(pokemonName) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    const pokemonData = await response.json();
    console.log(pokemonData);
    return pokemonData;
}

const pokemonName = document.getElementById('pokeName').value;

document.addEventListener('DOMContentLoaded', async () => {
    const pokemonData = await fetchPokemonData(pokemonName);
    const pokeId = document.getElementById('Id');
    const pokeName = document.getElementById('Name');
    const pokeExp = document.getElementById('Exp');
    const pokeHp = document.getElementById('Hp');
    const pokeAttack = document.getElementById('Attack');
    const pokeDefense = document.getElementById('Defense');
    const pokeImg = document.getElementById('Img');
    const pokeHeight = document.getElementById('Height');
    const pokeWeight = document.getElementById('Weight');
    const pokeAbility1 = document.getElementById('Ability1');
    const pokeAbility2 = document.getElementById('Ability2');
    const pokeHeld1 = document.getElementById('Held1');
    const pokeHeld2 = document.getElementById('Held2');

    pokeId.textContent = `ID: ${pokemonData.id}`;
    pokeName.textContent = `Name: ${pokemonData.name}`;
    pokeExp.textContent = `Exp: ${pokemonData.base_experience}`;
    pokeHp.textContent = `HP: ${pokemonData.stats[0].base_stat}`;
    pokeAttack.textContent = `Attack: ${pokemonData.stats[1].base_stat}`;
    pokeDefense.textContent = `Defense: ${pokemonData.stats[2].base_stat}`;
    pokeImg.src = pokemonData.sprites.front_default;
    pokeHeight.textContent = `Height: ${pokemonData.height}'`;
    pokeWeight.textContent = `Weight: ${pokemonData.weight}`;
    pokeAbility1.textContent = `Ability 1: ${pokemonData.abilities[0].ability.name}`;
    pokeAbility2.textContent = `Ability 2: ${pokemonData.abilities[1].ability.name}`;
    pokeHeld1.textContent = `Held Item 1: ${pokemonData.held_items[0].item.name}`;
    pokeHeld2.textContent = `Held Item 2: ${pokemonData.held_items[1].item.name}`;
})




  
// async function displayUserData() {
//     try {
//       // the await keyword makes it wait the 2 seconds to get the object back from the getUserData function
//       const userData = await getUserData();
//       const userInfoElement = document.getElementById('userInfo');
//       userInfoElement.textContent = `Name: ${userData.name}, Age: ${userData.age}, 
//         Email: ${userData.email}`;
//     }
//     catch (error) {
//       console.error("Error fetching data:", error);
//       const userInfoElement = document.getElementById('userInfo');
//       userInfoElement.textContent = "Failed to fetch user data";
//     }
//   }

//     document.addEventListener('DOMContentLoaded', () => {
//         displayUserData();
//     });