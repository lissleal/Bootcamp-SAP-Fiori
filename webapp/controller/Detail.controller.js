sap.ui.define([
    "sap/ui/core/mvc/Controller",
], (Controller) => {
    "use strict";
    return Controller.extend("com.bootcamp.sapui5.freestyle.controller.Detail",
        {
            onInit() {
                let oRouter = sap.ui.core.UIComponent.getRouterFor(this);

                oRouter.getRoute("detail").attachPatternMatched(this._onObjectMatched, this);
            },
            _onObjectMatched: function (oEvent) {
                let sProductID = oEvent.getParameter("arguments").ProductID;
                this.getView().bindElement({
                    path: "/Products(" + sProductID + ")",
                    parameters: {
                        expand: "Order_Details"
                    }
                });
            },
        });
});
