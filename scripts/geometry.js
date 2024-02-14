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