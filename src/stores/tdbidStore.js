var mobx = require('mobx');

function tdbidStore() {

    var tdbidList = mobx.observable([]);

    var factory = {
        getAllTbids: getAllTbids,
        addTdbid: addTdbid,
        deleteTdbid: deleteTdbid,
        updateTdbid: updateTdbid,
        toggleTdbid: toggleTdbid,
        toggleAllTdbids: toggleAllTdbids,
        clearCompleted: clearCompleted,
    }

    return factory;

    ////////////////////////////////////////////

    function getAllTbids() {
        return tdbidList;
    };

    function addTdbid(tdbid) {
        var newTdbid = Object.assign({}, tdbid, {
            completed: false
        });

        tdbidList.push(newTdbid);
    }

    function deleteTdbid(index) {
        tdbidList.splice(index, 1);
    }

    function updateTdbid(index, tdbid) {
        tdbidList[index].description = tdbid.description;
    }

    function toggleTdbid(index) {
        tdbidList[index].completed = !tdbidList[index].completed;
    }

    function toggleAllTdbids() {
        tdbidList.forEach(function(item) {
            item.completed = !item.completed;
        });
    }

    function clearCompleted() {
        var filterArray = tdbidList.filter(function(item) {
            return !item.completed;
        });

        tdbidList.replace(filterArray);
    }
}

module.exports = tdbidStore;
