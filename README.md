# Address autocomplete with Google Maps API

Query the Google maps API and autocomplete addresses

## Build status

[![CircleCI](https://circleci.com/gh/YannHulot/address-suggestions.svg?style=svg&circle-token=20e5706f1899fafd067bceb6b8d747591ce95112)](https://app.circleci.com/pipelines/github/YannHulot/address-suggestions)

## Getting Started

```bash
git clone https://github.com/YannHulot/address-suggestions
```

### Prerequisites

You need a Google maps API key

### Installing

Run:

```bash
npm install
```

Then create a new .env file

```bash
touch .env
```

open the env file and paste your API key as such:

```bash
API_KEY="*********"
```

## Running the tests

Without coverage:

```bash
npm run test
```

With coverage:

```bash
npm run test-with-coverage
```

## Running the application

```bash
npx ts-node src/index.ts
```

## Authors

* **Yann Hulot** - *Initial work* - [YannHulot](https://github.com/Yannhulot)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone whose code was used
* Inspiration
* etc
