---
title: Docker Compose PostgreSQL
description: Docker Compose Datei für eine PostgreSQL-Datenbank
date: '2025-03-02'
tags: ['docker']
---

# Docker Compose PostgreSQL

Dies ist ein einfaches Docker Compose Beispiel für eine PostgreSQL-Datenbank. Der Dienst wird auf Port 5432 verfügbar gemacht und die Datenbank wird als `local` mit dem Benutzer `postgres` und dem Passwort `postgres` konfiguriert.

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
