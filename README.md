# PostgreSQL Migrator

[![codecov](https://codecov.io/gh/igrek8/pgmcli/graph/badge.svg?token=4TH5JD43AO)](https://codecov.io/gh/igrek8/pgmcli)

Apply or revert migrations for PostgreSQL.

- [PostgreSQL Migrator](#postgresql-migrator)
  - [Quick start](#quick-start)
  - [Configuration](#configuration)
  - [Installation](#installation)
  - [Commands](#commands)
    - [Install](#install)
    - [Uninstall](#uninstall)
    - [Create](#create)
    - [Status](#status)
    - [Apply](#apply)
    - [Revert](#revert)

## Quick start

```bash
npx pgmcli -h
```

## Configuration

You can optionally create `.pgmcli`.

```json
{
  "$schema": "https://raw.githubusercontent.com/igrek8/pgmcli/main/schema.json",
  "user": "postgres",
  "password": "postgres",
  "db": "postgres"
}
```

**Configuration order:**

1. Command options
2. Config file
3. Environment variables

## Installation

```bash
npm i -g pgmcli
```

```bash
yarn global add pgmcli
```

## Commands

### Install

```
Usage: pgmcli install [options]

Creates migrations directory and table

Options:
  --host <string>          host (default: "localhost")
  --port <number>          port (default: 5432)
  -u, --user <string>      user (default: "postgres")
  -p, --password <string>  password (default: "postgres")
  --db <name>              database (default: "postgres")
  --dir <name>             migrations directory (default: "migrations")
  --table <name>           migrations table (default: "migrations")
  --config <path>          config path (default: ".pgmcli")
  -h, --help               display help for command
```

### Uninstall

```
Usage: pgmcli uninstall [options]

Drops migrations table

Options:
  --host <string>          host (default: "localhost")
  --port <number>          port (default: 5432)
  -u, --user <string>      user (default: "postgres")
  -p, --password <string>  password (default: "postgres")
  --db <name>              database (default: "postgres")
  --dir <name>             migrations directory (default: "migrations")
  --table <name>           migrations table (default: "migrations")
  --config <path>          config path (default: ".pgmcli")
  -h, --help               display help for command
```

### Create

```
Usage: pgmcli create [options]

Creates a migration file

Options:
  --name <name>    Migration file name (.ts, .js, .cjs, .mjs, .mts, .sql)
  --plan           show plan
  --dir <name>     Migrations directory (default: "migrations")
  --tag <name>     Tag where revert block begins (default: "REVERT BEGIN")
  --config <path>  Config path
  -h, --help       display help for command
```

### Status

```
Usage: pgmcli status [options]

Shows statuses of migrations

Options:
  --host <string>          host (default: "localhost")
  --port <number>          port (default: 5432)
  -u, --user <string>      user (default: "postgres")
  -p, --password <string>  password (default: "postgres")
  --db <name>              database (default: "postgres")
  --dir <name>             migrations directory (default: "migrations")
  --table <name>           migrations table (default: "migrations")
  --config <path>          config path (default: ".pgmcli")
  -h, --help               display help for command
```

### Apply

```
Usage: pgmcli apply [options]

Applies migrations

Options:
  --host <string>          host (default: "localhost")
  --port <number>          port (default: 5432)
  -u, --user <string>      user (default: "postgres")
  -p, --password <string>  password (default: "postgres")
  --db <name>              database (default: "postgres")
  --dir <name>             migrations directory (default: "migrations")
  --table <name>           migrations table (default: "migrations")
  --config <path>          config path (default: ".pgmcli")
  -n <number>              apply "n" pending migrations (default: null)
  --plan                   show plan
  --log-level <level>      log level (choices: "DEBUG", "LOG", "INFO", "NOTICE", "WARNING", "ERROR", default: "DEBUG")
  --meta <jsonb>           extra meta associated with apply
  --tag <name>             tag where apply block ends (default: "REVERT BEGIN")
  -h, --help               display help for command
```

### Revert

```
Usage: pgmcli revert [options]

Reverts migrations

Options:
  --host <string>          host (default: "localhost")
  --port <number>          port (default: 5432)
  -u, --user <string>      user (default: "postgres")
  -p, --password <string>  password (default: "postgres")
  --db <name>              database (default: "postgres")
  --dir <name>             migrations directory (default: "migrations")
  --table <name>           migrations table (default: "migrations")
  --config <path>          config path (default: ".pgmcli")
  -n <number>              Revert "n" applied migrations (default: 1)
  --plan                   Show plan
  --log-level <level>      log level (choices: "DEBUG", "LOG", "INFO", "NOTICE", "WARNING", "ERROR", default: "DEBUG")
  --tag <name>             Tag where revert block begins (default: "REVERT BEGIN")
  -h, --help               display help for command
```
