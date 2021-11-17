require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid climb frame sugar fire ridge remain coin half entire oppose slim'; 
let testAccounts = [
"0x38a44f67c9d6bcc448e7ac9de73676263f3028527461b33de672301800630f4b",
"0xc7cadf693bdbd50c3bdf170fbcb003da5844b999e2daaf79e18b3d204487c01f",
"0xfa6e89102d2cc328ec37320b379707117b1821d02f7469cf7fc5a0b0bb921d33",
"0xe18616a36168655684bcd255127472ccc35365208883434baecc7488f413ef48",
"0xdb68e07c3a9afa7ea4d88d8971d3197cbe60b600c9075789ed86b360e2486457",
"0x8c846b33133746a0445724bb6ea2b5fcf4b6901e97a2997be5331d11e46dac7a",
"0x7d1748c22ad63104528236202213f746d3004201d77d687317b856d42a80ab6a",
"0x6d4ff3801b526d18ace054b56b2a29ba9d2c3b5839988b6b0787cc87b0dd8f24",
"0xe9cfbbfe6c1858619a34da56130655cc7bd1a175199ab227754f7d6bd0e8e893",
"0xfd1ff8ac79921a43a70530ce72524ba1f23e0a5c1f5ebfdfa3139c477408111f"
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
            version: '^0.8.0'
        }
    }
};

