'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the exceptional ' + chalk.red('generator-awslucasarch') + ' generator!'
    ));

    const prompts = [{
      type: 'confirm',
      name: 'someAnswer',
      message: 'Would you like to enable this option?',
      default: true
    }, 
    {
      type: 'input',
      name: 'projectname',
      message: 'Project Name: ',
      default: 'none'
    }];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    // Copy the configuration files
    this.fs.copyTpl(
      this.templatePath('_package.json'),
      this.destinationPath('package.json'), {
        name: this.props.projectname
      });

    // Server file
    this.fs.copyTpl(
      this.templatePath('_src/_server.js'),
      this.destinationPath('src/server.js'), {
        name: this.props.projectname
      });

    // src/errorExceptions
    this.fs.copy(
      this.templatePath('_src/_errorExceptions.js'),
      this.destinationPath('src/errorExceptions.js'));

    // src/logger
    this.fs.copy(
      this.templatePath('_src/_logger.js'),
      this.destinationPath('src/logger.js'));

    // src/codeGenerator
    this.fs.copy(
      this.templatePath('_src/_codeGenerator/_index.js'),
      this.destinationPath('src/codeGenerator/index.js'));

    // src/adapter
    this.fs.copy(
      this.templatePath('_src/_adapter/_dynamo.js'),
      this.destinationPath('src/adapter/dynamo.js'));

    // src/query
    this.fs.copyTpl(
      this.templatePath('_src/_query/_service.js'),
      this.destinationPath('src/query/service.js'), {
        name: this.props.projectname
      });

    // src/config
    this.fs.copy(
      this.templatePath('_src/_config/_dynamo.js'),
      this.destinationPath('src/config/dynamo.js'));

    this.fs.copy(
      this.templatePath('_src/_config/_app.js'),
      this.destinationPath('src/config/app.js'));

    this.fs.copyTpl(
      this.templatePath('_src/_config/_logger.js'),
      this.destinationPath('src/config/logger.js'), {
        name: this.props.projectname
      });
  }

  install() {
    this.installDependencies();
  }
};
