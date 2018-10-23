VERSION=$(shell git describe --tags)
NOMBRE="enjambrebit"

N=[0m
G=[01;32m
Y=[01;33m
B=[01;34m


comandos:
	@echo ""
	@echo "${B}Comandos disponibles para ${Y}${NOMBRE}${N} (versión: ${VERSION})"
	@echo ""
	@echo "  ${Y}Generales de la aplicación${N}"
	@echo ""
	@echo "    ${G}iniciar${N}               Instala todas las dependencias."
	@echo "    ${G}ejecutar${N}              Ejecuta la aplicación de forma local."
	@echo "    ${G}test${N}                  Ejecuta los tests."
	@echo "    ${G}deploy${N}                Sube la aplicación compilada a producción."
	@echo ""


iniciar:
	yarn install

test:
	yarn test

ejecutar:
	yarn start

deploy:
	rm -rf dist
	@echo "Compilando la aplicación en modo producción"
	yarn build --prod
	@rm -rf publish
	@echo "Clonando repositorio para realizar el deploy."
	@git clone dokku@enjambrelab.com.ar:enjambrebit2017 publish
	@echo "Moviendo archivos..."
	@cp -r dist/* publish/
	@echo "Realizando deploy..."
	@cd publish; git add .; git config user.email "info@enjambrebit.com"; git config user.name "Enjambrebit"; git commit -am 'rebuild' --allow-empty; git push -f
