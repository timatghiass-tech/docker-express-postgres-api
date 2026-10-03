# Containerized Products Management API

A RESTful API built with **Node.js**, **Express**, and **PostgreSQL**, fully containerized and orchestrated using **Docker** and **Docker Compose**.

---

## 🛠 Tech Stack

- **Node.js** & **Express** - Backend framework & routing
- **PostgreSQL 15** - Relational database
- **pg (node-postgres)** - PostgreSQL client with connection pooling
- **Docker** & **Docker Compose** - Multi-container architecture and orchestration

---

## 🚀 Architecture

The application runs using two isolated Docker services connected via a shared internal bridge network:

1. **`app`**: The Node.js application container (exposed on port `3000`).
2. **`db`**: The PostgreSQL database container (persisted via a named Docker volume `pgdata` on port `5432`).

---

## ⚙️ Getting Started

### Prerequisites

- [Docker Desktop](https://www.docker.com/products/docker-desktop/) installed and running.
- [Git](https://git-scm.com/) installed.

### Running the Application

1. Clone the repository:
   ```bash
   git clone [https://github.com/timatghiass-tech/docker-express-postgres-api.git](https://github.com/timatghiass-tech/docker-express-postgres-api.git)
   cd docker-express-postgres-api
