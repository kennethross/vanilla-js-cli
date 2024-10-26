#!/usr/bin/env node
import { program } from 'commander';
import chalk from 'chalk';
import inquirer from 'inquirer';
import ora from 'ora';
import figlet from 'figlet';
import fs from 'fs';
import path from 'path';

console.log(
  chalk.yellow(figlet.textSync('Vanilla JS CLI', { horizontalLayout: 'full' }))
);

program.version('1.0.0').description('Vanilla JS CLI');

program.action(() => {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'projectName',
        message: 'Enter project name:',
      },
      {
        type: 'input',
        namee: 'authorEmail',
        message: 'Enter author email:',
        validate: (input) => {
          if (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(input)) {
            return true;
          }
          return 'Please enter a valid email address';
        },
      },
    ])
    .then((result) => {
      if (!result.projectName) {
        console.log(chalk.red('Project name is required'));
        return;
      }

      const spinner = ora(`Doing ${result.choice}...`).start(); // Start the spinner)

      const { projectName, authorEmail } = result;
      createVanillaJsProject({
        projectName,
        email: authorEmail,
      });

      spinner.succeed(chalk.green('Done!'));
    })
    .catch((error) => {
      if (error.isTtyError) {
        console.error(
          chalk.red('Prompt couldn\'t be rendered in the current environment.')
        );
      } else if (error.message === 'User force closed the prompt with 0 null') {
        console.log(chalk.red('Prompt was closed by the user.'));
      } else {
        console.error(chalk.red('An error occurred:'), error);
      }
    });
});

program.parse(process.argv);

// process.on('SIGINT', ...): This listens for the SIGINT signal,
// which is emitted when the user presses Ctrl+C.
// When this signal is detected, a message is logged,
// and the process exits with a status code of 1.
process.on('SIGINT', () => {
  console.log(chalk.red('\nProcess interrupted by user.'));
  process.exit(1);
});

// where the logic for the creation of default files of a vanilla js project will be

/**
 * Create a Vanilla JS project
 * @param {string} projectName - The name of the project
 * @param {string} email - The email of the author
 * @returns {void}
 */
function createVanillaJsProject({ projectName, email }) {
  const currentWorkingDirectory = process.cwd();
  const projectPath = path.join(currentWorkingDirectory, projectName);

  // Create project directory
  if (!fs.existsSync(projectPath)) {
    fs.mkdirSync(projectPath);
  }

  // Create index.html
  const htmlContent = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vanilla JS Project</title>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <h1>Hello, Vanilla JS!</h1>
    <script src="index.js"></script>
  </body>
  </html>
  `;
  fs.writeFileSync(path.join(projectPath, 'index.html'), htmlContent);

  // Create index.js
  const jsContent = `
  document.addEventListener('DOMContentLoaded', () => {
    console.log('Hello, Vanilla JS!');
  });
  `;
  fs.writeFileSync(path.join(projectPath, 'index.js'), jsContent);

  // Create style.css
  const cssContent = `
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    text-align: center;
  }
  `;
  fs.writeFileSync(path.join(projectPath, 'style.css'), cssContent);

  // Create README.md
  const readmeContent = `
    # ${projectName}
    A Vanilla JS project

    # Getting Started
    Open index.html in your browser
  `;
  fs.writeFileSync(path.join(projectPath, 'README.md'), readmeContent);

  // Optionally, create package.json
  const packageJsonContent = {
    name: projectName,
    version: '1.0.0',
    main: 'index.js',
    scripts: {
      start: 'open index.html',
    },
    author: {
      email,
    },
    license: 'MIT',
  };
  fs.writeFileSync(
    path.join(projectPath, 'package.json'),
    JSON.stringify(packageJsonContent, null, 2)
  );
}
