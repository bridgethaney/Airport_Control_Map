# Map of Airports in the United States


## Airport Control Map: Control Towers or No Towers?

<img src="img/airport_map.JPG" width="1000" height="600">

### Introduction

This choropleth map displays over 950 airports across all 50 states of the United States, as well as in the US territory of Puerto Rico. As observed, the airports are divided into whether they have control towers or not. The map is also color coordinated based on the number of airports in each state. These two pieces of information can formulate important analysis and hypotheses into why airports in the United States are operated in certain ways and whether there is a relationship between size of states and number of airports.

### How to Use and Read the Map

On the interactive Leaftlet map, which is accessible from https://bridgethaney.github.io/Airport_Control_Map/, there are two kinds of airports that are displayed. The red plane symbol represents airports with control towers. The blue airplane symbol represents airports without control towers. When clicking on the airport markers, the name of the selected airport is shown through a popup. This allows users to specifically find out which airports do or do not have control towers. Along with this, there is visible ruler icon to the right of the map directly below the legend. This is an added ruler plug-in, which was created by Göker Tanrısever, that allows for distance measurements between selected points. Click on the ruler icon and then place a point anywhere on the map. From there, drag the point to any other location to see the distance in kilometers. To exit out of this feature, double tap the escape button and the ruler will close.

As for the legend, there are two main sections that are present: number of airports in each state and airport control towers. The color of each state reflects the number of airports within state boundaries. For instance, South Dakota has 7 airports, so it is placed in the light yellow 0-8 category. Florida, on the other hand, has 38 airports, so it is placed in the dark red 32+ category. The higher the number of airports a state has, the darker the color it is given. There is a color scheme of light yellow, to a burnt orange, to a dark red.

### Analysis

I was surprised to see several hundred airports without a control tower. This is seemingly hazardous, as there is not proper focus being placed on air traffic. It is especially apparent in Alaska how many airports exist without control towers. Perhaps the number of planes going to and from the airports at a given time, as well as the trajectory of each flight, plays a role in whether control towers are necessary. However, it still seems that there are more airports with control towers than without towers.

It also makes sense that states like Florida, California, and Texas lead in number of airports. With each of those named states having some of the highest populations in the US, there would need to be a higher number of airports to allow those populations to travel. Alaska is also included as a state with a high number of airports because of how large it is in terms of land mass. In order to cover more ground to reach the populations scattered, there needs to be more airports.

### Libraries/Packages

- Leaflet - [Source](https://leafletjs.com/)
  - Interactive JavaScript map library
- Chroma.js -[Source](https://gka.github.io/chroma.js/)
  - Color palettes and selections
- JQuery - [Source](https://jquery.com/)
  - Manipulates the HTML elements
- Leaflet-Ruler - [Source](https://github.com/gokertanrisever/leaflet-ruler)
  - Allows users to find the distance between any given points on the map
- Font Awesome - [Source](https://fontawesome.com/)
  - Contains the airplane icons used in the map, as well as other icons


### Acknowledgement

This map was created with the assistance and guidance of the GEOG 458 Lab 3 content produced by Bo Zhao. Code snippets from the lab were used and reworked to make this interactive project.

### Resources Credit

Airport Dataset: [Airport Data](https://catalog.data.gov/dataset/usgs-small-scale-dataset-airports-of-the-united-states-201207-shapefile) by Data.Gov

US States Boundaries: [US-States Boundaries](https://bost.ocks.org/mike/) by Mike Bostock

Leaflet Ruler Plugin (Bonus Points): [Leaflet Ruler](https://github.com/gokertanrisever/leaflet-ruler) by Göker Tanrısever in collaboration with Dmitriy Zaporozhets

Basemap: [Voyager with Labels Basemap](https://carto.com/help/building-maps/basemap-list/) by CartoDB

Code: Used code from [Lab 03](https://github.com/jakobzhao/geog458/tree/master/labs/lab03) by Bo Zhao

### Interactive Map Link

https://bridgethaney.github.io/Airport_Control_Map/index.html


