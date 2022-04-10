# brunch
DAOHacks project


## Ionic (cd /brunch)

#### Notes

* `ionic s` for general dev server
* `ionic build` then `serve -s build` to serve built project locally
* *Note: * Downgraded react-scripts to version 4.0.3 because webpack 5 and I'm scared of polyfills

## Hardhat (cd /hardhat)

### Notes

* `npx hardhat compile` to compile solidity contracts
* `npx hardhat run --network <network> scripts/<script.js>` to deploy
* `npx hardhat node` to run local JSON-RPC server