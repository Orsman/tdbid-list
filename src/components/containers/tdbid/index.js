var mobx = require('mobx');

var tdbidContainer = {
    controller: tdbidContainerController,
    template: require('./tdbid.html'),
    bindings: {
        filter: '<'
    }
};

function tdbidContainerController(tdbidStore, $state) {
    var self = this;

    var dispose = mobx.autorun(function() {
        var tdbidList = tdbidStore.getAllTbids();
        self.tdbidList = getListBasedOnFilter(tdbidList, self.filter);
        self.incompletedItems = getListBasedOnFilter(tdbidList, 'active').length;

        console.log('%cNEW STATE:', 'font-weight: bold');
        console.log(JSON.stringify(mobx.toJS(tdbidList), null, 2));
    });

    self.$onDestroy = function $onDestroy() {
        dispose();
    };

    self.addTdbid = function addTdbid(event) {
        tdbidStore.addTdbid(event.tdbid);
    }

    self.deleteTdbid = function deleteTdbid(event) {
        tdbidStore.deleteTdbid(event.index);
    };

    self.updateTdbid = function updateTdbid(event) {
        tdbidStore.updateTdbid(event.index, event.tdbid);
    };

    self.toggleTdbid = function toggleTdbid(event) {
        tdbidStore.toggleTdbid(event.index);
    };

    self.toggleAllTdbids = function toggleAllTdbids() {
        tdbidStore.toggleAllTdbids();
    };

    self.clearCompleted = function clearCompleted() {
        tdbidStore.clearCompleted();
    };

    function getListBasedOnFilter(list, filter) {
        if (!filter) return list;

        var filterMap = {
            all: function (item) { return true; },
            active: function (item) { return !item.completed },
            completed: function (item) { return item.completed }
        };

        return list.filter(filterMap[filter]);
    }
}

module.exports = tdbidContainer;
