# Memory game to modyo´s apply
## Descripcion ES/ENG

Famoso juego de memorice

Famous memory game

### RULES
Find the pair of the animal by clicking in the cards, complete de game with 20 points and the least number of errors

good luck

## Method used
An Ubuntu 18.04 docker was created, in which Nodejs and npm were installed for package management, I synchronized the file as a volume in the /home/node path, when I created or edited the code it was automatically synchronized, within this folder i executed the following commands

NODEJS 18.17.1
NPM 9.6.7

## Folder
 Change to the folder "memory"

## Init git
 command - "git init"

## Clone the project
 git clone https://github.com/itachon/memory.git . to clone the content in the folder or clone the entire folder 

 git clone https://github.com/itachon/memory.git, as you prefer 
## At first step you need to install npm packages
 command - "npm i"

## When the installation its over there is a last step, excecute vite´s server
 command - "npm run dev"

## For some reason if its required to expose the server 
 command "npm run dev -- --host"

## VERSION ALPHA
v0.0.1
v0.0.2
v0.0.3