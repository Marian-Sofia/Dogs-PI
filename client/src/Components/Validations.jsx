const handleError = ({ name, height, weight, life_Span, image }) => {
    const error = {}

    if(!/(^[a-zA-Z]{0,250})+(\s[a-zA-Z]{0,250})?$/.test(name)){
        error.name = 'Only characters from [a - z] or [A - Z]' 
    }

    if(/^[0-9]+\-?[0-9]$/.test(life_Span)){
        error.life_Span = 'You must indicate the max and min life span of the breed with a dash (-) in the middle'
    }

    if(/^[0-9]+\-?[0-9]$/.test(height)){
        error.height = 'You must indicate the max and min height of the breed with a dash (-) in the middle'
    }

    if(/^[0-9]+\-?[0-9]$/.test(weight)){
        error.weight = 'You must indicate the max and min weight of the breed with a dash (-) in the middle'
    }

    if(!/^([a-zA-Z0-9\s_\\.\-:])+(.jpg|.png)$/.test(image)){
        error.image = 'The image format should be .png or .jpg'
    }

    return error
}

export default handleError;