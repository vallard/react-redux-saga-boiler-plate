.PHONY: all build-dev build push

VERSION := 0.1.0

all: build push 

dev: 
	docker build . -f Dockerfile.dev -t vallard/basic-app:dev

build: 
	docker build . -f Dockerfile.prod -t vallard/basic-app:latest
	docker tag vallard/basic-app:latest vallard/basic-app:${VERSION}

push: 
	docker push vallard/basic-app:${VERSION}

