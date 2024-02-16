import fs from "node:fs";
import path from "node:path";

function getIconChoices() {
  const folder = "./src/lib/components/Icons";
  return fs
    .readdirSync(path.resolve(folder), { withFileTypes: true })
    .filter((e) => e.isDirectory());
}

export default function (plop) {
  plop.setGenerator("componente", {
    description: "Criar um novo componente",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Nome do componente",
      },
      {
        type: "confirm",
        name: "haveStyles",
        message: "O componente terá estilos?",
      },
      {
        type: "confirm",
        name: "haveTypes",
        message: "O componente terá tipagem?",
      },
    ],
    actions: ({ haveTypes = false, haveStyles = true }) => {
      const data = [
        {
          type: "add",
          path: "src/lib/components/{{pascalCase name}}/{{pascalCase name}}.tsx",
          templateFile: "plop-templates/component.hbs",
        },
        {
          type: "add",
          path: "src/lib/components/{{pascalCase name}}/{{pascalCase name}}.stories.ts",
          templateFile: "plop-templates/component.stories.hbs",
        },
        {
          type: "add",
          path: "src/lib/components/{{pascalCase name}}/index.ts",
          templateFile: "plop-templates/component.index.hbs",
        },
      ];

      if (haveTypes) {
        data.push({
          type: "add",
          path: "src/lib/components/{{pascalCase name}}/{{pascalCase name}}.types.tsx",
          templateFile: "plop-templates/component.types.hbs",
        });
      }

      if (haveStyles) {
        data.push({
          type: "add",
          path: "src/lib/components/{{pascalCase name}}/{{pascalCase name}}.styles.ts",
          templateFile: "plop-templates/component.styles.hbs",
        });
      }

      return data;
    },
  });

  plop.setGenerator("icone", {
    description: "Criar um novo ícone",
    prompts: [
      {
        type: "list",
        name: "folder",
        choices: getIconChoices,
        message: "Local do ícone",
      },
      {
        type: "input",
        name: "name",
        message: "Nome do ícone",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/lib/components/Icons/{{folder}}/{{pascalCase name}}.icon.tsx",
        templateFile: "plop-templates/icon.hbs",
      },
    ],
  });
}
