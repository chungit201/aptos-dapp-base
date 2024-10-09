import {MAINNET_INDEXER_URL, MAINNET_NODE_URL, TESTNET_INDEXER_URL, TESTNET_NODE_URL} from "@/configs/aptosConstants";
import {Network} from "@aptos-labs/ts-sdk";

export const enum envNane {
  MAINNET = 'mainnet',
  TESTNET = 'testnet',
  DEVELOP = 'develop',
  STG = 'staging',
}

export const ENV = process.env.CURRENT_NETWORK as any
// export const ENV: envNane = envNane.TESTNET
export const PRECISION_8 = 100000000

export const FULL_NODE_URL = [envNane.DEVELOP, envNane.TESTNET].includes(ENV) ? TESTNET_NODE_URL : MAINNET_NODE_URL
export const INDEXER_URL = [envNane.DEVELOP, envNane.TESTNET].includes(ENV) ? TESTNET_INDEXER_URL : MAINNET_INDEXER_URL

const mainnetConfig = {
  API_ENDPOINT_URL: '',
  APTOS_SCAN_URL: 'https://aptscan.ai',
  NETWORK: Network.MAINNET,
  MSAFE: 'https://app.m-safe.io/aptos/v2',
}

const testnetConfig = {
  API_ENDPOINT_URL: '',
  APTOS_SCAN_URL: 'https://aptscan.ai',
  NETWORK: Network.TESTNET,
  MSAFE: 'https://testnet.m-safe.io/aptos/v2',
}

// Staging(internal) - stg branch - aptos testnet

const stagingConfig = {
  API_ENDPOINT_URL: 'https://api-stg.meso.finance',
  APTOS_SCAN_URL: 'https://aptscan.ai',
  NETWORK: Network.MAINNET,
  MSAFE: 'https://app.m-safe.io/aptos/v2',
}

export const config = ENV === envNane.STG ? stagingConfig : ENV === envNane.TESTNET ? testnetConfig : mainnetConfig

