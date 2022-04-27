const changeColor = () => {
    let color = prompt('What color?: ');
    document.getElementById("panel1").style.backgroundColor = color;
};

const changeTitle = () => {
    let title = prompt('New title: ');
    document.querySelector("h1").innerText = title;
}

const addImage = () => {
    const image_html = '<img src="https://cdn.mos.cms.futurecdn.net/VSy6kJDNq2pSXsCzb6cvYF.jpg" />';
    document.getElementById("panel1").innerHTML += image_html;
};

const clearDiv = () => {
    document.getElementById("panel1").innerHTML = "";
};


// attach event handlers:
// document.getElementById("color_button").onclick = changeColor;
// document.getElementById("title_button").onclick = changeTitle;
// document.getElementById("cat_button").onclick = addImage;
// document.getElementById("clear_button").onclick = clearDiv;
