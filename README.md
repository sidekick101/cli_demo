oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g clidemo
$ clidemo COMMAND
running command...
$ clidemo (--version)
clidemo/0.0.0 linux-x64 node-v16.14.0
$ clidemo --help [COMMAND]
USAGE
  $ clidemo COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`clidemo hello PERSON`](#clidemo-hello-person)
* [`clidemo hello world`](#clidemo-hello-world)
* [`clidemo help [COMMAND]`](#clidemo-help-command)
* [`clidemo plugins`](#clidemo-plugins)
* [`clidemo plugins:inspect PLUGIN...`](#clidemo-pluginsinspect-plugin)
* [`clidemo plugins:install PLUGIN...`](#clidemo-pluginsinstall-plugin)
* [`clidemo plugins:link PLUGIN`](#clidemo-pluginslink-plugin)
* [`clidemo plugins:uninstall PLUGIN...`](#clidemo-pluginsuninstall-plugin)
* [`clidemo plugins update`](#clidemo-plugins-update)

## `clidemo hello PERSON`

Say hello

```
USAGE
  $ clidemo hello [PERSON] -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Whom is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/hello/index.ts](https://github.com/sidekick101/cli_demo/blob/v0.0.0/dist/commands/hello/index.ts)_

## `clidemo hello world`

Say hello world

```
USAGE
  $ clidemo hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ oex hello world
  hello world! (./src/commands/hello/world.ts)
```

## `clidemo help [COMMAND]`

Display help for clidemo.

```
USAGE
  $ clidemo help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for clidemo.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.12/src/commands/help.ts)_

## `clidemo plugins`

List installed plugins.

```
USAGE
  $ clidemo plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ clidemo plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.0.11/src/commands/plugins/index.ts)_

## `clidemo plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ clidemo plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ clidemo plugins:inspect myplugin
```

## `clidemo plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ clidemo plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ clidemo plugins add

EXAMPLES
  $ clidemo plugins:install myplugin 

  $ clidemo plugins:install https://github.com/someuser/someplugin

  $ clidemo plugins:install someuser/someplugin
```

## `clidemo plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ clidemo plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.

EXAMPLES
  $ clidemo plugins:link myplugin
```

## `clidemo plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ clidemo plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ clidemo plugins unlink
  $ clidemo plugins remove
```

## `clidemo plugins update`

Update installed plugins.

```
USAGE
  $ clidemo plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
