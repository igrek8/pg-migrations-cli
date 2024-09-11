#!/usr/bin/env node

import { program } from "commander";

import { status, type StatusOptions } from "./actions/status.js";
import { attachDefaultOptions } from "./core/attach-default-options.js";
import { resolveConfig } from "./core/resolve-config.js";

const config = await resolveConfig(process.argv);

attachDefaultOptions(program, config)
  .description("Shows statuses of migrations")
  .action((options: StatusOptions) => status(options, config))
  .parse();
