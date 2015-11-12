angular.module('starter.services', [])


.service('marketService', function () {


    var breath = [
        {
            title: 'Volatility Index',
            url: 'http://stockcharts.com/h-sc/ui?s=$VIX'
        },
        {
            title: "NYSE Advance-Decline",
            url: "http://stockcharts.com/h-sc/ui?s=$NYAD:$NYTOT&p=D&yr=0&mn=6&dy=0&id=p61900721315&a=260220479"
        },
        {
            title: 'Summation',
            url: 'http://stockcharts.com/h-sc/ui?s=$NYSI&p=D&yr=0&mn=9&dy=0&id=p86203669426&a=275137244'
        },
        {
            title: 'NYSE McClellan Oscillator',
            url: 'http://stockcharts.com/h-sc/ui?s=$NYMO'
        },
        {
            title: 'Nasdaq McClellan Oscillator',
            url: 'http://stockcharts.com/h-sc/ui?s=$NAMO'
        }
  ];

    var major = [
        {
            title: 'Dow Industrials',
            url: 'http://stockcharts.com/h-sc/ui?s=$INDU'
        },
        {
            title: 'Nasdaq Composite',
            url: 'http://stockcharts.com/h-sc/ui?s=$COMPQ'
        },
        {
            title: 'NYSE Composite',
            url: 'http://stockcharts.com/h-sc/ui?s=$NYA'
        },
        {
            title: 'S&P 500 Large Caps',
            url: 'http://stockcharts.com/h-sc/ui?s=$SPX'
        },
        {
            title: 'AMEX Composite',
            url: 'http://stockcharts.com/h-sc/ui?s=$XAX'
        },
        {
            title: 'TSX Composite',
            url: 'http://stockcharts.com/h-sc/ui?s=$TSX'
        },
        {
            title: 'Venture Composite',
            url: 'http://stockcharts.com/h-sc/ui?s=$CDNX'
        }
  ];


    var indexes = [
        {
            title: 'Dow Composite',
            url: 'http://stockcharts.com/h-sc/ui?s=$DJA'
        },
        {
            title: 'Dow Transports',
            url: 'http://stockcharts.com/h-sc/ui?s=$TRAN'
        },
        {
            title: 'Dow Utilities',
            url: 'http://stockcharts.com/h-sc/ui?s=$UTIL'
        },
        {
            title: 'Nasdaq 100',
            url: 'http://stockcharts.com/h-sc/ui?s=$NDX'
        },
        {
            title: 'Russell 1000',
            url: 'http://stockcharts.com/h-sc/ui?s=$RUI'
        },
        {
            title: 'Russell 2000',
            url: 'http://stockcharts.com/h-sc/ui?s=$RUT'
        },
        {
            title: 'Russell 3000',
            url: 'http://stockcharts.com/h-sc/ui?s=$RUA'
        },
        {
            title: 'S&P 100',
            url: 'http://stockcharts.com/h-sc/ui?s=$OEX'
        },
        {
            title: 'S&P 400 Mid Caps',
            url: 'http://stockcharts.com/h-sc/ui?s=$MID'
        },
        {
            title: 'S&P 600 Small Caps',
            url: 'http://stockcharts.com/h-sc/ui?s=$SML'
        },
        {
            title: 'Wilshire 5000',
            url: 'http://stockcharts.com/h-sc/ui?s=$WLSH'
        }
  ];

    var sectors = [
        {
            title: 'Utilities Sector',
            constituents: [{
                title: 'Conventional Electricity',
                url: 'http://stockcharts.com/h-sc/ui?s=$DJUSVE'
            }, {
                title: 'Water',
                url: 'http://stockcharts.com/h-sc/ui?s=$DJUSWU'
            }, {
                title: 'Multiutilities',
                url: 'http://stockcharts.com/h-sc/ui?s=$DJUSMU'
            }, {
                title: 'Fixed Line Telecommunications',
                url: 'http://stockcharts.com/h-sc/ui?s=$DJUSFC'
            }, {
                title: 'Gas Distribution',
                url: 'http://stockcharts.com/h-sc/ui?s=$DJUSGU'
            }]
        },
        {

            title: 'Consumer Staples Sector',
            constituents: [{
                title: 'Distillers & Vintners',
                url: 'http://stockcharts.com/h-sc/ui?s=$DJUSVN',
            }, {
                title: 'Nondurable Household Products',
                url: 'http://stockcharts.com/h-sc/ui?s=$DJUSHN',
            }, {
                title: 'Tires',
                url: 'http://stockcharts.com/h-sc/ui?s=DJUSTR',
            }, {
                title: 'Personal Products',
                url: 'http://stockcharts.com/h-sc/ui?s=DJUSCM',
            }, {
                title: 'Food Retailers & Wholesalers',
                url: 'http://stockcharts.com/h-sc/ui?s=DJUSFD',
            }, {
                title: 'Brewers',
                url: 'http://stockcharts.com/h-sc/ui?s=DJUSDB',
            }, {
                title: 'Soft Drinks',
                url: 'http://stockcharts.com/h-sc/ui?s=DJUSSD',
            }, {
                title: 'Food Products',
                url: 'http://stockcharts.com/h-sc/ui?s=DJUSFP',
            }, {
                title: 'Tobacco',
                url: 'http://stockcharts.com/h-sc/ui?s=DJUSTB',
            }, {
                title: 'Drug Retailers',
                url: 'http://stockcharts.com/h-sc/ui?s=DJUSRD',
            }]
        },
        {
            title: 'Cyclicals Sector',
            constituents: [{
                title: 'Recreational Services',
                url: 'http://stockcharts.com/h-sc/ui?s=$DJUSRQ'
            }, {
                title: 'Broadline Retailers',
                url: 'http://stockcharts.com/h-sc/ui?s=$DJUSRB'
            }, {
                title: 'Home Improvement Retailers',
                url: 'http://stockcharts.com/h-sc/ui?s=$DJUSHI'
            }, {
                title: 'Automobiles',
                url: 'http://stockcharts.com/h-sc/ui?s=$DJUSAU'
            }, {
                title: 'Apparel Retailers',
                url: 'http://stockcharts.com/h-sc/ui?s=$DJUSRA'
            }, {
                title: 'Clothing & Accessories',
                url: 'http://stockcharts.com/h-sc/ui?s=$DJUSCF'
            }, {
                title: 'Footwear',
                url: 'http://stockcharts.com/h-sc/ui?s=$DJUSFT'
            }, {
                title: 'Hotels',
                url: 'http://stockcharts.com/h-sc/ui?s=$DJUSLG'
            }, {
                title: 'Restaurants & Bars',
                url: 'http://stockcharts.com/h-sc/ui?s=$DJUSRU'
            }, {
                title: 'Broadcasting & Entertainment',
                url: 'http://stockcharts.com/h-sc/ui?s=$DJUSBC'
            }, {
                title: 'Specialty Retailers',
                url: 'http://stockcharts.com/h-sc/ui?s=$DJUSRS'
            }, {
                title: 'Home Construction',
                url: 'http://stockcharts.com/h-sc/ui?s=$DJUSHB'
            }, {
                title: 'Toys',
                url: 'http://stockcharts.com/h-sc/ui?s=$DJUSTY'
            }, {
                title: 'Recreational Products',
                url: 'http://stockcharts.com/h-sc/ui?s=$DJUSRP'
            }, {
                title: 'Gambling',
                url: 'http://stockcharts.com/h-sc/ui?s=$DJUSCA'
            }, {
                title: 'Durable Household Products',
                url: 'http://stockcharts.com/h-sc/ui?s=$DJUSHD'
            }, {
                title: 'Auto Parts',
                url: 'http://stockcharts.com/h-sc/ui?s=$DJUSAT'
            }, {
                title: 'Media Agencies',
                url: 'http://stockcharts.com/h-sc/ui?s=$DJUSAV'
            }, {
                title: 'Specialized Consumer Services',
                url: 'http://stockcharts.com/h-sc/ui?s=$DJUSCS'
            }, {
                title: 'Furnishings',
                url: 'http://stockcharts.com/h-sc/ui?s=$DJUSFH'
            }, {
                title: 'Travel & Tourism',
                url: 'http://stockcharts.com/h-sc/ui?s=$DJUSTT'
            }, {
                title: 'Business Training & Employment Agencies',
                url: 'http://stockcharts.com/h-sc/ui?s=$DJUSBE'
            }, {
                title: 'Publishing',
                url: 'http://stockcharts.com/h-sc/ui?s=$DJUSPB'
            }]
        },
        {
            title: 'Industrials Sector',
            constituents: [{
                title: 'Airlines',
                url: 'http://stockcharts.com/h-sc/ui?s=$DJUSAR'
            }, {
                title: 'Building Materials & Fixtures',
                url: 'http://stockcharts.com/h-sc/ui?s=$DJUSBD'
            }, {
                title: 'Industrial Suppliers',
                url: 'http://stockcharts.com/h-sc/ui?s=$DJUSDS'
            }, {
                title: 'Railroad',
                url: 'http://stockcharts.com/h-sc/ui?s=$DJUSRR'
            }, {
                title: 'Trucking',
                url: 'http://stockcharts.com/h-sc/ui?s=$DJUSTK'
            }, {
                title: 'Waste & Disposal Services',
                url: 'http://stockcharts.com/h-sc/ui?s=$DJUSPC'
            }, {
                title: 'Defense',
                url: 'http://stockcharts.com/h-sc/ui?s=$DJUSDN'
            }, {
                title: 'Delivery Services',
                url: 'http://stockcharts.com/h-sc/ui?s=$DJUSAF'
            }, {
                title: 'Diversified Industrials',
                url: 'http://stockcharts.com/h-sc/ui?s=$DJUSID'
            }, {
                title: 'Marine Transportation',
                url: 'http://stockcharts.com/h-sc/ui?s=$DJUSMT'
            }, {
                title: 'Industrial Machinery',
                url: 'http://stockcharts.com/h-sc/ui?s=$DJUSFE'
            }, {
                title: 'Commercial Vehicles & Trucks',
                url: 'http://stockcharts.com/h-sc/ui?s=$DJUSHR'
            }, {
                title: 'Business Support Services',
                url: 'http://stockcharts.com/h-sc/ui?s=$DJUSIV'
            }, {
                title: 'Heavy Construction',
                url: 'http://stockcharts.com/h-sc/ui?s=$DJUSHV'
            }, {
                title: 'Transportation Services',
                url: 'http://stockcharts.com/h-sc/ui?s=$DJUSTS'
            }, {
                title: 'Aerospace',
                url: 'http://stockcharts.com/h-sc/ui?s=$DJUSAS'
            }]
        },
        {
            title: 'Technology Sector',
            constituents: [{
                title: 'Internet',
                url: 'http://stockcharts.com/h-sc/ui?s=$DJUSNS'
            }, {
                title: 'Electronic Office Equipment',
                url: 'http://stockcharts.com/h-sc/ui?s=$DJUSOE'
            }, {
                title: 'Semiconductors',
                url: 'http://stockcharts.com/h-sc/ui?s=$DJUSSC'
            }, {
                title: 'Telecommunications Equipment',
                url: 'http://stockcharts.com/h-sc/ui?s=$DJUSCT'
            }, {
                title: 'Electronic Equipment',
                url: 'http://stockcharts.com/h-sc/ui?s=$DJUSAI'
            }, {
                title: 'Consumer Electronics',
                url: 'http://stockcharts.com/h-sc/ui?s=$DJUSCE'
            }, {
                title: 'Computer Services',
                url: 'http://stockcharts.com/h-sc/ui?s=$DJUSDV'
            }, {
                title: 'Software',
                url: 'http://stockcharts.com/h-sc/ui?s=$DJUSSW'
            }, {
                title: 'Mobile Telecommunications',
                url: 'http://stockcharts.com/h-sc/ui?s=$DJUSWC'
            }, {
                title: 'Computer Hardware',
                url: 'http://stockcharts.com/h-sc/ui?s=$DJUSCR'
            }, {
                title: 'Electrical Components & Equipment',
                url: 'http://stockcharts.com/h-sc/ui?s=$DJUSEC'
            }]
        },
        {
            title: 'Health Care Sector',
            constituents: [{
                title: 'Health Care Providers',
                url: 'http://stockcharts.com/h-sc/ui?s=$DJUSHP'
            }, {
                title: 'Medical Supplies',
                url: 'http://stockcharts.com/h-sc/ui?s=$DJUSMS'
            }, {
                title: 'Medical Equipment',
                url: 'http://stockcharts.com/h-sc/ui?s=$DJUSAM'
            }, {
                title: 'Biotechnology',
                url: 'http://stockcharts.com/h-sc/ui?s=$DJUSBT'
            }, {
                title: 'Pharmaceuticals',
                url: 'http://stockcharts.com/h-sc/ui?s=$DJUSPR'
            }]
        },
        {
            title: 'Financials Sector',
            constituents: [{
                title: 'Residential REITs',
                url: 'http://stockcharts.com/h-sc/ui?s=$DJUSRN'
            }, {
                title: 'Retail REITs',
                url: 'http://stockcharts.com/h-sc/ui?s=$DJUSRL'
            }, {
                title: 'Specialty REITs',
                url: 'http://stockcharts.com/h-sc/ui?s=$DJUSSR'
            }, {
                title: 'Hotel & Lodging REITs',
                url: 'http://stockcharts.com/h-sc/ui?s=$DJUSHL'
            }, {
                title: 'Industrial & Office REITs',
                url: 'http://stockcharts.com/h-sc/ui?s=$DJUSIO'
            }, {
                title: 'Specialty Finance',
                url: 'http://stockcharts.com/h-sc/ui?s=$DJUSSP'
            }, {
                title: 'Insurance Brokers',
                url: 'http://stockcharts.com/h-sc/ui?s=$DJUSIB'
            }, {
                title: 'Mortgage REITs',
                url: 'http://stockcharts.com/h-sc/ui?s=$DJUSMR'
            }, {
                title: 'Mortgage Finance',
                url: 'http://stockcharts.com/h-sc/ui?s=$DJUSMF'
            }, {
                title: 'Reinsurance',
                url: 'http://stockcharts.com/h-sc/ui?s=$DJUSIU'
            }, {
                title: 'Diversified REITs',
                url: 'http://stockcharts.com/h-sc/ui?s=$DJUSDT'
            }, {
                title: 'Property & Casualty Insurance',
                url: 'http://stockcharts.com/h-sc/ui?s=$DJUSIP'
            }, {
                title: 'Consumer Finance',
                url: 'http://stockcharts.com/h-sc/ui?s=$DJUSSF'
            }, {
                title: 'Real Estate Holding & Development',
                url: 'http://stockcharts.com/h-sc/ui?s=$DJUSEH'
            }, {
                title: 'Full Line Insurance',
                url: 'http://stockcharts.com/h-sc/ui?s=$DJUSIF'
            }, {
                title: 'Real Estate Services',
                url: 'http://stockcharts.com/h-sc/ui?s=$DJUSES'
            }, {
                title: 'Financial Administration',
                url: 'http://stockcharts.com/h-sc/ui?s=$DJUSFA'
            }, {
                title: 'Asset Managers',
                url: 'http://stockcharts.com/h-sc/ui?s=$DJUSAG'
            }, {
                title: 'Investment Services',
                url: 'http://stockcharts.com/h-sc/ui?s=$DJUSSB'
            }, {
                title: 'Life Insurance',
                url: 'http://stockcharts.com/h-sc/ui?s=$DJUSIL'
            }, {
                title: 'Banks',
                url: 'http://stockcharts.com/h-sc/ui?s=$DJUSBK'
            }]
        },
        {
            title: 'Materials Sector',
            constituents: [{
                title: 'Platinum & Precious Metals',
                url: 'http://stockcharts.com/h-sc/ui?s=$DJUSCT'
            }, {
                title: 'Containers & Packaging',
                url: 'http://stockcharts.com/h-sc/ui?s=$DJUSCP'
            }, {
                title: 'Specialty Chemicals',
                url: 'http://stockcharts.com/h-sc/ui?s=$DJUSCX'
            }, {
                title: 'Gold Mining',
                url: 'http://stockcharts.com/h-sc/ui?s=$DJUSPM'
            }, {
                title: 'Mining',
                url: 'http://stockcharts.com/h-sc/ui?s=$DJUSMG'
            }, {
                title: 'Commodity Chemicals',
                url: 'http://stockcharts.com/h-sc/ui?s=$DJUSCC'
            }, {
                title: 'Paper',
                url: 'http://stockcharts.com/h-sc/ui?s=$DJUSPP'
            }, {
                title: 'Steel',
                url: 'http://stockcharts.com/h-sc/ui?s=$DJUSST'
            }, {
                title: 'Aluminum',
                url: 'http://stockcharts.com/h-sc/ui?s=$DJUSAL'
            }, {
                title: 'Nonferrous Metals',
                url: 'http://stockcharts.com/h-sc/ui?s=$DJUSNF'
            }]
        },
        {
            title: 'Energy Sector',
            constituents: [{
                title: 'Integrated Oil & Gas',
                url: 'http://stockcharts.com/h-sc/ui?s=$DJUSOL'
            }, {
                title: 'Pipelines',
                url: 'http://stockcharts.com/h-sc/ui?s=$DJUSPL'
            }, {
                title: 'Coal',
                url: 'http://stockcharts.com/h-sc/ui?s=$DJUSCL'
            }, {
                title: 'Renewable Energy Equipment Total Stock Market',
                url: 'http://stockcharts.com/h-sc/ui?s=$DWCREE'
            }, {
                title: 'Oil Equipment & Services',
                url: 'http://stockcharts.com/h-sc/ui?s=$DJUSOI'
            }, {
                title: 'Exploration & Production',
                url: 'http://stockcharts.com/h-sc/ui?s=$DJUSOS'
              }]
        }
        ];

    return {
        breathMarkets: function () {
            return breath;
        },
        majorMarkets: function () {
            return major;
        },
        indexMarkets: function () {
            return indexes;
        },
        sectorMarkets: function () {
            return sectors;
        },
        getSector: function (index) {
            return sectors[index];
        }

    }
});
