import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
  try {
    let contactsArray = [];

    for (let i = 0; i < number; i++) {
      contactsArray.push(createFakeContact());
    }

    await fs.writeFile(PATH_DB, JSON.stringify(contactsArray, null, 2));
  } catch (error) {
    console.error(error.message);
  }
};

await generateContacts(5);
