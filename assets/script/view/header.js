// menggunakan fitur es6 => promise
export const headerText = () => {
    return new Promise( (resolve, reject) => {
        const title = String;
        if (title === String) {
            resolve(`It's not just Food, it is an Experience`);
        } else {
            resolve(`not String`);
        }
    })
}