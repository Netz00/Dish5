# Dish5

# Requirements

1. Docker

- Install [Ubuntu WSL](https://www.microsoft.com/hr-hr/p/ubuntu-1804-lts/9n9tngvndl3q?activetab=pivot:overviewtab)
- Install **Linux kernel update package** [Ubuntu WSL](https://wslstorestorage.blob.core.windows.net/wslblob/wsl_update_x64.msi)
- Install [Docker](https://www.docker.com/get-started)

2. Git

- Install [Git](https://git-scm.com/downloads)

3. Node

- Install [Node 16.13.0 LTS](https://nodejs.org/en/)

# Installation

1. Clone repo to your working directory

```bash
  git clone https://github.com/Netz00/Dish5.git
```

## Postgre

2. Start docker if not running
3. Navigate to **deployment** directory `docker-compose up -d`
4. Wait until docker downloads the images and deploys containers
5. Open [pgAdmin](http://localhost:5050/) in your browser.
6. Add new server
7. Server data

- Name: `<anything>`
- Host name/address: `dish5-postgres`
- Port: `5432`
- Username: `dish5_api`
- Password: `fesb2021`

## Server

8. Navigate to **server** directory
9. Run `npm install`
10. Run DB migration `knex migrate:latest`
11. Run DB seed `knex seed:run`
12. Run node server `npm start`

## Client

13. Navigate to **client** directory `npm install`
14. Run react app `npm start`

## SOME USED SOFTWARE

- https://vincit.github.io/objection.js/
- https://knexjs.org/
