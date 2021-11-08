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

## Client

2. Navigate to __client__ directory `npm install`
3. Run react app `npm start`

## Server

2. Navigate to __server__ directory `npm install`
3. Run node server `npm start`


## Postgre

2. Start docker if not running
3. Navigate to __server__ directory `docker-compose up -d`
4. Wait until docker downloads the images and deploys containers
5. Open [pgAdmin](http://localhost:5050/) in your browser.
