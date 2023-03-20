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
      token_uri:
        "https://bafybeihszrfoe35u74kuq57znue7vt54nzer6dmnhi5puxcd7eq5v6yq2i.ipfs.w3s.link/sd_swop.jpg",
    },
    token_reward: {
      amount: "2",
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
      amount: "2",
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
          "Place a limit order and swap at least 0.1 WAVES to WX on Waves Exchange.",
        start_url: "https://waves.exchange/trading/spot/WX_WAVES",
        title: "Swap WAVES to WX on Waves Exchange",
        isTwitter: false,
      },
      1: {
        amount: 100,
        description:
          "Earn rewards by staking your WX into the Waves Exchange Liquidity Pool.",
        start_url: "https://waves.exchange/liquiditypools/boosting",
        title: "Stake WX to boost rewards with gWX",
        isTwitter: false,
      },
      2: {
        amount: 100,
        description:
          "Show your love and support by following Waves Exchange on Twitter!",
        start_url: "https://twitter.com/wxnetwork",
        partner_id: "1365481284441497605",
        title: "Follow Waves Exchange on Twitter",
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
      amount: "2",
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
        description: `Earn rewards by staking your WAVES to receive yield-bearing sWAVES`,
        start_url: "https://swaves.pepe.team/",
        title: "Stake your WAVES to earn rewards with sWAVES",
        isTwitter: false,
      },
      1: {
        amount: 100,
        description:
          "Show your love and support by following Pepe Team on Twitter!",
        start_url: "https://twitter.com/cryptopepeteam",
        partner_id: "1429775844159889409",
        title: "Follow Pepe Team on Twitter",
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
      amount: "2",
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
        description: "Swap at least 0.1 WAVES to XTN on Swop Finance.",
        start_url:
          "https://swop.fi/exchange?from=WAVES&to=DG2xFkPdDwKUoBkzGAhQtLpSGzfXLiCYPEzeKH2Ad24p",
        title: "Swap your WAVES to XTN on Swop Finance",
        isTwitter: false,
      },
      1: {
        amount: 100,
        description: "Open a trading position (long or short) on any asset.",
        start_url: "https://app.tsunami.exchange/trade/WAVESUSDX",
        title: "Open a perpetual trading position",
        isTwitter: false,
      },
      2: {
        amount: 100,
        description:
          "Show your love and support by following Tsunami Finance on Twitter!",
        start_url: "https://twitter.com/ExchangeTsunami",
        partner_id: "1222976679938670592",

        title: "Follow Tsunami Finance on Twitter",
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
      amount: "2",
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
        description:
          "Buy an artwork on SIGN Art with WAVES. Make sure it's one you like!",
        start_url: "https://mainnet.sign-art.app/",
        title: "Buy an artwork on SIGN Art with WAVES",
        isTwitter: false,
      },
      1: {
        amount: 100,
        description:
          "Show your love and support by following SIGN Art on Twitter!",
        start_url: "https://twitter.com/signArtApp",
        partner_id: "1307205384197738496",

        title: "Follow SIGN Art on Twitter",
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
      amount: "2",
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
        description:
          "Supply at least 0.1 WAVES into the Vires Money Market to be used as collateral to borrow against.",
        start_url: "https://vires.finance/",
        title: "Supply at least 0.1 WAVES into the Vires Market",
        isTwitter: false,
      },
      1: {
        amount: 100,
        description: `Find the "Collateral" tab under "My Supply" and turn on "Use as Collateral" for your supplied WAVES.`,
        start_url: "https://vires.finance/",
        title: `Turn on "Use as Collateral" for WAVES`,
        isTwitter: false,
      },
      2: {
        amount: 100,
        description:
          "Borrow any amount of XTN against your deposited WAVES collateral",
        start_url: "https://vires.finance/",
        title: "Borrow XTN against your WAVES collateral",
        isTwitter: false,
      },
      3: {
        amount: 100,
        description:
          "Show your love and support by following Vires Finance on Twitter!",
        start_url: "https://twitter.com/viresfinance",
        partner_id: "1432296862967496706",
        title: "Follow Vires Finance on Twitter",
        isTwitter: true,
      },
    },
  },
];
