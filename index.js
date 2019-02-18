const rp = require('request-promise');

const otcsv = require('objects-to-csv');

const cheerio = require('cheerio');

const baseURL = 'https://yellowpages.com';

const searchURL = 'search?search_terms=printing&geo_location_terms=New_York%2C+NY';

