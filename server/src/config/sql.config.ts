import { registerAs } from "@nestjs/config";
import { Dialect } from 'sequelize';

export const sqlConfig = registerAs('database', () => ({
    dialect: <Dialect>process.env.POSTGRES_DIALECT || 'postgres',
    logging: process.env.POSTGRES_LOGGING === 'true' ? true : false,
    host: process.env.POSTGRES_HOST,
    port: Number(process.env.POSTGRES_PORT),
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    autoLoadEntities: true,
    synchronize: true,
}))