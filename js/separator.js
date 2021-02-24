function onresize(e) { 
    let projectSeparator = document.getElementById("projectSeparator");
    let projectSectionTitle = document.getElementById("sectionTitle1").offsetWidth;
 
    let aboutSeparator = document.getElementById("aboutSeparator");
    let aboutSectionTitle = document.getElementById("sectionTitle2").offsetWidth;

    projectSeparator.style.width = projectSectionTitle+"px";
    aboutSeparator.style.width = aboutSectionTitle+"px";
    
 }

 window.addEventListener("resize", onresize);
 window.addEventListener("load", onresize);
