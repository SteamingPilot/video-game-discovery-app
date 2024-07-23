
# Using Ubuntu
FROM mcr.microsoft.com/devcontainers/base:jammy

# App Name 
ENV APP_NAME=video-game-discovery-app



# Update
RUN sudo apt-get update -y && \
sudo apt-get upgrade -y


# React
## Node.js and npm
RUN curl -fsSL https://deb.nodesource.com/setup_current.x | sudo -E bash -
RUN sudo apt-get install -y nodejs



## Create the react app with vite
RUN npm install -g create-vite
RUN create-vite video-game-discovery-app --template react
WORKDIR /video-game-discovery-app
RUN npm install \
## Install packages
&& npm install react-icons \
&& npm install react-hook-form \
&& npm install zod \
&& npm install @hookform/resolvers 

# Use this port to launch your server.
EXPOSE 3001

## Task
## Remove the app_name directory after the container is setup.
# run the following command:
    # sudo mv /app_name/{,.[^.]}* ./ 
    # sudo rm -rf /app_name


# Data fetching
RUN npm i axios









