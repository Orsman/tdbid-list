var tdbidItem = {
    controller: tdbidItemController,
    template: require('./tdbid-item.html'),
    bindings: {
        index: '<',
        description: '<',
        completed: '<',
        onDelete: '&',
        onUpdate: '&',
        onToggle: '&'
    }
};

function tdbidItemController() {
    var self = this;

    self.$onInit = function $onInit() {
        self.editing = false;
    };

    self.enableEditing = function enableEditing() {
        self.editing = true;
    };

    self.deleteTdbid = function deleteTdbid() {
        // Call parent
        self.onDelete({
            $event: {
                index: self.index
            }
        });
    };

    self.updateTdbid = function updateTdbid() {
        // Call parent
        self.onUpdate({
            $event: {
                index: self.index,
                tdbid: {
                    description: self.description
                }
            }
        });

        self.editing = false;
    };

    self.toggleTdbid = function toggleTdbid() {
        // Call parent
        self.onToggle({
            $event: {
                index: self.index
            }
        });
    };
}

module.exports = tdbidItem;
