({
    doInit : function(component, event) {
        var action = component.get("c.findAll");
        action.setCallback(this, function(a) {
          component.set("v.reps", a.getReturnValue()); 
        });
        $A.enqueueAction(action);
    },
    searchKeyChange: function(component, event) {
    var searchKey = event.getParam("searchKey");
    var action = component.get("c.findRepsByName");
    action.setParams({
      "searchKey": searchKey
    });
    action.setCallback(this, function(a) {
        component.set("v.reps", a.getReturnValue());
    });
    $A.enqueueAction(action);
}

})