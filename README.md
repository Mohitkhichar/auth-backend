# Cloud Native Authentication System

## Project Overview

This project is a cloud-native authentication system built using modern microservices and DevOps technologies.

The application consists of:
- Angular Frontend
- Spring Boot Backend
- Dockerized Microservices
- Kubernetes Orchestration
- Istio Service Mesh with Envoy Sidecars

The project demonstrates:
- containerization
- microservice communication
- Kubernetes deployments
- service discovery
- service mesh architecture
- sidecar proxy pattern

---

# Tech Stack

## Frontend
- Angular
- TypeScript
- Nginx

## Backend
- Spring Boot
- Java
- REST APIs

## DevOps / Cloud Native
- Docker
- Docker Compose
- Kubernetes
- Minikube
- Istio
- Envoy Proxy

---

# System Architecture

```text
                        +-------------------+
                        |   User Browser    |
                        +---------+---------+
                                  |
                                  v
                     +------------+-------------+
                     | Frontend Kubernetes      |
                     | Service (ClusterIP)      |
                     +------------+-------------+
                                  |
                                  v
                 +----------------+----------------+
                 | Frontend Pod                    |
                 |---------------------------------|
                 | Angular Container               |
                 | Istio Envoy Sidecar Proxy       |
                 +----------------+----------------+
                                  |
                     Service Mesh Traffic
                                  |
                                  v
                 +----------------+----------------+
                 | Backend Pod                     |
                 |---------------------------------|
                 | Spring Boot Container           |
                 | Istio Envoy Sidecar Proxy       |
                 +----------------+----------------+
                                  |
                                  v
                    +-------------+-------------+
                    | Backend Kubernetes        |
                    | Service (ClusterIP)       |
                    +---------------------------+