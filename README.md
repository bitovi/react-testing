# react-testing

A repository for demonstrating how to test componentns and hooks created for
React.

This repository uses nx for its monorepo workspace. You should only add new
application or library projects using [nx CLI generator
commands](https://nx.dev/latest/react/react/overview).

The nx command is installed locally. Where example nx commands are `nx g
@nrwl/react:library` include "yarn" as a prefix like so: `yarn nx g
@nrwl/react:library`

## Contents

- [Testing hooks](libs/hook-testing/README.md)

## Commands

### tests

- `yarn nx test <project-name>` Run all tests in a project.
- `yarn nx test <project-name> --testFile=<relative path to file>` Run all tests from a specific file in a project.
- `yarn nx affected:test` Run all tests based on files that have changed relative to the main branch.
