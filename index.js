//create thre arrays here
const countries = ['Congo DR', 'France', 'India', 'Brazil', 'Australia', 'Kenya', 'USA', 'Japan', 'Switzeland'];
const capitals = ['Kinshasa', 'Paris', 'Delhi', 'Brazilia', 'Canberra', 'Nairobi', 'Washington DC', 'Tokyo', 'Bern'];
const continents = ['Africa', 'America', 'Asia', 'Europa', 'Oceania'];

function randomString() {
    const index1 = Math.floor(Math.random() * countries.length);
    const index2 = Math.floor(Math.random() * capitals.length);
    const index3 = Math.floor(Math.random() * continents.length);

    return 'Country : ' + countries[index1] + '; ' + 'Capital : ' + capitals[index2] + '; ' + 'Continent : ' + continents[index3];
}

//Print result below this line
console.log(randomString());