Previous version was using grunt, now we switch to webmap

$ npm i

$ npm run build 
or 
$ npx webpack --config build/webpack.prod.conf.js --mode production --display-error-details

NOTE:
Previous version was also using grafana-sdk-mocks, but I was facing too many compilation issues.
github:CorpGlory/types-grafanalytics proved result in less issues 
/**********************************************************************************************

YOU NEED TO ADD THE FOLLOWING BEFORE BUILDING TO:

/var/lib/grafana/plugins/heatmap-two/node_modules/@types/grafana/app/core/services/context_srv.d.ts

/// 
export declare class User {

...

    lightTheme: boolean;

...

}

*************************************************************************************************/

Current error during runtime:

ColumnNumber: 9

fileName: "http://localhost:3000/public/build/0.2ba40e7163b7f9a6ed4b.js line 1 > eval"

lineNumber: 21650

message: "_libs_d3__WEBPACK_IMPORTED_MODULE_3___default.a is undefined"

stack: "addHeatmapCanvas@http://localhost:3000/public/plugins/heatmap-two/module.js:21650:9\nrender@http://localhost:3000/public/plugins/heatmap-two/module.js:21947:13\nlink/<@http://localhost:3000/public/plugins/heatmap-two/module.js:21360:9\no.prototype.emit@http://localhost:3000/public/build/vendor.2c3c591224fb193f7fd3.js:44:25746\na</e.prototype.emit@http://localhost:3000/public/build/app.a4b7f5a163ea89ff6420.js:1:13149\n[1457]/f</t.prototype.render@http://localhost:3000/public/build/0.2ba40e7163b7f9a6ed4b.js:1:9369\n./heatmap_ctrl.ts/HeatmapCtrl</HeatmapCtrl.prototype.onDataError@http://localhost:3000/public/plugins/heatmap-two/module.js:2301:9\no.prototype.emit@http://localhost:3000/public/build/vendor.2c3c591224fb193f7fd3.js:44:25316\na</e.prototype.emit@http://localhost:3000/public/build/app.a4b7f5a163ea89ff6420.js:1:13149\n[1523]/f</e.prototype.onMetricsPanelRefresh/<@http://localhost:3000/public/build/0.2ba40e7163b7f9a6ed4b.js:7:15550\nu@http://localhost:3000/public/build/vendor.2c3c591224fb193f7fd3.js:92:69119\nl/<@http://localhost:3000/public/build/vendor.2c3c591224fb193f7fd3.js:92:69565\n$digest@http://localhost:3000/public/build/vendor.2c3c591224fb193f7fd3.js:92:75262\n$apply@http://localhost:3000/public/build/vendor.2c3c591224fb193f7fd3.js:92:77074\nA/s<@http://localhost:3000/public/build/vendor.2c3c591224fb193f7fd3.js:92:73133\ni@http://localhost:3000/public/build/vendor.2c3c591224fb193f7fd3.js:92:21976\nme/l.defer/n<@http://localhost:3000/public/build/vendor.2c3c591224fb193f7fd3.js:92:23440\n"
