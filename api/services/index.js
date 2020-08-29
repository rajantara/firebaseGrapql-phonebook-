const firebase = require("firebase");

const getUsers = () => {
    const userReference = firebase.database().ref("/Phonebook")
    return (new Promise((resolve, reject) => {
        userReference.on("value", (snapshot) => {
            const folders = snapshot.val();
            if (folders === null) {
                resolve([]);
            } else {
                const data = Object.keys(folders).map(item => Object.assign({ id: item }, folders[item]));
                resolve(data);
            }
            userReference.off("value");

        }, (errObject) => {
            console.log("The read failed: " + errObject.code);
            reject("The read failed: " + errObject.code);
        });

    }))
}


module.exports = { getUsers }