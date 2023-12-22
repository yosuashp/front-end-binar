import { IFileItem } from '../cars/service/types';

/**
 * @typedef {Object} ICars
//  * @property {string} [id] - The car ID.
 * @property {string} [plate] - The plate number of the car.
 * @property {string} [manufacture] - The manufacture of the car.
 * @property {string} [image] - The URL of the car image.
 * @property {number} [rentPerDay] - The rental price per day.
 * @property {number} [capacity] - The capacity of the car.
 * @property {string} [description] - The description of the car.
 * @property {string} [availableAt] - The date when the car is available.
 * @property {string} [transmission] - The transmission type of the car.
 * @property {boolean} [available] - Indicates whether the car is available.
 * @property {string} [type] - The type of the car.
 * @property {number} [year] - The manufacturing year of the car.
 * @property {string[]} [options] - Array of options available in the car.
 * @property {string[]} [specs] - Array of specifications of the car.
 * @property {Object} [createdBy] - Information about the user who created the car.
 * @property {number} [createdBy.id] - The ID of the user.
 * @property {string} [createdBy.name] - The name of the user.
 * @property {string} [createdAt] - The date and time when the car was created.
 * @property {Object} [updatedBy] - Information about the user who last updated the car.
 * @property {number} [updatedBy.id] - The ID of the user.
 * @property {string} [updatedBy.name] - The name of the user.
 * @property {string} [updatedAt] - The date and time when the car was last updated.
 */

// Example usage:
const exampleCar = {
  //id: 'b978b701-a46d-4461-a2dc-56c8c9e980cd',
  plate: 'DBH-3491',
  manufacture: 'Ford',
  image: 'https://res.cloudinary.com/dshomxqjc/image/upload/v1698933251/zpqppydzku2ibgccbsbr.jpg',
  rentPerDay: 200000,
  capacity: 2,
  description: 'Brake assist. Leather-wrapped shift knob. Glove box lamp. Air conditioning w/in-cabin microfilter.',
  availableAt: '2022-03-23T15:49:05.563Z',
  transmission: 'Automatic',
  available: true,
  type: 'Sedan',
  year: 2022,
  options: ['Cruise Control', 'Tinted Glass', 'AM/FM Stereo'],
  specs: [
    'Brake assist',
    'Leather-wrapped shift knob',
    'Glove box lamp',
    'Air conditioning w/in-cabin microfilter',
    'Body color folding remote-controlled pwr mirrors',
    'Dual-stage front airbags w/occupant classification system'
  ],
  createdBy: {
    id: 1,
    name: 'Sahat Parulian'
  },
  createdAt: '2023-12-09T02:56:38.896Z',
  updatedBy: {
    id: 1,
    name: 'Sahat Parulian'
  },
  updatedAt: '2023-12-09T02:56:38.896Z'
};
