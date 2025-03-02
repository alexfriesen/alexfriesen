---
title: Docker Compose PostgreSQL
description: Docker Compose file for a PostgreSQL database
date: '2025-03-02'
tags: ['docker']
---

# Docker Compose PostgreSQL

This is a simple Docker Compose example for a PostgreSQL database. The service is exposed on port 5432, and the database is configured as `local` with the user `postgres` and the password `postgres`.

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
