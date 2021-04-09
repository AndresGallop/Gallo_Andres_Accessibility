#Mini App

This project will show some cars from Mini brand, where the user will be able to click any car 
he or she selects and it will open alightbox with more information of itself.

##Specifications

The cars are dynamic data taken from a database, as well as the information rendered 
in the lightbox.

##Dev Notes

The steps that I will follow are:

1. Creating a Database in mySQL, the table will have id, name, description & image.
2. Connecting the table to my Localhost by PHP.
3. A Fetch function in a JS file (DataMiner.js) will bring the data.
4. Creating a ERROR catch statement in case the data does not go through.
5. Vue.js will be used: 
    5.1 Connect Vue.js with a <script> in the html file.
    5.2 Make a component and a template with an click event (@click) that will be rendered 
        with the information of the database.
    5.3 Making a prop.
    5.4 Making a data: function that will contain the data of the element clicked, and that
        will be rendered in the lightbox.
    5.5 Making some methods = JS functions with some slightly syntax differences.
6. The Lightbox will open and close with a toggle function.

#Des Notes

The first view has a video introducing the Mini brand cars. Then there are the 3 options of cars the user can
select; when click in any of the cars images, a lightbox will pop up showing the car more detaily and with 
some more information (name and description of the car).  