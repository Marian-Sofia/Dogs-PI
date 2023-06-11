const cleanDogs = (dog) => {
    const obj = {
        id: dog.id,
        name: dog.name,
        height: dog.height.metric,
        weight: dog.weight.metric,
        life_span: dog.life_span,
        image: dog.image ? dog.image.url : dog.reference_image_id,
        temperaments: typeof(dog.temperament) === 'string' ? dog.temperament.split(', ').map( value => { return { name: value }}) : [{ name: 'undefined' }]
    }

    return obj
}

const  cleanArrayDogs = (array) => array ? array.map( dog => cleanDogs(dog)) : [];

module.exports = {
    cleanDogs,
    cleanArrayDogs,
}