const { 
    URL_IMAGES
 } = require('dotenv').config().parsed;

const cleanDogs = (dog, image) => {
    const obj = {
        id: dog.id,
        name: dog.name,
        height: dog.height.metric,
        weight: dog.weight.metric,
        life_span: dog.life_span,
        image: dog.image ? dog.image.url : image,
        temperaments: typeof(dog.temperament) === 'string' ? dog.temperament.split(', ').map( value => { return { name: value } }) : [{ name: 'undefined' }]
    }
    
    // if(obj.image === 'url'){
    //     fetchImage(dog.reference_image_id).then((res) => obj.image = res )
    //     console.log(obj.image);
    // }

    return obj
}

const fetchImage = async (id) => {
    const res = await fetch(`${URL_IMAGES}${id}`)
    const data = await res.json()
    return data.url
}

const cleanArrayDogs = (array) => array ? array.map( dog => cleanDogs(dog)) : [];

module.exports = {
    cleanDogs,
    cleanArrayDogs,
    fetchImage
}