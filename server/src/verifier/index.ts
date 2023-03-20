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
          if (new Date(transaction.timestamp).getTime() < startedAt)
            return false;

          if (transaction.dApp !== "3PH8Np6jwuoikvkHL2qmdpFEHBR4UV5vwSq")
            return false;

          if (transaction.payment[0].amount < 10000000 - 1) return false;

          if (transaction.payment[0].assetId !== null) return false;

          if (transaction.call.function !== "callFunction") return false;

          if (transaction.call.args[0].value !== "exchange") return false;

          if (
            transaction.stateChanges.transfers[0].asset !==
            "Ehie5xYpeN8op1Cctc6aGUrqx8jq3jtf1DSjXDbfm7aT"
          )
            return false;

          console.log("verified!");
          return true;
        }
        case 1: {
          if (new Date(transaction.timestamp).getTime() < startedAt)
            return false;

          if (transaction.dApp !== "3PH8Np6jwuoikvkHL2qmdpFEHBR4UV5vwSq")
            return false;

          if (
            transaction.payment &&
            transaction.payment[0].assetId !==
              "Ehie5xYpeN8op1Cctc6aGUrqx8jq3jtf1DSjXDbfm7aT" &&
            transaction.payment[1].assetId !==
              "Ehie5xYpeN8op1Cctc6aGUrqx8jq3jtf1DSjXDbfm7aT"
          )
            return false;

          if (transaction.call.function !== "callFunction") return false;

          if (transaction.call.args[0].value !== "replenishWithTwoTokens")
            return false;

          console.log("verified!");
          return true;
        }
      }
    case "SOEKIWe2g0JDOKTZBl6N":
      switch (step) {
        case 0: {
          if (new Date(transaction.timestamp).getTime() < startedAt)
            return false;

          if (transaction.sender !== "3PEjHv3JGjcWNpYEEkif2w8NXV4kbhnoGgu")
            return false;

          if (
            transaction.order1.assetPair.amountAsset !=
            "Atqv59EYzjFGuitKVnMRk6H8FukjoV3ktPorbEys25on"
          )
            return false;

          if (transaction.order1.orderType !== "buy") return false;

          console.log("verified!");
          return true;
        }
        case 1: {
          if (new Date(transaction.timestamp).getTime() < startedAt)
            return false;

          if (transaction.dApp !== "3PJL8Hn8LACaSBWLQ3UVhctA5cTQLBFwBAP")
            return false;

          if (
            transaction.payment[0].assetId !==
            "Atqv59EYzjFGuitKVnMRk6H8FukjoV3ktPorbEys25on"
          )
            return false;

          if (transaction.call.function !== "lockRef") return false;

          console.log("verified!");
          return true;
        }
      }
    case "9Gl6qQNybiCNCyAlULwZ":
      switch (step) {
        case 0: {
          if (new Date(transaction.timestamp).getTime() < startedAt)
            return false;

          if (transaction.dApp !== "3PDPzZVLhN1EuzGy4xAxjjTVkawKDLEaHiV")
            return false;

          if (transaction.payment[0].amount < 10000000 - 1) return false;

          if (transaction.call.function !== "deposit") return false;

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
          if (new Date(transaction.timestamp).getTime() < startedAt)
            return false;

          if (transaction.dApp !== "3P4v7QaMk6us7PdxSuoR5LmZmemv5ruD6oj")
            return false;

          if (transaction.payment[0].amount < 10000000 - 1) return false;

          if (transaction.payment[0].assetId !== null) return false;

          if (transaction.call.function !== "routingTrade") return false;

          if (
            transaction.stateChanges.transfers[0].asset !==
            "DG2xFkPdDwKUoBkzGAhQtLpSGzfXLiCYPEzeKH2Ad24p"
          )
            return false;

          console.log("verified!");
          return true;
        }
        case 1: {
          if (new Date(transaction.timestamp).getTime() < startedAt)
            return false;

          if (transaction.dApp !== "3PJ8HS6FmeM3owQUwv6znVbAzQXFtxNUYDs")
            return false;

          if (
            transaction.payment[0].assetId !==
            "DG2xFkPdDwKUoBkzGAhQtLpSGzfXLiCYPEzeKH2Ad24p"
          )
            return false;

          if (transaction.call.function !== "increasePositionWithStopLoss")
            return false;

          console.log("verified!");
          return true;
        }
      }
    case "V2zbf8iYGGGzFnkXQ6tB":
      switch (step) {
        case 0: {
          if (new Date(transaction.timestamp).getTime() < startedAt)
            return false;

          if (transaction.dApp !== "3PDBLdsUrcsiPxNbt8g2gQVoefKgzt3kJzV")
            return false;

          if (transaction.call.function !== "buyArtwork") return false;

          console.log("verified!");
          return true;
        }
      }
    case "k2JLHufwfjipZT9HGVIo":
      switch (step) {
        case 0: {
          if (new Date(transaction.timestamp).getTime() < startedAt)
            return false;

          if (transaction.dApp !== "3PAZv9tgK1PX7dKR7b4kchq5qdpUS3G5sYT")
            return false;

          if (transaction.payment[0].amount < 10000000 - 1) return false;

          if (transaction.payment[0].assetId !== null) return false;

          if (transaction.call.function !== "deposit") return false;

          console.log("verified!");
          return true;
        }
        case 1: {
          if (new Date(transaction.timestamp).getTime() < startedAt)
            return false;

          if (transaction.dApp !== "3P8G747fnB1DTQ4d5uD114vjAaeezCW4FaM")
            return false;

          if (transaction.call.function !== "enableUseAsCollateral")
            return false;

          console.log("verified!");
          return true;
        }
        case 2: {
          console.log("verified!");
          return false;
        }
      }
  }
  return false;
}
