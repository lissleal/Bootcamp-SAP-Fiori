sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
], (Controller, Filter, FilterOperator) => {
    "use strict";

    return Controller.extend("com.bootcamp.sapui5.freestyle.controller.Home", {
        onInit() {
            this.oRouter = this.getOwnerComponent().getRouter();
        },
        onPress: async function(){
            let sValue = this.byId("inputID").getValue();
            let oTable = this.getView().byId("idProductsTable");
            let oBinding = oTable.getBinding("items");

            if(sValue){
                let oFilter = new Filter("ProductID", FilterOperator.EQ, sValue);
                oBinding.filter([oFilter]);
            } else {
                oBinding.filter([]);
            }
             
        },
         //Navega a vista detail
        onItemPress: function(oEvent){
            let oSource = oEvent.getSource();
            let oDatos = oSource.getBindingContext().getObject();
            this.oRouter.navTo("detail", {
            ProductID: oDatos.ProductID
            });
        }

    
    });
});