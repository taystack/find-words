# Word soup

Example Typescript application using both a backend server and a frontend server with a common package for type consistency.

This project utilizes `yarn workspaces` to manage both all typescript packages.

## Installation
Ensure you are on the correct version of `node`. You can do this by running `which node` and comparing against the `.nvmrc`.

```bash
node -v
cat .nvmrc
```

If you're running `nvm`, you can simply `nvm use`

```bash
nvm use
# Now using node v18.18.0 (npm v9.8.1)
```

This project uses yarn to install dependencies. From the `rootDir`
```bash
yarn
```
After running `yarn` a shared library will be built.

## Running

Run the entire suite.
```bash
yarn start
```
This command will do 3 things with `--watch`:
- Run a small React application on `localhost:3000`
- Run a small express node server on `localhost:3001`
- Build a small shared library.

Type a word into the large input and hit `Enter`. You will see the result of many combinations of the provided letters. Includes performance.

## Testing
A few tests are included with the shared library. Run all test suites with the test command.
```bash
yarn test
```

Alternatively, you can test each package in isolation.
```bash
yarn workspace frontend test
yarn workspace @local/find-words test
```
