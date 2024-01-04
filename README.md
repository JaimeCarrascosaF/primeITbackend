# PrimeIT backend TO-DO list

### Author: Jaime Carrascosa Fernández

<inf.jaime1@gmail.com>

## Requirements

- Installed and running database with PostgreSQL. Use the `.env` file for connection configuration. <https://www.postgresql.org/download/>
- Node.js installed on version `20.10.0`. Recommended usage of nvm <https://github.com/coreybutler/nvm-windows> in windows or <https://github.com/nvm-sh/nvm> on unix/macOS systems.

- Port `5000` available. Or set another on both frontend and backend `.env` files.
- Yarn installed <https://classic.yarnpkg.com/lang/en/docs/install/>

## Install

    $ git clone https://github.com/JaimeCarrascosaF/primeITbackend
    $ cd primeITbackend
    $ yarn install

## Running the project

    $ npm run start

#### Build and serve

    $ npm run start:prod

#### Testing the project

On a separated terminal, run the project, then:

    $ npm run test
