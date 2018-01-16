({    
    handleShowModal: function(component, evt, helper) {
        var selectedOppName = component.get("v.opp.Name");
        var selectedOpp = component.get("v.opp");
        var modalBody;

        $A.createComponent("c:OppSummaryItemDetails", {"opp":selectedOpp},
                           function(content, status) {
                               if (status === "SUCCESS") {
                                   modalBody = content;
                                   component.find('overlayLib').showCustomModal({
                                       header: "Details Opportunity: " + selectedOppName,
                                       body: modalBody, 
                                       showCloseButton: true,
                                       cssClass: "mymodal"
                                       
                                   })
                                   
                               }
                               
                           });
    }
})