# Go parameters
GOCMD=CGO_ENABLED=0 go
GORUN=$(GOCMD) run
GOBUILD=$(GOCMD) build
GOCLEAN=$(GOCMD) clean
GOTEST=$(GOCMD) test
GOGET=$(GOCMD) get

# Binary name
BINARY_NAME=myapp

all: test build

build:
	$(GOBUILD) -o $(BINARY_NAME) -v

test:
	$(GOTEST) -v ./...

serve:
	$(GORUN) main.go serve

migrate:
	go run main.go migrate collections
	cd migrations && find . -type f ! -name '*_collections_snapshot.go' -delete
	go run main.go migrate history-sync

clean:
	$(GOCLEAN)
	rm -f $(BINARY_NAME)
