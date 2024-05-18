import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const thanos = async () => {
  try {
    const data = await fs.readFile(PATH_DB);
    let contacts = JSON.parse(data);

    for (let i = 0; i < contacts.length; i++) {
      if (Math.random() >= 0.5) {
        contacts.splice(i);
      }
    }

    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
  } catch (error) {
    console.error(error.message);
  }
};

await thanos();
