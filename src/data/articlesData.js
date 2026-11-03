export const articlesData = [
  {
    id: 1,
    title: "What Is Forex Trading? Complete Beginner Guide 2026",
    category: "Beginner",
    readTime: "8 min read",
    author: "By Market Path Team",
    summary: "Learn how national currencies are exchanged across global markets 24 hours a day.",
    badgeBg: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    badgeText: "text-emerald-400",
    hoverBorder: "hover:border-emerald-500/60 hover:shadow-emerald-500/10",
    btnHover: "hover:text-emerald-400",
    fullContent: {
      overview: "The Foreign Exchange (Forex or FX) market is the global, decentralized marketplace where national fiat currencies are traded against one another. With a daily turnover exceeding $7.5 trillion, Forex is by far the largest financial market in the world—surpassing global stock exchanges combined. This comprehensive guide covers everything a beginner needs to know to navigate exchange rate mechanics safely.",
      sections: [
        {
          heading: "1. The Structure of Global Decentralized Forex Markets",
          body: "Unlike traditional equities markets (such as the New York Stock Exchange or London Stock Exchange) that operate on a single centralized physical trading floor, Forex operates as an Over-The-Counter (OTC) electronic network.\n\nTransactions are processed across four major institutional financial tiers:\n\n• Interbank Market: Top-tier global banks (e.g., JPMorgan Chase, Deutsche Bank, Citi) that exchange billions of dollars daily directly with one another.\n• Non-Bank Liquidity Providers: Hedge funds, algorithmic market makers, and sovereign wealth funds.\n• Retail Forex Brokers: Regulated platforms like Exness that aggregate institutional liquidity and provide access to retail individual traders.\n• Retail Traders: Individuals speculating on intraday or multi-day price fluctuations."
        },
        {
          heading: "2. How Currency Pairs Work: Base vs. Quote Mechanics",
          body: "In Forex, currencies are always traded in pairs. When you enter a trade, you simultaneously purchase one currency and sell another.\n\nStructure Breakdown (e.g., EUR/USD = 1.0850):\n• Base Currency (EUR): The first currency listed, representing 1 fixed unit.\n• Quote Currency (USD): The second currency listed, indicating how much of it is required to buy 1 unit of the Base currency.\n\nExecuting Orders in Live Conditions:\n• Long Position (Buy): You buy the pair because you expect the Base currency to appreciate relative to the Quote currency.\n• Short Position (Sell): You sell the pair because you anticipate the Base currency will weaken against the Quote currency."
        },
        {
          heading: "3. Market Sessions and Peak Liquidity Overlaps",
          body: "The Forex market is open 24 hours a day, 5 days a week, rotating across four key regional sessions:\n\n1. Sydney Session (10:00 PM – 7:00 AM GMT): Lower volatility, focused on AUD and NZD.\n2. Tokyo / Asian Session (12:00 AM – 9:00 AM GMT): Volatility centered around Japanese Yen (JPY) crosses.\n3. London Session (7:00 AM – 4:00 PM GMT): Generates over 35% of total global daily trading volume.\n4. New York Session (1:00 PM – 10:00 PM GMT): Driven by US macroeconomic news releases.\n\nThe London / New York Overlap (1:00 PM – 4:00 PM GMT):\nThis 3-hour window represents the daily peak of global liquidity. Spreads tighten to their absolute lowest levels, and breakout strategies experience their strongest trend follow-through."
        }
      ]
    }
  },
  {
    id: 2,
    title: "How to Calculate Position Size in Forex Step-by-Step",
    category: "Risk Management",
    readTime: "6 min read",
    author: "By Market Path Team",
    summary: "Protect your account balance with precise lot size calculations and fixed percentage risk.",
    badgeBg: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    badgeText: "text-cyan-400",
    hoverBorder: "hover:border-cyan-500/60 hover:shadow-cyan-500/10",
    btnHover: "hover:text-cyan-400",
    fullContent: {
      overview: "Position sizing is the single most important mathematical tool in risk management. Entering trades with arbitrary lot sizes (e.g., blindly using 0.5 or 1.0 lots on every setup) is the fastest way to ruin a trading account. Learn how to calculate exact lot sizes based on stop loss distance.",
      sections: [
        {
          heading: "1. The 1% Account Risk Golden Rule",
          body: "Professional risk management dictates that you should never risk more than 1% to 2% of your total account capital on a single trade setup.\n\nWhy Fixed Percentage Risk Matters:\n• If you suffer 5 consecutive losses risking 1% per trade, your account balance drops by ~5%. You only need a 5.2% gain to recover.\n• If you suffer 5 consecutive losses risking 10% per trade, your account drops by 41%, requiring a massive 70% gain just to break even!"
        },
        {
          heading: "2. The Mathematical Position Sizing Formula",
          body: "Your lot size must dynamically change according to how many pips away your Stop Loss is placed.\n\nPosition Sizing Formula:\nLot Size = (Account Capital × Risk %) / (Stop Loss Distance in Pips × Pip Value)\n\nPractical Real-World Example:\n• Account Balance: $10,000 USD\n• Risk Limit: 1% ($100 USD)\n• Currency Pair: EUR/USD (1 Standard Lot Pip Value = $10 per pip)\n• Technical Stop Loss Distance: 20 Pips\n• Lot Size Calculation: $100 Risk / (20 pips × $10) = 0.50 Lots (5 Mini Lots)."
        },
        {
          heading: "3. Adjusting Lot Sizes for Different Currency Crosses",
          body: "When trading non-USD quote currency pairs (such as EUR/GBP or AUD/CAD), the pip value per standard lot fluctuates based on live cross-exchange rates. Always utilize a dynamic position sizing calculator to ensure your dollar risk remains exact across every pair."
        }
      ]
    }
  },
  {
    id: 3,
    title: "MT4 vs MT5: Which Trading Platform is Best for You?",
    category: "Platforms",
    readTime: "7 min read",
    author: "By Market Path Team",
    summary: "Comparing execution speeds, custom indicators, algorithmic backtesting, and Interface UI.",
    badgeBg: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    badgeText: "text-purple-400",
    hoverBorder: "hover:border-purple-500/60 hover:shadow-purple-500/10",
    btnHover: "hover:text-purple-400",
    fullContent: {
      overview: "MetaTrader 4 (MT4) and MetaTrader 5 (MT5) developed by MetaQuotes are the two most widely utilized electronic trading platforms in retail financial markets. While they look visually similar, they are built on completely different internal architectures.",
      sections: [
        {
          heading: "1. MetaTrader 4 (MT4): The Time-Tested Retail Standard",
          body: "Released in 2005, MT4 was built specifically for Forex currency trading.\n\n• Programming Language: Uses MQL4.\n• Core Strengths: Massive global library of free custom indicators, technical scripts, and commercial Expert Advisors (EAs).\n• Best Suited For: Traditional Forex traders focused purely on manual or automated currency pair strategies."
        },
        {
          heading: "2. MetaTrader 5 (MT5): The Multi-Asset Next-Generation Engine",
          body: "Released in 2010, MT5 is a multi-asset platform designed to trade Forex, stocks, indices, commodities, and futures.\n\n• Architecture: 64-bit multi-threaded engine capable of processing lightning-fast execution.\n• Enhanced Features: Offers 21 timeframes (vs MT4's 9), integrated economic news calendars, depth of market (DOM) pricing, and multi-currency EA backtesting capabilities."
        },
        {
          heading: "3. Direct Comparison: Which Platform Should You Choose?",
          body: "• Choose MT4 if: You rely heavily on existing MQL4 custom indicators or specialized legacy EAs.\n• Choose MT5 if: You want faster backtesting speeds, additional chart timeframes, native depth of market execution, and access to stocks or crypto alongside Forex."
        }
      ]
    }
  },
  {
    id: 4,
    title: "Understanding Institutional Order Flow and Liquidity Pools",
    category: "Advanced",
    readTime: "9 min read",
    author: "By Market Path Team",
    summary: "Discover how bank algorithms hunt retail stop loss clusters before driving major trends.",
    badgeBg: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    badgeText: "text-amber-400",
    hoverBorder: "hover:border-amber-500/60 hover:shadow-amber-500/10",
    btnHover: "hover:text-amber-400",
    fullContent: {
      overview: "Central banks and institutional mega-funds trade hundreds of millions of dollars in single order packages. Because liquidity is finite, institutional algorithms cannot simply click 'buy' without driving price adversely against themselves. They actively seek out concentrated retail liquidity pools to fill their positions.",
      sections: [
        {
          heading: "1. What Are Liquidity Pools and Where Do They Sit?",
          body: "Liquidity pools are price zones where large clusters of retail stop-loss orders and breakout buy/sell stop orders accumulate.\n\n• Equal Highs / Double Tops: Retail traders place sell orders here with stop losses sitting directly above. Institutions view this cluster of stop-losses as a massive pool of buy liquidity.\n• Equal Lows / Double Bottoms: Retail traders buy here with stop losses tucked right underneath, creating a dense pool of sell liquidity."
        },
        {
          heading: "2. Deconstructing the Anatomy of a Liquidity Sweep",
          body: "Before an institutional entity pushes a currency pair in its true intended direction, its algorithm will deliberately drive price past an obvious high or low level.\n\nStep-by-Step Liquidity Sweep Process:\n1. Price aggressively spikes above an obvious Resistance level.\n2. Retail stop losses are triggered, forcing retail shorts to buy back positions.\n3. Institutional algorithms absorb all these incoming buy orders to execute their massive short positions.\n4. Price rapidly reverses back inside the range, leaving a long upper candlestick wick."
        },
        {
          heading: "3. Trading Alongside Smart Money Order Blocks",
          body: "An Order Block represents the specific consolidation candle where institutions injected massive volume before a sharp breakout. Waiting for price to pull back and retest an order block provides low-risk, high-reward entry setups."
        }
      ]
    }
  },
  {
    id: 5,
    title: "Central Bank Rate Decisions: Trading CPI & Inflation Data",
    category: "Macroeconomics",
    readTime: "8 min read",
    author: "By Market Path Team",
    summary: "How interest rate hikes and Federal Reserve economic policy impact global currency trends.",
    badgeBg: "bg-rose-500/10 text-rose-400 border-rose-500/20",
    badgeText: "text-rose-400",
    hoverBorder: "hover:border-rose-500/60 hover:shadow-rose-500/10",
    btnHover: "hover:text-rose-400",
    fullContent: {
      overview: "While technical analysis helps pinpoint entries and exits, macroeconomics determines multi-month currency trends. Central bank monetary policy and inflation metrics are the fundamental drivers of sovereign currency value.",
      sections: [
        {
          heading: "1. Central Banks and Interest Rate Differentials",
          body: "Global capital flows toward economies offering higher yields with stable security. Central banks (such as the US Federal Reserve, European Central Bank, and Bank of England) adjust benchmark interest rates to regulate inflation and economic growth.\n\n• Hawkish Policy: Raising interest rates to cool high inflation. Higher interest rates attract global institutional investment, strengthening the currency.\n• Dovish Policy: Cutting interest rates to stimulate a sluggish economy. Lower yields lead to capital outflows, weakening the currency."
        },
        {
          heading: "2. Key Macroeconomic Indicators to Monitor",
          body: "1. Consumer Price Index (CPI): The headline metric measuring inflation. Higher-than-expected CPI reports often force central banks to hike rates.\n2. Non-Farm Payrolls (NFP): Released on the first Friday of every month in the US, measuring job creation and wage growth.\n3. Gross Domestic Product (GDP): Measures total economic output and growth velocity."
        },
        {
          heading: "3. Managing Risk During High-Impact News Events",
          body: "During tier-1 economic releases, liquidity providers widen spreads, and price can experience rapid slippage. Disciplined traders either close open positions before release windows or wait for initial market volatility to subside before entering."
        }
      ]
    }
  },
  {
    id: 6,
    title: "The Psychology of Managing Drawdowns Without Panic",
    category: "Psychology",
    readTime: "5 min read",
    author: "By Market Path Team",
    summary: "How to maintain emotional composure and avoid revenge trading during consecutive losses.",
    badgeBg: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
    badgeText: "text-indigo-400",
    hoverBorder: "hover:border-indigo-500/60 hover:shadow-indigo-500/10",
    btnHover: "hover:text-indigo-400",
    fullContent: {
      overview: "A drawdown is a period during which a trading account balance drops from a peak level to a lower trough. Experiencing losing streaks is an unavoidable statistical certainty in financial trading.",
      sections: [
        {
          heading: "1. The Psychology of Losing Streaks and Emotional Biases",
          body: "When experiencing 3 or 4 losses in a row, the human brain perceives a threat, triggering a fight-or-flight response. This cognitive state causes traders to abandon their written plan and fall into destructive behavioral traps like revenge trading or widening stop-loss levels."
        },
        {
          heading: "2. Practical Rules to Conquer Account Drawdowns",
          body: "1. Implement a Daily Maximum Stop Loss: Rule that if you lose 2 consecutive trades in a single day, you close your trading terminal until the next session.\n2. Scale Down Lot Sizes During Drawdowns: If your account equity decreases by 5%, temporarily reduce your trade risk from 1% down to 0.5% per trade until confidence and performance recover.\n3. Conduct a Weekly Performance Audit: Review your trade journal to verify whether losses were due to normal market variance or rule execution errors."
        }
      ]
    }
  }
];