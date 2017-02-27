(function () { 
    if (!mstrmojo.plugins.CustomGantt) {
        mstrmojo.plugins.CustomGantt = {};
    }

    mstrmojo.requiresCls(
        "mstrmojo.vi.models.CustomVisDropZones",
        "mstrmojo.array"
    );

    mstrmojo.plugins.CustomGantt.CustomGanttDropZones = mstrmojo.declare(
        mstrmojo.vi.models.CustomVisDropZones,
        null,
        {
            scriptClass: "mstrmojo.plugins.CustomGantt.CustomGanttDropZones",
            cssClass: "customganttdropzones",
            getCustomDropZones: function getCustomDropZones(){
var ENUM_ALLOW_DROP_TYPE = mstrmojo.vi.models.CustomVisDropZones.ENUM_ALLOW_DROP_TYPE;
  return [ 
 { 
name: 'Parent', 
maxCapacity:1, 
title:'Drag Attribute Here', 
allowObjectType: ENUM_ALLOW_DROP_TYPE.ATTRIBUTE
 }, { 
name: 'Child', 
maxCapacity:1, 
title:'Drag Attribute Here', 
allowObjectType: ENUM_ALLOW_DROP_TYPE.ATTRIBUTE
 }, { 
name: 'Progress', 
maxCapacity:1, 
title:'Drag Metric Here', 
allowObjectType: ENUM_ALLOW_DROP_TYPE.METRIC
 }, { 
name: 'Start Date', 
maxCapacity:1, 
title:'Drag Attribute Here', 
allowObjectType: ENUM_ALLOW_DROP_TYPE.ATTRIBUTE
 }, { 
name: 'End Date', 
maxCapacity:1, 
title:'Drag Attribute Here', 
allowObjectType: ENUM_ALLOW_DROP_TYPE.ATTRIBUTE
 }
 ];},
            shouldAllowObjectsInDropZone: function shouldAllowObjectsInDropZone(zone, dragObjects, idx, edge, context) {
                 return {
                    allowedItems: mstrmojo.array.filter(dragObjects, function (object) { 
                            return true;
                    })  
                };

},
            getActionsForObjectsDropped: function getActionsForObjectsDropped(zone, droppedObjects, idx, replaceObject, extras) {
 


},
            getActionsForObjectsRemoved: function getActionsForObjectsRemoved(zone, objects) { 
  



},
            getDropZoneContextMenuItems: function getDropZoneContextMenuItems(cfg, zone, object, el) {
 
   
 
 
 
 
  
 
  
 
   
 
 
 
  
 
 
 
 
 
 
 
 
 
 
  
 
 
 
 
 
  
 








}
})}());
//@ sourceURL=CustomGanttDropZones.js
