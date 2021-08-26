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

    var geojson = new ol.layer.Vector({
        source: new ol.source.Vector({
            format: new ol.format.GeoJSON(),
            url: 'sourceMap.json'
        })
    })

    //var feature = new ol.format.GeoJSON().readFeatures(geojson, {
    //    featureProjection: 'EPSG:3857'
    //});
    //var layer = new ol.layer.Vector({
    //    source: new ol.source.Vector({
    //        features: feature
    //    })
    //    //, style: new ol.style.Style({
    //    //    stroke: new ol.style.Stroke({
    //    //        color: 'rgba(121,121,125,1.0)',
    //    //        lineDash: null,
    //    //        lineCap: 'butt',
    //    //        lineJoin: 'miter',
    //    //        width: 0,
    //    //    }),
    //    //    fill: new ol.style.Fill({
    //    //        color: '#0d0887',
    //    //    }),
    //    //})
       
    //});
    //map.addLayer(layer);
    map.addLayer(geojson);


    //var extent = layer.getSource().getExtent();
    //map.getView().fit(extent, map.getSize());

}