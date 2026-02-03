---
title: Docker Compose PostgreSQL
description: Docker Compose file for a PostgreSQL database
date: '2025-03-02'
tags: ['docker']
---

# Docker Compose PostgreSQL

A straightforward Docker Compose setup for PostgreSQL. Perfect for local development when you need a database quickly without dealing with installation and configuration.

The service runs on port 5432 with the classic default credentials (Warning: for local development only! 🔓).

```yaml
services:
  postgres:
    image: postgres:17
    ports:
      - "5432:5432"
    environment:
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: postgres
      POSTGRES_DB: local
    volumes:
      - pg-data:/var/lib/postgresql/data

volumes:
  pg-data:
```
