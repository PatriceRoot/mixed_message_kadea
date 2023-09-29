//create thre arrays here

function randomString() {
    const index1 = Math.floor(Math.random() * countries.length);
    const index2 = Math.floor(Math.random() * capitals.length);
    const index3 = Math.floor(Math.random() * continents.length);

    return 'Country : ' + countries[index1] + '; ' + 'Capital : ' + capitals[index2] + '; ' + 'Continent : ' + continents[index3];
}

//Print result below this line