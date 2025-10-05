/* eslint-disable indent */
/* eslint-disable @typescript-eslint/no-var-requires */
const { faker } = require('@faker-js/faker')
const getRandomArrayValue = (arr) => arr[Math.floor(Math.random() * arr.length)]

const getRandomImages = (arr, count) => {
  const shuffled = [...arr].sort(() => 0.5 - Math.random())
  return shuffled.slice(0, count)
}

const targets = ['base', 'top', 'root', 'foliar']
const actions = ['fast-acting', 'slow-release']
const forms = ['solid', 'liquid', 'gaseous']
const typeFertilizers = ['organic', 'mineral', 'organomineral']

const nutritions = [
  'nitrogen',
  'phosphorus',
  'potassium',
  'complex',
  'micronutrient',
]
const manufacturingСountries = ['russia', 'usa', 'india', 'belaus', 'germany']
const manufacturers = ['plantsCere', 'HGH', 'GreenEnergy']
const plantFertilizers = [
  'universal',
  'flowering',
  'foliage',
  'acid-loving',
  'fruit-trees',
  'vegetable',
  'lawn',
  'succulent',
  'palm',
  'flowering-indoor',
  'orchid',
]

const images = [
  '/img/fertilizers/1.jpg',
  '/img/fertilizers/2.jpg',
  '/img/fertilizers/3.jpg',
  '/img/fertilizers/4.jpg',
  '/img/fertilizers/5.jpg',
  '/img/fertilizers/6.jpg',
]

module.exports = {
  async up(db) {
    return db.collection('fertilizers').insertMany(
      [...Array(50)].map(() => {
        const type =
          typeFertilizers[Math.floor(Math.random() * typeFertilizers.length)]

        const characteristics = [
          {
            type: 'organic',
            nutrition: getRandomArrayValue(nutritions),
            country: getRandomArrayValue(manufacturingСountries),
            manufacturer: getRandomArrayValue(manufacturers),
            target: getRandomArrayValue(targets),
            action: getRandomArrayValue(actions),
            form: getRandomArrayValue(forms),
            plantFertilizer: getRandomArrayValue(plantFertilizers),
          },
          {
            type: 'mineral',
            nutrition: getRandomArrayValue(nutritions),
            country: getRandomArrayValue(manufacturingСountries),
            manufacturer: getRandomArrayValue(manufacturers),
            target: getRandomArrayValue(targets),
            action: getRandomArrayValue(actions),
            form: getRandomArrayValue(forms),
            plantFertilizer: getRandomArrayValue(plantFertilizers),
          },
          {
            type: 'organomineral',
            nutrition: getRandomArrayValue(nutritions),
            country: getRandomArrayValue(manufacturingСountries),
            manufacturer: getRandomArrayValue(manufacturers),
            target: getRandomArrayValue(targets),
            action: getRandomArrayValue(actions),
            form: getRandomArrayValue(forms),
            plantFertilizer: getRandomArrayValue(plantFertilizers),
          },
        ]
        return {
          ekopedia: 'fertilizers',
          type,
          name: faker.lorem.sentence(2),
          description: faker.lorem.sentences(10),
          characteristics: characteristics.find((item) => item.type === type),
          images: getRandomImages(images, 3),
          ekopediaCode: faker.string.numeric(4),
          isBestseller: faker.datatype.boolean(),
          isNew: faker.datatype.boolean(),
          popularity: +faker.string.numeric(3),
          rating: parseFloat(
            faker.number.float({ min: 0, max: 5, precision: 0.1 }).toFixed(1)
          ),
          ratingCount: faker.number.int({ min: 0, max: 5000 }),
          composition:
            type === 'complex'
              ? {
                  n: faker.string.numeric(2) + '%',
                  p: faker.string.numeric(2) + '%',
                  k: faker.string.numeric(2) + '%',
                  npk:
                    faker.string.numeric(2) +
                    ':' +
                    faker.string.numeric(2) +
                    ':' +
                    faker.string.numeric(2),
                }
              : {},
        }
      })
    )
  },

  async down(db) {
    return db.collection('fertilizers').updateMany([])
  },
}
