import { Command } from "commander";

import { Config } from "./config.interface.js";
import {
  DEFAULT_CONFIG_PATH,
  DEFAULT_DB,
  DEFAULT_DIR,
  DEFAULT_HOST,
  DEFAULT_PASSWORD,
  DEFAULT_PORT,
  DEFAULT_TABLE,
  DEFAULT_USER,
} from "./constants.js";
import { parseInt } from "./parse-int.js";

export function attachDefaultOptions(cmd: Command, config?: Config) {
  return cmd
    .requiredOption(
      "--host <string>",
      "host",
      config?.host ?? process.env.POSTGRES_HOST ?? DEFAULT_HOST,
    )
    .requiredOption(
      "--port <number>",
      "port",
      parseInt,
      config?.port ?? process.env.POSTGRES_PORT ?? DEFAULT_PORT,
    )
    .requiredOption(
      "-u, --user <string>",
      "user",
      config?.user ?? process.env.POSTGRES_USER ?? DEFAULT_USER,
    )
    .requiredOption(
      "-p, --password <string>",
      "password",
      config?.password ?? process.env.POSTGRES_PASSWORD ?? DEFAULT_PASSWORD,
    )
    .requiredOption("--db <name>", "database", config?.db ?? process.env.POSTGRES_DB ?? DEFAULT_DB)
    .requiredOption("--dir <name>", "migrations directory", config?.dir ?? DEFAULT_DIR)
    .requiredOption("--table <name>", "migrations table", config?.table ?? DEFAULT_TABLE)
    .requiredOption("--config <path>", "config path", DEFAULT_CONFIG_PATH);
}
