/* eslint-disable @typescript-eslint/no-var-requires */
const { faker } = require('@faker-js/faker')
const getRandomArrayValue = (arr) => arr[Math.floor(Math.random() * arr.length)]
const getRandomImages = (arr, count) => {
  const shuffled = [...arr].sort(() => 0.5 - Math.random())
  return shuffled.slice(0, count)
}
const lights = ['light-loving', 'partial-shade', 'shade-tolerant']
const waterings = ['mesophilous', 'occasional', 'heavy', 'frequent']
const soils = ['light', 'loamy', 'heavy', 'sandy', 'poor', 'fertile']
const propagations = ['seed', 'cuttings', 'division', 'layering', 'tuber']
const typePlants = [
  'houseplants', // комнатные растения (фикус, орхидея, суккуленты)
  'garden-plants', // садовые декоративные (кустарники, изгороди, ландшафтные растения)
  'vegetable-garden-plants', // огородные овощи (помидоры, огурцы, капуста)
  'medicinal-plants', // лекарственные травы и культуры (ромашка, зверобой, эхинацея)
  'aquarium-and-marsh-plants', // аквариумные и болотные (роголистник, лотос, камыш)
  'decorative-conifers', // декоративные хвойные (можжевельник, туя, ель голубая)
  'fruit-and-berry-plants', // плодово-ягодные культуры (яблоня, виноград, малина, клубника)
  'flowering-plants', // декоративные цветущие (розы, тюльпаны, георгины)
  'wild-plants', // дикорастущие культуры (лесные ягоды, грибы, дикие травы)
  'agricultural-crops', // сельхозкультуры (зерновые, бобовые, масличные)
  'technical-crops', // технические культуры (лен, хлопок, конопля)
  'tropical-plants', // тропические и экзотические (банан, кофе, какао, кокос)
]
const images = [
  '/img/plants/aglaon.jpg',
  '/img/plants/alokaz.jpg',
  '/img/plants/dracen.jpg',
  '/img/plants/koleus.jpg',
  '/img/plants/begon.jpeg',
  '/img/plants/antur.jpg',
  '/img/plants/zamio.png',
]

const pests = ['aphids', 'scale-insect', 'thrips', 'caterpillars', 'whitefly']
const diseases = [
  'powdery-mildew',
  'late-blight',
  'soft fabric',
  'mosaic-virus',
]
const phytes = [
  'hydrophytes',
  'hygrophytes',
  'mesophytes',
  'xerophytes',
  'succulents',
  'halophytes',
]
const morfos = [
  'trees',
  'shrubs',
  'subshrubs',
  'herbs',
  'lianas',
  'flowering plants',
  'conifers',
  'ferns',
  'bryophytes',
  'aquatic plants',
]
const lives = ['annuals', 'biennials', 'perennials']
const frosts = [
  'frost-sensitive',
  'slightly-frost-tolerant',
  'moderately-frost-hardy',
  'hardy-plants',
  'extremely-hardy-plants',
]
const zones = [
  'zone-1',
  'zone-2',
  'zone-3',
  'zone-4',
  'zone-5',
  'zone-6',
  'zone-7',
  'zone-8',
  'zone-9',
  'zone-10',
  'zone-11',
  'zone-12',
  'zone-13',
]

