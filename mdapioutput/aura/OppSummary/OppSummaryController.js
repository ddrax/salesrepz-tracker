({
    salesRepSelected: function(component, event) {
    var repKey = event.getParam("salesRepKey");
    console.log("repkey: " + repKey);
    var action = component.get("c.findClosedWonOppsByRepName");
    console.log("action:" + action);
    action.setParams({
      "repName": repKey
    });
    action.setCallback(this, function(a) {
        component.set("v.opps", a.getReturnValue());
        console.log("returnvalues"+a.getReturnValue());
    });
    $A.enqueueAction(action);
}
})
