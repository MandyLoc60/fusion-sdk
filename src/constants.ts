export const NATIVE_CURRENCY = '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee'
export const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000'
export const ZERO_NUMBER = '0'
export const ZX = '0x'

export enum NetworkEnum {
    ETHEREUM = 1,
    POLYGON = 137,
    BINANCE = 56,
    ARBITRUM = 42161
}

export const WRAPPER_ADDRESS_MAP: Record<NetworkEnum, string> = {
    [NetworkEnum.ETHEREUM]: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
    [NetworkEnum.BINANCE]: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    [NetworkEnum.POLYGON]: '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270',
    [NetworkEnum.ARBITRUM]: '0x82af49447d8a07e3bd95bd0d56f35241523fbab1'
}

export const UNWRAPPER_CONTRACT_ADDRESS_MAP: Record<NetworkEnum, string> = {
    [NetworkEnum.ETHEREUM]: '0x08b067ad41e45babe5bbb52fc2fe7f692f628b06',
    [NetworkEnum.BINANCE]: '0x0eee00137d807a461702e9e0640c599de663e7e4',
    [NetworkEnum.POLYGON]: '0x18d410f651289bb978fc32f90d2d7e608f4f4560',
    [NetworkEnum.ARBITRUM]: '0x3e57c682c72f3bd255ebf439b74c784bc82029ee'
}

export const SETTLEMENT_CONTRACT_ADDRESS_MAP: Record<NetworkEnum, string> = {
    [NetworkEnum.ETHEREUM]: '0xa88800cd213da5ae406ce248380802bd53b47647',
    [NetworkEnum.BINANCE]: '0x1d0ae300eec4093cee4367c00b228d10a5c7ac63',
    [NetworkEnum.POLYGON]: '0x1e8ae092651e7b14e4d0f93611267c5be19b8b9f',
    [NetworkEnum.ARBITRUM]: '0x4bc3e539aaa5b18a82f6cd88dc9ab0e113c63377'
}

export const ONE_INCH_ROUTER_V5 = '0x1111111254eeb25477b68fb85ed929f73a960582'
