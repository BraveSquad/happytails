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
    age: 'puppy',
    color: 'brown',
    sex: 'female',
    location: 'California',
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
    age: 'puppy',
    color: 'black',
    sex: 'Male',
    location: 'Florida',
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
    age: 'adult',
    color: 'brown',
    sex: 'female',
    location: 'California',
    cost: 800,
    spayedNeutered: true
  },
  {
    id: chance.bb_pin(),
    name: 'Frosty',
    species: 'cat',
    photos: ['https://i.imgur.com/XFb8p3S.jpg'],
    breed: 'Cat',
    age: 'kitten',
    size: 'small',
    color: 'White',
    sex: 'female',
    location: 'Seattle',
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