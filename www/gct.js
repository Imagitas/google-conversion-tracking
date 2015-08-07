var GoogleConversionTracking = (function () {
    var GoogleConversionTracking = (typeof exports !== 'undefined') && exports || {};

    GoogleConversionTracking.doNothing = function () {
    };

    var PLUGIN_NAME = "GoogleConversionTracking";

    GoogleConversionTracking.track = function (conversionId, label, value, repeatable, success, fail) {
        exec(success, fail, 'GoogleConversionTracking', 'track', [conversionId, label, value, repeatable]);
    };


    return GoogleConversionTracking;
}());

module.exports = GoogleConversionTracking;