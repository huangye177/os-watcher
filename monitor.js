'use strict';
var _ = require('lodash');
var os = require("os");
var diskspace = require('diskspace');
var processor = require("./processor");

const BYTES_TO_MB = 1024 * 1024;

class Monitor {
    constructor() {

    }

    loadavg() {
        processor.process("Avg Load in last 1, 5, and 15 minutes: ", os.loadavg());
    }

    freemem() {
        processor.process("Amount of free system memory: ", os.freemem() / BYTES_TO_MB, ' MB');
    }

    diskspace() {
        diskspace.check('/', function (err, total, free, status)
        {
            processor.process('Diskspace [Total/Free/Status', total / BYTES_TO_MB, free / BYTES_TO_MB, status);
        });
    }
}

module.exports = new Monitor();