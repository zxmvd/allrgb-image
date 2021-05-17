export const renderAllRgbImg =()=>{

    const canvas = document.getElementById('all_color_img');
    // getting context of the image
    let width = 256,
        height = 128,
        context = canvas.getContext('2d'),
        data = context.getImageData(0, 0, width, height);

    canvas.style.imageRendering = "pixelated";
    canvas.width = width;
    canvas.height = height;

    let colors = [];
    let iterationFactor = 8;
    //Iterate for color steps
    for (let r = iterationFactor; r <= 256; r += iterationFactor) {
        for (let g = iterationFactor; g <= 256; g += iterationFactor) {
            for (let b = iterationFactor; b <= 256; b += iterationFactor) {
                colors.push({ r, g, b })
            }
        }
    }  
    
    // Assign colors to pixels property data
    const putData =(arr, width, coord)=>{
        let colorNumber = coord.x + width * coord.y
        let pos = colorNumber * 4
        arr[pos] = colors[colorNumber]['r'];
        arr[pos + 1] = colors[colorNumber]['g'];
        arr[pos + 2] = colors[colorNumber]['b'];
        arr[pos + 3] = 0xff;            
    }

    for (let i = 0; i < width; i++) {
        for (let j = 0; j < height; j++) {
            let p = {x: i, y: j};
            putData(data.data, width, p);
        }
    }
    // put image data in the context
    context.putImageData(data, 0, 0);

}

