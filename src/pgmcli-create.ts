#!/usr/bin/env node

import { program } from "commander";

import { create, templates } from "./actions/create.js";
import { DEFAULT_DIR, DEFAULT_TAG } from "./core/constants.js";
import { resolveConfig } from "./core/resolve-config.js";

const extensions = Object.keys(templates).join(", ");

const config = await resolveConfig(process.argv);

program
  .description("Creates a migration file")
  .requiredOption("--name <name>", `Migration file name (${extensions})`)
  .option("--plan", "show plan")
  .requiredOption("--dir <name>", "Migrations directory", config?.dir ?? DEFAULT_DIR)
  .requiredOption("--tag <name>", "Tag where revert block begins", config?.tag ?? DEFAULT_TAG)
  .option("--config <path>", "Config path")
  .action(create)
  .parse();
