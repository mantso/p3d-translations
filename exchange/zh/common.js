{
	"masthead": {
		"holdings": "持仓",
		"balance": "{{balance}} ETH 在智能合约上"
	},
	"menu": {
		"exchange" : [
			"交易",
			"卖出 & 提现",
			"转移",
			"持仓"
		],
		"staking": "股份 & 主节点",
		"news": "新闻",
		"chat": "聊天",
		"explorer": "探索"
	},
	"notifications": {
		"loading": "加载中...",
		"cancelled": "交易被用户取消.",
		"error": "发生了一个错误",
		"withdrawalSubmitted": "提现申请已经发送到智能合约. 请等待确认..", 
		"sellSubmitted": "卖出申请已经发送到智能合约. 请等待确认..",
		"sellConfirmed": "您的卖出申请已经确认! 您成功卖出了 {{tokens}} P3D 币 获得了 {{eth}} ETH.",
		"sellExternal": "有人刚刚卖出了 {{tokens}} P3D 币 获得了 {{eth}} ETH.",
		"buySubmitted": "购买申请已经发送到智能合约. 请等待确认....",
		"buyConfirmed": "您的购买申请已经确认! 您成功买入了 {{tokens}} P3D 币 获得了 {{eth}} ETH.",
		"buyExternal": "有人刚刚买入了 {{tokens}} P3D 币 获得了 {{eth}} ETH.",
		"transferSubmitted": "转移申请已经发送到智能合约. 请等待确认..",
		"transferConfirmed": "您的P3D币转移申请已经被确认! 你成功转移了 {{tokens}} P3D 币.",
		"transferExternal": "有人转移了 {{tokens}} P3D 币."
	},
	"footer": "这是一个娱乐平台，不是一个投资平台，你不来试试吗？",
	"pages": {
		"purchase": {
			"title": "交易P3D币",
			"item": {
				"buy": {
					"title": "购买P3D币",
					"spend": "需要支付的ETH",
					"approx": "大约 {{amount}} P3D 币.",
					"invalid": "请输入一个有效的数字.",
					"empty": "输入一个数字可以立即查看预估的价格.",
					"button": "购买",
					"hint": "1). 你支付的GAS(手续费)越多,你的交易将确认的越快 ."
				},
				"reinvest": {
					"title": "Reinvest Gauntlet Rewards",
					"button": "Reinvest!"
				},
				"recent": {
					"title": "Recent buy orders",
					"date": "Date.",
					"tx": "Tx.",
					"address": "Address"
				}
			}
		},
		"sell": {
			"title": "Sell tokens",
			"item": {
				"sell": {
					"title": "Sell P3D tokens",
					"spend": "Tokens to sell",
					"approx": "Approximately {{amount}} ETH.",
					"invalid": "Type a valid number.",
					"empty": "Type a number above to instantly see price estimations.",
					"button": "Sell!",
					"all": "All",
					"hint": "1). The higher the gas price you offer, the quicker the ETH miners will pick up and confirm your transaction.",
					"warning": "Are you sure you want to sell tokens? Selling is admitting to yourself, and everyone else that your hands are no longer strong enough to play. The 10% fee on your sale will definitely appreciated by other holders though.",
					"confirm": "YES, I HAVE WEAK HANDS.",
					"deny": "NO, I'VE FOUND NEW STRENGTH."
				},
				"withdraw": {
					"title": "Outstanding Gauntlet Rewards",
					"button": "Withdraw",
					"reinvest": "Reinvest",
					"warning": "Would you like to withdraw your Gauntlet rewards? Don't worry there's no fee, the Eth is already as good as yours. But if you're enjoying yourself (and the way things are going) you might want to admit insanity and try our reinvest feature. More tokens means you get a larger share of all fees that are ever paid into the contract. It's kinda like doubling down, but you might get double, and you won't get nothing.",
					"confirm": "YES, TELL THE ROBOT IT'S MY PAYDAY.",
					"deny": "NO, I LIKE WHERE THIS IS GOING."
				},
				"recent": {
					"title": "Recent sell orders",
					"date": "Date.",
					"tx": "Tx.",
					"address": "Address"
				}
			}
		},
		"transfer": {
			"title": "Transfer tokens",
			"item": {
				"transfer": {
					"title": "Transfer P3D tokens",
					"spend": "Tokens to send",
					"recipient": "Wallet of the recipient",
					"invalid": "Invalid wallet address...",
					"empty": "Invalid amount of tokens...",
					"button": "Transfer",
					"hint": " 1). Remember, there's a flat 10% fee on all tokens transferred <br> 2). Your outstanding Gauntlet Rewards will be automatically withdrawn to your eth wallet when you transfer tokens. Don't freak out.<br> 3). The higher the gas price you offer, the quicker the ETH miners will pick up and confirm your transaction."
				},
				"recent": {
					"title": "Recent transfer orders",
					"date": "Date.",
					"tx": "Tx.",
					"from": "From",
					"to": "To"
				}
			}
		},
		"holdings": {
			"title": "My Holdings",
			"item": {
				"tokens": {
					"title": "Tokens"
				},
				"rewards": {
					"title": "Rewards",
					"reinvest": "(if reinvested)"
				},
				"portfolio": {
					"title": "Portfolio growth",
					"description": "The advanced charting module is currently in development."
				},
				"actions": {
					"buy": "Buy tokens",
					"withdraw": "Withdraw",
					"sell": "Sell tokens"
				},
				"configuration": {
					"title": "Configuration",
					"description": "Personalization settings will soon come here, inculding the much requested night-mode. Do you have any suggested features? <a href='https://discord.gg/wfG97Kt'>Please stop by in our own chat platform.</a>"
				},
				"recent": {
					"title": "My transaction history",
					"date": "Date.",
					"tx": "Tx.",
					"event": "Event"
				}
			}
		},
		"staking": {
			"title": "Staking",
			"item": {
				"description": {
					"title": "Masternodes...",
					"columns": [
						{
							"title": "Expand the Network!",
							"text": "If your wallet holds 5 tokens, the contract generates a link to your masternode for you!<br><br> Whenever someone visits the site via this unique link, they have your masternode stored in a cookie that tracks all purchases of P3D they make, now and in the future."
						},
						{
							"title": "What's in it for me?",
							"text": "<b>Ethereum!</b> Whenever someone purchases with your masternode link, <strong>you instantly receive 33% of the buy-in-fees they would otherwise pay to the contract, in ETH</strong> - no questions asked, no hassle."
						}
					]
				},
				"masternode": {
					"title": "My masternode link",
					"link": "Your unique masternode link is...",
					"pointers": "General pointers for expanding your own network:",
					"list": [
						"Try to approach members in communities you're familiar with",
						"Talk about powh.io on forums in your own language for maximum potential.",
						"Apply the <a href='https://powh.io/shill-kit.html'>shill-kit, it's designed to make people click your link!</a>",
						"Be honest. Share the concept behind PoWH and how you feel about the project.",
						"Don't lie or promise guaranteed returns.",
						"Don't simply spam your masternode link. Talk about the project instead.",
						"Failure to oblige to the above rules may result in suspension of your masternode link.",
						"The masternode staking requirement may change over time, so make sure to reinvest your dividends.",
						"Just in case you're feeling clever, using your own masternode link doesn't work"
					]
				},
				"tracker": {
					"title": "tracking views...",
					"text": "Total masternode visits <br>(Not working yet)"
				},
				"earnings": {
					"text": "Outstanding masternode earnings"
				},
				"recent": {
					"title": "Your Masternode Conversions",
					"date": "Date.",
					"tx": "Tx.",
					"address": "Address",
					"profit": "Profit"
				}
			}
		}
	} 
}
