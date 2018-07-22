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
					"title": "将分红再投资",
					"button": "复投!"
				},
				"recent": {
					"title": "近期购买订单",
					"date": "日期.",
					"tx": "Tx.",
					"address": "地址"
				}
			}
		},
		"sell": {
			"title": "出售P3D币",
			"item": {
				"sell": {
					"title": "卖出P3D币",
					"spend": "P3D币去出售",
					"approx": "大约 {{amount}} ETH.",
					"invalid": "输入一个有效的数字.",
					"empty": "输入一个数字能立即看到预估的价格.",
					"button": "出售!",
					"all": "全部",
					"hint": "1). 你支付的GAS(手续费)越多,你的交易将确认的越快.",
					"warning": "你确定你要出售P3D币吗? 出售不是一个明智的选择. 你将支付10%的费用给其他P3D币拥有者.",
					"confirm": "是的, 我要确定要出售了.",
					"deny": "不, 我需要再考虑下."
				},
				"withdraw": {
					"title": "你的分红",
					"button": "提现",
					"reinvest": "复投",
					"warning": "你要提现你的分红吗? 不要担心这并没有税率, 你会得到在这显示的所有ETH. 但是你想进行再投资 (争取获得更多的回报) 你可以尝试下复投的选项. 你的P3D币越多意味着你分红的比例越高. 你也许能获得双倍的利润，而且绝不会空手而归.",
					"confirm": "是的, 告诉智能合约我今天就是要钱.",
					"deny": "不, 我需要再考虑考虑."
				},
				"recent": {
					"title": "最近卖出的订单",
					"date": "日期.",
					"tx": "Tx.",
					"address": "地址"
				}
			}
		},
		"transfer": {
			"title": "转移P3D币",
			"item": {
				"transfer": {
					"title": "发送P3D币",
					"spend": "币去发送",
					"recipient": "接受的钱包地址",
					"invalid": "无效的钱包地址...",
					"empty": "无效的P3D币数量...",
					"button": "发送",
					"hint": " 1). 请注意, 转移P3D币会收 10% 的税 <br> 2).  你的分红会在转移P3D币的同时提现到你的钱包，请不要担心.<br> 3). 你支付的GAS(手续费)越多,你的交易将确认的越快."
				},
				"recent": {
					"title": "最近的转移订单",
					"date": "日期.",
					"tx": "Tx.",
					"from": "从",
					"to": "到"
				}
			}
		},
		"holdings": {
			"title": "持仓",
			"item": {
				"tokens": {
					"title": "P3D币"
				},
				"rewards": {
					"title": "奖励",
					"reinvest": "(如果再投资)"
				},
				"portfolio": {
					"title": "投资组合增长",
					"description": "高级绘图模块目前正在开发中。."
				},
				"actions": {
					"buy": "购买P3D币",
					"withdraw": "提现",
					"sell": "出售P3D币"
				},
				"configuration": {
					"title": "设置",
					"description": "个性化设置正在开发中, 包括最需要的夜间模式. 您有任何建议吗? <a href='https://discord.gg/wfG97Kt'>请登陆我们的discord频道.</a>"
				},
				"recent": {
					"title": "我的交易历史",
					"date": "日期.",
					"tx": "Tx.",
					"event": "操作"
				}
			}
		},
		"staking": {
			"title": "股份",
			"item": {
				"description": {
					"title": "主节点...",
					"columns": [
						{
							"title": "宣传这个网址!",
							"text": "如果你的钱包有5个P3D币, 智能合约会生成一个你的主节点链接!<br><br> 任何人通过你的链接访问网址, 你的主节点信息会储存在他浏览器的cookie里，他的每次购买你都能受益."
						},
						{
							"title": "这对我来说意味着什么?",
							"text": "<b>获得更多的ETH!</b> 任何人通过你的链接来到网站购买P3D币, <strong>你会立即收到应该给智能合约的10%税率中33%的ETH作为回报</strong> - 没有问题, 没有麻烦."
						}
					]
				},
				"masternode": {
					"title": "我的主节点链接",
					"link": "你的独有的主节点链接...",
					"pointers": "宣传指南:",
					"list": [
						"尝试接触与你亲近的人",
						"在论坛上谈论这个网站 powh.io ,用你自己的语言宣传.",
						"应用 <a href='https://powh.io/shill-kit.html'>shill-kit, 这为其他人点你的链接而设计!</a>",
						"诚实.分享你投资P3D的感受.",
						"永远不要撒谎或者承诺任何回报.",
						"不要简单的滥发你的主节点链接.用谈论这个项目的方法取而代之.",
						"不遵守这些规则可能导致你的主节点被暂停.",
						"主节点的回报率随时可能改变, 所以请及时复投你的分红.",
						"如果你觉得自己很聪明, 但是很遗憾，自己使用自己的主节点链接并没有奖励"
					]
				},
				"tracker": {
					"title": "记录视图...",
					"text": "通过你链接的总人数 <br>(现在不工作)"
				},
				"earnings": {
					"text": "获得的回报"
				},
				"recent": {
					"title": "你的主节点交易",
					"date": "日期.",
					"tx": "Tx.",
					"address": "地址",
					"profit": "利润"
				}
			}
		}
	} 
}
