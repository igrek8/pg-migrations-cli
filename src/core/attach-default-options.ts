import { Command } from "commander";

import { Config } from "./config.interface.js";
import {
  DEFAULT_CONFIG_PATH,
  DEFAULT_DIR,
  DEFAULT_HOST,
  DEFAULT_PORT,
  DEFAULT_TABLE,
  DEFAULT_USER,
} from "./constants.js";
import { parseInt } from "./parse-int.js";

export function attachDefaultOptions(cmd: Command, config?: Config) {
  return cmd
    .requiredOption(
      "--host <string>",
      "postgres host",
      config?.host ?? process.env.POSTGRES_HOST ?? DEFAULT_HOST,
    )
    .requiredOption(
      "--port <number>",
      "postgers port",
      parseInt,
      config?.port ?? process.env.POSTGRES_PORT ?? DEFAULT_PORT,
    )
    .option(
      "-u, --user <string>",
      "postgres user",
      config?.user ?? process.env.POSTGRES_USER ?? DEFAULT_USER,
    )
    .option(
      "-p, --password <string>",
      "postgers password",
      config?.password ?? process.env.POSTGRES_PASSWORD,
    )
    .option("--db <name>", "database name", config?.db ?? process.env.POSTGRES_DB)
    .requiredOption("--dir <name>", "migrations directory", config?.dir ?? DEFAULT_DIR)
    .requiredOption("--table <name>", "migrations table", config?.table ?? DEFAULT_TABLE)
    .requiredOption("--config <path>", "config path", DEFAULT_CONFIG_PATH);
}
