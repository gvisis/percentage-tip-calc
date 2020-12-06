function isNumber(value) {
    if (typeof value !== 'number'){
        return false;
    }
    if (value === 'NaN'){
        console.log('NAN');
        return false
    }
    if (isNaN(value)){
        console.log('isNan');
        return false;
    }
    return true;
}   
export { isNumber }

