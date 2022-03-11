import { SupportedChain } from 'types';

const nameMap: Record<SupportedChain, string> = {
  [SupportedChain.Eth]: 'Ethereum',
  [SupportedChain.GravityBridge]: 'Gravity Bridge',
  [SupportedChain.Osmosis]: 'Osmosis',
  [SupportedChain.Stargaze]: 'Stargaze',
  [SupportedChain.Cosmos]: 'Cosmos',
  [SupportedChain.Axelar]: 'Axelar',
  [SupportedChain.Terra]: 'Terra'
};

const linkMap: Record<SupportedChain, string> = {
  [SupportedChain.Eth]: 'https://etherscan.io/tx',
  [SupportedChain.GravityBridge]: 'https://www.mintscan.io/gravity-bridge/txs',
  [SupportedChain.Osmosis]: 'https://www.mintscan.io/osmosis/txs',
  [SupportedChain.Stargaze]: 'https://www.mintscan.io/stargaze/txs',
  [SupportedChain.Cosmos]: 'https://www.mintscan.io/cosmos/txs',
  [SupportedChain.Axelar]: 'https://www.mintscan.io/axelar/txs',
  [SupportedChain.Terra]: 'https://finder.terra.money/mainnet/tx'
};

function getChainName (chain: SupportedChain): string {
  return nameMap[chain];
}

function getExplorerLink (chain: SupportedChain): string {
  return linkMap[chain];
}

export default {
  getChainName,
  getExplorerLink
};
