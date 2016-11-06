var tdbidForm = {
    controller: tdbidFormController,
    template: require('./tdbid-form.html'),
    bindings: {
        onSubmit: '&'
    }
};

function tdbidFormController() {
    var self = this;

    self.$onInit = function $onInit() {
        self.newTdbid = {};
        resetTdbid();
    }

    self.submitForm = function submitForm() {
        // Call parent
        self.onSubmit({
            $event: {
                tdbid: self.newTdbid
            }
        });

        resetTdbid();
    }

    function resetTdbid() {
        self.newTdbid = {};
    }
}

module.exports = tdbidForm;
