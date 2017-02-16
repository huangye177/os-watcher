'use strict';
var _ = require('lodash');
var monitor = require("./monitor");

console.log('Launching...');

setInterval(() => {
    monitor.loadavg();
    monitor.freemem();
    monitor.diskspace();

}, 1000 * 3);