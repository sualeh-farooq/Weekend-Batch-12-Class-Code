// var name = 'Ali' // variable ; hoist => top of the file

// let and const not hoisted

// const country = 'Pakistan'

// let age = 24

// age = 25

// let age = 5
// const country = 'India'
// country = 'India' //

var watches = {
  ROLEX: {
    RolexExplorer: {
      name: "Rolex Explorer",
      price: "$1000",
      fullName: "Rolex Explorer – M124270-0001",
      category: "Men's Watch",
      caption:
        "The Oyster Perpetual Explorer in Oystersteel features a distinctive black dial with characteristic 3, 6, and 9 numerals with a Chromalight display. Its highly legible hour markers, extremely resistant Oystersteel and waterproofness have made it a tool watch for exploration.",
      Tags: "36mm, Black, CPO, explorer, M124270-0001, Oyster Perpetual, Rolex, sapphire",
      color: ["golden", "silver"],
      img: "https://iwc.com.pk/wp-content/uploads/2023/02/M124270-0001.jpg",
    },
    RolexGMTMasterII: {
      name: "Rolex GMT Master II",
      price: "$1500",
      fullName: "Rolex GMT Master II - 116710BLNR",
      caption:
        "The Oyster Perpetual Explorer in Oystersteel features a distinctive black dial with characteristic 3, 6, and 9 numerals with a Chromalight display. Its highly legible hour markers, extremely resistant Oystersteel and waterproofness have made it a tool watch for exploration.",

      category: "Men's Watch",
      color: ["black", "silver"],
      Tags: "116710BLNR, 40mm, Black, CPO, GMT, Oyster Perpetual, Rolex",
      img: "https://iwc.com.pk/wp-content/uploads/2022/12/M268622-0002-a.jpg",
    },
    RolexOysterLady: {
      name: "Rolex Oyster Lady ",
      price: "$900",
      fullName: "ROLEX OYSTER PERPETUAL 26 LADY DATEJUST",
      caption:
        "The Oyster Perpetual Explorer in Oystersteel features a distinctive black dial with characteristic 3, 6, and 9 numerals with a Chromalight display. Its highly legible hour markers, extremely resistant Oystersteel and waterproofness have made it a tool watch for exploration.",

      category: "Women's Watch",
      Tags: "26mm, Datejust, ladydatejust, Oyster Perpetual, Rolex",
      color: ["Golden", "silver"],
      img: "https://iwc.com.pk/wp-content/uploads/2021/11/rolex-79178.jpg",
    },
    RolexDateJust79: {
      name: "Rolex Datejust 79 ",
      price: "$1200",
      fullName:
        "Rolex Datejust 79174-62510B Watch - Silver Jubilee Diamond Dial",
      caption:
        "The Oyster Perpetual Explorer in Oystersteel features a distinctive black dial with characteristic 3, 6, and 9 numerals with a Chromalight display. Its highly legible hour markers, extremely resistant Oystersteel and waterproofness have made it a tool watch for exploration.",

      category: "Men's Watch",
      Tags: "79174, 79174-62510B, Rolex, Rolex Datejust",
      color: "silver",
      img: "https://iwc.com.pk/wp-content/uploads/2022/05/79174.jpg",
    },
    RolexGMT: {
      name: "Rolex® GMT",
      price: "$1000",
      fullName: "Rolex GMT-Master II 126711CHN",
      category: "Men's Watch",
      caption:
        "The Oyster Perpetual Explorer in Oystersteel features a distinctive black dial with characteristic 3, 6, and 9 numerals with a Chromalight display. Its highly legible hour markers, extremely resistant Oystersteel and waterproofness have made it a tool watch for exploration.",

      color: "silver",
      Tags: "126711CHNR, 40mm, Men, Oyster Perpetual, Rolex",
      img: "https://imagedelivery.net/lyg2LuGO05OELPt1DKJTnw/7810e4f8-a105-4b29-7c63-3411e0ce6c00/public",
    },
    RolexOyster: {
      name: "Rolex Oyster",
      price: "$600",
      caption:
        "The Oyster Perpetual Explorer in Oystersteel features a distinctive black dial with characteristic 3, 6, and 9 numerals with a Chromalight display. Its highly legible hour markers, extremely resistant Oystersteel and waterproofness have made it a tool watch for exploration.",

      fullName:
        "Rolex Oyster Perpetual Datejust 36 Champagne Index - 126231-62801",
      category: "Men's Watch",
      color: [, "golden", "silver"],
      Tags: "126231-62801, Automatic, certified pre-owned, Datejust 36, Datejust 36 Men, Rolex, watch",
      img: "https://imagedelivery.net/lyg2LuGO05OELPt1DKJTnw/f7555c4c-31b2-40fb-72ba-5ebc0a857a00/public",
    },
    RolexDateJust28: {
      name: "Rolex Datejust 28 ",
      price: "$1000",
      category: "Men's Watch",
      fullName: "Rolex Datejust 28 Diamond Bezel & Index - 69138-8570F",
      caption:
        "The Oyster Perpetual Explorer in Oystersteel features a distinctive black dial with characteristic 3, 6, and 9 numerals with a Chromalight display. Its highly legible hour markers, extremely resistant Oystersteel and waterproofness have made it a tool watch for exploration.",

      color: ["black", "golden", "silver"],
      Tags: "28mm, 69138-8570F, Automatic, certified pre-owned, Datejust, Rolex, watch",
      img: "https://iwc.com.pk/wp-content/uploads/2023/02/rolex-79173-62523D-18.jpg",
    },
    RolexDateJust36: {
      name: "Rolex DateJust 36",
      fullName: "Rolex Datejust 36 – 116200-72600",
      price: "$700",
      category: "Men's Watch",
      caption:
        "The Oyster Perpetual Explorer in Oystersteel features a distinctive black dial with characteristic 3, 6, and 9 numerals with a Chromalight display. Its highly legible hour markers, extremely resistant Oystersteel and waterproofness have made it a tool watch for exploration.",

      Tags: "116200/72600, Automatic, certified, Datejust 36, Datejust 36 Men, pre-owned, Rolex, watch",
      color: ["black", "golden", "silver"],
      img: "https://iwc.com.pk/wp-content/uploads/2022/05/Rolex-12.jpg",
    },
  },

  AUDEMARSPIGUET: {
    TamaraRalph: {
      name: "Tamara Ralph",
      price: "$2000",
      caption:
        "The Oyster Perpetual Explorer in Oystersteel features a distinctive black dial with characteristic 3, 6, and 9 numerals with a Chromalight display. Its highly legible hour markers, extremely resistant Oystersteel and waterproofness have made it a tool watch for exploration.",

      fullName:
        "AUDEMARS PIGUET : Royal Oak Concept Flying Tourbillon “Tamara Ralph” Limited Edition",
      category: "Women's Watch",
      color: "golden",
      Tags: "38.5mm Rose Gold-Manual Winding",
      img: "https://www.aviandco.com/media/catalog/product/cache/1201d8f17a9a86053a029ae3179a3cfc/a/u/audemars-piguet-royal-oak-15412ba-001-1.jpg",
    },
    AudemarsPiguet46: {
      name: "Audemars Piguet 46",
      price: "$600",
      caption:
        "The Oyster Perpetual Explorer in Oystersteel features a distinctive black dial with characteristic 3, 6, and 9 numerals with a Chromalight display. Its highly legible hour markers, extremely resistant Oystersteel and waterproofness have made it a tool watch for exploration.",

      fullName:
        " Audemars Piguet Perpetual Datejust 36 Champagne Index - 126231-62801",
      category: "Men's Watch",
      color: [, "golden", "silver"],
      Tags: "126231-62801, Automatic, certified pre-owned, Datejust 36, Datejust 36 Men, Rolex, watch",
      img: "https://www.aviandco.com/media/catalog/product/cache/82bcb559010dcd84bc6a2f8c2fdad6e6/2/6/26238or-001_1.jpg",
    },
    AudemarsPiguet28: {
      name: "Audemars Piguet 28",
      price: "$600",
      caption:
        "The Oyster Perpetual Explorer in Oystersteel features a distinctive black dial with characteristic 3, 6, and 9 numerals with a Chromalight display. Its highly legible hour markers, extremely resistant Oystersteel and waterproofness have made it a tool watch for exploration.",

      fullName: "Audemars Piguet  Datejust 36 Champagne Index - 126231-62801",
      category: "Men's Watch",
      color: [, "golden", "silver"],
      Tags: "126231-62801, Automatic, certified pre-owned, Datejust 36, Datejust 36 Men, Rolex, watch",
      img: "https://www.aviandco.com/media/catalog/product/cache/1201d8f17a9a86053a029ae3179a3cfc/1/5/15720st_green.jpg",
    },
    JumboThin: {
      name: "Jumbo Thin",
      price: "$600",
      caption:
        "The Oyster Perpetual Explorer in Oystersteel features a distinctive black dial with characteristic 3, 6, and 9 numerals with a Chromalight display. Its highly legible hour markers, extremely resistant Oystersteel and waterproofness have made it a tool watch for exploration.",

      fullName: "Audemars Piguet Datejust 36 Champagne Index - 126231-62801",
      category: "Men's Watch",
      color: [, "golden", "silver"],
      Tags: "126231-62801, Automatic, certified pre-owned, Datejust 36, Datejust 36 Men, Rolex, watch",
      img: "https://www.aviandco.com/media/catalog/product/cache/1201d8f17a9a86053a029ae3179a3cfc/a/p/ap_royal_oak_26331or_blue-1_1_1.jpg",
    },
    AudemarsOyster: {
      name: "Audemars  Oyster",
      price: "$600",
      caption:
        "The Oyster Perpetual Explorer in Oystersteel features a distinctive black dial with characteristic 3, 6, and 9 numerals with a Chromalight display. Its highly legible hour markers, extremely resistant Oystersteel and waterproofness have made it a tool watch for exploration.",

      fullName: "Audemars Piguet Champagne Index - 126231-62801",
      category: "Men's Watch",
      color: [, "golden", "silver"],
      Tags: "126231-62801, Automatic, certified pre-owned, Datejust 36, Datejust 36 Men, Rolex, watch",
      img: "https://www.aviandco.com/media/catalog/product/cache/1201d8f17a9a86053a029ae3179a3cfc/1/5/15466bc-002_1.jpg",
    },
    AudemarsPiguet21: {
      name: "Audemars Piguet 21",
      price: "$600",
      caption:
        "The Oyster Perpetual Explorer in Oystersteel features a distinctive black dial with characteristic 3, 6, and 9 numerals with a Chromalight display. Its highly legible hour markers, extremely resistant Oystersteel and waterproofness have made it a tool watch for exploration.",

      fullName: "Audemars Piguet  36 Champagne Index - 126231-62801",
      category: "Men's Watch",
      color: [, "golden", "silver"],
      Tags: "126231-62801, Automatic, certified pre-owned, Datejust 36, Datejust 36 Men, Rolex, watch",
      img: "https://www.aviandco.com/media/catalog/product/cache/1201d8f17a9a86053a029ae3179a3cfc/a/p/apro_15416ce_oo_1225ce_01__09_01__f_1.jpg",
    },

    AudemarsPiguet40: {
      name: "Audemars Piguet 40 ",
      price: "$600",
      caption:
        "The Oyster Perpetual Explorer in Oystersteel features a distinctive black dial with characteristic 3, 6, and 9 numerals with a Chromalight display. Its highly legible hour markers, extremely resistant Oystersteel and waterproofness have made it a tool watch for exploration.",

      fullName: "Audemars Piguet  36 Champagne Index - 126231-62801",
      category: "Men's Watch",
      color: [, "golden", "silver"],
      Tags: "126231-62801, Automatic, certified pre-owned, Datejust 36, Datejust 36 Men, Rolex, watch",
      img: "https://www.aviandco.com/media/catalog/product/cache/1201d8f17a9a86053a029ae3179a3cfc/3/8/38.jpg",
    },
    AudemarsPiguet22: {
      name: "Audemars Piguet 22 ",
      price: "$600",
      caption:
        "The Oyster Perpetual Explorer in Oystersteel features a distinctive black dial with characteristic 3, 6, and 9 numerals with a Chromalight display. Its highly legible hour markers, extremely resistant Oystersteel and waterproofness have made it a tool watch for exploration.",

      fullName: "Audemars Piguet 6 Champagne Index - 126231-62801",
      category: "Men's Watch",
      color: [, "golden", "silver"],
      Tags: "126231-62801, Automatic, certified pre-owned, Datejust 36, Datejust 36 Men, Rolex, watch",
      img: "https://www.aviandco.com/media/catalog/product/cache/1201d8f17a9a86053a029ae3179a3cfc/a/p/ap_royal_oak_26331st_black_dial-1_1.jpg",
    },
  },
  GShock: {
    GShockCasio08: {
      name: "G-Shock Casio 08",
      price: "$600",
      caption:
        "The Oyster Perpetual Explorer in Oystersteel features a distinctive black dial with characteristic 3, 6, and 9 numerals with a Chromalight display. Its highly legible hour markers, extremely resistant Oystersteel and waterproofness have made it a tool watch for exploration.",

      fullName:
        "Casio Analog-Digital Black Dial Women’s Watch-BA-110RG-1ADR (BX157)",
      category: "Women's Watch",
      color: [, "golden", "silver"],
      Tags: "126231-62801, Automatic, certified pre-owned, Datejust 36, Datejust 36 Men, Rolex, watch",
      img: "https://iwc.com.pk/wp-content/uploads/2020/12/BA-110RG-1ADR-1.jpg",
    },
    GshockCasio09: {
      name: "G-shock Casio 09 ",
      price: "$600",
      caption:
        "The Oyster Perpetual Explorer in Oystersteel features a distinctive black dial with characteristic 3, 6, and 9 numerals with a Chromalight display. Its highly legible hour markers, extremely resistant Oystersteel and waterproofness have made it a tool watch for exploration.",

      fullName: "G-shock Casio 09 Champagne Index - 126231-62801",
      category: "Men's Watch",
      color: [, "golden", "silver"],
      Tags: "126231-62801, Automatic, certified pre-owned, Datejust 36, Datejust 36 Men, Rolex, watch",
      img: "https://iwc.com.pk/wp-content/uploads/2022/01/GM-S2100-3ADR-1.jpg",
    },
    GshockCasio10: {
      name: "G-shock Casio 10 ",
      price: "$600",
      fullName: "G-shock Casio 10 Champagne Index - 126231-62801",
      category: "Men's Watch",
      color: [, "golden", "silver"],
      Tags: "126231-62801, Automatic, certified pre-owned, Datejust 36, Datejust 36 Men, Rolex, watch",
      img: "https://iwc.com.pk/wp-content/uploads/2023/03/GMA-S2100-1ADR.jpg",
    },
    GshockCasio11: {
      name: "G-shock Casio 11 ",
      price: "$600",
      caption:
        "The Oyster Perpetual Explorer in Oystersteel features a distinctive black dial with characteristic 3, 6, and 9 numerals with a Chromalight display. Its highly legible hour markers, extremely resistant Oystersteel and waterproofness have made it a tool watch for exploration.",

      fullName: "G-shock Casio 10 Champagne Index - 126231-62801",
      category: "Men's Watch",
      color: [, "golden", "silver"],
      Tags: "126231-62801, Automatic, certified pre-owned, Datejust 36, Datejust 36 Men, Rolex, watch",
      img: "https://iwc.com.pk/wp-content/uploads/2023/03/GA-2000S-1ADR.jpg",
    },
    GshockCasio12: {
      name: "G-shock Casio 12 ",
      price: "$600",
      caption:
        "The Oyster Perpetual Explorer in Oystersteel features a distinctive black dial with characteristic 3, 6, and 9 numerals with a Chromalight display. Its highly legible hour markers, extremely resistant Oystersteel and waterproofness have made it a tool watch for exploration.",

      fullName: "G-shock Casio 10 Champagne Index - 126231-62801",
      category: "Men's Watch",
      color: [, "golden", "silver"],
      Tags: "126231-62801, Automatic, certified pre-owned, Datejust 36, Datejust 36 Men, Rolex, watch",
      img: "https://iwc.com.pk/wp-content/uploads/2023/03/GA-2100-1A3DR.jpg",
    },
    GshockCasio13: {
      name: "G-shock Casio 13 ",
      price: "$600",
      caption:
        "The Oyster Perpetual Explorer in Oystersteel features a distinctive black dial with characteristic 3, 6, and 9 numerals with a Chromalight display. Its highly legible hour markers, extremely resistant Oystersteel and waterproofness have made it a tool watch for exploration.",

      fullName: "G-shock Casio 10 Champagne Index - 126231-62801",
      category: "Men's Watch",
      color: [, "golden", "silver"],
      Tags: "126231-62801, Automatic, certified pre-owned, Datejust 36, Datejust 36 Men, Rolex, watch",
      img: "https://iwc.com.pk/wp-content/uploads/2023/03/GA-2100FR-5ADR.jpg",
    },
    GshockCasio14: {
      name: "G-shock Casio 14 ",
      price: "$600",
      caption:
        "The Oyster Perpetual Explorer in Oystersteel features a distinctive black dial with characteristic 3, 6, and 9 numerals with a Chromalight display. Its highly legible hour markers, extremely resistant Oystersteel and waterproofness have made it a tool watch for exploration.",

      fullName: "G-shock Casio 10 Champagne Index - 126231-62801",
      category: "Men's Watch",
      color: [, "golden", "silver"],
      Tags: "126231-62801, Automatic, certified pre-owned, Datejust 36, Datejust 36 Men, Rolex, watch",
      img: "https://iwc.com.pk/wp-content/uploads/2023/03/GA-2200SL-8ADR.jpg",
    },
    GshockCasio15: {
      name: "G-shock Casio 10 ",
      price: "$600",
      caption:
        "The Oyster Perpetual Explorer in Oystersteel features a distinctive black dial with characteristic 3, 6, and 9 numerals with a Chromalight display. Its highly legible hour markers, extremely resistant Oystersteel and waterproofness have made it a tool watch for exploration.",

      fullName: "G-shock Casio 10 Champagne Index - 126231-62801",
      category: "Men's Watch",
      color: [, "golden", "silver"],
      Tags: "126231-62801, Automatic, certified pre-owned, Datejust 36, Datejust 36 Men, Rolex, watch",
      img: "https://iwc.com.pk/wp-content/uploads/2023/03/GA-700BP-1ADR.jpg",
    },
  },
};

