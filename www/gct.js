var GoogleConversionTracking = (function () {
    var GoogleConversionTracking = (typeof exports !== 'undefined') && exports || {};

    var PLUGIN_NAME = "GoogleConversionTracking";

    GoogleConversionTracking.track = function (conversionId, label, value, repeatable, success, fail) {
        return cordova.exec(success, fail, PLUGIN_NAME, 'track', [conversionId, label, value, repeatable]);
    };

    return GoogleConversionTracking;
}());

module.exports = GoogleConversionTracking;