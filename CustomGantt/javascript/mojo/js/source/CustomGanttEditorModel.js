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
			},
			{
			style: $WT.CHECKBOXANDLABEL,
			propertyName: 'showYAxisTitle', 
            labelText: "Parent Attribute Column Header"
			},
			{
			style: $WT.TWOCOLUMN,
			items: [
				{
					style: $WT.LABEL,
					name: "text",
					width: "30%",
					labelText: "Tooltip Font Size:"
				},
				{
					style: $WT.PULLDOWN,
					propertyName: "tooltipFontSize",
					width: "70%",
					items: [
					{
						name: "8",
						value: "8px"
					},
					{
						name: "9",
						value: "9px"
					},
					{
						name: "10",
						value: "10px"
					},
					{
						name: "11",
						value: "11px"
					},
					{
						name: "12",
						value: "12px"
					},
					{
						name: "14",
						value: "14px"
					},
					{
						name: "16",
						value: "16px"
					},
					{
						name: "18",
						value: "18px"
					},
					{
						name: "20",
						value: "20px"
					},
					{
						name: "22",
						value: "22px"
					},
					{
						name: "24",
						value: "24px"
					},
					{
						name: "36",
						value: "36px"
					}
				  ]
				}
			  ]
			}
			/*
			*This code display MSTR standard font editor
			*Would elements can be disabled, they will be greyed out
			*MSTR document does not list all childNames for disabling elements
			{
			style: $WT.CHARACTERGROUP,
			propertyName: 'cg',
			items: [{
				childName: 'fontSize',
				disabled: false
				},{
				childName: 'fontStyle',
				disabled: true
				},{
				childName: 'fontColor',
				disabled: true
				},{
				childName: 'font', //not correct, docs do not state what name to use to disable font type
				disabled: true
				}]
			} */]
		}]
},

];
}
})}());
//@ sourceURL=CustomGanttEditorModel.js