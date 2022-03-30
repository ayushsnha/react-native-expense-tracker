/* eslint-disable no-plusplus */
import { enablePromise, openDatabase, SQLiteDatabase } from 'react-native-sqlite-storage';

export const getDBConnection = async () => openDatabase({ name: 'test', location: 'default' });

const tableName = 'et_test';

enablePromise(true);

export const createTable = async (db: SQLiteDatabase) => {
    const query = `CREATE TABLE IF NOT EXISTS ${tableName} (
        id INT AUTO_INCREMENT PRIMARY KEY,
        value DECIMAL(10, 2) NOT NULL,
        type VARCHAR(255) NOT NULL,
        date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );`;
    await db.executeSql(query);
};

export const insertData = async (db: SQLiteDatabase) => {
    const query = `
        INSERT INTO ${tableName} (value, type)
        VALUES (100, 'LOAN')
    `;
    const data = await db.executeSql(query);
    console.log(data);
};

export const fetchAllData = async (db: SQLiteDatabase) => {
    const expenses:Array<Object> = [];
    const query = `
        SELECT * FROM ${tableName};
    `;
    const results = await db.executeSql(query);
    results.forEach((result) => {
        for (let index = 0; index < result.rows.length; index++) {
            expenses.push(result.rows.item(index));
        }
    });
    return expenses;
};
