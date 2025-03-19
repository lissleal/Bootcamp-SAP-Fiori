sap.ui.define([
    "com/bootcamp/sapui5/freestyle/utils/HomeService",
    "sap/ui/model/json/JSONModel"
], function (HomeService, JSONModel) {
    "use strict";
    return {
        init: function (oNorthwindModel) {
            this._oNorthwindModel = oNorthwindModel;
        },
     

    };
});
