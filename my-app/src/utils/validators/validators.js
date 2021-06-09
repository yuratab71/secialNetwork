export const requiredField = (value) => {
    if (value) return undefined;
    return "Field is required";
}

export const maxLength = ( maxLength ) => {
    return function (value) {
        if (value && value.length >= maxLength) return `max length ${maxLength}`;
        return undefined;
    }
}