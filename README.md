COGS 121 Assignment 2 README

SIX DESIGN PRINCIPLES:

1. Discoverability/Signifiers - Are users able to easily find the points of the application that they are interested in?
	-Bubbles are mapped in hgh contrast colors to the gray of the map to draw attention to salient points aka points of potential UBER demand.
	-There is a legend/key for users to reference, all in one consensed, familiar area. 

2. Learnability - Are users able to easily learn and remember how to interact with your application?
	-When the user clicks on an area, the map will zoom into that area and the bubbles with break apart to show more specific areas of activity within that region. Because this change is very dramatic, the user is able to learn quickly what clicking on the map does. Similarly with zooming.
	-Because the only interactive feature of the visualization is the zooming, there isn't much else for the user to learn how to do. In terms of understanding what the bubbles mean, there is a legend on the side of the page for reference. 

3. Feedback - Is there strong evidence of user feedback for actionable items?
	-Our actionable items pretty much amount to the zooming feature on the map. But, it does provide a good amount of feedback since once a region is zoomed in on, the map will display an updated map with the bubbles broken up to more specific areas. Additionally, those areas will have their name displayed (ex. Oceanside) for drivers to reference.

4. Natural Mapping/Mental Metaphors - Is there strong evidence of providing natural mappings or relatable metaphors that help the user navigate the application?
	-As most people, especially UBER drivers, are generally familiar with GPS and other maps used for driving, it is an intuitive understanding that since the bubbles are placed over a certain area on the map, that is where something of interest is happening (in this case, potential demand for their services)

5. Constraints - Does the application have deliberate constraints to guide the flow of user interaction?
	- Our visualization will not be able to update realtime because that data isn't available to us on DELPHI.
	- It makes certain assumtions based on the data. 
		(1) Locations that offer alcoholic beverages for immediate consumption (ex. Bars, and not Liquor stores) will have a higher number of people in need to rides home due to intoxication. 
		(2) We found that the demographic of people who use UBER the most range between 15-44 years old, and we assumed that areas with more people of that age range would demand moer of UBER's services.

6. Error Prevention/Recovery - Is there strong evidence of error prevention and error recovery so that the user won’t be left confused when something unexpected happens?
	-When zooming in, the user is able to easily do so by clicking once. To zoom out, the user simply clicks again. With only two levels of zooming, the user doesnt need extra cues as to how zoommed in they are, or how to do so.
	-Because the only interactive feature of the visualization is the zooming, there isn't much else for the user to do, and therefore additionally constrains user errors.
	-Bubbles do not overlap; instead, multiple areas of the activity in the same region will be encompassed by a single bubble, and then upon zooming in, the bubble will split into several that are more accurate to the places with activities within that region. 


DECISION JUSTIFICATION:

	We did this shit because...

	ex. If you used any external CSS/JS libraries (ie. Boostrap, Materialize) analyze what motivated your team to do so and describe how it fits into your design goals. 

	ex. If you implemented any custom CSS/JS components explain why this decision was appropriate and how did it fit into your design.



TEAMWORK BREAKDOWN:

Alisa Prathnadi - 
James Kong - 
Calvin Gomez - 
Arnold Chen - 
Diana Ho - 