module.exports = {
  async up(db) {
    return db.collection('plants').insertMany(
      [...Array(80)].map(() => {
        const type = typePlants[Math.floor(Math.random() * typePlants.length)]
        const characteristics = [
          {
            type: 'houseplants',
            light: getRandomArrayValue(lights),
            watering: getRandomArrayValue(waterings),
            disease: getRandomArrayValue(diseases),
            phyte: getRandomArrayValue(phytes),
            succulent: faker.datatype.boolean(),
            soil: getRandomArrayValue(soils),
            morfo: getRandomArrayValue(morfos),
            live: getRandomArrayValue(lives),
            frost: getRandomArrayValue(frosts),
            zone: getRandomArrayValue(zones),
            propagation: getRandomArrayValue(propagations),
            pest: pests[Math.floor(Math.random() * pests.length)],
          },
          {
            type: 'garden-plants',
            light: getRandomArrayValue(lights),
            watering: getRandomArrayValue(waterings),
            disease: getRandomArrayValue(diseases),
            phyte: getRandomArrayValue(phytes),
            succulent: faker.datatype.boolean(),
            soil: getRandomArrayValue(soils),
            morfo: getRandomArrayValue(morfos),
            live: getRandomArrayValue(lives),
            frost: getRandomArrayValue(frosts),
            zone: getRandomArrayValue(zones),
            propagation: getRandomArrayValue(propagations),
            pest: pests[Math.floor(Math.random() * pests.length)],
          },
          {
            type: 'vegetable-garden-plants',
            light: getRandomArrayValue(lights),
            watering: getRandomArrayValue(waterings),
            disease: getRandomArrayValue(diseases),
            phyte: getRandomArrayValue(phytes),
            succulent: faker.datatype.boolean(),
            soil: getRandomArrayValue(soils),
            morfo: getRandomArrayValue(morfos),
            live: getRandomArrayValue(lives),
            frost: getRandomArrayValue(frosts),
            zone: getRandomArrayValue(zones),
            propagation: getRandomArrayValue(propagations),
            pest: pests[Math.floor(Math.random() * pests.length)],
          },
          {
            type: 'medicinal-plants',
            light: getRandomArrayValue(lights),
            watering: getRandomArrayValue(waterings),
            disease: getRandomArrayValue(diseases),
            phyte: getRandomArrayValue(phytes),
            succulent: faker.datatype.boolean(),
            soil: getRandomArrayValue(soils),
            morfo: getRandomArrayValue(morfos),
            live: getRandomArrayValue(lives),
            frost: getRandomArrayValue(frosts),
            zone: getRandomArrayValue(zones),
            propagation: getRandomArrayValue(propagations),
            pest: pests[Math.floor(Math.random() * pests.length)],
          },
          {
            type: 'aquarium-and-marsh-plants',
            light: getRandomArrayValue(lights),
            watering: getRandomArrayValue(waterings),
            disease: getRandomArrayValue(diseases),
            phyte: getRandomArrayValue(phytes),
            succulent: faker.datatype.boolean(),
            soil: getRandomArrayValue(soils),
            morfo: getRandomArrayValue(morfos),
            live: getRandomArrayValue(lives),
            frost: getRandomArrayValue(frosts),
            zone: getRandomArrayValue(zones),
            propagation: getRandomArrayValue(propagations),
            pest: pests[Math.floor(Math.random() * pests.length)],
          },
          {
            type: 'decorative-conifers',
            light: getRandomArrayValue(lights),
            watering: getRandomArrayValue(waterings),
            disease: getRandomArrayValue(diseases),
            phyte: getRandomArrayValue(phytes),
            succulent: faker.datatype.boolean(),
            soil: getRandomArrayValue(soils),
            morfo: getRandomArrayValue(morfos),
            live: getRandomArrayValue(lives),
            frost: getRandomArrayValue(frosts),
            zone: getRandomArrayValue(zones),
            propagation: getRandomArrayValue(propagations),
            pest: pests[Math.floor(Math.random() * pests.length)],
          },
          {
            type: 'fruit-and-berry-plants',
            light: getRandomArrayValue(lights),
            watering: getRandomArrayValue(waterings),
            disease: getRandomArrayValue(diseases),
            phyte: getRandomArrayValue(phytes),
            succulent: faker.datatype.boolean(),
            soil: getRandomArrayValue(soils),
            morfo: getRandomArrayValue(morfos),
            live: getRandomArrayValue(lives),
            frost: getRandomArrayValue(frosts),
            zone: getRandomArrayValue(zones),
            propagation: getRandomArrayValue(propagations),
            pest: pests[Math.floor(Math.random() * pests.length)],
          },
          {
            type: 'flowering-plants',
            light: getRandomArrayValue(lights),
            watering: getRandomArrayValue(waterings),
            disease: getRandomArrayValue(diseases),
            phyte: getRandomArrayValue(phytes),
            succulent: faker.datatype.boolean(),
            soil: getRandomArrayValue(soils),
            morfo: getRandomArrayValue(morfos),
            live: getRandomArrayValue(lives),
            frost: getRandomArrayValue(frosts),
            zone: getRandomArrayValue(zones),
            propagation: getRandomArrayValue(propagations),
            pest: pests[Math.floor(Math.random() * pests.length)],
          },
          {
            type: 'wild-plants',
            light: getRandomArrayValue(lights),
            watering: getRandomArrayValue(waterings),
            disease: getRandomArrayValue(diseases),
            phyte: getRandomArrayValue(phytes),
            succulent: faker.datatype.boolean(),
            soil: getRandomArrayValue(soils),
            morfo: getRandomArrayValue(morfos),
            live: getRandomArrayValue(lives),
            frost: getRandomArrayValue(frosts),
            zone: getRandomArrayValue(zones),
            propagation: getRandomArrayValue(propagations),
            pest: pests[Math.floor(Math.random() * pests.length)],
          },
          {
            type: 'agricultural-crops',
            light: getRandomArrayValue(lights),
            watering: getRandomArrayValue(waterings),
            disease: getRandomArrayValue(diseases),
            phyte: getRandomArrayValue(phytes),
            succulent: faker.datatype.boolean(),
            soil: getRandomArrayValue(soils),
            morfo: getRandomArrayValue(morfos),
            live: getRandomArrayValue(lives),
            frost: getRandomArrayValue(frosts),
            zone: getRandomArrayValue(zones),
            propagation: getRandomArrayValue(propagations),
            pest: pests[Math.floor(Math.random() * pests.length)],
          },
          {
            type: 'technical-crops',
            light: getRandomArrayValue(lights),
            watering: getRandomArrayValue(waterings),
            disease: getRandomArrayValue(diseases),
            phyte: getRandomArrayValue(phytes),
            succulent: faker.datatype.boolean(),
            soil: getRandomArrayValue(soils),
            morfo: getRandomArrayValue(morfos),
            live: getRandomArrayValue(lives),
            frost: getRandomArrayValue(frosts),
            zone: getRandomArrayValue(zones),
            propagation: getRandomArrayValue(propagations),
            pest: pests[Math.floor(Math.random() * pests.length)],
          },
          {
            type: 'tropical-plants',
            light: getRandomArrayValue(lights),
            watering: getRandomArrayValue(waterings),
            disease: getRandomArrayValue(diseases),
            phyte: getRandomArrayValue(phytes),
            succulent: faker.datatype.boolean(),
            soil: getRandomArrayValue(soils),
            morfo: getRandomArrayValue(morfos),
            live: getRandomArrayValue(lives),
            frost: getRandomArrayValue(frosts),
            zone: getRandomArrayValue(zones),
            propagation: getRandomArrayValue(propagations),
            pest: pests[Math.floor(Math.random() * pests.length)],
          },
        ]
        const currentCharacteristics = characteristics.find(
          (item) => item.type === type
        )

        return {
          ekopedia: 'plants',
          type,
          name: faker.lorem.sentence(2),
          nameGenus: faker.lorem.sentence(1),
          nameFamilia: faker.lorem.sentence(1),
          description: faker.lorem.sentences(10),
          characteristics: currentCharacteristics,
          images: getRandomImages(images, 3),
          ekopediaCode: faker.string.numeric(4),
          isBestseller: faker.datatype.boolean(),
          isNew: faker.datatype.boolean(),
          isSucculent: faker.datatype.boolean(),
          popularity: +faker.string.numeric(3),
          likes: faker.number.int({ min: 0, max: 5000 }),
          colors: {
            color1: faker.color.rgb({ format: 'hex' }),
            color2: faker.color.rgb({ format: 'hex' }),
            color3: faker.color.rgb({ format: 'hex' }),
          },
        }
      })
    )
  },

  async down(db) {
    return db.collection('plants').updateMany([])
  },
}
