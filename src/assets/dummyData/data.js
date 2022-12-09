import Chance from 'chance';
const chance = new Chance();

export const data = [
  {
    id: chance.bb_pin(),
    name: 'Billy',
    species: 'dog',
    photos: ['https://i.imgur.com/NUcRsOm.jpg'],
    breed: 'Pitbull',
    size: 'small',
    color: 'brown',
    sex: 'female',
    cost: 800,
    spayedNeutered: true
  },
  {
    id: chance.bb_pin(),
    name: 'Max',
    species: 'dog',
    photos: ['https://i.imgur.com/1h4WiDm.jpg'],
    breed: 'lab',
    size: 'medium',
    color: 'black',
    sex: 'Male',
    cost: 400,
    spayedNeutered: false
  },
  {
    id: chance.bb_pin(),
    name: 'Mittens',
    species: 'dog',
    photos: ['https://i.imgur.com/RNcsPLe.jpg'],
    breed: 'Pitbull',
    size: 'small',
    color: 'brown',
    sex: 'female',
    cost: 800,
    spayedNeutered: true
  },
  {
    id: chance.bb_pin(),
    name: 'Frosty',
    species: 'cat',
    photos: ['https://i.imgur.com/XFb8p3S.jpg'],
    breed: 'Cat',
    size: 'small',
    color: 'White',
    sex: 'female',
    cost: 8000,
    spayedNeutered: true
  }
]

export const speciesTabs = [
  {
    id: 9,
    title: 'All',
    value: 'all',
  },
  {
    id: 0,
    title: 'Dog',
    value: 'dog',
  },
  {
    id: 1,
    title: 'Cat',
    value: 'cat',
  }

]
module.export = {
  data,
  speciesTabs
}