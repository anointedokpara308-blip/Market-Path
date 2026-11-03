import { 
  Globe, 
  CandlestickChart, 
  Brain, 
  ShieldAlert, 
  Building2, 
  Cpu, 
  LineChart, 
  Newspaper, 
  Layers 
} from 'lucide-react';

export const curriculumData = [
  {
    id: "01",
    slug: "forex-basics-market-mechanics",
    title: "1. Forex Basics & Market Mechanics",
    description: "Master currency pair dynamics, quote mechanics, pip calculations, leverage math, spreads, and market session overlaps.",
    category: "Beginner",
    lessons: "5 Lessons",
    duration: "25 min",
    accent: "emerald",
    icon: Globe,
    topics: ["What is a Pip & Lot Size", "Major vs Minor Pairs", "Forex Market Hours"],
    badgeBg: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    iconBg: "bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-navy-950",
    borderHover: "hover:border-emerald-500/60 hover:shadow-emerald-500/10",
    checkColor: "text-emerald-400",
    btnHover: "hover:bg-emerald-500 hover:text-navy-950 hover:border-emerald-500",
    fullContent: {
      overview: "The Foreign Exchange (Forex or FX) market is the global decentralized financial network where national fiat currencies are traded against one another. With a staggering daily trading volume exceeding $7.5 trillion, Forex is the largest and most liquid market on the planet—dwarfing global stock exchanges combined. Understanding its foundational mechanics is non-negotiable for anyone looking to navigate price movements safely.",
      sections: [
        {
          heading: "1. Deconstructing Currency Pairs: Base vs. Quote Mechanics",
          body: "In the Foreign Exchange market, currencies are never traded in isolation. Because currency exchange is inherently relative, every position involves the simultaneous purchase of one national currency and the sale of another. This dual transaction is structured as a Currency Pair.\n\nStructure of a Pair (e.g., EUR/USD = 1.0850):\n• Base Currency (EUR): The first currency listed in the pair. It represents the fixed benchmark unit (1 unit).\n• Quote / Counter Currency (USD): The second currency listed. It represents the variable price required to purchase exactly one unit of the Base currency.\n\nHow to Interpret Bids and Asks:\nWhen you open a trading chart, you will see two distinct prices:\n1. The Bid Price: The highest price institutional buyers are willing to pay for your Base currency when you sell.\n2. The Ask Price: The lowest price sellers are willing to accept for the Base currency when you buy.\n\nExecuting Orders in Real Conditions:\n• Going Long (Buy): You enter a buy order at the Ask price because you anticipate that the Base currency will strengthen against the Quote currency. If EUR/USD moves from 1.0850 to 1.0900, your 1 Euro is now worth 1.0900 Dollars, yielding a net profit.\n• Going Short (Sell): You enter a sell order at the Bid price because you expect the Base currency to weaken relative to the Quote currency. If EUR/USD drops from 1.0850 to 1.0800, you can buy back the Base currency at a cheaper rate, securing a profit on the decline."
        },
        {
          heading: "2. Mathematical Precision: Pips, Pipettes, and Lot Sizing Mechanics",
          body: "Because currency exchange rates fluctuate in tiny fractional fractions, institutional markets measure price movements in standardized units called Pips (Percentage in Point).\n\nUnderstanding Pip Increments:\n• Standard Pairs (4-Decimal Pricing): For pairs like EUR/USD, GBP/USD, or AUD/USD, a pip represents a change in the 4th decimal place (0.0001). A movement from 1.0850 to 1.0851 is an increase of exactly 1 pip.\n• Yen Pairs (2-Decimal Pricing): For pairs involving the Japanese Yen (such as USD/JPY or EUR/JPY), a pip represents the 2nd decimal place (0.01). A price shift from 150.20 to 150.25 represents a 5-pip move.\n• Fractional Pipettes (5th / 3rd Decimal): Regulated ECN brokers like Exness provide 5-decimal precision (e.g., 1.08504). The 5th digit is a Pipette (1/10th of a pip), giving retail traders raw spread transparency.\n\nStandardized Lot Sizes & Pip Value Math:\nTo generate meaningful profits from tiny decimal shifts, trades are opened in standardized volume packages called Lots.\n\n1. Standard Lot (100,000 units of Base Currency):\n   • EUR/USD Pip Value = $10.00 USD per pip move.\n   • A 30-pip favorable move = $300 profit.\n\n2. Mini Lot (10,000 units of Base Currency):\n   • EUR/USD Pip Value = $1.00 USD per pip move.\n   • A 30-pip favorable move = $30 profit.\n\n3. Micro Lot (1,000 units of Base Currency):\n   • EUR/USD Pip Value = $0.10 USD per pip move.\n   • A 30-pip favorable move = $3 profit.\n\nStep-by-Step Profit Calculation Example:\nSuppose you open 2 Mini Lots (20,000 units) on GBP/USD at an entry rate of 1.2600. Price rallies to 1.2660 before you close the trade.\n• Total Pip Movement: 1.2660 - 1.2600 = 60 Pips.\n• Pip Value for 2 Mini Lots: 2 × $1.00 = $2.00 per pip.\n• Gross Realized Profit: 60 pips × $2.00 = $120.00 USD."
        },
        {
          heading: "3. Leverage Ratios, Margin Collateral, and Drawdown Shields",
          body: "Leverage is a mechanism offered by online brokers that allows traders to control significantly larger market positions using a small deposit called Margin. While leverage amplifies profit potential on small initial deposits, it acts as a double-edged sword if risk is managed poorly.\n\nHow Margin Works in Practice:\nMargin is not a fee or a cost—it is a temporary collateral hold placed on your account balance while a trade remains active.\n• Leverage Ratio of 1:100: For every $1 of your own equity held as margin, your broker allows you to control $100 of market value.\n• Example: Controlling a $100,000 position (1 Standard Lot) with 1:100 leverage requires $1,000 of Margin held in your account.\n\nThe Danger of Margin Calls and Liquidation:\nIf open losses draw your remaining usable equity below the required maintenance margin, your broker will trigger a Margin Call. If losses continue, the system automatically liquidates (closes out) all open positions to prevent your balance from going negative. Safe traders avoid high exposure by utilizing regulated brokers that provide Negative Balance Protection."
        },
        {
          heading: "4. Global Trading Sessions, Market Liquidity, and Overlap Windows",
          body: "The global Forex market operates continuously 24 hours a day, 5 days a week, shifting across major financial hubs as the globe rotates. Understanding when liquidity surges is critical for capturing clean trends and avoiding choppy, unpredictable markets.\n\nThe Four Primary Trading Sessions:\n\n1. Sydney Session (10:00 PM – 7:00 AM GMT):\n   • Characterized by lower volatility and lower liquidity.\n   • Primary activity centers on Australian Dollar (AUD) and New Zealand Dollar (NZD) economic news.\n\n2. Tokyo / Asian Session (12:00 AM – 9:00 AM GMT):\n   • Consolidates price action following the US close.\n   • Volatility concentrates heavily around Japanese Yen (JPY) crosses and economic policy announcements from the Bank of Japan.\n\n3. London / European Session (7:00 AM – 4:00 PM GMT):\n   • The powerhouse session, accounting for over 35% of total global daily volume.\n   • Features aggressive institutional order execution, deep liquidity, and tight spreads across EUR, GBP, and CHF pairs.\n\n4. New York Session (1:00 PM – 10:00 PM GMT):\n   • Driven by US economic data releases, equity market opens, and Federal Reserve policy decisions.\n\nThe London / New York Overlap (1:00 PM – 4:00 PM GMT):\nThis 3-hour window represents the absolute peak of daily market volume. Because European institutional funds and American investment banks are active simultaneously, liquidity reaches maximum density, spreads drop to their lowest levels of the day, and breakouts experience their strongest directional follow-through."
        }
      ],
      keyTakeaways: [
        "Currencies trade in pairs where the first is the Base currency and the second is the Quote currency.",
        "A pip is usually the 4th decimal place (0.0001); use micro lots (0.01) when beginning to manage risk.",
        "Margin is a deposit hold, not a fee—never over-leverage your account beyond sensible position sizes.",
        "Trade during high-liquidity session overlaps (London/New York) for tight spreads and high-probability trends."
      ],
      recommendedBroker: {
        name: "Exness",
        description: "Experience ultra-fast execution speeds with zero deposit fees and raw spreads starting from 0.0 pips on major currency pairs.",
        affiliateLink: "https://www.exness.com"
      }
    }
  },
  {
    id: "02",
    slug: "technical-analysis-foundations",
    title: "2. Technical Analysis Foundations",
    description: "Learn professional Japanese candlestick reading, support & resistance mapping, market structure, and technical indicators.",
    category: "Beginner",
    lessons: "6 Lessons",
    duration: "35 min",
    accent: "emerald",
    icon: CandlestickChart,
    topics: ["Candlestick Patterns", "Support & Resistance", "Moving Averages & RSI"],
    badgeBg: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    iconBg: "bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-navy-950",
    borderHover: "hover:border-emerald-500/60 hover:shadow-emerald-500/10",
    checkColor: "text-emerald-400",
    btnHover: "hover:bg-emerald-500 hover:text-navy-950 hover:border-emerald-500",
    fullContent: {
      overview: "Technical Analysis is the systematic study of historical price action, chart geometry, and quantitative indicators to identify repeatable, high-probability market opportunities. Technical analysts operate under the premise that all known market information, economic data, and human emotions are already discounted into the price chart.",
      sections: [
        {
          heading: "1. The Anatomy of Japanese Candlesticks and Reversal Patterns",
          body: "Unlike primitive line charts that only display closing prices, Japanese Candlesticks summarize four critical pieces of market data within every timeframe: Open, High, Low, and Close (OHLC).\n\nKey Visual Elements:\n• Real Body: The colored rectangular section between the Open and Close prices. A green (or white) body indicates buyers dominated the session (Close > Open). A red (or dark) body indicates sellers took control (Close < Open).\n• Upper and Lower Wicks (Shadows): The thin vertical lines extending above and below the body. Wicks display the maximum price extremes tested before market participants pushed price back.\n\nHigh-Probability Candlestick Signals:\n\n1. The Pin Bar (Hammer / Shooting Star):\n   • Features a tiny body tucked at one extreme end and a long wick at least two to three times the body length.\n   • Meaning: Shows aggressive price rejection. A long lower wick means institutional buyers absorbed selling pressure and drove price upward before the candle closed.\n\n2. The Engulfing Pattern (Bullish / Bearish):\n   • Occurs when a momentum candle's body completely covers the entire range of the preceding candle's body.\n   • Meaning: Represents a decisive shift in market control, indicating that momentum has completely reversed."
        },
        {
          heading: "2. Mapping Institutional Support, Resistance, and Role Reversals",
          body: "Support and Resistance levels are horizontal price zones where supply and demand reach temporary equilibrium, causing price to pause, bounce, or completely reverse.\n\n• Support Zone: A price floor where concentrated buying interest outweighs selling pressure, preventing prices from falling further.\n• Resistance Zone: A price ceiling where concentrated selling pressure overwhelms buying interest, capping upward moves.\n\nThe Principle of Role Reversal:\nPrice levels carry psychological memory. When price aggressively breaks out through a strong resistance ceiling, that broken resistance level flips to become a new support floor on subsequent retests. Professional traders wait for price to pull back and test this newly flipped zone before entering positions."
        },
        {
          heading: "3. Decoding Market Structure: Higher Highs, Lower Lows, and Trend Cycles",
          body: "Price action never moves in a straight line. Instead, it moves in cycles made up of expansion waves and corrective pullbacks. Identifying market structure allows you to trade in harmony with the dominant flow.\n\n• Uptrending Market Structure: Characterized by a sequence of Higher Highs (HH) and Higher Lows (HL). As long as price continues creating Higher Lows, the uptrend remains structurally intact.\n• Downtrending Market Structure: Characterized by a sequence of Lower Lows (LL) and Lower Highs (LH). Structural integrity remains bearish until price breaks above the most recent Lower High.\n• Ranging / Sideways Structure: Price oscillates horizontally between established support and resistance boundaries without establishing directional momentum."
        },
        {
          heading: "4. Quantitative Indicators: Moving Averages, RSI, and Confluence",
          body: "Technical indicators act as mathematical filters that confirm price action setups.\n\n• Exponential Moving Averages (20 EMA & 50 EMA): Smooth out price noise to reveal short-term and medium-term trend direction. When the 20 EMA trades above the 50 EMA, bullish momentum is active.\n• Relative Strength Index (RSI): A momentum oscillator bounded between 0 and 100. Readings above 70 indicate overbought conditions, while readings below 30 indicate oversold conditions.\n\nThe Power of Technical Confluence:\nNever open a trade based on a single isolated indicator. Confluence occurs when multiple independent technical factors point to the exact same trade direction—such as a Bullish Pin Bar forming at a key Support level that aligns with the 50 EMA while RSI is oversold."
        }
      ],
      keyTakeaways: [
        "Focus on candlestick wicks—long wicks represent aggressive price rejection by institutional market makers.",
        "Draw Support and Resistance as flexible zones rather than paper-thin lines.",
        "Always align your intraday trades with the higher-timeframe trend (4-Hour and Daily charts).",
        "Seek multi-factor confluence before executing any live market order."
      ],
      recommendedBroker: {
        name: "Exness",
        description: "Practice technical charting strategies on MT5 or TradingView integrated directly inside Exness WebTerminal.",
        affiliateLink: "https://www.exness.com"
      }
    }
  },
  {
    id: "03",
    slug: "trading-psychology-discipline",
    title: "3. Trading Psychology & Discipline",
    description: "Master emotional discipline, eliminate revenge trading, overcome FOMO, and follow a strict execution plan.",
    category: "Psychology",
    lessons: "4 Lessons",
    duration: "20 min",
    accent: "purple",
    icon: Brain,
    topics: ["Overcoming FOMO", "Trade Journaling Habit", "Managing Drawdowns"],
    badgeBg: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    iconBg: "bg-purple-500/10 text-purple-400 group-hover:bg-purple-500 group-hover:text-navy-950",
    borderHover: "hover:border-purple-500/60 hover:shadow-purple-500/10",
    checkColor: "text-purple-400",
    btnHover: "hover:bg-purple-500 hover:text-white hover:border-purple-500",
    fullContent: {
      overview: "While technical analysis teaches you where to enter a trade, psychology determines whether you survive long enough to profit. Studies consistently reveal that over 80% of retail trader failures stem not from flawed chart strategies, but from emotional breakdowns, impulsive risk decisions, and an inability to handle losing trades discipline.",
      sections: [
        {
          heading: "1. The Emotional Cycle of Trading and Cognitive Biases",
          body: "Human survival instincts are naturally wired against trading success. In everyday life, fear protects us from danger, and hope drives us forward. In financial markets, however, unmanaged fear and hope lead directly to account loss.\n\nCommon Psychological Traps:\n\n1. FOMO (Fear Of Missing Out):\n   • Triggered when you see a sudden large candle moving fast without you.\n   • Result: You jump into the trade late out of greed, entering right at the extreme high or low just as institutional traders take profits and trigger a pullback.\n\n2. Revenge Trading:\n   • Occurs immediately after taking a loss. Feeling angry, you immediately open a new, larger trade to win back lost capital.\n   • Result: Emotion replaces analysis, leading to compounding drawdowns.\n\n3. Widening Stop Losses:\n   • Moving your stop loss further away as price approaches it because you hope the market will turn around.\n   • Result: A minor, manageable risk transforms into a devastating account loss."
        },
        {
          heading: "2. Developing a Probabilistic Mindset: Probabilities vs. Certainties",
          body: "Professional traders operate like casino operators rather than gamblers. A casino does not expect to win every single hand of cards; instead, it relies on a small mathematical edge executed consistently over thousands of hands.\n\n• Accepting Loss as a Cost of Business: In trading, a loss is not a mistake—it is simply a routine cost of running a business, identical to an inventory expense.\n• The Win-Rate Illusion: You do not need an 80% or 90% win rate to build wealth. A trader with a 40% win rate and a 1:3 Risk-to-Reward ratio will far outperform a trader with an 85% win rate who lets losing trades run out of control."
        },
        {
          heading: "3. The Mandatory Habit: Structuring a Professional Trading Journal",
          body: "Without a trade journal, you are relying on guesswork. A detailed trade log transforms historical trades into actionable data for self-improvement.\n\nEssential Information to Record:\n1. Chart setup screenshots before entry and after exit.\n2. Specific confluence factors that justified taking the entry.\n3. Exact lot size, stop loss distance, and planned target price.\n4. Emotional state prior to entry (Calm, Anxious, Impulsive)."
        }
      ],
      keyTakeaways: [
        "Treat trading as a probability-based business rather than a game of absolute certainty.",
        "Establish a daily loss limit (e.g., stop trading for the day after 2 consecutive losses).",
        "Never modify or remove your Stop Loss mid-trade out of fear or hope.",
        "Journal every single trade to identify and eliminate recurring emotional mistakes."
      ],
      recommendedBroker: {
        name: "Exness",
        description: "Protect your trading capital using Exness automated stop-loss execution and zero-slippage features under standard market conditions.",
        affiliateLink: "https://www.exness.com"
      }
    }
  },
  {
    id: "04",
    slug: "risk-capital-preservation",
    title: "4. Risk & Capital Preservation",
    description: "Master mathematical risk management, position size calculations, Risk-to-Reward optimization, and stop-loss placement strategies.",
    category: "Risk",
    lessons: "5 Lessons",
    duration: "30 min",
    accent: "amber",
    icon: ShieldAlert,
    topics: ["The 1% Golden Rule", "Risk-to-Reward Ratio", "Trailing Stop Loss"],
    badgeBg: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    iconBg: "bg-amber-500/10 text-amber-400 group-hover:bg-amber-500 group-hover:text-navy-950",
    borderHover: "hover:border-amber-500/60 hover:shadow-amber-500/10",
    checkColor: "text-amber-400",
    btnHover: "hover:bg-amber-500 hover:text-navy-950 hover:border-amber-500",
    fullContent: {
      overview: "Rule #1 in trading is capital preservation. Without account equity, you cannot participate in market moves. Risk management is the mathematical framework that protects your trading account from losing streaks and ensures long-term survival.",
      sections: [
        {
          heading: "1. The 1% Golden Rule of Account Risk Management",
          body: "Never risk more than 1% to 2% of your total account balance on any single trade setup.\n\nThe Math of Drawdown Recovery:\n• If you lose 10 trades risking 1% per trade, your account drops by ~10%. To break even, you only need an 11% gain.\n• If you lose 10 trades risking 10% per trade, your account drops by 65%. To break even, you need a massive 185% gain just to get back to where you started!\n\nBy capping individual trade risk at 1%, you can endure a streak of 15 consecutive losses and still preserve over 85% of your total capital."
        },
        {
          heading: "2. Calculating Position Sizes Based on Stop Loss Distance",
          body: "Never pick lot sizes arbitrarily. Your position size must mathematically adjust based on your stop loss distance in pips.\n\nPosition Size Formula:\nLot Size = (Account Balance × Risk %) / (Stop Loss in Pips × Pip Value)\n\nPractical Example:\n• Account Balance: $10,000 USD\n• Risk Limit: 1% ($100 USD)\n• Stop Loss Distance: 25 Pips on EUR/USD ($10 per pip for 1 standard lot)\n• Lot Calculation: $100 Risk / (25 pips × $10) = 0.40 Lots (4 Mini Lots)."
        },
        {
          heading: "3. Asymmetric Risk-to-Reward Ratios (R:R)",
          body: "Always aim for a minimum Risk-to-Reward ratio of 1:2 or higher. This ensures that your profits on winning trades outweigh your losses on losing trades.\n\nThe Math of a 1:2 R:R Ratio over 10 Trades:\n• Win Rate: 40% (4 Wins, 6 Losses)\n• Risk per Trade: $100 | Target Profit per Trade: $200\n• Total Profits from Wins: 4 × $200 = +$800\n• Total Losses from Losses: 6 × $100 = -$600\n• Net Profit: +$200 USD (Despite losing more trades than you won!)."
        }
      ],
      keyTakeaways: [
        "Cap risk at 1% per trade to survive inevitable market loss streaks.",
        "Calculate position sizes backwards based on your stop loss distance.",
        "Refuse any trade setup that offers less than a 1:2 Risk-to-Reward ratio.",
        "Move your stop loss to breakeven once price reaches a 1:1 profit ratio."
      ],
      recommendedBroker: {
        name: "Exness",
        description: "Utilize Exness built-in margin and position size calculator tools to automate lot sizing calculations instantly.",
        affiliateLink: "https://www.exness.com"
      }
    }
  },
  {
    id: "05",
    slug: "how-to-select-a-safe-broker",
    title: "5. How to Select a Safe Broker",
    description: "Identify Tier-1 regulation, recognize red flags, understand ECN/STP execution, and minimize hidden fees.",
    category: "Brokers",
    lessons: "4 Lessons",
    duration: "20 min",
    accent: "rose",
    icon: Building2,
    topics: ["Tier-1 Regulators", "ECN vs Dealing Desk", "Deposit/Withdrawal Safety"],
    badgeBg: "bg-rose-500/10 text-rose-400 border-rose-500/20",
    iconBg: "bg-rose-500/10 text-rose-400 group-hover:bg-rose-500 group-hover:text-navy-950",
    borderHover: "hover:border-rose-500/60 hover:shadow-rose-500/10",
    checkColor: "text-rose-400",
    btnHover: "hover:bg-rose-500 hover:text-white hover:border-rose-500",
    fullContent: {
      overview: "Selecting the right broker is just as important as developing a profitable trading strategy. Your broker holds your capital and executes your orders. Trading with an unregulated or untrustworthy broker exposes you to slippage, withdrawal delays, or loss of funds.",
      sections: [
        {
          heading: "1. Evaluating Tier-1 Regulatory Licensing",
          body: "Regulators enforce strict financial conduct, capital requirements, and investor protection rules.\n\n• Tier-1 Regulatory Bodies:\n  1. FCA (Financial Conduct Authority - UK)\n  2. ASIC (Australian Securities and Investments Commission)\n  3. CySEC (Cyprus Securities and Exchange Commission)\n  4. FSCA (Financial Sector Conduct Authority - South Africa)\n\nSegregated Client Accounts:\nTier-1 brokers are legally required to keep client funds in segregated tier-1 bank accounts, completely separate from the broker's operational funds."
        },
        {
          heading: "2. Understanding Execution Models: ECN/STP vs. Dealing Desk",
          body: "Brokers execute your orders using two primary models:\n\n• ECN / STP (Straight-Through Processing): Your orders are routed directly to institutional liquidity providers (banks). The broker earns money through a small spread mark-up or transparent commission. There is no conflict of interest.\n• Market Maker / Dealing Desk (B-Book): The broker takes the opposing side of your trade. If you win, the broker loses; if you lose, the broker profits. This creates a potential conflict of interest."
        },
        {
          heading: "3. Red Flags & Common Scam Broker Signals",
          body: "Watch for these warning signs when choosing a broker:\n\n1. Promises of Guaranteed Returns: No legitimate broker or market participant can guarantee trading returns.\n2. Delayed Withdrawals: Unreasonable withdrawal conditions or artificial processing delays.\n3. Excessive Slippage & Re-quotes: Frequent order rejection or poor execution during normal market hours."
        }
      ],
      keyTakeaways: [
        "Never deposit funds with a broker that lacks Tier-1 or Tier-2 regulatory licenses.",
        "Prefer ECN / STP execution for transparent liquidity pricing and zero conflict of interest.",
        "Test deposit and withdrawal processing times with small amounts before funding larger accounts."
      ],
      recommendedBroker: {
        name: "Exness",
        description: "Regulated globally by FCA, CySEC, and FSCA, offering automated instant withdrawals, segregated bank accounts, and negative balance protection.",
        affiliateLink: "https://www.exness.com"
      }
    }
  },
  {
    id: "06",
    slug: "intro-to-automated-algo-trading",
    title: "6. Intro to Automated & Algo Trading",
    description: "Understand Expert Advisors (EAs), backtesting trading strategies with historical tick data, and algorithmic execution.",
    category: "Advanced",
    lessons: "5 Lessons",
    duration: "30 min",
    accent: "indigo",
    icon: Cpu,
    topics: ["EA & Algo Principles", "Strategy Backtesting", "VPS Setup Basics"],
    badgeBg: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
    iconBg: "bg-indigo-500/10 text-indigo-400 group-hover:bg-indigo-500 group-hover:text-navy-950",
    borderHover: "hover:border-indigo-500/60 hover:shadow-indigo-500/10",
    checkColor: "text-indigo-400",
    btnHover: "hover:bg-indigo-500 hover:text-white hover:border-indigo-500",
    fullContent: {
      overview: "Algorithmic (Algo) trading involves using automated rules and software scripts (Expert Advisors/EAs) to execute trades on platforms like MetaTrader. It removes human emotion and enables high-speed execution.",
      sections: [
        {
          heading: "1. Core Principles of Expert Advisors (EAs)",
          body: "An EA continuously monitors market tick data. When pre-programmed conditions are met (e.g., 20 EMA crosses 50 EMA AND RSI < 30), it automatically opens, manages, and closes trades.\n\nKey Advantages of Automated Trading:\n• Emotionless Execution: Trades follow strict rules without fear or greed.\n• Speed: Executes orders in milliseconds, far faster than manual human reactions.\n• Multi-Market Scanning: Simultaneously monitors dozens of currency pairs for opportunities."
        },
        {
          heading: "2. Backtesting & Forward Testing Validation",
          body: "Before running an automated trading bot with real capital, you must thoroughly test its strategy.\n\n• Quantitative Backtesting: Running the EA script through historical tick data across 5 to 10 years to measure Max Drawdown, Win Rate, and Profit Factor.\n• Forward Demo Testing: Running the EA on a live demo account for 3 to 6 months to evaluate real-time spread execution and slippage."
        },
        {
          heading: "3. Low-Latency VPS (Virtual Private Server) Hosting",
          body: "To run an automated trading algorithm 24/7 without interruption, traders use Virtual Private Servers (VPS) located close to broker servers.\n\n• Why Use a VPS? Keeps your trading platform online 24/7 even if your home computer is turned off or loses internet.\n• Ultra-Low Latency: Reduces ping latency down to 1–2 milliseconds for fast order execution."
        }
      ],
      keyTakeaways: [
        "Avoid commercial 'black-box' EAs that promise fast returns without verified backtest logs.",
        "Always backtest automated strategies using high-quality tick data with variable spreads.",
        "Host live algorithmic trading systems on a dedicated low-latency VPS."
      ],
      recommendedBroker: {
        name: "Exness",
        description: "Access free high-speed VPS hosting with Exness for continuous 24/7 Expert Advisor algorithmic trading.",
        affiliateLink: "https://www.exness.com"
      }
    }
  },
  {
    id: "07",
    slug: "advanced-price-action-order-flow",
    title: "7. Advanced Price Action & Order Flow",
    description: "Unpack institutional liquidity sweeps, order blocks, market imbalances (FVGs), and smart money footprints.",
    category: "Advanced",
    lessons: "6 Lessons",
    duration: "40 min",
    accent: "emerald",
    icon: LineChart,
    topics: ["Liquidity Sweeps & Pools", "Fair Value Gaps (FVG)", "Institutional Order Blocks"],
    badgeBg: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    iconBg: "bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-navy-950",
    borderHover: "hover:border-emerald-500/60 hover:shadow-emerald-500/10",
    checkColor: "text-emerald-400",
    btnHover: "hover:bg-emerald-500 hover:text-navy-950 hover:border-emerald-500",
    fullContent: {
      overview: "Retail technical analysis looks at basic support lines and chart patterns. Advanced institutional price action focuses on Order Flow—tracking where major banks and financial institutions inject multi-million-dollar orders and how they manipulate retail liquidity before driving price in the true directional trend.",
      sections: [
        {
          heading: "1. Identifying Liquidity Pools and Stop Hunts",
          body: "Retail traders typically place their stop losses in predictable locations: right above obvious double tops or directly below double bottoms. Institutional market makers use these concentrated clusters of resting orders (liquidity pools) as fuel to fill their own massive block orders.\n\n• The Liquidity Sweep: Price spikes past an obvious technical level to trigger retail stop losses, clearing out weak hands, before reversing rapidly in the intended direction. Recognizing stop hunts prevents you from entering traps."
        },
        {
          heading: "2. Fair Value Gaps (FVG) and Market Imbalances",
          body: "A Fair Value Gap occurs when price moves so aggressively in one direction that one side of the market order book is completely left unfilled.\n\n• Visual Structure: A 3-candlestick pattern where the wick of the first candle does not overlap with the wick of the third candle, leaving an open rectangular imbalance zone.\n• Trading the FVG: Price frequently returns (mitigates) back to fill these imbalances like a magnet before continuing its primary trend."
        },
        {
          heading: "3. Institutional Order Blocks",
          body: "An Order Block represents the last opposing candle (e.g., the last bullish candle before a sharp downward impulsive move) where institutional smart money initiated their heavy positions.\n\n• Retests: When price pulls back to tap into this institutional zone later, it acts as a high-probability reaction point for continuation entries."
        }
      ],
      keyTakeaways: [
        "Never place stop losses right at obvious structural highs or lows where liquidity pools sit.",
        "Wait for price to retest Fair Value Gaps (FVG) and Order Blocks for institutional-grade entries.",
        "Always evaluate market context before trading order flow imbalances."
      ],
      recommendedBroker: {
        name: "Exness",
        description: "Execute advanced price action strategies with lightning-fast order execution speeds on Exness Raw Spread accounts.",
        affiliateLink: "https://www.exness.com"
      }
    }
  },
  {
    id: "08",
    slug: "fundamental-macroeconomic-analysis",
    title: "8. Fundamental Macroeconomic Analysis",
    description: "Analyze central bank interest rates, Non-Farm Payrolls (NFP), inflation reports (CPI), and macroeconomic drivers.",
    category: "Advanced",
    lessons: "5 Lessons",
    duration: "35 min",
    accent: "purple",
    icon: Newspaper,
    topics: ["Central Bank Rate Decisions", "Inflation CPI & NFP Reports", "Currency Valuation Drivers"],
    badgeBg: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    iconBg: "bg-purple-500/10 text-purple-400 group-hover:bg-purple-500 group-hover:text-navy-950",
    borderHover: "hover:border-purple-500/60 hover:shadow-purple-500/10",
    checkColor: "text-purple-400",
    btnHover: "hover:bg-purple-500 hover:text-white hover:border-purple-500",
    fullContent: {
      overview: "While technical charts show you what price is doing right now, fundamental macroeconomics explains why currencies move over the long term. Interest rates, inflation data, employment reports, and geopolitical shifts dictate the macro valuation of global fiat currencies.",
      sections: [
        {
          heading: "1. Central Bank Monetary Policy & Interest Rates",
          body: "The single most powerful driver of currency value is a nation's central bank (e.g., Federal Reserve, European Central Bank, Bank of England).\n\n• Hawk vs. Dove Stance: A 'Hawkish' central bank favors raising interest rates to combat inflation, which strengthens the currency. A 'Dovish' central bank favors cutting rates or easing monetary policy, which weakens the currency."
        },
        {
          heading: "2. Key Economic Data Releases to Track",
          body: "Certain economic data releases trigger massive intraday volatility across currency markets:\n\n1. Non-Farm Payrolls (NFP): Released monthly in the US, measuring job creation. Beats or misses heavily impact the US Dollar.\n2. Consumer Price Index (CPI): The premier gauge of inflation. High inflation forces central banks to hike interest rates.\n3. Gross Domestic Product (GDP): Measures overall economic growth."
        },
        {
          heading: "3. Navigating High-Impact News Spreads",
          body: "During major economic announcements, liquidity can temporarily thin out, causing wider spreads and slippage. Prudent traders either close open positions before major news or wait for spreads to normalize after the initial release spike."
        }
      ],
      keyTakeaways: [
        "Always check the economic calendar daily before opening trades to avoid unexpected news spikes.",
        "Higher interest rate expectations strengthen a currency relative to lower-yielding peers.",
        "Manage open positions carefully or stay sidelined during high-impact data releases like NFP and CPI."
      ],
      recommendedBroker: {
        name: "Exness",
        description: "Trade major fundamental news releases with stable spreads and reliable execution stability on Exness.",
        affiliateLink: "https://www.exness.com"
      }
    }
  },
  {
    id: "09",
    slug: "top-down-multi-timeframe-strategy",
    title: "9. Top-Down Multi-Timeframe Strategy",
    description: "Synthesize HTF directional bias with LTF entry triggers to construct a professional, repeatable trading plan.",
    category: "Advanced",
    lessons: "5 Lessons",
    duration: "30 min",
    accent: "indigo",
    icon: Layers,
    topics: ["HTF Bias & Structure", "LTF Execution Triggers", "Building a Complete Trading Plan"],
    badgeBg: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
    iconBg: "bg-indigo-500/10 text-indigo-400 group-hover:bg-indigo-500 group-hover:text-navy-950",
    borderHover: "hover:border-indigo-500/60 hover:shadow-indigo-500/10",
    checkColor: "text-indigo-400",
    btnHover: "hover:bg-indigo-500 hover:text-white hover:border-indigo-500",
    fullContent: {
      overview: "Professional traders never analyze a chart on a single timeframe alone. They use a Top-Down Multi-Timeframe approach, starting from the macro Daily or 4-Hour charts to establish directional bias, and drilling down to the 15-minute or 5-minute charts to time precise entries.",
      sections: [
        {
          heading: "1. Establishing Higher Timeframe (HTF) Bias",
          body: "Your analysis must always begin on the Daily or 4-Hour chart. Identify where key support/resistance zones lie and whether the macro market structure is bullish or bearish. Never take short trades if the Daily chart is in a roaring uptrend."
        },
        {
          heading: "2. Refining Entries on Lower Timeframes (LTF)",
          body: "Once your HTF directional bias is locked in, drop down to the 15-minute or 1-hour chart. Wait for price to pull back into an HTF key zone (like an order block or support level), then look for a lower-timeframe confirmation trigger (such as a change of character or engulfing candlestick) to execute your trade."
        },
        {
          heading: "3. Assembling Your Complete Trading Plan",
          body: "A professional trading plan must explicitly document:\n1. Your exact market asset pairs.\n2. Your mandatory daily preparation checklist.\n3. Your precise entry triggers and multi-timeframe rules.\n4. Your strict 1% risk management rules and profit targets."
        }
      ],
      keyTakeaways: [
        "Always start your analysis on higher timeframes (Daily/4H) before looking for intraday setups.",
        "Never trade against the dominant trend of your higher timeframe bias.",
        "Document every rule of your strategy into a written trading plan."
      ],
      recommendedBroker: {
        name: "Exness",
        description: "Analyze multi-timeframe charts seamlessly across multiple windows with Exness advanced professional trading platforms.",
        affiliateLink: "https://www.exness.com"
      }
    }
  }
];

export const curriculumModules = curriculumData;