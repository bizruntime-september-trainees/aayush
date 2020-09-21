var styles = [
    {
        'background': 'red',
        'color': 'white',
        'width': '10'
    },
    {
        'background': 'white',
        'color': 'black',
        'width': '20'
    }, {
        'background': 'red',
        'color': 'yellow',
        'width': '30'
    }, {
        'background': 'yellow',
        'color': 'white',
        'width': '15'
    }, {
        'background': 'purple',
        'color': 'green',
        'width': '16'
    },
];
d3.selectAll('.items li')
    .data(styles)
    .style({
        'font-size': '18px',
        'padding': '6px',
        'margin': '4px',
        'list-style': 'none',
        'backgroud': function (d) {
            return d.background;
        },
        'color': function (d) {
            return d.color;
        },
        'width': function (d) {
            return d.width + '%';
        },


    });