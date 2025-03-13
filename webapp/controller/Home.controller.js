sap.ui.define([
    "sap/ui/core/mvc/Controller", "sap/m/MessageBox", "sap/m/MessageToast"
], function (Controller, MessageBox, MessageToast){
    "use strict";

    return Controller.extend("com.bootcamp.sapui5.freestyle.controller.Home", {

        onPress: function () {
            //Repasar esta parte
            var oBundle = this.getView().getModel("i18n").getResourceBundle();
            var sText = oBundle.getText("textRespuestaBotoni18n");

			MessageBox.show(sText);
		}

    });
});

