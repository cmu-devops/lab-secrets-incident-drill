FROM zricethezav/gitleaks:v8.29.1 AS gitleaks

FROM mcr.microsoft.com/devcontainers/javascript-node:1-22-bookworm

COPY --from=gitleaks /usr/bin/gitleaks /usr/local/bin/gitleaks
