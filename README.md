# Currents Playwright NX Example

This repository shows how to use NX + Playwright with Currents.

## Setup

```sh
npm i -g nx@latest
npm i
```

## Run

```sh
CURRENTS_RECORD_KEY=recordkey \
CURRENTS_PROJECT_ID=projectid \
CURRENTS_CI_BUILD_ID=`date +%s` \
nx run-many -t e2e  --parallel=2 --verbose
```

### Output directory

Playwright output directory is set in `project.json` > `targets.e2e.options.output`, for example:

```json
 "targets": {
    "e2e": {
      "executor": "@nx/playwright:playwright",
      "options": {
        "skipInstall": true,
        "output": "{workspaceRoot}/playwright-report/{projectName}",
        "config": "{projectRoot}/playwright.config.ts"
      }
    }
  }
```

After running the tests, results will appear as:

```plain
playwright-report/
├── e2e-01/
│   └── .last-run.json
└── e2e-02/
    └── .last-run.json
```

ℹ️ `playwright.config.ts` for each project use `nxE2EPreset` - it sets a different `output` directory, but `project.json:output` overrides it.

## Last Failed

nx passes down unrecognized arguments to the target command, for example

```sh
nx run-many -t e2e  --parallel=2 --verbose --last-failed
# ...

 NX   Ran target e2e for 2 projects (7s)

      With additional flags:
        --last-failed=true
```
