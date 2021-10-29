/* Ref https://firebase.google.com/docs/firestore/manage-data/add-data#web-version-8_4 */

export class Client {
    constructor (name, surname, PESEL, email, phone_number, post_code, city, address, timestamp) {
        this.name = name;
        this.surname = surname;
        this.PESEL = PESEL;
        this.email = email;
        this.phone_number = phone_number;
        this.post_code = post_code;
        this.city = city;
        this.address = address;
        this.timestamp = timestamp;
    }
}

// Firestore data converter
export var clientConverter = {
    toFirestore: function(client) {
        return {
            name: client.name,
            surname: client.surname,
            PESEL: client.PESEL,
            email: client.email,
            phone_number: client.phone_number,
            post_code: client.post_code,
            city: client.city,
            address: client.address,
            timestamp: client.timestamp,
            };
    },
    fromFirestore: function(snapshot, options){
        const data = snapshot.data(options);
        return new Client(data.name, data.surname, data.PESEL, data.email, data.phone_number, data.post_code, data.city, data.address, data.timestamp);
    }
};