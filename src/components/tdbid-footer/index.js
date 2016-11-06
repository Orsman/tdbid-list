var tdbidFooter = {
    controller: tdbidFooterController,
    template: require('./tdbid-footer.html'),
    bindings: {
        itemsLeft: '<',
        onClearCompleted: '&'
    }
};

function tdbidFooterController() {
    var self = this;

    self.clearCompleted = function clearCompleted() {
        // Call parent
        self.onClearCompleted();
    };
}

module.exports = tdbidFooter;
