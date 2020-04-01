const asyncForEach = require("./forEach");
const Client = require("bitcoin-core");
const { clientOptions } = require("./config.js");

const client = new Client(clientOptions);

client
  .getRawTransaction(
    "6f0e409bccfbaf22187385c6b776f0814f9356359a742290f44a173e414af3db",
    true
  )
  .then((body, header) => console.log(body[0].confirmations))
  .catch(err => console.error(err));

/**
 * Class TXID
 * @abstract check's every 30s if provided transaction-Id has confirmations >= minConfirmations
 * @abstract in turn returns to the corresponding messagee that its' transaction has been confirmed
 * @method add: check's whether the given transaction-Id is already present and if not add's it to an array
 * @method remove: removes a given transaction-Id
 * @method check: continously checks on confirmations of transaction-Id's
 */

class TXID {
  constructor(props) {
    this.txids = [];
    this.minConfirmations = props.minConfirmations;
  }

  add(Txid, MsgId) {
    const isTxidPresent = this.txids.some(item => item.txid === Txid);
    if (isTxidPresent) return false;
    else this.txids.push({ txid: Txid, msgid: MsgId });
    return true;
  }

  remove(txid) {
    let newArray = this.txids.filter(item => item === txid);
    if (newArray.length === this.txids.length) return false;
    else this.txids = newArray;
    return true;
  }

  check() {
    (async () => {
      try {
      } catch (err) {
        console.error(err);
      }
    })();
  }
}

module.exports = TXID;
