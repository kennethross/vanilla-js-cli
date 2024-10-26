# My Node CLI

My Node CLI is a tool for doing awesome things directly from your terminal.
Inspired from [This article](https://egmz.medium.com/building-a-cli-with-node-js-in-2024-c278802a3ef5)
Best practices [This article](https://github.com/lirantal/nodejs-cli-apps-best-practices)

## Installation

```bash
npm install -g my-node-cli
```

## Usage

To start using My Node CLI, run:

```bash
my-node-cli - help
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

- `my-node-cli - name YourName`: Greets you by your name.
- `my-node-cli option1`: Executes option 1.

For more detailed information on commands, run `my-node-cli --help`.

## License

MIT
