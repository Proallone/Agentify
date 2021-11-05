/* Ref https://firebase.google.com/docs/firestore/manage-data/add-data#web-version-8_4 */

export class User {
  constructor(name, surname, email, phone_number, timestamp) {
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone_number = phone_number;
    this.timestamp = timestamp;
    this.id = 0; //default, id is generated on firebase server
  }
}

// Firestore data converter
export var usertConverter = {
  toFirestore: function (user) {
    return {
      name: user.name,
      surname: user.surname,
      email: user.email,
      phone_number: user.phone_number,
      timestamp: user.timestamp,
      id: user.id,
    };
  },
  fromFirestore: function (snapshot, options) {
    const data = snapshot.data(options);
    return new User(
      data.name,
      data.surname,
      data.email,
      data.phone_number,
      data.timestamp,
      data.id
    );
  },
};
