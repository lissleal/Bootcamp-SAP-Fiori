sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "com/bootcamp/sapui5/freestyle/utils/HomeHelper",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
], (Controller, HomeHelper, Filter, FilterOperator) => {
    "use strict";

    return Controller.extend("com.bootcamp.sapui5.freestyle.controller.Home", {
        onInit() {
            this.oRouter = this.getOwnerComponent().getRouter();
        },
        onPress: async function(){
            let oFilter =[];
            let values = this.getOwnerComponent().getModel("LocalDataModel").getData()
            if(values.valueInput){
                oFilter.push(new Filter("ProductID", FilterOperator.EQ, values.valueInput))
            }
            if(values.selectedKey){
                oFilter.push(new Filter("CategoryID", FilterOperator.EQ, values.selectedKey))
            }

            let oDatos = await HomeHelper.getDataProducts([oFilter]);     
            await HomeHelper.setProductModel(this, oDatos[0].results);                      
        },

        //Navega a vista detail
        onItemPress: function(oEvent){
            let oSource = oEvent.getSource();
            let oDatos = oSource.getBindingContext("").getObject();
            this.oRouter.navTo("detail", {
            ProductID: oDatos.ProductID
            });
        },
        // onChange: async function(oEvent){
        //     let oFilter = [];
        //     let oSource = oEvent.getSource();
        //     let oTable = this.getView().byId("idProductsTable");
        //     let oBinding = oTable.getBinding("items");

        //     if(oSource.getValue()){
        //         oFilter = new Filter("ProductID", FilterOperator.EQ, oSource.getValue());
        //     }
        //     oBinding.filter(oFilter);
        // }

    
    });
});