const componentExists = require('./plop/componentExists.js');

module.exports = plop => {
  plop.setGenerator('component', {
    description: 'Create a component',
    // User input prompts provided as arguments to the template
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?',
        validate: (value) => {
          if (!value) {
            return 'The name is required';
          }

          if (componentExists(value)) {
            return 'Component already exists';
          }

          return true;
        },
      },
      {
        type: 'confirm',
        name: 'addHook',
        message: 'Do you want to add a hook to this component?',

      }
    ],
    actions(data) {
      const actions = [];

      actions.push(
        {
          type: 'add',
          path: `src/components/{{pascalCase name}}/index.tsx`,
          templateFile: 'plop/templates/component/Component.tsx.hbs',
        },
      );

      if (data.addHook) {
        actions.push(
          {
            type: 'add',
            path: 'src/components/{{pascalCase name}}/use{{pascalCase name}}.ts',
            templateFile: 'plop/templates/component/useComponent.ts.hbs',
          },
        )
      }

      return actions;

    }
  });
};
