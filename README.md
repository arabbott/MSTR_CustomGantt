# MSTR_CustomGantt
A Custom Gantt chart developed with D3 for use in Microstrategy Visual Insight

This chart was created using original source code by Aaron Lampros - https://github.com/alampros/Gantt-Chart 

Source code was modified to meet my requirements; and to work as a visualization with MicroStrategy Visual Insight.

It requires a minimum of 4 attributes and 1 metric.  The attributes should include a "Parent" attribute, a "Child" attribute that are tied to the "Parent" attribute, along with "Start Date" and "End Date" attributes.  The one metric should be in the form of a percentage (i.e. XX%) and is used to draw the inner progress bar on each task.  An empty value for the metric will result in no progress bar being shown.
