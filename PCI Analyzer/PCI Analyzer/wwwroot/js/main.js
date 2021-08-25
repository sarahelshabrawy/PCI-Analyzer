window.onload = function () {
    console.log("ALIII");
    var map = new ol.Map({
        target: 'basicMap',
        layers: [
            new ol.layer.Tile({
                source: new ol.source.OSM()
            })
        ],
        view: new ol.View({
            center: ol.proj.fromLonLat([37.41, 8.82]),
            zoom: 4
        })
    });
}