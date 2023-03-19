### GIT FILTER-REPO ###

## NÃO EXECUTE ESSE SCRIPT DIRETAMENTE
## Esse script foi feito para uso do
## script 'publisher.sh' fornecido 
## pela Trybe. 

[[ $# == 1 ]] && \
[[ $1 == "trybe-security-parameter" ]] && \
git filter-repo \
    --path .trybe \
    --path .github \
    --path trybe.yml \
    --path src/__tests__ \
    --path src/__mocks__ \
    --path it-only.png \
    --path pull-request-para-branch-do-grupo.png \
    --path only-one-green.png \
    --path wireframes \
    --path trello.gif \
    --path README.md \
    --invert-paths --force