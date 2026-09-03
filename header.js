document.addEventListener("DOMContentLoaded", function () {
    const headerHTML = `
        <nav class="navbar">
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="cat1.html">Cat1</a></li>
                <li><a href="cat2.html">Cat2</a></li>
                <li><a href="cat3.html">Cat3</a></li>
                <li><a href="cat4.html">Cat4</a></li>
                <li><a href="cat5.html">Cat5</a></li>
                <li><a href="cat6.html">Cat6</a></li>
                <li><a href="about.html">About</a></li>
            </ul>
        </nav>
    `;
    
    // Inserts the header at the top of the <body>
    document.body.insertAdjacentHTML("afterbegin", headerHTML);
});
