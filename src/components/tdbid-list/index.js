var tdbidList = {
    controller: tdbidListController,
    template: require('./tdbid-list.html'),
    bindings: {
        list: '<',
        onDelete: '&',
        onUpdate: '&',
        onToggle: '&'
    }
};

function tdbidListController() {
    var self = this;

    self.deleteTdbid = function deleteTdbid(event) {
        // Call parent
        self.onDelete({
            $event: {
                index: event.index
            }
        });
    };

    self.updateTdbid = function updateTdbid(event) {
        // Call parent
        self.onUpdate({
            $event: {
                index: event.index,
                tdbid: event.tdbid
            }
        });
    };

    self.toggleTdbid = function toggleTdbid(event) {
        // Call parent
        self.onToggle({
            $event: {
                index: event.index
            }
        });
    };
}

module.exports = tdbidList;
