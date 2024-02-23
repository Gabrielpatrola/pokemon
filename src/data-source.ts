import "reflect-metadata"
import { DataSource } from "typeorm"
import { Pokemon } from "./entity/Pokemon"

import { DB_CONFIG, isTest } from './configs/env';

export const AppDataSource = new DataSource({
    type: isTest ? 'sqlite' : 'postgres',
    host: DB_CONFIG.host,
    port: DB_CONFIG.port,
    username: DB_CONFIG.username,
    password: DB_CONFIG.password,
    database: isTest ? 'test.sqlite' : DB_CONFIG.database,
    synchronize: true,
    logging: false,
    entities: [Pokemon],
    migrations: [],
    subscribers: [],
})
