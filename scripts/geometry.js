function getTriangle(){
    const triangleBaseInput = document.getElementById('triangle-base');
    const triangleBaseText = triangleBaseInput.value;
    const base = parseFloat(triangleBaseText);
    // console.log(typeof base);

    const triangleHeightInput = document.getElementById('triangle-height');
    const triangleHeightText = triangleHeightInput.value;
    const height = parseFloat(triangleHeightText);
    // console.log(typeof height);

    const area = 0.5 * base * height;
    console.log('The triangle area is: ', area);

    const triangleAreaSpan = document.getElementById('triangle-area');
    triangleAreaSpan.innerText = area; 
}

// Rectangle Area calculate

function calculateRectangleArea(){
    // get the rectangle length 
    const rectangleWidthInput = document.getElementById("rectangle-width");
    const rectangleWidthText =rectangleWidthInput.value;
    const width =parseFloat(rectangleWidthText);
    console.log(width);
    
    // get the rectangle length
    const rectangleLengthInput =document.getElementById('rectangle-length');
    const rectangleLengthText = rectangleLengthInput.value;
    const length = parseFloat(rectangleLengthText);
    console.log(length);

    // area of the rectangle 
    const area = width * length;
    console.log("Area of the rectangle :", area);

   // display showing the rectangle area
   const areaSpan = document.getElementById("rectangle-area");
   areaSpan.innerText = area;
}

// parallelogram area calculate 

function calculateParallelogramArea(){
    // get the parallelogram base
    const  parallelogramBaseInput = document.getElementById('parallelogram-base');
    const parallelogramBaseText = parallelogramBaseInput.value;
    const base = parseFloat(parallelogramBaseText);
    console.log(base);

    // get the parallelogram height 
    const parallelogramHeightInput = document.getElementById('parallelogram-height');
    const parallelogramHeightText = parallelogramHeightInput.value;
    const height = parseFloat(parallelogramHeightText);
    console.log(height);

    // get the parallelogram area 
    const area = base * height;
    console.log('The are of parallelogram :' , area );

    //display showing the parallelogram area

    const areaSpan = document.getElementById('parallelogram-area');
    areaSpan.innerText = area;
}

// Rhombus area calculate 
function calculateRhombusArea(){
    // get the rhombus first karna
    const rhombusFirstKarnaInput = document.getElementById('first-karna');
    const rhombusFirstKarnaText = rhombusFirstKarnaInput.value;
    const firstKarna =parseFloat(rhombusFirstKarnaText);
    console.log(firstKarna);
    // get the rhombus second karna

    const rhombusSecondKarnaInput = document.getElementById('second-karna');
    const rhombusSecondKarnaText = rhombusSecondKarnaInput.value;
    const secondKarna = parseFloat(rhombusSecondKarnaText);
    console.log(secondKarna);

    // area of the rhombus 
    const area = 0.5 * firstKarna * secondKarna;
    console.log("The area of Rhombus :", area);
    // display showing the rhombus area
    const areaSpan = document.getElementById('rhombus-area');
    areaSpan.innerText = area;
}
// pentagon area calculate 
function calculatePentagonArea(){
    // get the pentagon properties
    const pentagonAreaPropertiesInput = document.getElementById('pentagon-properties');
    const pentagonAreaPropertiesText = pentagonAreaPropertiesInput.value;
    const properties = parseFloat(pentagonAreaPropertiesText);
    console.log(properties); 
    // get the pentagon base 
    const pentagonAreaBaseInput = document.getElementById('pentagon-base');
    const pentagonAreaBaseText = pentagonAreaBaseInput.value;
    const base = parseFloat(pentagonAreaBaseText);
    console.log(base);
    // get the pentagon area 
    const area = 0.5 * properties * base ;
    console.log("The area of pentagon :", area);
    // showing the display in pentagon area 
    const areaSpan = document.getElementById('pentagon-area');
    areaSpan.innerText = area;
}
// Ellipse area calculate 
function calculateEllipseArea(){
    // get the ellipse ability 
    const ellipseAbilityInput = document.getElementById('ellipse-ability');
    const ellipseAbilityText = ellipseAbilityInput.value;
    const ability = parseFloat(ellipseAbilityText);
    
    // get the ellipse base 
    const ellipseBaseInput = document.getElementById('ellipse-base');
    const ellipseBaseText = ellipseBaseInput.value;
    const base = parseFloat(ellipseBaseText);
    
    // get the ellipse area
    const area = 3.1416 * ability * base;
    console.log("The area of ellipse :", area );

    // showing the display in ellipse area
    const areaSpan = document.getElementById('ellipse-area');
    areaSpan.innerText = area;
}