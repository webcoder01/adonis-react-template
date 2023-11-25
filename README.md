# About this repository

This repository is a **template** based on JS full stack framework **Adonis**. I learned its existence a few days ago. I have decided to try it because I was particularly attracted to the authentication module, which can be configured in no time and is easy to use.

Its documentation is [here](https://adonisjs.com).
You can find them on Github by clicking on this [link](https://github.com/adonisjs).

To render UI, I use the well known library named React.

# Hexagonal architecture

I started to use hexagonal architecture at work and I had the feeling to get into the big leagues ^^.
I spare you my thoughts on this subject. Nevertheless, if you don't know what this is about, I invite you to read the first article on hexagonal architecture [here](https://alistair.cockburn.us/hexagonal-architecture/).

As you may have guessed, I use hexagonal architecture on this repository.
For starters, features are present in `/app/Features`.
Each feature is organized in three repertories : 
- `Application` : Use cases are put in here
- `Domain` : This folder contains business rules and entities
- `Infrastructure` : This folder contains controllers, views, then any class interacting with third modules
