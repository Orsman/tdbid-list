var tdbidContainer = require('./containers/tdbid');
var tdbidForm = require('./tdbid-form');
var tdbidForm = require('./tdbid-list');
var tdbidForm = require('./tdbid-item');
var tdbidFooter = require('./tdbid-footer');

angular.module('tdbidApp')
    .component('tdbid', tdbidContainer)
    .component('tdbidForm', tdbidForm)
    .component('tdbidList', tdbidList)
    .component('tdbidItem', tdbidItem)
    .component('tdbidFooter', tdbidFooter)
;
