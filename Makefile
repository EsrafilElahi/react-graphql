# Targets
.PHONY: build
build:
	docker compose build

.PHONY: up
up:
	docker compose up -d --force-recreate

.PHONY: down
down:
	docker compose down

.PHONY: logs
logs:
	docker compose logs -f

.PHONY: clean
clean:
	docker compose down -v --remove-orphans

.PHONY: restart
restart: down up

.PHONY: exec
exec:
	docker compose exec <service_name> sh

.PHONY: help
help:
	@echo "Available targets:"
	@echo "  - build: Build Docker images"
	@echo "  - up: Start Docker containers in the background"
	@echo "  - down: Stop and remove Docker containers"
	@echo "  - logs: View container logs"
	@echo "  - clean: Stop and remove containers, volumes, and networks"
	@echo "  - restart: Restart containers"
	@echo "  - exec: Enter into a running container (Usage: make exec service_name=<service_name>)"
	@echo "  - help: Show this help message"