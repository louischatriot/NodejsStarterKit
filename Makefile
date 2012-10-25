test:
	@echo "TLDR - Launching tests. Setting environment to test"
	@ NODE_ENV="test" ./node_modules/.bin/mocha --reporter spec
	@echo "Tests finished, setting environment back to development"

.PHONY: test


