export function verifyTransaction(
  questId: string,
  step: number,
  transaction: any,
  startedAt: number
): boolean {
  switch (questId) {
    case "3Hr6HdFOM47cZwb5a69K":
      switch (step) {
        case 0: {
          if (new Date(transaction.data.timestamp).getTime() < startedAt)
            return false;

          if (transaction.data.dApp !== "3PH8Np6jwuoikvkHL2qmdpFEHBR4UV5vwSq")
            return false;

          if (transaction.data.payment[0].amount < 0.1 - 0.01) return false;

          if (transaction.data.payment[0].assetId !== "WAVES") return false;

          if (transaction.data.call.function !== "callFunction") return false;

          if (transaction.data.call.args[0].value !== "exchange") return false;

          console.log("verified!");
          return true;
        }
        case 1: {
          if (new Date(transaction.data.timestamp).getTime() < startedAt)
            return false;

          if (transaction.data.dApp !== "3PH8Np6jwuoikvkHL2qmdpFEHBR4UV5vwSq")
            return false;

          if (
            transaction.data.payment[0].assetId !==
            "Ehie5xYpeN8op1Cctc6aGUrqx8jq3jtf1DSjXDbfm7aT"
          )
            return false;

          if (transaction.data.payment[1].assetId !== "WAVES") return false;

          if (transaction.data.call.function !== "callFunction") return false;

          if (transaction.data.call.args[0].value !== "replenishWithTwoTokens")
            return false;

          console.log("verified!");
          return true;
        }
        case 2: {
          if (transaction.block_timestamp / 1000 < startedAt) return false;

          if (
            transaction.to_address !==
            "cxce2b188690dcdf21e4d0868cc9aee9b8ab8e822e"
          )
            return false;

          if (transaction.method !== "transfer") return false;

          if (
            JSON.parse(transaction.data).params._to !==
            "cx640b7e57ccf9bb421a85de5e6ed94a0da9ceae71"
          )
            return false;

          console.log("verified!");
          return true;
        }
      }
    case "SOEKIWe2g0JDOKTZBl6N":
      switch (step) {
        case 0: {
          console.log("verified!");
          return true;
        }
        case 1: {
          console.log("verified!");
          return true;
        }
      }
    case "9Gl6qQNybiCNCyAlULwZ":
      switch (step) {
        case 0: {
          console.log("verified!");
          return true;
        }
        case 1: {
          console.log("verified!");
          return true;
        }
      }
    case "LX0JeE1m1Hmp6NCBiyNs":
      switch (step) {
        case 0: {
          console.log("verified!");
          return true;
        }
        case 1: {
          console.log("verified!");
          return true;
        }
        case 2: {
          console.log("verified!");
          return true;
        }
      }
    case "k2JLHufwfjipZT9HGVIo":
      switch (step) {
        case 0: {
          console.log("verified!");
          return true;
        }
        case 1: {
          console.log("verified!");
          return true;
        }
        case 2: {
          console.log("verified!");
          return true;
        }
      }
  }
  return false;
}
