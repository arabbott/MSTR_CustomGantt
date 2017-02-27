(function () { 
    if (!mstrmojo.plugins.CustomGantt) {
        mstrmojo.plugins.CustomGantt = {};
    }

    mstrmojo.requiresCls(
        "mstrmojo.vi.models.editors.CustomVisEditorModel",
        "mstrmojo.array"
    );

    mstrmojo.plugins.CustomGantt.CustomGanttEditorModel = mstrmojo.declare(
        mstrmojo.vi.models.editors.CustomVisEditorModel,
        null,
        {
            scriptClass: "mstrmojo.plugins.CustomGantt.CustomGanttEditorModel",
            cssClass: "customgantteditormodel",
            getCustomProperty: function getCustomProperty(){
var $WT = mstrmojo.vi.models.editors.CustomVisEditorModel.WIDGET_TYPE;
var vizHost = this.getHost();

return [
{
name: 'Gantt Chart Settings',
value: [{
		style: $WT.EDITORGROUP,
		items: [{
			style: $WT.CHECKBOXANDLABEL,
			propertyName: 'showDateLine', 
            labelText: "Date Line"
			},
			
			{
			style: $WT.CHECKBOXANDLABEL,
			propertyName: 'showChangeDate',
			labelText: "Check this box if you want to change the dateline date from the default of today's date."
			},
			
			{           
            style: $WT.TWOCOLUMN,
			disabled: vizHost.getProperty('showChangeDate') === "false",
            items: [{           
              style: $WT.LABEL,
              width: "60%",
              labelText: "Change Date Line Date (MM/DD/YYYY)"
            },{                
              style: $WT.TEXTBOX,
              width: "40%",
              propertyName: 'dateLine'
            }
			]
			},
			
			
			{
			style: $WT.CHECKBOXANDLABEL,
			propertyName: 'showLabels', 
            labelText: "Task and Milestone Labels"
			},
			{
			style: $WT.CHECKBOXANDLABEL,
			propertyName: 'showDateLabels', 
            labelText: "Date Labels"
			},
			{
			style: $WT.CHECKBOXANDLABEL,
			propertyName: 'showCYAxis', 
            labelText: "CY Axis"
			},
			{
			style: $WT.CHECKBOXANDLABEL,
			propertyName: 'showCYQtrAxis', 
            labelText: "CY Quarter Axis"
			},
			{
			style: $WT.CHECKBOXANDLABEL,
			propertyName: 'showFYQtrAxis', 
            labelText: "FY Quarter Axis"
			},
			{
			style: $WT.CHECKBOXANDLABEL,
			propertyName: 'showFYAxis', 
            labelText: "FY Axis"
			}]
		}]
},

];
}
})}());
//@ sourceURL=CustomGanttEditorModel.js