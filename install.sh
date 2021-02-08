#! bin/bash
sudo docker build -t react-nginx .
sudo docker run --rm -it -p 8080:80 react-nginx
