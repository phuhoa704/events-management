export const catchErrorResponse = (res) => {
    let result = false;
    if(res.data.default === 1) {
        result = true;
    }
    return result;
}