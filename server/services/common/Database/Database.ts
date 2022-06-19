import { IdbConfig } from "../contracts/IdbConfig";
import { dbConfig } from "./PostgresConfig";
import { Client } from 'ts-postgres';

export class Database {

    private _dbConfig: IdbConfig;
    private static _instance: Database;
    private con!: Client;

    private constructor(dbConfig: IdbConfig) {
        this._dbConfig = dbConfig;
    }

    public static getInstance(): Database {
        
        if (!Database._instance) {
            Database._instance = new Database(dbConfig);
        }
        return Database._instance;
    }
    
    private async connect() {
        this.con = new Client(dbConfig);
        await this.con.connect();
    }

    public async run(query: string, params: any[] = []): Promise<any> {
        await this.connect();

        const result = await this.con.query(query, params);
        const ret = [];

        for await (const row of result) {
            ret.push(row);
        }

        await this.con.end();
        return ret;            
    }
}