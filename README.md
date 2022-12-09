# Welcome to SARA project
#### Search and Rescue application

## iOS app repository: [🍎 iOS app](https://github.com/macko99/sara-ios-public)

## backend (server + database) repo: [💾 backend](https://github.com/macko99/sara-server-public)

## frontend React app repo: [🖼 React](https://github.com/tombush0/sara-panel)


## What's SARA?

SARA stands for Search and Rescue application

Praca inżynierska w ramach studiów I stopnia na Akademii Górniczo-Hutniczej w Krakowie na kierunku Informatyka 

Zadaniem aplikacji jest monitorowanie, koordynowanie i zarządzanie w czasie rzeczywistym poszukiwawczymi w różnych terenach. Aplikacja będzie umożliwiała śledzenie ruchów grup, pokrytego przez nią terenu oraz komunikację dwustronną z centralą oraz grupami między sobą, wraz z przesyłaniem zdjęć i plików.

## Contributors

- <a href="https://github.com/tombush0">Tomasz Zachwieja</a>
- <a href="https://github.com/macko99">Maciej Kozub</a>

## About this repository

1. This repository is maintained for Docker Compose image containing full application that is database + backend sever + frontend web application
2. Mobile app is avaialvale here [🍎 iOS app](https://github.com/macko99/sara-ios-public)


## Getting Started 🧑🏻‍💻
[Docker Compose](https://docs.docker.com/compose/) images prepared 

Now you are just one command away from running **database + backend + frontend** locally

1. Make sure you have [Docker](https://www.docker.com/get-started) installed on your system

2. **Increase RAM allocation for docker (e.g. using Docker Desktop) to at least 4GB**

3. Clone [💿 Docker](https://github.com/macko99/sara-docker-public) and navigate to folder **docker**, you will find **docker-compose.yaml** inside

4. Execute 

        $ docker compose up -d --build

5. All info below about running separate docker images are still valid

6. For more information and adjustments please read comments inside **docker-compose.yaml** and proper **Dockerfiles**

7. How to clean docker containers/images and volumes:

        $ docker system prune -a
        $ docker volume rm $(docker volume ls -q)

---

## How to make it work?

Fix all `---FIXME---` placeholders in the source code.