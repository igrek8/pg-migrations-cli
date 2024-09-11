#!/usr/bin/env node

import { program } from "commander";

import { uninstall, type UninstallOptions } from "./actions/uninstall.js";
import { attachDefaultOptions } from "./core/attach-default-options.js";
import { resolveConfig } from "./core/resolve-config.js";

const config = await resolveConfig(process.argv);

attachDefaultOptions(program, config)
  .description("Drops migrations table")
  .action((options: UninstallOptions) => uninstall(options, config))
  .parse();
