# Vite Design System

This project is a small design system project aimed at improving my knowledge of how to create a design system.

## Localy Run

Clone this project

```bash
  git clone git@github.com:Santosl2/vite-design-system.git
```

Enter in repository project folder

```bash
  cd vite-design-system
```

Install the dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

## Run with Docker

First you need to create a docker image, so go to the repository folder and run

```bash
  docker build -t vite-ds .
```

Now create the container

```bash
  docker run --name vite-ds-container -d -p 8080:8080 vite-ds
```

Now go to the http://localhost:8080

## Docs

You can run the docs using `npm run storybook`

## Technologies

- [Vite](https://vitejs.dev/guide/)
- [React](https://react.dev/)
