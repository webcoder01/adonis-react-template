build:
	docker-compose build

up:
	docker-compose up --remove-orphans

down:
	docker-compose down

sh:
	docker-compose exec -i app sh

migrate:
	docker-compose exec app node ace migration:run

seed-db:
	docker-compose exec app node ace db:seed
