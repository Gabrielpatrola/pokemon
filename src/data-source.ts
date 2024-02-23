import "reflect-metadata"
import { DataSource } from "typeorm"
import { Pokemon } from "./entity/Pokemon"

import { DB_CONFIG } from './configs/env';

export const AppDataSource = new DataSource({
    type: "postgres",
    host: DB_CONFIG.host,
    port: DB_CONFIG.port,
    username: DB_CONFIG.username,
    password: DB_CONFIG.password,
    database: DB_CONFIG.database,
    synchronize: true,
    logging: false,
    entities: [Pokemon],
    migrations: [],
    subscribers: [],
})
