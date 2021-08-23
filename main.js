function init() {

    map = new OpenLayers.Map("basicMap");

    var mapnik = new OpenLayers.Layer.OSM();
    var  epsg4326 =  new OpenLayers.Projection("EPSG:4326"); //WGS 1984 projection
    var projectTo = new OpenLayers.Projection("EPSG:900913"); //The map projection (Spherical Mercator)

    map.addLayer(mapnik);
    map.setCenter(new OpenLayers.LonLat(-7.62300,33.59349).transform(epsg4326,projectTo), 12);
}