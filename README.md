# Vanilla JS CLI

Vanilla JS CLI is a tool for to create a vanilla JS project with a simple command. 
It will create a folder with the project name and add the necessary files to get started.
Inspired from [Building a CLI](https://egmz.medium.com/building-a-cli-with-node-js-in-2024-c278802a3ef5)

## Installation

```bash
npm install -g vanilla-js-cli
```

## Usage

To start using Vanilla JS CLI, run:

```bash
vanilla-js
```

### Dependencies

- [commander](https://www.npmjs.com/package/commander): The complete solution for node.js command-line interfaces.
- [chalk](https://www.npmjs.com/package/chalk): Terminal string styling done right.
- [figlet](https://www.npmjs.com/package/figlet): Creates ASCII Art from text.
- [inquirer](https://www.npmjs.com/package/inquirer): A collection of common interactive command line user interfaces.
- [Ora](https://www.npmjs.com/package/ora): Elegant terminal spinner.

### File Structure

```
my-node-cli/
├─ bin/
│ └─ index.js
├─ src/
│ ├─ commands/
│ ├─ utils/
│ └─ lib/
├─ package.json
└─ README.md
```

### Commands

- `vanilla-js - name YourName`: Greets you by your name.

## License

MIT
