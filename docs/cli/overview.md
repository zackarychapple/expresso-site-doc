---
sidebar_position: 1
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Overview

The Expresso TS CLI is a command-line interface tool that helps you to create `ExpressoTS` projects, develop, and maintain your applications and resources created. It assists in multiple ways, including scaffolding the project as well as the services offered by the application such as use cases, controllers, providers and more.

## Installation 💻

<Tabs>
  <TabItem value="npm" label="NPM" default>

    npm install -g @expressots/cli

  </TabItem>
  <TabItem value="yarn" label="Yarn">

    yarn global add @expressots/cli

  </TabItem>
  <TabItem value="pnpm" label="PNPM">

    pnpm add -g @expressots/cli

  </TabItem>
</Tabs>

:::tip
Alternatively, you can use this command npx @expressots/cli@latest without installing the cli globally.
:::

## Creating a new project

```bash
expressots new <project-name>
```

Read the section on [Creating New Project](new) for more detailed information to create your project.

## Creating a new resource

```bash
expressots generate <resource> <resource-name>
```

Read the section on [Creating New Resource](generate) for more detailed information to create your resource.

## Other commands

```bash
expressots --help
```

```bash
expressots --version
```

## Stay in touch

- Website: [https://expresso-ts.com](https://expresso-ts.com)
- Twitch:  [@expressots Development](https://www.twitch.tv/richardzampieri)

## License

Expresso TS is [MIT Licensed](https://github.com/expressots/expressots-cli/blob/main/LICENSE.md)

## Support the project

ExpressoTS is an MIT-licensed open source project. It's an independent project with ongoing development made possible thanks to your support. If you'd like to help, please consider:

- [Become a sponsor on GitHub]("")
- Follow the organization on GitHub and Star the project
- Subscribe to the Twitch channel: [Richard Zampieri](https://www.twitch.tv/richardzampieri)
- Contribute submitting issues and pull requests
- Share the project with your friends and colleagues