// Object Destructure , Reference will always be KEY
// let {...remaining} = watches

// console.log(remaining)

// let rolexWatches = watches.ROLEX

// console.log(ROLEX)

// console.log(remaining)

// let {GShock} = remaining

// console.log(GShock)

// console.log(SUALEH)

// let {GShock} = SUALEH

// console.log(GShock)

// let array = ['Apple' , 'Mango' , 'Orange' , 'Banana']
// let [first , ali ,  ] = array
// console.log(ali)

// try {
// let apiData = fetch(url)

// apiData.then((res) => {
//     var data = res.json()
// }).then((data)=>{
//     console.log(data)
// })

// } catch (error) {
//     console.log(error)
// }

// async function getData() {
// const url = 'https://dummyjson.com/test'

// const response = await fetch(url)

// let responseResult = response.json()

// if(response.ok) {
//     console.log(response)
// }

// }

// setTimeout(() => {
//     getData()
// }, 2000);

var latitude = 24.9215084;
var longitude = 67.0260878;
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=244006e372fb520e56e50b3032f7bcf1
`;
let cityName = 'karachi'

const citySearchUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=244006e372fb520e56e50b3032f7bcf1`

async function getData() {
  try {
    await fetch(url)
      .then((data) => data.json())
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  } catch (error) {}
}


setTimeout(() => {
        getData()
}, 2000);
// function showData(position) {
//     console.log(position)
// }

// function geoLocation() {
//     navigator.geolocation.getCurrentPosition(showData)
// }

// geoLocation()
