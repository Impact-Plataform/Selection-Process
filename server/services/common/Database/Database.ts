import { IdbConfig } from "../contracts/IdbConfig";
import { dbConfig } from "./PostgresConfig";
import { Client } from 'ts-postgres';
import log from "../../../logger/logger";

export class Database {
    private _dbConfig: IdbConfig;
    private static _instance: Database;
    private con: Client;
    private constructor(dbConfig: IdbConfig) {
        this._dbConfig = dbConfig;
        this.con = new Client(dbConfig);
    }

    public static getInstance(): Database {
        if (!Database._instance) {
            Database._instance = new Database(dbConfig);
        }
        return Database._instance;
    }

    public async run(query: string, params: any[] = []): Promise<any> {
        await this.con.connect();

        const result = await this.con.query(query, params);
        const ret = [];
        for await (const row of result) {
            ret.push(row);
        }
        await this.con.end();
        return ret;            
    }
}