// VPS专题资料：官方页面核对，未购买或执行性能测试。
export const verifiedDate="2026-11-09";
export const vpsTitle="VPS是什么？用途、基础配置与新手入门指南";
export const vpsDescription="用简单易懂的方式介绍VPS是什么、能做什么，解释CPU、内存、存储与网络参数，以及VPS和虚拟主机、云服务器、机场的区别，提供SSH连接与维护入门教程。";
export const vpsSources={
  "doPrice": {
    "label": "DigitalOcean官方Droplet价格",
    "url": "https://www.digitalocean.com/pricing/droplets"
  },
  "doPlan": {
    "label": "DigitalOcean：选择CPU方案",
    "url": "https://docs.digitalocean.com/products/droplets/concepts/choosing-a-plan/"
  },
  "doRegions": {
    "label": "DigitalOcean官方地区列表",
    "url": "https://docs.digitalocean.com/platform/regional-availability/"
  },
  "doTraffic": {
    "label": "DigitalOcean流量计费",
    "url": "https://docs.digitalocean.com/platform/billing/bandwidth/"
  },
  "hzProduct": {
    "label": "Hetzner Cloud官方产品",
    "url": "https://www.hetzner.com/cloud/"
  },
  "hzServers": {
    "label": "Hetzner：云服务器与公网IP",
    "url": "https://docs.hetzner.com/cloud/servers/overview/"
  },
  "hzRegions": {
    "label": "Hetzner官方机房地区",
    "url": "https://docs.hetzner.com/cloud/general/locations/"
  },
  "hzBilling": {
    "label": "Hetzner计费FAQ",
    "url": "https://docs.hetzner.com/cloud/billing/faq/"
  },
  "hzBackup": {
    "label": "Hetzner：备份与快照",
    "url": "https://docs.hetzner.com/cloud/servers/backups-snapshots/overview/"
  },
  "ssh": {
    "label": "OpenSSH客户端手册",
    "url": "https://man.openbsd.org/ssh"
  },
  "keygen": {
    "label": "OpenSSH密钥工具手册",
    "url": "https://man.openbsd.org/ssh-keygen"
  },
  "ubuntu": {
    "label": "Ubuntu官方OpenSSH指南",
    "url": "https://ubuntu.com/server/docs/how-to/security/openssh-server/"
  },
  "bgp": {
    "label": "IETF RFC 4271：BGP协议",
    "url": "https://www.rfc-editor.org/rfc/rfc4271"
  },
  "asn": {
    "label": "APNIC：ASN查询",
    "url": "https://wq.apnic.net/static/search.html"
  },
  "cmi": {
    "label": "中国移动国际IP服务条款",
    "url": "https://mainwebapi.cmi.chinamobile.com/uploads/20240124/e9d61ca808e6a26599f09b61cd91ebf3.pdf"
  }
};
export const vpsProviders=[
  {
    "slug": "digitalocean",
    "name": "DigitalOcean",
    "product": "Basic Droplets · Regular",
    "subtitle": "开发者云平台，先从共享CPU与按需资源入手",
    "regions": "美国、新加坡及欧洲等官方可选地区",
    "type": "自管理Linux虚拟机 / 共享CPU",
    "price": "US$6/月",
    "priceDetail": "代表套餐月上限标价，非全平台最低价；税费、备份等另计",
    "cpu": "1 vCPU（共享）",
    "ram": "1 GiB",
    "disk": "25 GiB SSD",
    "transfer": "1,000 GiB出站额度",
    "bandwidth": "此代表套餐固定端口速率未在核对表中明确，购买前确认",
    "network": "官方未在本次来源中承诺中国大陆CN2 GIA、AS9929或CMIN2线路",
    "fit": "希望用官方文档学习部署、运行轻量网站或开发环境的自管用户",
    "caution": "共享CPU性能随负载变化；公网路径、附加服务与账单须单独核对",
    "verified": "价格、配置与地区对照官方页面；性能与中国大陆回程未独立测试",
    "website": "https://www.digitalocean.com/",
    "purchase": "https://www.digitalocean.com/pricing/droplets",
    "sources": [
      {
        "label": "DigitalOcean官方Droplet价格",
        "url": "https://www.digitalocean.com/pricing/droplets"
      },
      {
        "label": "DigitalOcean：选择CPU方案",
        "url": "https://docs.digitalocean.com/products/droplets/concepts/choosing-a-plan/"
      },
      {
        "label": "DigitalOcean官方地区列表",
        "url": "https://docs.digitalocean.com/platform/regional-availability/"
      },
      {
        "label": "DigitalOcean流量计费",
        "url": "https://docs.digitalocean.com/platform/billing/bandwidth/"
      }
    ],
    "sections": [
      {
        "title": "这份代表套餐适合怎样的任务？",
        "paragraphs": [
          "Basic Regular是可变负载的共享CPU方案。页面选取有明确参数的1 GiB档作预算参照，并不把它作为所有新手都够用的配置。",
          "如果只是练习部署，可以先运行一个小服务，再根据实际内存占用与日志判断是否扩容。持续编译、数据库或高并发应重新比较资源类型；本页没有跑分或并发承载结论。"
        ]
      },
      {
        "title": "预算如何从套餐价扩展到总费用？",
        "paragraphs": [
          "表格展示代表套餐的月上限标价，不是账户的最终全部费用。备份、块存储、负载均衡、超额出站和适用税费需单独核对。",
          "流量规则应看团队汇总和实际账单，不把套餐额度理解为无限带宽。测试结束后检查资源清单，关机与释放计费资源不是一回事；删除资源前先备份需要保留的数据。"
        ]
      },
      {
        "title": "地区与线路怎样核对？",
        "paragraphs": [
          "官方提供多个机房选项，但不能将某一套餐在一个地区的报价推定为所有地区都有库存。创建前确认机房、产品系列与账单币种。",
          "这里没有把普通国际网络写成中国大陆优化线路。若主要访问者在中国大陆，先取得商家允许测试的地址，在自己的运营商网络和常用时段观察去程、回程及目标应用。"
        ]
      },
      {
        "title": "购买前应补齐哪些信息？",
        "paragraphs": [
          "先确认镜像、SSH公钥、备份方式及预算告警。退款资格、CPU具体型号、持续端口速率和特殊线路没有在本次核对中形成可引用结论，请在开通前查阅当前条款。",
          "本条目仅使用官方普通链接，没有新增AFF参数，也不表示本站与该VPS商家已有合作关系。"
        ]
      }
    ]
  },
  {
    "slug": "hetzner",
    "name": "Hetzner Cloud",
    "product": "共享与独享CPU云服务器",
    "subtitle": "先区分资源类型，再核算地区与公网IP成本",
    "regions": "德国、芬兰、美国、新加坡",
    "type": "自管理云虚拟机 / 共享或独享CPU",
    "price": "按地区和机型核价",
    "priceDetail": "官网价格为动态选择，本次未取得可复核的固定套餐报价",
    "cpu": "依具体机型选择，未填固定数值",
    "ram": "依具体机型选择",
    "disk": "依具体机型选择",
    "transfer": "按地区与套餐核对",
    "bandwidth": "未核实固定端口速率，不填保证带宽",
    "network": "不同地区的路由需分别验证，不作中国大陆优化线路保证",
    "fit": "愿意比较共享/独享资源、并能自行维护与备份的建站或开发用户",
    "caution": "公网Primary IP与额外资源需核算；地区、架构和库存并非完全相同",
    "verified": "产品分类与地区已对照官方文档；价格、具体硬件与路由仍待逐套餐核实",
    "website": "https://www.hetzner.com/",
    "purchase": "https://www.hetzner.com/cloud/",
    "sources": [
      {
        "label": "Hetzner Cloud官方产品",
        "url": "https://www.hetzner.com/cloud/"
      },
      {
        "label": "Hetzner：云服务器与公网IP",
        "url": "https://docs.hetzner.com/cloud/servers/overview/"
      },
      {
        "label": "Hetzner官方机房地区",
        "url": "https://docs.hetzner.com/cloud/general/locations/"
      },
      {
        "label": "Hetzner计费FAQ",
        "url": "https://docs.hetzner.com/cloud/billing/faq/"
      },
      {
        "label": "Hetzner：备份与快照",
        "url": "https://docs.hetzner.com/cloud/servers/backups-snapshots/overview/"
      }
    ],
    "sections": [
      {
        "title": "为什么先列产品类型，不写一个低价数字？",
        "paragraphs": [
          "Hetzner区分共享CPU与独享CPU等产品路线。不同需求应先决定是否持续占用CPU，再在相应地区选择配置；共享资源的低价不能代替独享资源的稳定计算配额。",
          "本次官方动态价格区域没有呈现可完整核对的机型金额，因此本页不使用记忆中的旧报价。CPU、RAM、磁盘和流量应与同一机型、地区和币种一起记录。"
        ]
      },
      {
        "title": "地区、架构与公网地址要一起看",
        "paragraphs": [
          "官方列出德国、芬兰、美国与新加坡等Cloud地区。具体产品在不同地点可用性不同，不能将欧洲某机型直接视为新加坡也有相同配置和价格。",
          "官方文档将服务器与Primary IP分别说明，预算需核对公网地址选项及费用。是否有合适IPv4、所选镜像架构能否运行你的软件，都应在创建前确认。"
        ]
      },
      {
        "title": "备份方案需要覆盖真正的数据",
        "paragraphs": [
          "快照和备份是恢复手段，不应当作完全相同的操作。应识别系统盘、数据库与额外挂载存储分别放在哪里，再按官方支持范围建立恢复流程。",
          "一个可落地的方案是：保留配置记录、数据库可恢复导出和独立副本，定期验证恢复。本文没有替任何具体业务承诺备份成功率或数据可用性。"
        ]
      },
      {
        "title": "购买与续费注意事项",
        "paragraphs": [
          "资源计费与开关机状态要分开理解；停用前核对资源清单、备份和账单，不要先删除再寻找数据。适用税费、流量计价和地区差价也应计入预算。",
          "退款限制、具体CPU与磁盘参数、持续带宽和中国大陆去回程没有在本次核对中完成逐机型确认。这里使用普通官方入口，无AFF合作或独立测评宣称。"
        ]
      }
    ]
  }
];
export const vpsFaqs=[
  [
    "VPS适合新手吗？",
    "适合愿意学习基本系统维护的人。新手可以先用短周期运行一个非关键服务，学会SSH、更新、备份与账单检查；如果只想发布静态博客，静态托管或托管主机也可能更省维护时间。不要为学习一次购买长期高配。"
  ],
  [
    "VPS和云服务器有什么区别？",
    "VPS强调虚拟化服务器资源，云服务器通常还配套API、按需创建和其他云服务，两者在实际产品中有交集。应比较资源隔离、存储、网络和运维责任，而不是只看名字。"
  ],
  [
    "便宜VPS能用来做网站吗？",
    "可以用于资源需求可控的网站，但要核对动态程序、数据库、构建任务和峰值并发。价格较低不代表一定超售，也不能证明足以支撑生产业务；需要监控与恢复方案。"
  ],
  [
    "VPS应该选择多少内存？",
    "取决于同时运行的服务、数据库和构建过程。先列进程清单，查看软件要求，再保留高峰余量；不要把别人的空载内存当作你的网站承载能力。运行后持续观察是否发生内存不足或交换空间压力。"
  ],
  [
    "香港VPS一定比美国VPS快吗？",
    "不一定。距离只是影响因素之一，互联、绕路、出口和目标用户网络都可能改变结果。对中国大陆访问者，应分别记录运营商与时段；面向美国用户的网站也可能更适合美国机房。"
  ],
  [
    "VPS需要独立IPv4吗？",
    "并非所有任务都需要，但你的访问端、域名解析或第三方接口若不能完整使用IPv6，就需要合适的IPv4方案。IPv6-only套餐要先检查管理入口和访客兼容，不要只因低价购买。"
  ],
  [
    "VPS月流量应该选择多少？",
    "根据网页资源、文件下载、备份和API调用估算出站量，再留增长余量。端口带宽是传输速率，月流量是累计额度；还要确认计费方向、超额单价与是否会停机或限速。"
  ],
  [
    "CN2 GIA VPS有什么特点？",
    "它通常表示商家采购或宣传的中国电信CN2相关高等级接入，但名称不能证明整条路径和所有运营商都得到相同质量。应确认套餐约定、测试来源、去程与回程，不将单次路由识别当成永久保证。"
  ],
  [
    "VPS买月付还是年付？",
    "尚未验证需求时优先控制预付金额。年付比较全年总支出、续费价格与退款限制；按小时计费也要注意关机后的保留资源费用，不能把暂时停机理解为免账单。"
  ],
  [
    "VPS购买后如何连接服务器？",
    "核对官方控制台中的公网地址、登录用户名、端口与公钥，使用SSH客户端连接。首次连接前通过可信渠道核对服务器主机密钥指纹；遇到指纹变化先确认重装或更换原因，不跳过检查。"
  ]
];
export const vpsArticles=[
  {
    "slug": "what-is-vps",
    "title": "VPS是什么？从服务器资源到实际用途的新手指南",
    "keyword": "VPS是什么",
    "description": "解释VPS、虚拟主机、独立服务器与云服务器的关系，按建站和开发场景理解资源、成本与管理责任。",
    "lead": "VPS是从物理服务器中划分出来、可以独立运行操作系统和程序的虚拟服务器。你购买的是可管理的计算、内存、存储与网络资源，而不是一个已经替你维护好的网站。",
    "sections": [
      {
        "id": "principle",
        "title": "一台机器，怎样成为多台虚拟服务器？",
        "paragraphs": [
          "虚拟化平台把物理机器的资源分配给多个虚拟机，每个虚拟机运行自己的系统。账户通常可以在权限范围内安装程序、管理文件和配置网络，但底层硬件与虚拟化平台仍由服务商维护。",
          "“独立操作系统”不代表所有CPU、存储和网络都独享。共享CPU、独享vCPU以及容器型资源的隔离方式并不相同，应该看产品规格与使用政策。"
        ]
      },
      {
        "id": "compare",
        "title": "VPS、虚拟主机、独立服务器与云服务器",
        "table": {
          "headers": [
            "产品",
            "你主要管理什么",
            "适合怎样的需求"
          ],
          "rows": [
            [
              "虚拟主机",
              "网站文件与托管面板中的功能",
              "不希望维护系统的小型网站"
            ],
            [
              "VPS / 云虚拟机",
              "操作系统与应用，资源边界看套餐",
              "建站、开发与自管理服务"
            ],
            [
              "独立服务器",
              "整台物理服务器上的系统与应用",
              "持续资源需求更大、愿承担管理成本"
            ],
            [
              "托管云平台",
              "主要管理应用与服务设置",
              "希望减少系统维护、接受平台计价"
            ]
          ]
        },
        "paragraphs": [
          "“云”不是质量等级。虚拟机可以是云平台的一部分，而某些云服务不向用户直接开放完整系统管理权限；先确认你买的是哪类产品。"
        ]
      },
      {
        "id": "uses",
        "title": "用具体任务判断是否需要VPS",
        "paragraphs": [
          "静态博客如果只需要发布HTML和图片，静态托管通常已经能完成任务；需要自定义运行时、后台程序或数据库时，再比较VPS与托管应用平台。",
          "开发测试可以按需创建短期环境。远程持续运行任务则还要考虑断线重试、日志、预算与服务条款，不能只看实例开机成功。"
        ],
        "steps": [
          "列出要运行的软件与访问对象。",
          "判断是否需要系统管理权限和持续运行。",
          "估算资源、备份与运维时间。",
          "用短周期验证，再决定是否长期保留。"
        ]
      },
      {
        "id": "responsibility",
        "title": "开通后，还有哪些责任？",
        "paragraphs": [
          "系统更新、访问控制、数据库备份和应用漏洞修复通常需要你负责。商家能帮助重启虚拟机，不等于替你恢复误删的数据。",
          "常见错误是只保存服务器内的一份备份、忘记删除测试资源或把SSH凭据发给他人。开始之前就规划独立备份和恢复路径。"
        ]
      }
    ],
    "sources": [
      {
        "label": "DigitalOcean：选择CPU方案",
        "url": "https://docs.digitalocean.com/products/droplets/concepts/choosing-a-plan/"
      },
      {
        "label": "Hetzner：云服务器与公网IP",
        "url": "https://docs.hetzner.com/cloud/servers/overview/"
      },
      {
        "label": "Hetzner：备份与快照",
        "url": "https://docs.hetzner.com/cloud/servers/backups-snapshots/overview/"
      }
    ],
    "related": [
      "how-to-choose-vps",
      "ssh-connection",
      "vps-vs-airport"
    ]
  },
  {
    "slug": "how-to-choose-vps",
    "title": "VPS怎么选？CPU、内存、硬盘、流量与预算解析",
    "keyword": "VPS怎么选",
    "description": "从实际用途拆解vCPU、RAM、SSD、NVMe、流量、IPv4和付款周期，建立VPS购买前的参数检查表。",
    "lead": "选VPS先列任务，再选资源与地区。把CPU、内存、存储、网络和附加账单一起比较，比找一个“通用最佳配置”更可靠。本文不把任何配置数字写成网站承载保证。",
    "sections": [
      {
        "id": "workload",
        "title": "先分清突发负载与持续负载",
        "paragraphs": [
          "小网站间歇响应请求与持续编译、转码并不是同类负载。前者可以先比较共享CPU，后者应关注持续CPU使用政策和独享资源方案。",
          "数据库和多进程服务还会占用常驻内存。先看服务组合与峰值，再决定扩容路径；别把“核数更多”当作一定更快。"
        ]
      },
      {
        "id": "resources",
        "title": "参数应该怎样影响购买决定？",
        "table": {
          "headers": [
            "参数",
            "购买时要核对",
            "实际影响"
          ],
          "rows": [
            [
              "vCPU / RAM",
              "共享或独享、CPU型号、内存上限",
              "持续计算能力与并发进程余量"
            ],
            [
              "SSD / NVMe",
              "容量、IO限制、备份和可扩容性",
              "数据库、日志与构建的存储需求"
            ],
            [
              "带宽 / 月流量",
              "速率、计费方向、超额规则",
              "瞬时传输与累计支出"
            ],
            [
              "IPv4 / IPv6",
              "公网地址费用与目标网络兼容",
              "能否管理和对外提供服务"
            ],
            [
              "系统 / 架构",
              "Linux版本、x86或ARM、软件支持",
              "软件能否运行及后续维护"
            ],
            [
              "虚拟化 / 隔离",
              "虚拟机还是容器，内核限制",
              "权限、兼容性与资源边界"
            ]
          ]
        },
        "paragraphs": [
          "NVMe是一类存储接口与协议方案，不能只凭名字推出一定比另一家SSD更快。真实表现还受共享程度和IO配额影响，本页没有磁盘跑分。"
        ]
      },
      {
        "id": "budget",
        "title": "把隐藏在套餐价之外的项目加回来",
        "paragraphs": [
          "统一比较同一币种与周期，单列税费、IPv4、备份、快照、存储和流量超额。首期优惠不等于续费价格，年付也不等于可以随时全额退款。",
          "低预算环境适合学习或可恢复的小任务；关键业务要为异地备份、监控与迁移预留成本。价格便宜本身不能证明超售，缺少性能证据时不要下定论。"
        ]
      },
      {
        "id": "check",
        "title": "购买前完成一份可执行清单",
        "steps": [
          "明确访问用户地区、应用和高峰时段。",
          "记录同一套餐的CPU、内存、磁盘和网络条件。",
          "核对系统架构、SSH与公网地址。",
          "阅读退款、续费与可接受使用政策。",
          "准备恢复方案，再进行短周期验证。"
        ],
        "paragraphs": [
          "验证时记录时间、运营商、机房、套餐与应用，不把一次最快测速写成全天表现。若没有恢复过备份，不应仅因为生成了快照就认定可恢复。"
        ]
      }
    ],
    "sources": [
      {
        "label": "DigitalOcean：选择CPU方案",
        "url": "https://docs.digitalocean.com/products/droplets/concepts/choosing-a-plan/"
      },
      {
        "label": "DigitalOcean流量计费",
        "url": "https://docs.digitalocean.com/platform/billing/bandwidth/"
      },
      {
        "label": "Hetzner：云服务器与公网IP",
        "url": "https://docs.hetzner.com/cloud/servers/overview/"
      },
      {
        "label": "Hetzner：备份与快照",
        "url": "https://docs.hetzner.com/cloud/servers/backups-snapshots/overview/"
      }
    ],
    "related": [
      "what-is-vps",
      "regions-and-routing",
      "ssh-connection"
    ]
  },
  {
    "slug": "vps-vs-airport",
    "title": "VPS和机场有什么区别？资源、维护与费用如何比较",
    "keyword": "VPS和机场的区别",
    "description": "区分VPS服务器资源与成品网络代理服务，比较使用目的、技术门槛、管理责任和真实成本。",
    "lead": "VPS是你可以管理的服务器资源，机场通常是提供现成网络代理服务的供应商。它们不是同一种商品，是否合适取决于任务，而不是简单比较“谁更高级”。",
    "sections": [
      {
        "id": "comparison",
        "title": "先比较你获得的东西",
        "table": {
          "headers": [
            "维度",
            "VPS",
            "机场服务"
          ],
          "rows": [
            [
              "主要交付",
              "计算、系统、存储和网络资源",
              "节点与客户端或订阅接入"
            ],
            [
              "常见目的",
              "网站、应用、开发测试、自管理服务",
              "使用现成网络连接服务"
            ],
            [
              "维护责任",
              "用户维护系统与应用，商家维护底层",
              "供应商维护服务，用户管理账号与设备"
            ],
            [
              "成本构成",
              "资源、流量、附加服务与运维时间",
              "套餐、流量与对应设备限制"
            ],
            [
              "使用门槛",
              "需要学习SSH、系统与备份",
              "通常按品牌客户端或订阅指引使用"
            ]
          ]
        },
        "paragraphs": [
          "服务商也可能提供托管运维或特殊定制，必须以具体合同为准。VPS不自动包含某个平台的访问资格，机场也不等于可用来托管任意后台服务。"
        ]
      },
      {
        "id": "examples",
        "title": "用任务做选择，而不是用名词做选择",
        "paragraphs": [
          "想运行自己的应用、数据库或测试环境，优先比较服务器或托管应用平台。只是需要现成连接服务，应先核对成品服务的客户端、套餐与网络适配。",
          "如果同时有两类需求，应分别列预算与责任。不要因为VPS拥有管理权限，就推断不需要维护或能绕过目标服务的账号规则。"
        ]
      },
      {
        "id": "security",
        "title": "安全与稳定性没有自动胜者",
        "paragraphs": [
          "服务器的安全依赖系统、密钥、权限和应用配置；成品服务则要关注供应方、接入方式和账号保护。单凭产品类型不能承诺更安全。",
          "网络表现受到机房、上游、本地运营商与时段影响。自管服务器多了自己排障的责任，也可能多了灵活性；两者都没有永久稳定保证。"
        ]
      },
      {
        "id": "next",
        "title": "下一步怎样继续？",
        "steps": [
          "写明是要运行程序，还是使用现成连接。",
          "列出能承担的系统维护时间。",
          "比较总支出，而不只看月费。",
          "分别核对服务条款与数据处理方式。"
        ],
        "paragraphs": [
          "本站机场推荐专题保留品牌说明和套餐条件；本VPS专题负责服务器资源、选购与教程。两类内容互相链接，但不把同一套推荐理由套到所有用户。"
        ]
      }
    ],
    "sources": [
      {
        "label": "Hetzner：云服务器与公网IP",
        "url": "https://docs.hetzner.com/cloud/servers/overview/"
      },
      {
        "label": "DigitalOcean：选择CPU方案",
        "url": "https://docs.digitalocean.com/products/droplets/concepts/choosing-a-plan/"
      }
    ],
    "related": [
      "what-is-vps",
      "how-to-choose-vps"
    ],
    "airportLink": true
  },
  {
    "slug": "regions-and-routing",
    "title": "香港、日本、美国VPS怎么选？机房地区与网络线路指南",
    "keyword": "VPS机房地区怎么选",
    "description": "比较香港、日本和美国机房的使用场景，解释BGP、去程回程与常见中国大陆线路宣传，避免用地理距离代替网络验证。",
    "lead": "机房选址首先看访问者和目标服务在哪里，其次才是你自己离哪座机房近。物理距离影响传播时延，但运营商互联与绕路可能改变体验，不能给一个地区永久贴上“最快”标签。",
    "sections": [
      {
        "id": "regions",
        "title": "三个常见地区，应该比较什么？",
        "table": {
          "headers": [
            "地区",
            "优先思考的任务",
            "必须核对"
          ],
          "rows": [
            [
              "香港",
              "面向邻近地区访问者的业务",
              "具体城市、跨境路由、端口与流量成本"
            ],
            [
              "日本",
              "日本或东亚用户、当地依赖服务",
              "机房位置、运营商路径、可用资源"
            ],
            [
              "美国",
              "北美用户或依赖北美服务的应用",
              "东西海岸、目标服务路径、跨洋访问体验"
            ]
          ]
        },
        "paragraphs": [
          "不能把香港一定更快、美国一定更便宜当作选购规则。价格与配置必须取自同一商家、同一机型和地区，库存与税费也会影响最终支出。"
        ]
      },
      {
        "id": "routes",
        "title": "线路标签怎样读？",
        "table": {
          "headers": [
            "术语",
            "它主要说明什么",
            "不能据此推断什么"
          ],
          "rows": [
            [
              "普通国际线路",
              "通常指未特别承诺某类大陆优化的国际接入",
              "不等于一定慢或一定不可用"
            ],
            [
              "CN2 GIA",
              "商家常用的中国电信CN2相关接入宣传",
              "不是所有运营商全程同一路由的证明"
            ],
            [
              "AS9929",
              "与联通相关的自治系统编号，用于识别网络路径",
              "不能单凭一个AS号保证整条线路质量"
            ],
            [
              "CMIN2",
              "中国移动国际的相关网络，关联AS58807",
              "不等于所有移动用户任何时段都有同一表现"
            ],
            [
              "BGP / 三网优化",
              "路由交换机制或面向多运营商的产品描述",
              "BGP本身不是专线或最低延迟保证"
            ]
          ]
        },
        "paragraphs": [
          "这些术语属于网络与产品的不同层次，不是同一种认证标签。ASN归属、商家销售承诺和当次实际路由要分开记录；本页不验证任何商家是否持续使用某条链路。"
        ]
      },
      {
        "id": "directions",
        "title": "去程和回程是两次不同的观察",
        "paragraphs": [
          "从你的设备到服务器是一个方向，从服务器回到你的网络是另一个方向，路径可能不同。只看一次traceroute，不能证明往返都符合宣传。",
          "测量时记录日期、访问网络与机房；中间路由器不回应探测也不直接表示业务数据全部丢失。更应结合实际应用、连续观察与供应方说明。"
        ]
      },
      {
        "id": "workflow",
        "title": "一份地区选择流程",
        "steps": [
          "确认主要访客和数据依赖在哪里。",
          "向候选商家获取允许测试的地址或Looking Glass。",
          "在自己的常用网络与时段观察实际访问。",
          "将路由记录与套餐承诺分别保留。",
          "需求变化时重新核对，不套用旧地区结论。"
        ],
        "paragraphs": [
          "目前本站没有足够的香港、日本逐商家验证资料，因此不生成薄弱的地区排行榜。这里先提供地区选择方法，后续有真实数据再独立扩展专题。"
        ]
      }
    ],
    "sources": [
      {
        "label": "DigitalOcean官方地区列表",
        "url": "https://docs.digitalocean.com/platform/regional-availability/"
      },
      {
        "label": "Hetzner官方机房地区",
        "url": "https://docs.hetzner.com/cloud/general/locations/"
      },
      {
        "label": "IETF RFC 4271：BGP协议",
        "url": "https://www.rfc-editor.org/rfc/rfc4271"
      },
      {
        "label": "APNIC：ASN查询",
        "url": "https://wq.apnic.net/static/search.html"
      },
      {
        "label": "中国移动国际IP服务条款",
        "url": "https://mainwebapi.cmi.chinamobile.com/uploads/20240124/e9d61ca808e6a26599f09b61cd91ebf3.pdf"
      }
    ],
    "related": [
      "how-to-choose-vps",
      "ssh-connection"
    ]
  },
  {
    "slug": "ssh-connection",
    "title": "VPS SSH连接教程：首次登录、密钥与常见错误排查",
    "keyword": "VPS SSH连接教程",
    "description": "使用OpenSSH连接自己的Linux VPS，核对地址、端口和主机指纹，了解密钥登录与常见连接错误，不关闭安全检查。",
    "lead": "连接自己的VPS前，先从官方控制台取得公网地址、登录用户名、SSH端口和认证方式。以下以你有权限管理的Linux服务器与OpenSSH客户端为前提；不需要关闭防火墙，也不需要执行来历不明的一键脚本。",
    "sections": [
      {
        "id": "prepare",
        "title": "准备信息与安全前提",
        "paragraphs": [
          "确认实例已启动，系统支持SSH，公网地址和登录用户与镜像文档一致。云防火墙和系统防火墙应按你的实际管理来源放行所需端口，不将所有端口开放给全网。",
          "本页以文档保留地址203.0.113.10和示例用户名your_user说明命令，执行前替换为自己的值；它们不是可直接连接的演示服务器。不要在聊天或网页表单里提交密码与私钥。"
        ],
        "table": {
          "headers": [
            "信息",
            "从哪里取得",
            "常见错误"
          ],
          "rows": [
            [
              "地址与端口",
              "官方控制台或实例网络信息",
              "使用私网地址，或端口与规则不符"
            ],
            [
              "登录用户名",
              "镜像说明与创建记录",
              "把某个系统的用户名套到所有系统"
            ],
            [
              "认证方式",
              "实例创建时选择的密钥或密码",
              "公钥未安装或选错私钥"
            ],
            [
              "主机指纹",
              "可信控制台或服务方提供的渠道",
              "看见提示就直接输入yes"
            ]
          ]
        }
      },
      {
        "id": "connect",
        "title": "先检查客户端，再发起连接",
        "paragraphs": [
          "Windows终端、macOS终端或Linux终端中可先检查OpenSSH客户端是否可用。若系统没有该功能，从操作系统官方渠道安装客户端，避免下载未知登录工具。"
        ],
        "code": "ssh -V\nssh your_user@203.0.113.10\n# 若你的实际端口不是22，按控制台信息修改\nssh -p 2222 your_user@203.0.113.10",
        "paragraphsAfter": [
          "首次连接提示主机密钥指纹时，先与可信渠道一致核对，再接受并继续。提示指纹发生变化时，先确认重装、换IP或服务器变更；不要用关闭严格检查的方式绕过。"
        ]
      },
      {
        "id": "key",
        "title": "已经配置公钥时，用对应私钥登录",
        "paragraphs": [
          "私钥只留在自己的设备，公钥按服务方流程添加到自己的实例。生成新密钥前检查目标文件是否已存在，避免覆盖原有登录身份，并为私钥设置口令。"
        ],
        "code": "# 在自己的设备生成新的、单独命名的密钥；若文件已存在请改名\nssh-keygen -t ed25519 -f ~/.ssh/vps_learning_ed25519 -C \"vps-learning\"\n# 将对应.pub公钥按官方流程添加到实例后，再使用私钥连接\nssh -i ~/.ssh/vps_learning_ed25519 your_user@203.0.113.10",
        "paragraphsAfter": [
          "不要仅因为创建了本地密钥就删除服务器的其他登录方式。先在第二个终端验证新登录可用，并确认控制台恢复入口，再按官方系统指南考虑进一步加固。"
        ]
      },
      {
        "id": "errors",
        "title": "连接错误分别意味着什么？",
        "table": {
          "headers": [
            "现象",
            "优先检查",
            "不要做什么"
          ],
          "rows": [
            [
              "Connection timed out",
              "地址、端口、实例状态与两层防火墙",
              "不要直接关闭所有防护"
            ],
            [
              "Connection refused",
              "是否有SSH服务监听该端口",
              "不要随机尝试其他人的服务器"
            ],
            [
              "Permission denied",
              "用户名、公钥部署、所选私钥",
              "不要反复猜密码或公开私钥"
            ],
            [
              "REMOTE HOST IDENTIFICATION HAS CHANGED",
              "先确认重装、IP复用或主机变更",
              "不要跳过主机指纹验证"
            ]
          ]
        },
        "paragraphs": [
          "登录成功后可先运行whoami和hostname确认当前用户与主机，再按应用需求操作。遇到无法排除的问题时，通过官方控制台排查；更改SSH配置之前先保留恢复路径。"
        ],
        "code": "whoami\nhostname\nexit"
      }
    ],
    "sources": [
      {
        "label": "OpenSSH客户端手册",
        "url": "https://man.openbsd.org/ssh"
      },
      {
        "label": "OpenSSH密钥工具手册",
        "url": "https://man.openbsd.org/ssh-keygen"
      },
      {
        "label": "Ubuntu官方OpenSSH指南",
        "url": "https://ubuntu.com/server/docs/how-to/security/openssh-server/"
      }
    ],
    "related": [
      "what-is-vps",
      "how-to-choose-vps",
      "regions-and-routing"
    ]
  }
];
