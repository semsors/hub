var ChartOptions = function (element, data) {
    if ( ! (this instanceof ChartOptions)) {
        return new ChartOptions();
    }

    this.bindto = element;
    this.data.columns.push(['readings'].concat(data));
};

ChartOptions.prototype = Object.create({
    data: {
        columns: [],
        types: {
            readings: 'area'
        },
        colors: {
            readings: '#000000'
        }
    },
    // I know, it's strange but zeros didn't work
    padding: {
        top: 0,
        right: -15,
        bottom: -8,
        left: -16
    },
    legend: {
        show: false
    },
    axis: {
        x: {
            show: false
        },
        y: {
            show: false
        }
    }
});
