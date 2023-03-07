export type Quest = {
  title: string;
  description: string;
  image_url: string;
  nft_reward: any;
  token_reward: any;
  partner: any;
  xp: number;
  id: string;
  isJourney: boolean;
  order: number;
  completed_users: any[];
  steps?: any;
};

export const mockQuests: Quest[] = [
  {
    title: "DEX 101 with Swop Finance",
    description:
      "Explore swapping, LPing, and staking on Waves with Swop Finance",
    image_url: "/sd_swop.jpg",
    isJourney: false,
    nft_reward: {
      description: "Exclusive NFT for quest completion",
      image_url: "/sd_swop.jpg",
      preview_url: "/sd_swop.jpg",
      title: "DEX 101 with Swop Finance",
      token_uri: "",
    },
    token_reward: {
      amount: "10",
      fiat_amount: "10",
      symbol: "WAVES",
    },
    xp: 400,
    id: "3Hr6HdFOM47cZwb5a69K",
    partner: {
      image_url: "/swopfi.png",
    },
    order: 1,
    completed_users: ["1", "2", "3"],
    steps: {
      0: {
        amount: 100,
        description: "Swap at least 0.1 WAVES to SWOP on Swop Finance.",
        start_url:
          "https://swop.fi/exchange?from=WAVES&to=Ehie5xYpeN8op1Cctc6aGUrqx8jq3jtf1DSjXDbfm7aT",
        title: "Swap your WAVES to SWOP on Swop Finance",
        isTwitter: false,
      },
      1: {
        amount: 100,
        description:
          "Add liquidity to the WAVES / SWOP pool on Swop Finance to earn fees when users swap in this pool.",
        start_url:
          "https://swop.fi/liquidity?address=3PH8Np6jwuoikvkHL2qmdpFEHBR4UV5vwSq",
        title: "Provide liquidity to the WAVES/SWOP pool",
        isTwitter: false,
      },
      2: {
        amount: 100,
        description:
          "Congrats! Now you'll start earning LP rewards. Show your support by following Swop Finance on Twitter.",
        start_url: "https://twitter.com/Swopfi",
        partner_id: "1321498483451432961",
        title: "Follow Swop Finance on Twitter",
        isTwitter: true,
      },
    },
  },
  {
    title: "Trading on Waves Exchange",
    description:
      "Experience the next generation decentralized exchange with Waves Exchange",
    image_url: "/sd_waves.jpg",
    isJourney: false,
    nft_reward: {
      description: "Exclusive NFT for quest completion",
      image_url: "/sd_waves.jpg",
      preview_url: "/sd_waves.jpg",
      title: "Advanced Trading on Waves Exchange",
      token_uri:
        "https://bafybeigm4brunh2ku64nsvwlvhmg64lksh4co3kzetwpx5a5ti2vgmcoku.ipfs.w3s.link/2.json",
    },
    token_reward: {
      amount: "10",
      fiat_amount: "10",
      symbol: "WAVES",
    },
    xp: 400,
    id: "SOEKIWe2g0JDOKTZBl6N",
    partner: {
      image_url: "/wx.jpg",
    },
    order: 2,
    completed_users: ["1", "2"],
    steps: {
      0: {
        amount: 100,
        description:
          "Craft Network is an open NFT marketplace on ICON. Buy any NFT on Craft Network.",
        start_url: "https://craft.network/marketplace",
        title: "Buy an NFT on Craft Network",
        isTwitter: false,
      },
      1: {
        amount: 100,
        description:
          "Learn how to create your own unique NFT using the Craft Network NFT creator platform.",
        start_url: "https://craft.network/create",
        title: "Mint your own NFT on Craft Network",
        isTwitter: false,
      },
      2: {
        amount: 100,
        description:
          "Show your love and support by following Craft Network on Twitter!",
        start_url: "https://twitter.com/craftdotnetwork",
        partner_id: "1365481284441497605",
        title: "Follow Craft Network on Twitter",
        isTwitter: true,
      },
    },
  },
  {
    title: "Liquid Staking with Pepe Team",
    description: "Learn liquid staking on Waves and earn sWaves with Pepe Team",
    image_url: "/sd_pepe.jpg",
    isJourney: false,
    nft_reward: {
      description: "Exclusive NFT for quest completion",
      image_url: "/sd_pepe.jpg",
      preview_url: "/sd_pepe.jpg",
      title: "Liquid Staking with Pepe Team",
      token_uri:
        "https://bafybeia2nhowgdzlusgmki3k47pca7qxrsevsnmwflck6j7xkt4tgqadya.ipfs.w3s.link/3.json",
    },
    token_reward: {
      amount: "10",
      fiat_amount: "10",
      symbol: "WAVES",
    },
    xp: 400,
    id: "9Gl6qQNybiCNCyAlULwZ",
    partner: {
      image_url: "/pepe.jpg",
    },
    order: 3,
    completed_users: ["1", "2", "3"],
    steps: {
      0: {
        amount: 100,
        description: `Swap at least 1 WAVES to FRMD on Balanced. Make sure to "Add Community Token List" to find FRMD.`,
        start_url: "https://app.balanced.network/trade",
        title: "Swap your WAVES to FRMD",
        isTwitter: false,
      },
      1: {
        amount: 100,
        description: "Stake your FRMD and receive rewards in FRMD.",
        start_url: "https://framd.art/app",
        title: "Stake your WAVES on Framd",
        isTwitter: false,
      },
      2: {
        amount: 100,
        description:
          "Show your love and support by following Framd on Twitter!",
        start_url: "https://twitter.com/FramdNFT",
        partner_id: "1429775844159889409",
        title: "Follow Framd on Twitter",
        isTwitter: true,
      },
    },
  },
  {
    title: "Perpetual Futures on Tsunami",
    description:
      "Learn how to trade perpetual futures on Waves with Tsunami Finance",
    image_url: "/sd_tsunami.jpg",
    isJourney: false,
    nft_reward: {
      description: "Exclusive NFT for quest completion",
      image_url: "/sd_tsunami.jpg",
      preview_url: "/sd_tsunami.jpg",
      title: "Perpetual Futures on Tsunami",
      token_uri:
        "https://bafybeidkgvodcbnmwbtfb2o2jmv4egsuj27xlppyvgivfr2krzcj7aaiai.ipfs.w3s.link/4.json",
    },
    token_reward: {
      amount: "10",
      fiat_amount: "10",
      symbol: "WAVES",
    },
    xp: 400,
    id: "LX0JeE1m1Hmp6NCBiyNs",
    partner: {
      image_url: "/tsunami.png",
    },
    order: 4,
    completed_users: ["1", "2", "3"],
    steps: {
      0: {
        amount: 100,
        description:
          "Deposit at least 1 WAVES into Balanced to use as collateral for borrowing.",
        start_url: "https://app.balanced.network/",
        title: "Deposit at least 1 WAVES as collateral",
        isTwitter: false,
      },
      1: {
        amount: 100,
        description: "Swap at least 1 WAVES to BALN on Balanced.",
        start_url: "https://app.balanced.network/trade",
        title: "Swap your WAVES to BALN",
        isTwitter: false,
      },
      2: {
        amount: 100,
        description:
          "Supply BALN and bnUSD to the BALN/bnUSD pool on Balanced.",
        start_url: "https://app.balanced.network/trade",
        title: "Provide liqudity to the BALN/bnUSD pool",
        isTwitter: false,
      },
      3: {
        amount: 100,
        description:
          "Show your love and support by following BalancedDAO on Twitter!",
        start_url: "https://twitter.com/BalancedDAO",
        partner_id: "1222976679938670592",

        title: "Follow BalancedDAO on Twitter",
        isTwitter: true,
      },
    },
  },
  {
    title: "NFT 101 with SIGN Art",
    description:
      "Learn how to buy your first collectible on the Waves blockchain with SIGN Art",
    image_url: "/sd_signart.jpg",
    isJourney: false,
    nft_reward: {
      description: "Exclusive NFT for quest completion",
      image_url: "/sd_signart.jpg",
      preview_url: "/sd_signart.jpg",
      title: "NFT 101 with SIGN Art",
      token_uri:
        "https://bafybeiatyzf5ochv43x53ejgsw6ybzssubfkxdcs2ojrews73ar7whdz6q.ipfs.w3s.link/5.json",
    },
    token_reward: {
      amount: "10",
      fiat_amount: "10",
      symbol: "WAVES",
    },
    xp: 400,
    id: "V2zbf8iYGGGzFnkXQ6tB",
    partner: {
      image_url: "/signart.png",
    },
    order: 5,
    completed_users: [],
    steps: {
      0: {
        amount: 100,
        description: "Supply at least 1 WAVES to receive sWAVES",
        start_url: "https://app.omm.finance/#/home",
        title: "Stake your WAVES to receive sWAVES on Omm",
        isTwitter: false,
      },
      1: {
        amount: 100,
        description: "Add sWAVES and OMM to the sWAVES/OMM pool on Balanced.",
        start_url: "https://app.balanced.network/trade",
        title: "Provide liquidity to sWAVES/OMM on Balanced",
        isTwitter: false,
      },
      2: {
        amount: 100,
        description:
          "Boost your earnings from Step 2 by staking your LP tokens into the sWAVES/OMM farm",
        start_url: "https://app.omm.finance/#/rewards",
        title: "Stake your sWAVES/OMM LP tokens for rewards",
        isTwitter: false,
      },
      3: {
        amount: 100,
        description:
          "Show your love and support by following Omm Finance on Twitter!",
        start_url: "https://twitter.com/ommfinance",
        partner_id: "1307205384197738496",

        title: "Follow Omm Finance on Twitter",
        isTwitter: true,
      },
    },
  },
  {
    title: "Lending 101 on Vires Finance",
    description:
      "Learn how to supply collateral and borrow against it on Vires Finance",
    image_url: "/sd_vires.jpg",
    isJourney: false,
    nft_reward: {
      description: "Exclusive NFT for quest completion",
      image_url: "/sd_vires.jpg",
      preview_url: "/sd_vires.jpg",
      title: "Lending 101 on Vires Finance",
      token_uri:
        "https://bafybeifzuodyma2id2hmadr5odexn3jjlqetbuc5a365xbfimhta7yyexq.ipfs.w3s.link/6.json",
    },
    token_reward: {
      amount: "10",
      fiat_amount: "10",
      symbol: "WAVES",
    },
    xp: 400,
    id: "k2JLHufwfjipZT9HGVIo",
    partner: {
      image_url: "/vires.png",
    },
    order: 6,
    completed_users: ["1", "2", "3"],
    steps: {
      0: {
        amount: 100,
        description: "Swap at least 1 WAVES to FIN and bnUSD on Balanced.",
        start_url: "https://app.balanced.network/trade",
        title: "Swap your WAVES to FIN and bnUSD on Balanced",
        isTwitter: false,
      },
      1: {
        amount: 100,
        description: "Add FIN and bnUSD to the FIN/bnUSD pool on Balanced.",
        start_url: "https://app.balanced.network/trade",
        title: "Provide liquidity to FIN/bnUSD on Balanced",
        isTwitter: false,
      },
      2: {
        amount: 100,
        description:
          "Boost your earnings from Step 2 by staking your LP tokens into the FIN/bnUSD farm",
        start_url: "https://optimus.finance/staking",
        title: "Stake your FIN/bnUSD LP tokens for rewards",
        isTwitter: false,
      },
      3: {
        amount: 100,
        description:
          "Show your love and support by following Optimus on Twitter!",
        start_url: "https://twitter.com/OptimusDeFi",
        partner_id: "1432296862967496706",
        title: "Follow Optimus on Twitter",
        isTwitter: true,
      },
    },
  },
];
