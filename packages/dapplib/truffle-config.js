require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'install loan off seed drift rice machine evil just enroll fortune gasp'; 
let testAccounts = [
"0xcae5eb3c46d93e544f6fd6668bd8c1315911344d95dbf6599939a58e55481718",
"0x6a1f904d1589bbf2f96d440d6b90d64a0aa7252e43246f78af235539503ce46e",
"0xbe7305805a61b2857e32a2a288f3e02aed8ba5727c2cef80b9c656bfb37c6283",
"0x27afb0933682c45c6ecc6f4610f574995b5b75a22d9e8dc1860a2cc39c91d080",
"0x4d74e52ee9fff8095c8373258867869eb801d83a4bf0be36fb2ab639f79239a7",
"0x9bcb5377e2360e93b2570d564804330a09ba9ae2b9ce4862cb8cb9e3b1633814",
"0x3d83724d50cdaa89063358277827288b24f402a0b6997dc971671918c1e27beb",
"0x2bc80e6acc2f567623c44c4a58df96e0aecee09c64a2862d777d3f21e81c200d",
"0xb4765d363af929d11a6ee41a4f097d490597b9a4100aa52eb9af33792f31ab57",
"0x91fd470519e75eea11d66afbe95f6e33170111fd8484dba615551837db95bb65"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
