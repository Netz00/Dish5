[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![Knex.js](https://img.shields.io/badge/Knex.js-E34F26?style=for-the-badge&logo=Knex.js&logoColor=white)](https://knexjs.org/)
[![Objection.js](https://img.shields.io/badge/Objection.js-7B1FA2?style=for-the-badge&logo=node.js&logoColor=white)](https://vincit.github.io/objection.js/)

# Restaurant Management System

![Logo](documentation/logo.png)

## Overview

A web-based restaurant management system built with the PERN stack (PostgreSQL, Express.js, React.js, Node.js). Provides a containerized solution for efficient restaurant operations.

## Core Functional Requirements

### User Management

- User authentication (login/logout)
- Add and remove user accounts

### Content Management

- Modify service/product offerings
- Manage photo gallery
- View and update product catalog

### Booking System

- User reservation management
- Customer communication interface

### Inventory Control

- Track and manage inventory
- Monitor stock levels

### Business Analytics

- Access business performance metrics
- Generate operational reports

## Technology Stack

- **Frontend**: React.js
- **Backend**: Express.js, Node.js
- **Database**: PostgreSQL
- **ORM**: Objection.js with Knex.js
- **Containerization**: Docker

## Prerequisites

### Required Software

1. **Docker Environment**
    - Windows:
      - [Ubuntu WSL](https://www.microsoft.com/hr-hr/p/ubuntu-1804-lts/9n9tngvndl3q?activetab=pivot:overviewtab)
      - [Linux Kernel Update Package](https://wslstorestorage.blob.core.windows.net/wslblob/wsl_update_x64.msi)
      - [Docker Desktop](https://www.docker.com/get-started)

2. **Runtime Environment**
   - [Node.js 16.13.0 LTS](https://nodejs.org/en/)

## Installation Guide

### 1. Repository Setup

```bash
git clone https://github.com/Netz00/Dish5.git
cd Dish5
```

### 2. Database Setup

#### PostgreSQL Configuration

1. Start Docker engine
2. Navigate to the **deployment** directory and run:

    ```bash
    docker-compose up -d
    ```

3. Access [pgAdmin](http://localhost:5050/) through your web browser
4. Configure a new server with the following credentials:
   - **Server Name**: Your choice
   - **Host**: dish5-postgres
   - **Port**: 5432
   - **Username**: dish5_api
   - **Password**: fesb2021

### 3. Backend Setup

```bash
cd server
npm install
knex migrate:latest
knex seed:run
npm start
```

### 4. Frontend Setup

```bash
cd client
npm install
npm start
```

## Production environment

![Infrastructure Preview](documentation/infrastrure_preview.png)

## Database Schema

![Entity Relationship Diagram](documentation/erd.png)

### Key Dependencies

- [Objection.js](https://vincit.github.io/objection.js/) - SQL-friendly ORM
- [Knex.js](https://knexjs.org/) - SQL query builder
