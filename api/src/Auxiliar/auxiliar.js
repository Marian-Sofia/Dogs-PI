const cleanDogs = (dog) => {
    const obj = {
        id: dog.id,
        name: dog.name,
        height: dog.height.metric,
        weight: dog.weight.metric,
        life_span: dog.life_span,
        image: dog.image.url,
        temperaments: dog.temperament,
    }

    return obj
}

const cleanArrayDogs = (array) => array ? array.map( dog => cleanDogs(dog)) : [];

module.exports = {
    cleanDogs,
    cleanArrayDogs,
}