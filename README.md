# Welcome to SARA project
#### Search and Rescue application

## iOS app repository: [馃崕 iOS app](https://github.com/macko99/sara-ios-public)

## backend (server + database) repo: [馃捑 backend](https://github.com/macko99/sara-server-public)

## frontend React app repo: [馃柤 React](https://github.com/tombush0/sara-panel)


## What's SARA?

SARA stands for Search and Rescue application

Praca in偶ynierska w ramach studi贸w I stopnia na Akademii G贸rniczo-Hutniczej w Krakowie na kierunku Informatyka 

Zadaniem aplikacji jest monitorowanie, koordynowanie i zarz膮dzanie w czasie rzeczywistym poszukiwawczymi w r贸偶nych terenach. Aplikacja b臋dzie umo偶liwia艂a 艣ledzenie ruch贸w grup, pokrytego przez ni膮 terenu oraz komunikacj臋 dwustronn膮 z central膮 oraz grupami mi臋dzy sob膮, wraz z przesy艂aniem zdj臋膰 i plik贸w.

## Contributors

- <a href="https://github.com/tombush0">Tomasz Zachwieja</a>
- <a href="https://github.com/macko99">Maciej Kozub</a>

## About this repository

1. This repository is maintained for Docker Compose image containing full application that is database + backend sever + frontend web application
2. Mobile app is avaialvale here [馃崕 iOS app](https://github.com/macko99/sara-ios-public)


## Getting Started 馃馃徎鈥嶐煉?
[Docker Compose](https://docs.docker.com/compose/) images prepared 

Now you are just one command away from running **database + backend + frontend** locally

1. Make sure you have [Docker](https://www.docker.com/get-started) installed on your system

2. **Increase RAM allocation for docker (e.g. using Docker Desktop) to at least 4GB**

3. Clone [馃捒 Docker](https://github.com/macko99/sara-docker-public) and navigate to folder **docker**, you will find **docker-compose.yaml** inside

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