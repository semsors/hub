var socket = io(),
    chart;

socket.on('prefetch', function (data) {
    chart = c3.generate(new ChartOptions('#placeholder', data));

    window.dispatchEvent(new Event('resize'));
});

socket.on('readings', function (readings) {
    chart.flow(new FlowOptions(readings));
});

window.onresize = function () {
    if ( ! chart) return;

    chart.resize({
        width: window.innerWidth,
        height: window.innerHeight
    });
};
