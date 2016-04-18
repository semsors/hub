var FlowOptions = function (readings) {
    if ( ! (this instanceof FlowOptions)) {
        return new FlowOptions();
    }

    this.columns.push(['readings'].concat(readings));
};

FlowOptions.prototype = Object.create({
    columns: [],
    duration: 250
});
