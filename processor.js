'use strict';
var _ = require('lodash');
var moment = require('moment');

const EMPTY_STRING = 'EMPTY';

class Processor {
    constructor() {

    }

    process(...args) {
        if (_.isNil(args)) {
            console.log(EMPTY);
        }
        else {
            console.log(moment().format(), args.toString());
        }
    }
}

module.exports = new Processor();