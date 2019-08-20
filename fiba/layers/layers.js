var wms_layers = [];

var format_WorldMap_0 = new ol.format.GeoJSON();
var features_WorldMap_0 = format_WorldMap_0.readFeatures(json_WorldMap_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WorldMap_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WorldMap_0.addFeatures(features_WorldMap_0);
var lyr_WorldMap_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_WorldMap_0, 
                style: style_WorldMap_0,
                interactive: false,
                title: '<img src="styles/legend/WorldMap_0.png" /> World Map'
            });
var format_GroupH_1 = new ol.format.GeoJSON();
var features_GroupH_1 = format_GroupH_1.readFeatures(json_GroupH_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GroupH_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GroupH_1.addFeatures(features_GroupH_1);
var lyr_GroupH_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GroupH_1, 
                style: style_GroupH_1,
                interactive: true,
                title: '<img src="styles/legend/GroupH_1.png" /> Group H'
            });
var format_GroupG_2 = new ol.format.GeoJSON();
var features_GroupG_2 = format_GroupG_2.readFeatures(json_GroupG_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GroupG_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GroupG_2.addFeatures(features_GroupG_2);
var lyr_GroupG_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GroupG_2, 
                style: style_GroupG_2,
                interactive: true,
                title: '<img src="styles/legend/GroupG_2.png" /> Group G'
            });
var format_GroupF_3 = new ol.format.GeoJSON();
var features_GroupF_3 = format_GroupF_3.readFeatures(json_GroupF_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GroupF_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GroupF_3.addFeatures(features_GroupF_3);
var lyr_GroupF_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GroupF_3, 
                style: style_GroupF_3,
                interactive: true,
                title: '<img src="styles/legend/GroupF_3.png" /> Group F'
            });
var format_GroupE_4 = new ol.format.GeoJSON();
var features_GroupE_4 = format_GroupE_4.readFeatures(json_GroupE_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GroupE_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GroupE_4.addFeatures(features_GroupE_4);
var lyr_GroupE_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GroupE_4, 
                style: style_GroupE_4,
                interactive: true,
                title: '<img src="styles/legend/GroupE_4.png" /> Group E'
            });
var format_GroupD_5 = new ol.format.GeoJSON();
var features_GroupD_5 = format_GroupD_5.readFeatures(json_GroupD_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GroupD_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GroupD_5.addFeatures(features_GroupD_5);
var lyr_GroupD_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GroupD_5, 
                style: style_GroupD_5,
                interactive: true,
                title: '<img src="styles/legend/GroupD_5.png" /> Group D'
            });
var format_GroupC_6 = new ol.format.GeoJSON();
var features_GroupC_6 = format_GroupC_6.readFeatures(json_GroupC_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GroupC_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GroupC_6.addFeatures(features_GroupC_6);
var lyr_GroupC_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GroupC_6, 
                style: style_GroupC_6,
                interactive: true,
                title: '<img src="styles/legend/GroupC_6.png" /> Group C'
            });
var format_GroupB_7 = new ol.format.GeoJSON();
var features_GroupB_7 = format_GroupB_7.readFeatures(json_GroupB_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GroupB_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GroupB_7.addFeatures(features_GroupB_7);
var lyr_GroupB_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GroupB_7, 
                style: style_GroupB_7,
                interactive: true,
                title: '<img src="styles/legend/GroupB_7.png" /> Group B'
            });
var format_GroupA_8 = new ol.format.GeoJSON();
var features_GroupA_8 = format_GroupA_8.readFeatures(json_GroupA_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GroupA_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GroupA_8.addFeatures(features_GroupA_8);
var lyr_GroupA_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GroupA_8, 
                style: style_GroupA_8,
                interactive: true,
                title: '<img src="styles/legend/GroupA_8.png" /> Group A'
            });

