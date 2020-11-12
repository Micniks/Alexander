## first thing you should do is to create af file `.env` in the root of the project with this content

DB_URI=REPLACE_WITH_YOUR_DATABASE_CONNECTION_STRING

DB_TEST_URI=REPLACE_WITH_YOUR_DATABASE_CONNECTION_STRING

DB_DEV=dev_game

DB_TEST=test_game

PORT=5555


## Basic Setup

## Dockerhub
1. Lav en konto på hub.docker.com
2. Klik på din konto og vælg 'Account Settings'
3. Klik på fanen 'Security'
4. Klik på 'New Access Token'
5. indtast 'Github Actions' og klik create
6. Kopier og gem denne access token

## Nyt repo
1. lav et nyt github repository med start koden.
2. Gå ind på settings/secrets
3. Klik på 'New secret'
4. indtast 'DOCKERHUB_IMAGENAME' under Name og sæt value til dit image navn og klik 'Add secret'
5. gør dette for følgende 2 værdier:
* Name = DOCKERHUB_TOKEN   Value = Access Token som du har oprettet på dockerhub
* Name = DOCKERHUB_USERNAME   value = dit dockerhub brugernavn


## Sonarcloud
1. Opret en konto på sonarcloud.io med en github konto
2. Følg anvisningerne
3. Der burde være en indstilling til, at når man første gang opretter et projekt at man skal give adgang til ens github konto

## Nyt projekt på sonarcloud

1. Klik på Krydset ved siden af din konto oppe i højre hjørne
2. Scroll ned og vælg dit github repository
3. Klik på 'Set Up'
4. Vælg GitHub Actions
5. Gå ind på dit repo under settings/secrets og opret en ny secret med de givet værdier
6. Klik Continue
7. Vælg Maven
8. Opdater pom.xml med de angivet settings. - ignore de angivet settings til yml.

Sonarcloud er nu sat op til det nye projekt


Nu burde pipeline være sat op og klar til brug.


