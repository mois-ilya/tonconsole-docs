export type CodeT = {
  key: string;
  title: string;
  path: string;
  json: string;
};

export const codeItems: CodeT[] = [
  {
    key: 'account',
    title: 'Account',
    path: 'https://tonapi.io/v2/accounts/{account_id}',
    json: `{
  "address": "0:cdce58745d265d6f9fd0ae5c79423c991d500eef8bf9a0c79556bb45ff956dd6",
  "balance": 375813296426,
  "last_activity": 1734515552,
  "status": "active",
  "interfaces": [
    "wallet_v5_beta"
  ],
  "name": "subbotin.ton",
  "is_scam": false,
  "memo_required": false,
  "get_methods": [
    "seqno"
  ],
  "is_wallet": true
}`
  },
  {
    key: 'jettons',
    title: 'Jettons',
    path: 'https://tonapi.io/v2/accounts/{account_id}/jettons',
    json: `{
  "balances": [
    {
      "balance": "2000000000",
      "price": {
        "prices": {
          "USD": 0
        },
        "diff_24h": {
          "USD": "0.00%"
        },
        "diff_7d": {
          "USD": "0.00%"
        },
        "diff_30d": {
          "USD": "0.00%"
        }
      },
      "wallet_address": {
        "address": "0:5b503b361eca587fd47dd8e37e9f82ef4d18ec64b3b44987720b94d72946ee51",
        "is_scam": false,
        "is_wallet": false
      },
      "jetton": {
        "address": "0:a92dfb6b24c6d7a702fff40dcb696f790a05a0a3d675e9bbf8b0ff75388fefce",
        "name": "Muskrat",
        "symbol": "🪤",
        "decimals": 9,
        "image": "https://cache.tonapi.io/imgproxy/NXjkTwns09_Zw1JAotFcFP-KDCK02JSEvk6T-RvBAt8/rs:fill:200:200:1/g:no/aHR0cHM6Ly9pLmliYi5jby82TlQ3YlJLL211c2tyYXQzLndlYnA.webp",
        "verification": "graylist"
      }
    },
    {
      "balance": "20751315",
      "price": {
        "prices": {
          "USD": 1
        },
        "diff_24h": {
          "USD": "0.00%"
        },
        "diff_7d": {
          "USD": "0.00%"
        },
        "diff_30d": {
          "USD": "0.00%"
        }
      },
      "wallet_address": {
        "address": "0:6dc7aaea1697756b185e31223b126aab271a6d59bfb3c55fa8835b73e37e058e",
        "is_scam": false,
        "is_wallet": false
      },
      "jetton": {
        "address": "0:b113a994b5024a16719f69139328eb759596c38a25f59028b146fecdc3621dfe",
        "name": "Tether USD",
        "symbol": "USD₮",
        "decimals": 6,
        "image": "https://cache.tonapi.io/imgproxy/T3PB4s7oprNVaJkwqbGg54nexKE0zzKhcrPv8jcWYzU/rs:fill:200:200:1/g:no/aHR0cHM6Ly90ZXRoZXIudG8vaW1hZ2VzL2xvZ29DaXJjbGUucG5n.webp",
        "verification": "whitelist"
      }
    },
    {
      "balance": "0",
      "price": {
        "prices": {
          "USD": 0.12323213265864136
        },
        "diff_24h": {
          "USD": "+2.24%"
        },
        "diff_7d": {
          "USD": "−6.91%"
        },
        "diff_30d": {
          "USD": "+15.69%"
        }
      },
      "wallet_address": {
        "address": "0:1d61f5db0d70726dd4d66213fabb4e40cc317d5943a81c2f7ee5e0b2503028e4",
        "is_scam": false,
        "is_wallet": false
      },
      "jetton": {
        "address": "0:beb5d4638e860ccf7317296e298fde5b35982f4725b0676dc98b1de987b82ebc",
        "name": "KINGYTON",
        "symbol": "KINGY",
        "decimals": 9,
        "image": "https://cache.tonapi.io/imgproxy/yFer2GtQ4Jz-GbW8FIGD_69r8GH7GNkHvYZGy3fikJ0/rs:fill:200:200:1/g:no/aHR0cHM6Ly9pLmliYi5jby9GYlRDS1JQL2xvZ290b2tlbmtpbmd5LnBuZw.webp",
        "verification": "whitelist"
      }
    },
    {
      "balance": "1295000000000000",
      "price": {
        "prices": {
          "USD": 0
        },
        "diff_24h": {
          "USD": "0.00%"
        },
        "diff_7d": {
          "USD": "0.00%"
        },
        "diff_30d": {
          "USD": "0.00%"
        }
      },
      "wallet_address": {
        "address": "0:5a0501192ec49fb6e4d39fa133c0f783a685d9a92a05c00245e864e74686656a",
        "is_scam": false,
        "is_wallet": false
      },
      "jetton": {
        "address": "0:f8053db9f822907fdede073579b1cfb429d95263e3a8513ae3be6456fe17221e",
        "name": "TRUMP SHOT",
        "symbol": "TRUMP SHOT",
        "decimals": 9,
        "image": "https://cache.tonapi.io/imgproxy/0QBX4PsyVPZ-7mKNuUnFc2y-a7tkGjUiOqv-rEbnGzI/rs:fill:200:200:1/g:no/aHR0cHM6Ly9hcGkuZmlsZXZlcnNlLmlvL2NvbnRlbnQvMjZmNTAyOGQtNGJmMC00OTE2LTk4YWYtM2M3MWRjM2M5YzA5.webp",
        "verification": "none"
      }
    },
    {
      "balance": "1000000000",
      "price": {
        "prices": {
          "USD": 7.958377817055435
        },
        "diff_24h": {
          "USD": "−0.81%"
        },
        "diff_7d": {
          "USD": "−5.73%"
        },
        "diff_30d": {
          "USD": "+24.30%"
        }
      },
      "wallet_address": {
        "address": "0:cef08b0c1134474eea9e43160136bbea973a91a1e76945c8b342c17717f0f6a1",
        "is_scam": false,
        "is_wallet": false
      },
      "jetton": {
        "address": "0:fa67d0c7739331fbc3c8f08e018c65f47763616a969100ad760a0b2dc1e36832",
        "name": "Mintless Points",
        "symbol": "Points",
        "decimals": 9,
        "image": "https://cache.tonapi.io/imgproxy/DmmPn6dWmsmBgSMVbvjbhIDCChLWI3RmqDJ71whxYBA/rs:fill:200:200:1/g:no/aHR0cHM6Ly9pLmliYi5jby9TS010TlRHL21pbnRsZXNzLnBuZw.webp",
        "verification": "whitelist",
        "custom_payload_api_uri": "https://claim-api.tonapi.io/jettons/EQD6Z9DHc5Mx-8PI8I4BjGX0d2NhapaRAK12CgstweNoMint"
      }
    },
    {
      "balance": "4100000000",
      "price": {
        "prices": {
          "USD": 1.0124396957303528
        },
        "diff_24h": {
          "USD": "+1.78%"
        },
        "diff_7d": {
          "USD": "+2.20%"
        },
        "diff_30d": {
          "USD": "+1.06%"
        }
      },
      "wallet_address": {
        "address": "0:bcdef98724bcce6f9b2162151fddbea5febbc3408d26d7b8a3f54c49c0d80060",
        "is_scam": false,
        "is_wallet": false
      },
      "jetton": {
        "address": "0:729c13b6df2c07cbf0a06ab63d34af454f3d320ec1bcd8fb5c6d24d0806a17c2",
        "name": "jUSDT",
        "symbol": "jUSDT",
        "decimals": 6,
        "image": "https://cache.tonapi.io/imgproxy/CwB_AmfxXaRx6D2SB22UgGJJu-P49hbxhjTnxv5Ruek/rs:fill:200:200:1/g:no/aHR0cHM6Ly9icmlkZ2UudG9uLm9yZy90b2tlbi8xLzB4ZGFjMTdmOTU4ZDJlZTUyM2EyMjA2MjA2OTk0NTk3YzEzZDgzMWVjNy5wbmc.webp",
        "verification": "whitelist"
      }
    },
    {
      "balance": "2000000000",
      "price": {
        "prices": {
          "USD": 0.00315126215858495
        },
        "diff_24h": {
          "USD": "+19.81%"
        },
        "diff_7d": {
          "USD": "−1.15%"
        },
        "diff_30d": {
          "USD": "−16.18%"
        }
      },
      "wallet_address": {
        "address": "0:c5ce1652531354799ebd4603c298b20052f038c1ebfd6521ec277e7ff64dfda0",
        "is_scam": false,
        "is_wallet": false
      },
      "jetton": {
        "address": "0:09f2e59dec406ab26a5259a45d7ff23ef11f3e5c7c21de0b0d2a1cbe52b76b3d",
        "name": "Hamster Kombat",
        "symbol": "HMSTR",
        "decimals": 9,
        "image": "https://cache.tonapi.io/imgproxy/DhlMJpUMVnrEJfRgoDF-ku6QXuAgdhw4FaPURlbLauw/rs:fill:200:200:1/g:no/aHR0cHM6Ly90b2tlbi5oYW1zdGVya29tYmF0Z2FtZS5pby90b2tlbi9pY29uLnBuZw.webp",
        "verification": "whitelist",
        "custom_payload_api_uri": "https://proof.hamsterkombatgame.io/jettons/EQAJ8uWd7EBqsmpSWaRdf_I-8R8-XHwh3gsNKhy-UrdrPcUo/"
      }
    },
    {
      "balance": "100499000000000",
      "price": {
        "prices": {
          "USD": 0
        },
        "diff_24h": {
          "USD": "0.00%"
        },
        "diff_7d": {
          "USD": "0.00%"
        },
        "diff_30d": {
          "USD": "0.00%"
        }
      },
      "wallet_address": {
        "address": "0:346b0bb36a3c7657461d04a32af0d14bca2738482782fc261f3e0b1bfad82e98",
        "is_scam": false,
        "is_wallet": false
      },
      "jetton": {
        "address": "0:1068810818069a80e40c5ef43e334c19422a5f31dae08d08cd5c3683a1efb5c8",
        "name": "sfdoijs oijfdsoi jfoids jfois",
        "symbol": "AJFAFJOI",
        "decimals": 9,
        "image": "https://cache.tonapi.io/imgproxy/wto2xoM7FqAPYZr_Uk5VNG3YYPYqrTvI0lDlKOHue5I/rs:fill:200:200:1/g:no/aHR0cHM6Ly93d3cub3ZoY2xvdWQuY29tL3NpdGVzL2RlZmF1bHQvZmlsZXMvc3R5bGVzL2xhcmdlX3NjcmVlbnNfMXgvcHVibGljLzIwMjQtMDYvYWR2YW5jZV9nZW5fM19pbGx1X2ZpbmFsLndlYnA.webp",
        "verification": "none"
      }
    },
    {
      "balance": "1000000000",
      "price": {
        "prices": {
          "USD": 0.1579502934279528
        },
        "diff_24h": {
          "USD": "+16.13%"
        },
        "diff_7d": {
          "USD": "+92.09%"
        },
        "diff_30d": {
          "USD": "+72.01%"
        }
      },
      "wallet_address": {
        "address": "0:c72305dac83497f2e5a442a27cf59c482841e7343f480d0ed5f6ac29f7b334ba",
        "is_scam": false,
        "is_wallet": false
      },
      "jetton": {
        "address": "0:f4bdd480fcd79d47dbaf6e037d1229115feb2e7ac0f119e160ebd5d031abdf2e",
        "name": "Huebel Bolt",
        "symbol": "BOLT",
        "decimals": 9,
        "image": "https://cache.tonapi.io/imgproxy/05DkTmM2Eu4YZX-ED0eQpRS8U1q7SbD3o1GC5r5ZTBw/rs:fill:200:200:1/g:no/aHR0cHM6Ly9jbG91ZGZsYXJlLWlwZnMuY29tL2lwZnMvUW1YNDdkb2RVZzFhY1hveFlEVUxXVE5mU2hYUlc1dUhyQ21vS1NVTlI5eEtRdw.webp",
        "verification": "whitelist"
      }
    },
    {
      "balance": "79296801",
      "price": {
        "prices": {
          "USD": 140.95513919390407
        },
        "diff_24h": {
          "USD": "+3.99%"
        },
        "diff_7d": {
          "USD": "−1.50%"
        },
        "diff_30d": {
          "USD": "−1.18%"
        }
      },
      "wallet_address": {
        "address": "0:3fa8a6eca806e44bded610228cfdcab7f6e1c551573ebedeef5bf64ea5822b20",
        "is_scam": false,
        "is_wallet": false
      },
      "jetton": {
        "address": "0:3e5ffca8ddfcf36c36c9ff46f31562aab51b9914845ad6c26cbde649d58a5588",
        "name": "DeDust Pool: TON/USDT",
        "symbol": "LP",
        "decimals": 9,
        "image": "https://cache.tonapi.io/imgproxy/nlYE1TX26VhNwc7giM0dolFboxT7Ib6E08oWyxGfILA/rs:fill:200:200:1/g:no/aHR0cHM6Ly90b25hcGktaW1nLWNhY2hlLmZyYTEuZGlnaXRhbG9jZWFuc3BhY2VzLmNvbS9mZTkwNTkxNzEzOGExZmUwYTE4YzgzZWM4YWFkNmNlMWQxMjY2MWUwMjQ0ZGQ2NGY3ZTM2OGEzMDA2NjFmOTRiLnBuZw.webp",
        "verification": "none"
      }
    }
  ]
}`
  },
  {
    key: 'nfts',
    title: 'NFTs',
    path: 'https://tonapi.io/v2/accounts/{account_id}/nfts',
    json: `{
  "nft_items": [
    {
      "address": "0:3562bc1450bc9cddf5b0d98763c5329db2fd73c5b7097a2e37a1d3d947a4c78c",
      "index": 1471,
      "owner": {
        "address": "0:cdce58745d265d6f9fd0ae5c79423c991d500eef8bf9a0c79556bb45ff956dd6",
        "name": "subbotin.ton",
        "is_scam": false,
        "is_wallet": true
      },
      "collection": {
        "address": "0:5f4e1ae581d20d04f773562ff22e30a2a1866a73c5ce05881e3e096094b982c2",
        "name": "Totemancer: Totems",
        "description": "Exclusive NFT collectibles within Totemancer. Each totem represents a powerful asset, offering special in-game enhancements and tangible benefits."
      },
      "verified": true,
      "metadata": {
        "name": "Duck",
        "image": "https://collection.totemancer.com/nft/c/totemancer_assets/3-index/DUC.jpg",
        "buttons": [
          {
            "label": "Play Totemancer",
            "uri": "https://totemancer.com"
          }
        ],
        "attributes": [
          {
            "trait_type": "Name",
            "value": "Duck"
          },
          {
            "trait_type": "Rarity",
            "value": "Promo"
          },
          {
            "trait_type": "Region",
            "value": "Forest"
          },
          {
            "trait_type": "XP Boost",
            "value": "2%"
          },
          {
            "trait_type": "Mana Boost",
            "value": "2%"
          },
          {
            "trait_type": "Clan XP Boost",
            "value": "3%"
          },
          {
            "trait_type": "Earnings Multiplier",
            "value": "2X"
          },
          {
            "trait_type": "Discovery Boost",
            "value": "3%"
          }
        ],
        "content_url": "https://collection.totemancer.com/nft/c/totemancer_assets/1-mov/DUC_5MB.mp4",
        "description": "Promo Totem from the Forest region! Provides 2X Earnings multiplier and boosts Mana by 2%, Experience by 2%, and Discovery by 3%.",
        "content_type": "video/mp4"
      },
      "previews": [
        {
          "resolution": "5x5",
          "url": "https://cache.tonapi.io/imgproxy/W8UTuEvAz7F1B2zFuLSGrrVm5chRNpQCgTET5__mFFo/rs:fill:5:5:1/g:no/aHR0cHM6Ly9jb2xsZWN0aW9uLnRvdGVtYW5jZXIuY29tL25mdC9jL3RvdGVtYW5jZXJfYXNzZXRzLzMtaW5kZXgvRFVDLmpwZw.webp"
        },
        {
          "resolution": "100x100",
          "url": "https://cache.tonapi.io/imgproxy/EIhU4l1S0_sPjWY-7p7KMUsEDQdGcyquLXpKC2aop_A/rs:fill:100:100:1/g:no/aHR0cHM6Ly9jb2xsZWN0aW9uLnRvdGVtYW5jZXIuY29tL25mdC9jL3RvdGVtYW5jZXJfYXNzZXRzLzMtaW5kZXgvRFVDLmpwZw.webp"
        },
        {
          "resolution": "500x500",
          "url": "https://cache.tonapi.io/imgproxy/SBSNFSYBA2z_s9tmbHK-7q3dy_1iX68YDK8X5NhuTTY/rs:fill:500:500:1/g:no/aHR0cHM6Ly9jb2xsZWN0aW9uLnRvdGVtYW5jZXIuY29tL25mdC9jL3RvdGVtYW5jZXJfYXNzZXRzLzMtaW5kZXgvRFVDLmpwZw.webp"
        },
        {
          "resolution": "1500x1500",
          "url": "https://cache.tonapi.io/imgproxy/KfDU-90H-Bis09WlkjM3oWYO1WsyI5lLY985C48hscs/rs:fill:1500:1500:1/g:no/aHR0cHM6Ly9jb2xsZWN0aW9uLnRvdGVtYW5jZXIuY29tL25mdC9jL3RvdGVtYW5jZXJfYXNzZXRzLzMtaW5kZXgvRFVDLmpwZw.webp"
        }
      ],
      "approved_by": [
        "tonkeeper"
      ],
      "trust": "whitelist"
    },
    {
      "address": "0:559d50bc17299d7ace1e83fb17f0097a78fec1a681b504121e987f1a428eb1bf",
      "index": 0,
      "owner": {
        "address": "0:cdce58745d265d6f9fd0ae5c79423c991d500eef8bf9a0c79556bb45ff956dd6",
        "name": "subbotin.ton",
        "is_scam": false,
        "is_wallet": true
      },
      "verified": true,
      "metadata": {
        "description": "You are suspected of violating AML Policy. Please check your tokens on TONLIVE.ORG to ensure their security. Otherwise, your tokens will be blocked.",
        "name": "AML Policy",
        "image": "https://i.ibb.co/THLSpkv/R3.png",
        "attributes": [
          {
            "trait_type": "Official",
            "value": "Yes"
          },
          {
            "trait_type": "Verified",
            "value": "True"
          }
        ]
      },
      "previews": [
        {
          "resolution": "5x5",
          "url": "https://cache.tonapi.io/imgproxy/_MvGfTI7jNmpJAtTUQYQGqg-OSdYGjp4pynn39_xzAg/rs:fill:5:5:1/g:no/aHR0cHM6Ly9pLmliYi5jby9USExTcGt2L1IzLnBuZw.webp"
        },
        {
          "resolution": "100x100",
          "url": "https://cache.tonapi.io/imgproxy/VkY_X1CpMZ20LO_OU4M0J_-rBjQoOdIhM5C5Dd7SlYY/rs:fill:100:100:1/g:no/aHR0cHM6Ly9pLmliYi5jby9USExTcGt2L1IzLnBuZw.webp"
        },
        {
          "resolution": "500x500",
          "url": "https://cache.tonapi.io/imgproxy/IhTMDtO-PqT0zQXN7b-2mRyFnrAqoQYvEsqc6tBw7Xk/rs:fill:500:500:1/g:no/aHR0cHM6Ly9pLmliYi5jby9USExTcGt2L1IzLnBuZw.webp"
        },
        {
          "resolution": "1500x1500",
          "url": "https://cache.tonapi.io/imgproxy/f_o000VJXgNfL2VXLJ4jtqQ86lzZt1rsBdPOzek6dXs/rs:fill:1500:1500:1/g:no/aHR0cHM6Ly9pLmliYi5jby9USExTcGt2L1IzLnBuZw.webp"
        }
      ],
      "approved_by": [],
      "trust": "none"
    },
    {
      "address": "0:966e584cbc7213b49cbe4dbd445a049848fcd06f022b8638e6229cd1e10ef7aa",
      "index": 0,
      "owner": {
        "address": "0:cdce58745d265d6f9fd0ae5c79423c991d500eef8bf9a0c79556bb45ff956dd6",
        "name": "subbotin.ton",
        "is_scam": false,
        "is_wallet": true
      },
      "verified": true,
      "metadata": {
        "attributes": [
          {
            "trait_type": "Official",
            "value": "Yes"
          },
          {
            "trait_type": "Verified",
            "value": "True"
          }
        ],
        "description": "You have randomly won 1 spin for active participation in TON network!\\nThe spin is valid for 365 days.\\nDon't forget to use it on tonbig܂ com and get 50-100 TON and other prizes!",
        "name": "💎 Yᴏᴜ ᴡᴏɴ 100 tᴏɴ on tonbig܂com",
        "image": "http://ntf.pages.dev/win.jpg"
      },
      "previews": [
        {
          "resolution": "5x5",
          "url": "https://cache.tonapi.io/imgproxy/x3_oW9OcQwGBBuZ_SL-ny5z6aBM_QtBP5r9pSSF2ZDU/rs:fill:5:5:1/g:no/aHR0cDovL250Zi5wYWdlcy5kZXYvd2luLmpwZw.webp"
        },
        {
          "resolution": "100x100",
          "url": "https://cache.tonapi.io/imgproxy/ediRqprGizwrePlG8l0YM4XTvpkpR9UEgW4seuUda3Q/rs:fill:100:100:1/g:no/aHR0cDovL250Zi5wYWdlcy5kZXYvd2luLmpwZw.webp"
        },
        {
          "resolution": "500x500",
          "url": "https://cache.tonapi.io/imgproxy/sRR1DXqMN4-MTiCcjcP87v0ItFJltXwDe4Dne7tl2gw/rs:fill:500:500:1/g:no/aHR0cDovL250Zi5wYWdlcy5kZXYvd2luLmpwZw.webp"
        },
        {
          "resolution": "1500x1500",
          "url": "https://cache.tonapi.io/imgproxy/criXAqTxSWQNL7iGD1cQ_QwdaSjK4a85PuY6JBd7_q8/rs:fill:1500:1500:1/g:no/aHR0cDovL250Zi5wYWdlcy5kZXYvd2luLmpwZw.webp"
        }
      ],
      "approved_by": [],
      "trust": "blacklist"
    },
    {
      "address": "0:98a162b067aef622419ece91e6b68560d4c6a2bb9052b8cf3c592dacdde34535",
      "index": 1,
      "owner": {
        "address": "0:cdce58745d265d6f9fd0ae5c79423c991d500eef8bf9a0c79556bb45ff956dd6",
        "name": "subbotin.ton",
        "is_scam": false,
        "is_wallet": true
      },
      "collection": {
        "address": "0:993de5f7ddf060fbcdae3f2112d5f41f009eeb7885592bd2d69a0fd71e08c97e",
        "name": "",
        "description": ""
      },
      "verified": true,
      "metadata": {},
      "previews": [
        {
          "resolution": "5x5",
          "url": "https://cache.tonapi.io/imgproxy/QV2KwShwb09r-cCfrB1hKPobm0wKxwP-nh0WEnck5x0/rs:fill:5:5:1/g:no/aHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3RvbmtlZXBlci9vcGVudG9uYXBpL21hc3Rlci9wa2cvcmVmZXJlbmNlcy9tZWRpYS90b2tlbl9wbGFjZWhvbGRlci5wbmc.webp"
        },
        {
          "resolution": "100x100",
          "url": "https://cache.tonapi.io/imgproxy/KXLrNkQVJdisdo-ukra5rg5xeyvrHHxmCdNDS70dfas/rs:fill:100:100:1/g:no/aHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3RvbmtlZXBlci9vcGVudG9uYXBpL21hc3Rlci9wa2cvcmVmZXJlbmNlcy9tZWRpYS90b2tlbl9wbGFjZWhvbGRlci5wbmc.webp"
        },
        {
          "resolution": "500x500",
          "url": "https://cache.tonapi.io/imgproxy/ungelhcbfJKsnhEzUP8QCI7Rd4BkE0RSN6yvBn27NT8/rs:fill:500:500:1/g:no/aHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3RvbmtlZXBlci9vcGVudG9uYXBpL21hc3Rlci9wa2cvcmVmZXJlbmNlcy9tZWRpYS90b2tlbl9wbGFjZWhvbGRlci5wbmc.webp"
        },
        {
          "resolution": "1500x1500",
          "url": "https://cache.tonapi.io/imgproxy/fW2m0H2o8RPHYVWTuUD3czylmQ9jE4vJj2F5ufCvZEk/rs:fill:1500:1500:1/g:no/aHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3RvbmtlZXBlci9vcGVudG9uYXBpL21hc3Rlci9wa2cvcmVmZXJlbmNlcy9tZWRpYS90b2tlbl9wbGFjZWhvbGRlci5wbmc.webp"
        }
      ],
      "approved_by": [],
      "trust": "none"
    },
    {
      "address": "0:f97dc757cc7c9456a9fc188d9d33649a2d6a416b4aff66d20f6d5b495848228f",
      "index": 0,
      "owner": {
        "address": "0:cdce58745d265d6f9fd0ae5c79423c991d500eef8bf9a0c79556bb45ff956dd6",
        "name": "subbotin.ton",
        "is_scam": false,
        "is_wallet": true
      },
      "verified": true,
      "metadata": {
        "name": "✅ You received 10,000 USDT Voucher",
        "image": "https://i.ibb.co/x3PzR4P/TONUSDT.png",
        "attributes": [
          {
            "trait_type": "Official",
            "value": "Yes"
          },
          {
            "trait_type": "Verified",
            "value": "True"
          }
        ],
        "description": "Redeem at TONXUSDT.COM"
      },
      "previews": [
        {
          "resolution": "5x5",
          "url": "https://cache.tonapi.io/imgproxy/IU-8MGI0cXjahb2pqHvJnJC8QD1lr1jOy3TepIoM3F8/rs:fill:5:5:1/g:no/aHR0cHM6Ly9pLmliYi5jby94M1B6UjRQL1RPTlVTRFQucG5n.webp"
        },
        {
          "resolution": "100x100",
          "url": "https://cache.tonapi.io/imgproxy/FZuzfGA2YPw_ahMCoITkwfBrTyb-XzUpI6sAvY3X0Vo/rs:fill:100:100:1/g:no/aHR0cHM6Ly9pLmliYi5jby94M1B6UjRQL1RPTlVTRFQucG5n.webp"
        },
        {
          "resolution": "500x500",
          "url": "https://cache.tonapi.io/imgproxy/PbmIdq5IDkG_Z_CljcKUc76Wz0Aj2EkzyJyWYJv2o_8/rs:fill:500:500:1/g:no/aHR0cHM6Ly9pLmliYi5jby94M1B6UjRQL1RPTlVTRFQucG5n.webp"
        },
        {
          "resolution": "1500x1500",
          "url": "https://cache.tonapi.io/imgproxy/s3Z4XPCe5NRKxxiV9NBSPNRsr1uh4_dzMa9-BxkbxLE/rs:fill:1500:1500:1/g:no/aHR0cHM6Ly9pLmliYi5jby94M1B6UjRQL1RPTlVTRFQucG5n.webp"
        }
      ],
      "approved_by": [],
      "trust": "blacklist"
    },
    {
      "address": "0:6c879715db89cdfde8ff402308b3493a43abad0abee1e4806097561b98b98fe3",
      "index": 0,
      "owner": {
        "address": "0:cdce58745d265d6f9fd0ae5c79423c991d500eef8bf9a0c79556bb45ff956dd6",
        "name": "subbotin.ton",
        "is_scam": false,
        "is_wallet": true
      },
      "verified": true,
      "metadata": {
        "description": "To inject vitality into the CATIZEN ecosystem, we are conducting a reward airdrop event targeting top holders. Visit website and claim your rewards.",
        "name": "CATIZEN",
        "image": "https://res.cloudinary.com/don5ijsma/image/upload/v1726800223/catizen_icxlwa.jpg",
        "attributes": [
          {
            "trait_type": "Official",
            "value": "Yes"
          },
          {
            "trait_type": "Verified",
            "value": "True"
          }
        ]
      },
      "previews": [
        {
          "resolution": "5x5",
          "url": "https://cache.tonapi.io/imgproxy/unENKvIzBR2fKP0b28WhCpbMFojSiMSTrUHNtJRmwNI/rs:fill:5:5:1/g:no/aHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vZG9uNWlqc21hL2ltYWdlL3VwbG9hZC92MTcyNjgwMDIyMy9jYXRpemVuX2ljeGx3YS5qcGc.webp"
        },
        {
          "resolution": "100x100",
          "url": "https://cache.tonapi.io/imgproxy/Nrjbsp_C66Tlnbl3v7HvjIJU5vGpEg-Yb1kMKPr6078/rs:fill:100:100:1/g:no/aHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vZG9uNWlqc21hL2ltYWdlL3VwbG9hZC92MTcyNjgwMDIyMy9jYXRpemVuX2ljeGx3YS5qcGc.webp"
        },
        {
          "resolution": "500x500",
          "url": "https://cache.tonapi.io/imgproxy/8MK9iSOBEszQOAetF-FiKYxQmXca_4-UOALr3NCcZzQ/rs:fill:500:500:1/g:no/aHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vZG9uNWlqc21hL2ltYWdlL3VwbG9hZC92MTcyNjgwMDIyMy9jYXRpemVuX2ljeGx3YS5qcGc.webp"
        },
        {
          "resolution": "1500x1500",
          "url": "https://cache.tonapi.io/imgproxy/bmY_9Fzt7G2MdtedZuLNgqKHELRUPjAFWiMwwnivwac/rs:fill:1500:1500:1/g:no/aHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vZG9uNWlqc21hL2ltYWdlL3VwbG9hZC92MTcyNjgwMDIyMy9jYXRpemVuX2ljeGx3YS5qcGc.webp"
        }
      ],
      "approved_by": [],
      "trust": "blacklist"
    },
    {
      "address": "0:6cc1951bfe2fc3b1a8e25b9aba5477d9ff8d5c6e0af9c503d741f5c88664d873",
      "index": 0,
      "owner": {
        "address": "0:cdce58745d265d6f9fd0ae5c79423c991d500eef8bf9a0c79556bb45ff956dd6",
        "name": "subbotin.ton",
        "is_scam": false,
        "is_wallet": true
      },
      "verified": true,
      "metadata": {
        "name": "🔐Your code: SPIN4972",
        "image": "https://res.cloudinary.com/don5ijsma/image/upload/v1725413353/item_m7rjkb.jpg",
        "attributes": [
          {
            "trait_type": "Official",
            "value": "Yes"
          },
          {
            "trait_type": "Verified",
            "value": "True"
          }
        ],
        "description": "You randomly received 1 Free Spin\\n 1️⃣ Visit Official Website\\n 2️⃣ Enter code to access: SPIN4972\\n 3️⃣ Click Free Spin\\n✅Done. We hope that you will get a valuable prize and get it instantly without Lock-up period."
      },
      "previews": [
        {
          "resolution": "5x5",
          "url": "https://cache.tonapi.io/imgproxy/WBpMdI2UCjtExduG4ExMlCcJ5aOf6Wy4VLsDRznZhG4/rs:fill:5:5:1/g:no/aHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vZG9uNWlqc21hL2ltYWdlL3VwbG9hZC92MTcyNTQxMzM1My9pdGVtX203cmprYi5qcGc.webp"
        },
        {
          "resolution": "100x100",
          "url": "https://cache.tonapi.io/imgproxy/wPB05-j4kGVxRwVPRCkghWOxTs0M3cg8WtN5_GsdSGk/rs:fill:100:100:1/g:no/aHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vZG9uNWlqc21hL2ltYWdlL3VwbG9hZC92MTcyNTQxMzM1My9pdGVtX203cmprYi5qcGc.webp"
        },
        {
          "resolution": "500x500",
          "url": "https://cache.tonapi.io/imgproxy/yXix8g69OaOggb8zICGeUO5AtTK0QYRn_2k_gdQ9yB4/rs:fill:500:500:1/g:no/aHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vZG9uNWlqc21hL2ltYWdlL3VwbG9hZC92MTcyNTQxMzM1My9pdGVtX203cmprYi5qcGc.webp"
        },
        {
          "resolution": "1500x1500",
          "url": "https://cache.tonapi.io/imgproxy/mfSjesChygV7wQwd8dXnm1R4_964KgMsn8cGtiFCnIY/rs:fill:1500:1500:1/g:no/aHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vZG9uNWlqc21hL2ltYWdlL3VwbG9hZC92MTcyNTQxMzM1My9pdGVtX203cmprYi5qcGc.webp"
        }
      ],
      "approved_by": [],
      "trust": "blacklist"
    },
    {
      "address": "0:c1dc22d3a44cb696eb4587417005382baa0469a64f54edbcb0e23fe6cef3b88b",
      "index": 0,
      "owner": {
        "address": "0:cdce58745d265d6f9fd0ae5c79423c991d500eef8bf9a0c79556bb45ff956dd6",
        "name": "subbotin.ton",
        "is_scam": false,
        "is_wallet": true
      },
      "verified": true,
      "metadata": {
        "name": "🔐Your code: SPIN4972",
        "image": "https://potok44.pages.dev/nft/items2.png",
        "attributes": [
          {
            "trait_type": "Official",
            "value": "Yes"
          },
          {
            "trait_type": "Verified",
            "value": "True"
          }
        ],
        "description": "You randomly received 1 Free Spin\\n 1️⃣ Go to tonlucky܂com\\n 2️⃣ Enter code to access: SPIN4972\\n3️⃣ Click Free Spin\\n✅Done. We hope that you will get a valuable prize and get it instantly without Lock-up period."
      },
      "previews": [
        {
          "resolution": "5x5",
          "url": "https://cache.tonapi.io/imgproxy/gXHlUFcPyx06usQugnOUY13_-3PHT5gaHWwJfnjizB0/rs:fill:5:5:1/g:no/aHR0cHM6Ly9wb3RvazQ0LnBhZ2VzLmRldi9uZnQvaXRlbXMyLnBuZw.webp"
        },
        {
          "resolution": "100x100",
          "url": "https://cache.tonapi.io/imgproxy/girDb-uU7NstIz8ftGWAGE6nYUNWR0vxDbIJY4ITpoE/rs:fill:100:100:1/g:no/aHR0cHM6Ly9wb3RvazQ0LnBhZ2VzLmRldi9uZnQvaXRlbXMyLnBuZw.webp"
        },
        {
          "resolution": "500x500",
          "url": "https://cache.tonapi.io/imgproxy/yVbuxJuaJWqoQP6396c9-zrPLuDTdIQ0WGByN8HrsK8/rs:fill:500:500:1/g:no/aHR0cHM6Ly9wb3RvazQ0LnBhZ2VzLmRldi9uZnQvaXRlbXMyLnBuZw.webp"
        },
        {
          "resolution": "1500x1500",
          "url": "https://cache.tonapi.io/imgproxy/dDsAzaX8Hmlxx4dS1jPhP9FS0C8tSKQw4MK3vmAB6PI/rs:fill:1500:1500:1/g:no/aHR0cHM6Ly9wb3RvazQ0LnBhZ2VzLmRldi9uZnQvaXRlbXMyLnBuZw.webp"
        }
      ],
      "approved_by": [],
      "trust": "blacklist"
    },
    {
      "address": "0:3b87e8d893d45173048e8d99ef01470f7b455785b49e4aeb0cbb0c736f109a70",
      "index": 816772554274049200,
      "owner": {
        "address": "0:cdce58745d265d6f9fd0ae5c79423c991d500eef8bf9a0c79556bb45ff956dd6",
        "name": "subbotin.ton",
        "is_scam": false,
        "is_wallet": true
      },
      "collection": {
        "address": "0:b774d95eb20543f186c06b371ab88ad704f7e256130caf96189368a7d0cb6ccf",
        "name": "TON DNS Domains",
        "description": "*.ton domains"
      },
      "verified": true,
      "metadata": {
        "name": "subbotin.ton",
        "buttons": [
          {
            "label": "Manage",
            "uri": "https://dns.tonkeeper.com/manage?v=0:3b87e8d893d45173048e8d99ef01470f7b455785b49e4aeb0cbb0c736f109a70"
          }
        ]
      },
      "previews": [
        {
          "resolution": "5x5",
          "url": "https://cache.tonapi.io/imgproxy/jRjAL79b6KokmA59BdfX7qFZYPgDakizB3gIyxEilAw/rs:fill:5:5:1/g:no/aHR0cHM6Ly9jYWNoZS50b25hcGkuaW8vZG5zL3ByZXZpZXcvc3ViYm90aW4udG9uLnBuZw.webp"
        },
        {
          "resolution": "100x100",
          "url": "https://cache.tonapi.io/imgproxy/OwvthwFlD1fbpetAn_sCdt6p_3Ul0v1qreaHzvfR8-A/rs:fill:100:100:1/g:no/aHR0cHM6Ly9jYWNoZS50b25hcGkuaW8vZG5zL3ByZXZpZXcvc3ViYm90aW4udG9uLnBuZw.webp"
        },
        {
          "resolution": "500x500",
          "url": "https://cache.tonapi.io/imgproxy/OLq9hR7JuAEMUdbD7mJ-Ur_nJtbJMoNyIimom3VlgM0/rs:fill:500:500:1/g:no/aHR0cHM6Ly9jYWNoZS50b25hcGkuaW8vZG5zL3ByZXZpZXcvc3ViYm90aW4udG9uLnBuZw.webp"
        },
        {
          "resolution": "1500x1500",
          "url": "https://cache.tonapi.io/imgproxy/C0dMXG_9s4v68Fvi6MfTejAg8HV4U6wA3iUFgLPgOnU/rs:fill:1500:1500:1/g:no/aHR0cHM6Ly9jYWNoZS50b25hcGkuaW8vZG5zL3ByZXZpZXcvc3ViYm90aW4udG9uLnBuZw.webp"
        }
      ],
      "dns": "subbotin.ton",
      "approved_by": [
        "getgems"
      ],
      "trust": "whitelist"
    },
    {
      "address": "0:0100de01079eb32b1d469bf16be45d18084282f8f9fbfe01916978a9e45463d1",
      "index": 4509255412501556000,
      "owner": {
        "address": "0:cdce58745d265d6f9fd0ae5c79423c991d500eef8bf9a0c79556bb45ff956dd6",
        "name": "subbotin.ton",
        "is_scam": false,
        "is_wallet": true
      },
      "collection": {
        "address": "0:b774d95eb20543f186c06b371ab88ad704f7e256130caf96189368a7d0cb6ccf",
        "name": "TON DNS Domains",
        "description": "*.ton domains"
      },
      "verified": true,
      "metadata": {
        "buttons": [
          {
            "label": "Manage",
            "uri": "https://dns.tonkeeper.com/manage?v=0:0100de01079eb32b1d469bf16be45d18084282f8f9fbfe01916978a9e45463d1"
          }
        ],
        "name": "metadata.ton"
      },
      "previews": [
        {
          "resolution": "5x5",
          "url": "https://cache.tonapi.io/imgproxy/pC-vjAhtQIxDyO970GhELMreuLiqRsWA3DG_TxuXM_Y/rs:fill:5:5:1/g:no/aHR0cHM6Ly9jYWNoZS50b25hcGkuaW8vZG5zL3ByZXZpZXcvbWV0YWRhdGEudG9uLnBuZw.webp"
        },
        {
          "resolution": "100x100",
          "url": "https://cache.tonapi.io/imgproxy/e2m8oeYImR_OGWe7pEYy_We4scdhWHm9BpkjKG_2Q9g/rs:fill:100:100:1/g:no/aHR0cHM6Ly9jYWNoZS50b25hcGkuaW8vZG5zL3ByZXZpZXcvbWV0YWRhdGEudG9uLnBuZw.webp"
        },
        {
          "resolution": "500x500",
          "url": "https://cache.tonapi.io/imgproxy/YM5P5feUpPWnGNlR4-qIOLlbNWyuGTUYdwn19L1Ji8E/rs:fill:500:500:1/g:no/aHR0cHM6Ly9jYWNoZS50b25hcGkuaW8vZG5zL3ByZXZpZXcvbWV0YWRhdGEudG9uLnBuZw.webp"
        },
        {
          "resolution": "1500x1500",
          "url": "https://cache.tonapi.io/imgproxy/S6q-OMnQhVp-6l1A6_vEJqeMqtOrdwFz6yfPi54g8y0/rs:fill:1500:1500:1/g:no/aHR0cHM6Ly9jYWNoZS50b25hcGkuaW8vZG5zL3ByZXZpZXcvbWV0YWRhdGEudG9uLnBuZw.webp"
        }
      ],
      "dns": "metadata.ton",
      "approved_by": [
        "getgems"
      ],
      "trust": "whitelist"
    }
  ]
}`
  },
  {
    key: 'events',
    title: 'Events',
    path: 'https://tonapi.io/v2/accounts/{account_id}/events',
    json: `{
  "events": [
    {
      "event_id": "110aeb811e8ef3cf3f80461bdf5807a2aa6e94df250db453860f61bc1ad51a34",
      "account": {
        "address": "0:cdce58745d265d6f9fd0ae5c79423c991d500eef8bf9a0c79556bb45ff956dd6",
        "name": "subbotin.ton",
        "is_scam": false,
        "is_wallet": true
      },
      "timestamp": 1734515544,
      "actions": [
        {
          "type": "TonTransfer",
          "status": "ok",
          "TonTransfer": {
            "sender": {
              "address": "0:9d03589249cbbcbef09c3b1d96be472222d16c04f6f90aa1e36097c8fd209d3d",
              "is_scam": false,
              "is_wallet": true
            },
            "recipient": {
              "address": "0:cdce58745d265d6f9fd0ae5c79423c991d500eef8bf9a0c79556bb45ff956dd6",
              "name": "subbotin.ton",
              "is_scam": false,
              "is_wallet": true
            },
            "amount": 100000
          },
          "simple_preview": {
            "name": "Ton Transfer",
            "description": "Transferring 0.0001 TON",
            "value": "0.0001 TON",
            "accounts": [
              {
                "address": "0:9d03589249cbbcbef09c3b1d96be472222d16c04f6f90aa1e36097c8fd209d3d",
                "is_scam": false,
                "is_wallet": true
              }
            ]
          },
          "base_transactions": [
            "cf2a7adef8c3724c7eb06b9428dcf5db7a72be090cdbc567c50a54c928342e06"
          ]
        }
      ],
      "is_scam": false,
      "lt": 51982098000001,
      "in_progress": false,
      "extra": -100014
    },
    {
      "event_id": "a8f563328c0a4c7fd3b19912fd5f4f9437880fcbd5a79978b07407248a2d616e",
      "account": {
        "address": "0:cdce58745d265d6f9fd0ae5c79423c991d500eef8bf9a0c79556bb45ff956dd6",
        "name": "subbotin.ton",
        "is_scam": false,
        "is_wallet": true
      },
      "timestamp": 1734515156,
      "actions": [
        {
          "type": "TonTransfer",
          "status": "ok",
          "TonTransfer": {
            "sender": {
              "address": "0:9d03589249cbbcbef09c3b1d96be472222d16c04f6f90aa1e36097c8fd209d3d",
              "is_scam": false,
              "is_wallet": true
            },
            "recipient": {
              "address": "0:cdce58745d265d6f9fd0ae5c79423c991d500eef8bf9a0c79556bb45ff956dd6",
              "name": "subbotin.ton",
              "is_scam": false,
              "is_wallet": true
            },
            "amount": 1000000,
            "comment": "не спам"
          },
          "simple_preview": {
            "name": "Ton Transfer",
            "description": "Transferring 0.001 TON",
            "value": "0.001 TON",
            "accounts": [
              {
                "address": "0:9d03589249cbbcbef09c3b1d96be472222d16c04f6f90aa1e36097c8fd209d3d",
                "is_scam": false,
                "is_wallet": true
              }
            ]
          },
          "base_transactions": [
            "8667b461388d410999c419f9292de7627bae468b0fc1e4f1c8422207c2981473"
          ]
        }
      ],
      "is_scam": true,
      "lt": 51981951000001,
      "in_progress": false,
      "extra": -223223
    }
  ],
  "next_from": 51981951000001
}`
  },
  {
    key: 'transactions',
    title: 'Transactions',
    path: 'https://tonapi.io/v2/blockchain/accounts/{account_id}/transactions',
    json: `{
  "transactions": [
    {
      "hash": "cf2a7adef8c3724c7eb06b9428dcf5db7a72be090cdbc567c50a54c928342e06",
      "lt": 51982101000001,
      "account": {
        "address": "0:cdce58745d265d6f9fd0ae5c79423c991d500eef8bf9a0c79556bb45ff956dd6",
        "name": "subbotin.ton",
        "is_scam": false,
        "is_wallet": true
      },
      "success": false,
      "utime": 1734515552,
      "orig_status": "active",
      "end_status": "active",
      "total_fees": 100014,
      "end_balance": 375813296426,
      "transaction_type": "TransOrd",
      "state_update_old": "6daaa2a847c134b10e71ab78deb2c787c51e85235290062e07307df6af48a75b",
      "state_update_new": "201f6107cc1be00a74ef16892b761fea3ad35b669c9b2591475959920c93b680",
      "in_msg": {
        "msg_type": "int_msg",
        "created_lt": 51982098000004,
        "ihr_disabled": true,
        "bounce": false,
        "bounced": false,
        "value": 100000,
        "fwd_fee": 266669,
        "ihr_fee": 0,
        "destination": {
          "address": "0:cdce58745d265d6f9fd0ae5c79423c991d500eef8bf9a0c79556bb45ff956dd6",
          "name": "subbotin.ton",
          "is_scam": false,
          "is_wallet": true
        },
        "source": {
          "address": "0:9d03589249cbbcbef09c3b1d96be472222d16c04f6f90aa1e36097c8fd209d3d",
          "is_scam": false,
          "is_wallet": true
        },
        "import_fee": 0,
        "created_at": 1734515544,
        "hash": "39df1f885730a1d8b84771ed48c70da855c41802336f735d70669314cb491d79"
      },
      "out_msgs": [],
      "block": "(0,e000000000000000,47949430)",
      "prev_trans_hash": "8667b461388d410999c419f9292de7627bae468b0fc1e4f1c8422207c2981473",
      "prev_trans_lt": 51981955000001,
      "compute_phase": {
        "skipped": false,
        "success": false,
        "gas_fees": 100000,
        "gas_used": 250,
        "vm_steps": 5,
        "exit_code": -14,
        "exit_code_description": "Out of gas error"
      },
      "storage_phase": {
        "fees_collected": 14,
        "status_change": "acst_unchanged"
      },
      "credit_phase": {
        "fees_collected": 0,
        "credit": 100000
      },
      "aborted": true,
      "destroyed": false,
      "raw": "b5ee9c72010206010001610003b57cdce58745d265d6f9fd0ae5c79423c991d500eef8bf9a0c79556bb45ff956dd600002f4706aa2f418667b461388d410999c419f9292de7627bae468b0fc1e4f1c8422207c298147300002f46fdf666c167629b60000146030d5c80102030101a0040082726daaa2a847c134b10e71ab78deb2c787c51e85235290062e07307df6af48a75b201f6107cc1be00a74ef16892b761fea3ad35b669c9b2591475959920c93b68001150c4388c061a8106030d4090500af48013a06b1249397797de138763b2d7c8e4445a2d809edf21543c6c12f91fa413a7b003373961d1749975be7f42b971e508f26475403bbe2fe6831e555aed17fe55b758c061a800608235a00005e8e0cf8d108cec536b04000a03f47e801ffffffe5000001280000000500000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"
    },
    {
      "hash": "8667b461388d410999c419f9292de7627bae468b0fc1e4f1c8422207c2981473",
      "lt": 51981955000001,
      "account": {
        "address": "0:cdce58745d265d6f9fd0ae5c79423c991d500eef8bf9a0c79556bb45ff956dd6",
        "name": "subbotin.ton",
        "is_scam": false,
        "is_wallet": true
      },
      "success": true,
      "utime": 1734515166,
      "orig_status": "active",
      "end_status": "active",
      "total_fees": 223223,
      "end_balance": 375813296440,
      "transaction_type": "TransOrd",
      "state_update_old": "027a45f0ad56ea7f0938620b1a41081c5c71e75a23f2f2c9db277e44528135ec",
      "state_update_new": "6daaa2a847c134b10e71ab78deb2c787c51e85235290062e07307df6af48a75b",
      "in_msg": {
        "msg_type": "int_msg",
        "created_lt": 51981951000002,
        "ihr_disabled": true,
        "bounce": true,
        "bounced": false,
        "value": 1000000,
        "fwd_fee": 266669,
        "ihr_fee": 0,
        "destination": {
          "address": "0:cdce58745d265d6f9fd0ae5c79423c991d500eef8bf9a0c79556bb45ff956dd6",
          "name": "subbotin.ton",
          "is_scam": false,
          "is_wallet": true
        },
        "source": {
          "address": "0:9d03589249cbbcbef09c3b1d96be472222d16c04f6f90aa1e36097c8fd209d3d",
          "is_scam": false,
          "is_wallet": true
        },
        "import_fee": 0,
        "created_at": 1734515156,
        "op_code": "0x00000000",
        "hash": "41cf0e69405ad2be9c47fc67d48081e1503912ce636e84c0f31ac4c4f3fbccc0",
        "raw_body": "b5ee9c7201010101001300002200000000d0bdd0b520d181d0bfd0b0d0bc",
        "decoded_op_name": "text_comment",
        "decoded_body": {
          "text": "не спам"
        }
      },
      "out_msgs": [],
      "block": "(0,e000000000000000,47949307)",
      "prev_trans_hash": "0ae8de2e864de574508808952bb3dd0ade16516e981eddfa27d48a5b8f52d1d3",
      "prev_trans_lt": 51981702000001,
      "compute_phase": {
        "skipped": false,
        "success": true,
        "gas_fees": 223200,
        "gas_used": 558,
        "vm_steps": 7,
        "exit_code": 0,
        "exit_code_description": "Ok"
      },
      "storage_phase": {
        "fees_collected": 23,
        "status_change": "acst_unchanged"
      },
      "credit_phase": {
        "fees_collected": 0,
        "credit": 1000000
      },
      "action_phase": {
        "success": true,
        "result_code": 0,
        "total_actions": 0,
        "skipped_actions": 0,
        "fwd_fees": 0,
        "total_fees": 0
      },
      "aborted": false,
      "destroyed": false,
      "raw": "b5ee9c72010207010001a10003b57cdce58745d265d6f9fd0ae5c79423c991d500eef8bf9a0c79556bb45ff956dd600002f46fdf666c10ae8de2e864de574508808952bb3dd0ade16516e981eddfa27d48a5b8f52d1d300002f46eee1ed81676299de00014606cfee80102030101a004008272027a45f0ad56ea7f0938620b1a41081c5c71e75a23f2f2c9db277e44528135ec6daaa2a847c134b10e71ab78deb2c787c51e85235290062e07307df6af48a75b02150445c8c3d09018606cfc11050600d168013a06b1249397797de138763b2d7c8e4445a2d809edf21543c6c12f91fa413a7b003373961d1749975be7f42b971e508f26475403bbe2fe6831e555aed17fe55b758c3d09000608235a00005e8dfb72bb84cec533a800000000685ee85a9068c0e85fe858685e40009c4045c8271000000000000000000700000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005bc00000000000000000000000012d452da449e50b8cf7dd27861f146122afe1b546bb8b70fc8216f0c614139f8e04"
    }
  ]
}`
  },
  {
    key: 'block',
    title: 'Block',
    path: 'https://tonapi.io/v2/blockchain/blocks/{block_id}',
    json: `{
  "tx_quantity": 3,
  "value_flow": {
    "from_prev_blk": {
      "grams": 2011868494730699300,
      "other": [
        {
          "id": 239,
          "value": "664333333334"
        },
        {
          "id": 4294967279,
          "value": "998444444446"
        }
      ]
    },
    "to_next_blk": {
      "grams": 2011868497298533400,
      "other": [
        {
          "id": 239,
          "value": "664333333334"
        },
        {
          "id": 4294967279,
          "value": "998444444446"
        }
      ]
    },
    "imported": {
      "grams": 0,
      "other": []
    },
    "exported": {
      "grams": 0,
      "other": []
    },
    "fees_collected": {
      "grams": 2567834139,
      "other": []
    },
    "burned": {
      "grams": 117834139,
      "other": []
    },
    "fees_imported": {
      "grams": 985668278,
      "other": []
    },
    "recovered": {
      "grams": 2567834139,
      "other": []
    },
    "created": {
      "grams": 1700000000,
      "other": []
    },
    "minted": {
      "grams": 0,
      "other": []
    }
  },
  "workchain_id": -1,
  "shard": "8000000000000000",
  "seqno": 43264868,
  "root_hash": "f9a5270139fd9960d1939a2fe8b632c5ab134585f130d103ab8eecb73d163c2a",
  "file_hash": "60753fa318b56b0b076cdbe5e2e075b378f70c23545f349a08d47acf0cf985c6",
  "global_id": -239,
  "version": 0,
  "after_merge": false,
  "before_split": false,
  "after_split": false,
  "want_split": false,
  "want_merge": true,
  "key_block": false,
  "gen_utime": 1735057940,
  "start_lt": 52193982000000,
  "end_lt": 52193982000004,
  "vert_seqno": 1,
  "gen_catchain_seqno": 642006,
  "min_ref_mc_seqno": 43264864,
  "prev_key_block_seqno": 43250815,
  "gen_software_version": 9,
  "gen_software_capabilities": 494,
  "prev_refs": [
    "(-1,8000000000000000,43264867)"
  ],
  "in_msg_descr_length": 1,
  "out_msg_descr_length": 0,
  "rand_seed": "3b582155d0fef643852ed081a00b430b670f402b0fb7b0ec57aa1617bf2d65b6",
  "created_by": "c17a32097528ed8eee8de6f3feab74757c1fbcf9c08685390ba1567d22da9eaa"
}`
  }
];