lyr_WorldMap_0.setVisible(true);lyr_GroupH_1.setVisible(true);lyr_GroupG_2.setVisible(true);lyr_GroupF_3.setVisible(true);lyr_GroupE_4.setVisible(true);lyr_GroupD_5.setVisible(true);lyr_GroupC_6.setVisible(true);lyr_GroupB_7.setVisible(true);lyr_GroupA_8.setVisible(true);
var layersList = [lyr_WorldMap_0,lyr_GroupH_1,lyr_GroupG_2,lyr_GroupF_3,lyr_GroupE_4,lyr_GroupD_5,lyr_GroupC_6,lyr_GroupB_7,lyr_GroupA_8];
lyr_WorldMap_0.set('fieldAliases', {'BRK_NAME': 'BRK_NAME', });
lyr_GroupH_1.set('fieldAliases', {'BRK_NAME': 'BRK_NAME', 'Rank': 'Rank', 'Group': 'Group', });
lyr_GroupG_2.set('fieldAliases', {'BRK_NAME': 'BRK_NAME', 'Rank': 'Rank', 'Group': 'Group', });
lyr_GroupF_3.set('fieldAliases', {'BRK_NAME': 'BRK_NAME', 'Rank': 'Rank', 'Group': 'Group', });
lyr_GroupE_4.set('fieldAliases', {'BRK_NAME': 'BRK_NAME', 'Rank': 'Rank', 'Group': 'Group', });
lyr_GroupD_5.set('fieldAliases', {'BRK_NAME': 'BRK_NAME', 'Rank': 'Rank', 'Group': 'Group', });
lyr_GroupC_6.set('fieldAliases', {'BRK_NAME': 'BRK_NAME', 'Rank': 'Rank', 'Group': 'Group', });
lyr_GroupB_7.set('fieldAliases', {'BRK_NAME': 'BRK_NAME', 'Rank': 'Rank', 'Group': 'Group', });
lyr_GroupA_8.set('fieldAliases', {'BRK_NAME': 'BRK_NAME', 'Rank': 'Rank', 'Group': 'Group', });
lyr_WorldMap_0.set('fieldImages', {'BRK_NAME': 'Hidden', });
lyr_GroupH_1.set('fieldImages', {'BRK_NAME': '', 'Rank': '', 'Group': '', });
lyr_GroupG_2.set('fieldImages', {'BRK_NAME': '', 'Rank': '', 'Group': '', });
lyr_GroupF_3.set('fieldImages', {'BRK_NAME': '', 'Rank': '', 'Group': '', });
lyr_GroupE_4.set('fieldImages', {'BRK_NAME': '', 'Rank': '', 'Group': '', });
lyr_GroupD_5.set('fieldImages', {'BRK_NAME': '', 'Rank': '', 'Group': '', });
lyr_GroupC_6.set('fieldImages', {'BRK_NAME': '', 'Rank': '', 'Group': '', });
lyr_GroupB_7.set('fieldImages', {'BRK_NAME': '', 'Rank': '', 'Group': '', });
lyr_GroupA_8.set('fieldImages', {'BRK_NAME': '', 'Rank': '', 'Group': '', });
lyr_WorldMap_0.set('fieldLabels', {});
lyr_GroupH_1.set('fieldLabels', {'BRK_NAME': 'inline label', 'Rank': 'inline label', 'Group': 'inline label', });
lyr_GroupG_2.set('fieldLabels', {'BRK_NAME': 'inline label', 'Rank': 'inline label', 'Group': 'inline label', });
lyr_GroupF_3.set('fieldLabels', {'BRK_NAME': 'inline label', 'Rank': 'inline label', 'Group': 'inline label', });
lyr_GroupE_4.set('fieldLabels', {'BRK_NAME': 'inline label', 'Rank': 'inline label', 'Group': 'inline label', });
lyr_GroupD_5.set('fieldLabels', {'BRK_NAME': 'inline label', 'Rank': 'inline label', 'Group': 'inline label', });
lyr_GroupC_6.set('fieldLabels', {'BRK_NAME': 'inline label', 'Rank': 'inline label', 'Group': 'inline label', });
lyr_GroupB_7.set('fieldLabels', {'BRK_NAME': 'inline label', 'Rank': 'inline label', 'Group': 'inline label', });
lyr_GroupA_8.set('fieldLabels', {'BRK_NAME': 'inline label', 'Rank': 'inline label', 'Group': 'inline label', });
lyr_GroupA_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});