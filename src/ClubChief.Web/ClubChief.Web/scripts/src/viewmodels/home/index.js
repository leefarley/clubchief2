define(function (require) {

    function activate() {
        var that = this;
    };

    return {
        customers: ko.observableArray([]),
        activate: activate
    };
});