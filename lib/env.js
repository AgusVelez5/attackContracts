const argv = require('yargs').argv
require('dotenv').config({ path: '.env.common' })
require('dotenv').config({ path: argv.envFile })

const NETWORK = process.env.NETWORK

module.exports = {
  DEPLOYMENT_ACCOUNT_KEY: process.env.DEPLOYMENT_ACCOUNT_KEY,
  EXECUTION_KEYS: (process.env.EXECUTION_KEYS || '').split(',').filter(k => k),
  EXTRA_KEYS: (process.env.EXTRA_KEYS || '').split(',').filter(k => k),
  DEVELOPMENT: process.env.DEVELOPMENT === 'true',
  NETWORK,
  RPC_WS_URL: process.env.RPC_WS_URL,
  MAINNET_RPC_HTTP_URL: process.env.MAINNET_RPC_HTTP_URL,
  MAINNET_RPC_HEADERS: process.env.MAINNET_RPC_HEADERS,
  MAINNET_NETWORK_ID: parseInt(process.env.MAINNET_NETWORK_ID || 1),
  ARCHIVE_NODE_RPC_URL: process.env.ARCHIVE_NODE_RPC_URL,
}