---
title: Docker Compose PostgreSQL
description: Docker Compose Datei für eine PostgreSQL-Datenbank
date: '2025-03-02'
tags: ['docker']
---

# Docker Compose PostgreSQL

Ein unkompliziertes Docker Compose Setup für PostgreSQL. Perfekt für lokale Entwicklung, wenn man schnell eine Datenbank braucht, ohne sich mit Installation und Konfiguration herumzuschlagen.

Der Dienst läuft auf Port 5432 mit den klassischen Default-Credentials (Achtung: nur für lokale Entwicklung! 🔓).

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
