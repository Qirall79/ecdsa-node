import { secp256k1 } from "ethereum-cryptography/secp256k1";
import { utf8ToBytes, hexToBytes, toHex } from "ethereum-cryptography/utils";
import { keccak256 } from "ethereum-cryptography/keccak";

// const privateKey = secp256k1.utils.randomPrivateKey();
// const publicKey = utils.toHex(secp256k1.getPublicKey(privateKey));
// const address = publicKey.slice(publicKey.length - 20);

// console.log("Private key:", utils.toHex(privateKey));
// console.log("Public key:", publicKey);
// console.log("Address:", address);

// wallet 1
// Private key: d061ea969f97fb1e88391b6b7084f571808bc846c34851e5d5598c8988e118af
// Public key: 028fe0f3e220028683b5b88e5c83645183ebccba2b230dc984166374b19287461d
// Address: c984166374b19287461d

// wallet 2
// Private key: 624a3573263d7daf867611d81daf74436f4e41e2d78bc5860f86b17803ced7ac
// Public key: 02dd25b3d8509a24fc72b2873178372628f842be4037c4c64a3516680a9b3e17fe
// Address: c64a3516680a9b3e17fe

// wallet 3
// Private key: 70de348fb2e63f98a98a6ce2ddf8f4550657102f88b03f755fb0ddfe4a1042f7
// Public key: 03048c5bb46d16a45e665ea81d95490c27610cab190cd876a4923216b424e9ab82
// Address: 76a4923216b424e9ab82

const hashMessage = (message) => {
  return keccak256(utf8ToBytes(String(message)));
};

const signMessage = (message, privateKey) => {
  const hashedMessage = hashMessage(message);
  return secp256k1.sign(hashedMessage, privateKey);
};

// const getFormattedSignature = (message, privateKey) => {
//   const signature = signMessage(message, hexToBytes(privateKey));
//   const formattedSignature = Object.values(signature).join(" ");

//   return formattedSignature;
// };
export default signMessage;
