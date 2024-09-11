import { mkdir } from "fs/promises";
import pg from "pg";

import { Config } from "../core/config.interface.js";
import { DefaultCommandOptions } from "../core/default-command-options.interface.js";

export type InstallOptions = DefaultCommandOptions;

const sql = `
  CREATE TABLE <table> (
    id VARCHAR PRIMARY KEY,
    meta JSONB CHECK (jsonb_typeof(meta) = 'object')
  );
`;

export async function install(options: InstallOptions, config?: Config) {
  const client = new pg.Client({
    ...config?.client,
    host: options.host,
    port: options.port,
    database: options.db,
    user: options.user,
    password: options.password,
  });
  const table = client.escapeIdentifier(options.table);
  try {
    await client.connect();
    await client.query(sql.replace("<table>", table));
    await mkdir(options.dir, { recursive: true });
  } finally {
    await client.end();
  }
}
