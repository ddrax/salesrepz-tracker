({
    goToRecord : function(component,event)
    {
 var navEvt = $A.get("e.force:navigateToSObject");
        navEvt.setParams({
            "recordId": component.get("v.recordId")
        });
        navEvt.fire();
    },
       getRepDetails: function(component, event, helper) {
        var myEvent = $A.get("e.c:SalesRepChange");
        console.log("eventVal"+event.target.value);
        myEvent.setParams({"salesRepKey": event.target.value});
        myEvent.fire();
    }
})
