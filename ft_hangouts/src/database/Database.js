// src/database/Database.js
import { openDatabase } from 'react-native-sqlite-storage';

const db = openDatabase({ name: 'hangouts.db' });

export const createTables = () => {
  db.transaction(txn => {
    txn.executeSql(
      `CREATE TABLE IF NOT EXISTS contacts (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        phone TEXT,
        email TEXT,
        address TEXT,
        company TEXT
      )`,
      [],
      () => {
        console.log('Table created successfully');
      },
      error => {
        console.log('Error creating table ' + error.message);
      },
    );
  });
};

export const addContact = (name, phone, email, address, company) => {
  db.transaction(txn => {
    txn.executeSql(
      'INSERT INTO contacts (name, phone, email, address, company) VALUES (?,?,?,?,?)',
      [name, phone, email, address, company],
      (txn, result) => {
        console.log('Contact added successfully');
      },
      error => {
        console.log('Error adding contact ' + error.message);
      }
    );
  });
};

export const getContacts = (callback) => {
  db.transaction(txn => {
    txn.executeSql(
      'SELECT * FROM contacts',
      [],
      (txn, results) => {
        let len = results.rows.length;
        if (len > 0) {
          let contacts = [];
          for (let i = 0; i < len; i++) {
            let row = results.rows.item(i);
            contacts.push(row);
          }
          callback(contacts);
        } else {
          callback([]);
        }
      },
      error => {
        console.log('Error retrieving contacts ' + error.message);
      }
    );
  });
};

export const deleteContact = (id) => {
  db.transaction(txn => {
    txn.executeSql(
      'DELETE FROM contacts WHERE id = ?',
      [id],
      (txn, result) => {
        console.log('Contact deleted successfully');
      },
      error => {
        console.log('Error deleting contact ' + error.message);
      }
    );
  });
}
