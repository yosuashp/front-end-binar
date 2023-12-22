/**
 * Represents parameters for API requests.
 * @typedef {Object} IParams
 * @property {number} [page] - The page number.
 * @property {number} [size] - The number of items per page.
 * @property {string} [search] - The search query.
 */

/**
 * Represents the structure of an API response.
 * @template T
 * @typedef {Object} IApiResponse
 * @property {T} data - The response data.
 * @property {string} message - A message associated with the response.
 * @property {Object} [meta] - Additional metadata about the response.
 * @property {number} meta.page - The current page number.
 * @property {number} meta.size - The number of items per page.
 * @property {number} meta.totalData - The total number of data items.
 * @property {number} meta.totalPages - The total number of pages.
 */

/**
 * Represents metadata information.
 * @typedef {Object} IMeta
 * @property {number} page - The current page number.
 * @property {number} size - The number of items per page.
 * @property {number} totalData - The total number of data items.
 * @property {number} totalPages - The total number of pages.
 */

/**
 * Represents information about a file.
 * @typedef {Object} IFileItem
 * @property {string} url - The URL of the file.
 * @property {string} secure_url - The secure URL of the file.
 * @property {number} [width] - The width of the file (optional).
 * @property {number} [height] - The height of the file (optional).
 * @property {string} [resourceType] - The resource type of the file (optional).
 */

// Example usage:
const paramsExample = {
    page: 1,
    size: 10,
    search: 'example',
  };
  
  const apiResponseExample = {
    data: { /* actual data here */ },
    message: 'Success',
    meta: {
      page: 1,
      size: 10,
      totalData: 100,
      totalPages: 10,
    },
  };
  
  const metaExample = {
    page: 1,
    size: 10,
    totalData: 100,
    totalPages: 10,
  };
  
  const fileItemExample = {
    url: 'http://example.com/file',
    secure_url: 'https://example.com/file',
    width: 800,
    height: 600,
    resourceType: 'image',
  };
  