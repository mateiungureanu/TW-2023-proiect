function onLoadHandler3() {
    document.addEventListener("DOMContentLoaded", function () {
        let computedFigureStyle = getComputedStyle(document.querySelector(".maps figure"));
        let originalFigureStyles = {
            backgroundColor: computedFigureStyle.backgroundColor,
            border: computedFigureStyle.border,
            borderRadius: computedFigureStyle.borderRadius,
            padding: computedFigureStyle.padding,
            margin: computedFigureStyle.margin,
            textAlign: computedFigureStyle.textAlign
        };
        let computedTypesStyle = getComputedStyle(document.querySelector(".types"));
        let originalTypesStyles = {
            display: computedTypesStyle.display,
            justifyContent: computedTypesStyle.justifyContent
        };
        let computedMapsStyle = getComputedStyle(document.querySelector(".maps"));
        let originalMapsStyles = {
            display: computedMapsStyle.display,
            gridTemplateColumns: computedMapsStyle.gridTemplateColumns,
            justifyContent: computedMapsStyle.justifyContent
        };
        document.querySelector("#filter").onsubmit = function (event) {
            event.preventDefault();
            let tip = document.querySelector("#maptype").value;
            document.querySelector(".maps").style.display = "block";
            if (tip == "All") {
                document.querySelectorAll(".imagemaps").forEach(function (img) {
                    img.style.width = "100%";
                });
                document.querySelector(".types").style.display = "none";
                document.querySelector(".escort").style.display = "block";
                document.querySelector(".hybrid").style.display = "block";
                document.querySelector(".control").style.display = "block";
                document.querySelector(".push").style.display = "block";
                document.querySelector(".flashpoint").style.display = "block";
                document.querySelector(".assault").style.display = "block";
                document.querySelector(".arcade").style.display = "block";
            }
            if (tip == "Escort") {
                document.querySelectorAll(".escort img").forEach(function (img) {
                    img.style.width = "100%";
                });
                document.querySelector(".types").style.display = "none";
                document.querySelector(".escort").style.display = "block";
                document.querySelector(".hybrid").style.display = "none";
                document.querySelector(".control").style.display = "none";
                document.querySelector(".push").style.display = "none";
                document.querySelector(".flashpoint").style.display = "none";
                document.querySelector(".assault").style.display = "none";
                document.querySelector(".arcade").style.display = "none";
            }
            if (tip == "Hybrid") {
                document.querySelectorAll(".hybrid img").forEach(function (img) {
                    img.style.width = "100%";
                });
                document.querySelector(".types").style.display = "none";
                document.querySelector(".escort").style.display = "none";
                document.querySelector(".hybrid").style.display = "block";
                document.querySelector(".control").style.display = "none";
                document.querySelector(".push").style.display = "none";
                document.querySelector(".flashpoint").style.display = "none";
                document.querySelector(".assault").style.display = "none";
                document.querySelector(".arcade").style.display = "none";
            }
            if (tip == "Control") {
                document.querySelectorAll(".control img").forEach(function (img) {
                    img.style.width = "100%";
                });
                document.querySelector(".types").style.display = "none";
                document.querySelector(".escort").style.display = "none";
                document.querySelector(".hybrid").style.display = "none";
                document.querySelector(".control").style.display = "block";
                document.querySelector(".push").style.display = "none";
                document.querySelector(".flashpoint").style.display = "none";
                document.querySelector(".assault").style.display = "none";
                document.querySelector(".arcade").style.display = "none";
            }
            if (tip == "Push") {
                document.querySelectorAll(".push img").forEach(function (img) {
                    img.style.width = "100%";
                });
                document.querySelector(".types").style.display = "none";
                document.querySelector(".escort").style.display = "none";
                document.querySelector(".hybrid").style.display = "none";
                document.querySelector(".control").style.display = "none";
                document.querySelector(".push").style.display = "block";
                document.querySelector(".flashpoint").style.display = "none";
                document.querySelector(".assault").style.display = "none";
                document.querySelector(".arcade").style.display = "none";
            }
            if (tip == "Flashpoint") {
                document.querySelectorAll(".flashpoint img").forEach(function (img) {
                    img.style.width = "100%";
                });
                document.querySelector(".types").style.display = "none";
                document.querySelector(".escort").style.display = "none";
                document.querySelector(".hybrid").style.display = "none";
                document.querySelector(".control").style.display = "none";
                document.querySelector(".push").style.display = "none";
                document.querySelector(".flashpoint").style.display = "block";
                document.querySelector(".assault").style.display = "none";
                document.querySelector(".arcade").style.display = "none";
            }
            if (tip == "Assault") {
                document.querySelectorAll(".assault img").forEach(function (img) {
                    img.style.width = "100%";
                });
                document.querySelector(".types").style.display = "none";
                document.querySelector(".escort").style.display = "none";
                document.querySelector(".hybrid").style.display = "none";
                document.querySelector(".control").style.display = "none";
                document.querySelector(".push").style.display = "none";
                document.querySelector(".flashpoint").style.display = "none";
                document.querySelector(".assault").style.display = "block";
                document.querySelector(".arcade").style.display = "none";
            }
            if (tip == "Arcade") {
                document.querySelectorAll(".arcade img").forEach(function (img) {
                    img.style.width = "100%";
                });
                document.querySelector(".types").style.display = "none";
                document.querySelector(".escort").style.display = "none";
                document.querySelector(".hybrid").style.display = "none";
                document.querySelector(".control").style.display = "none";
                document.querySelector(".push").style.display = "none";
                document.querySelector(".flashpoint").style.display = "none";
                document.querySelector(".assault").style.display = "none";
                document.querySelector(".arcade").style.display = "block";
            }
        };
        document.addEventListener("click", function (event) {
            event.stopPropagation();
            let originalTypesStyle = originalTypesStyles;
            document.querySelector(".types").style.display = originalTypesStyle.display;
            document.querySelector(".types").style.justifyContent = originalTypesStyle.justifyContent;
            let originalMapsStyle = originalMapsStyles;
            document.querySelector(".maps").style.display = originalMapsStyle.display;
            document.querySelector(".maps").style.gridTemplateColumns = originalMapsStyle.gridTemplateColumns;
            document.querySelector(".maps").style.justifyContent = originalMapsStyle.justifyContent;
            document.querySelectorAll(".maps div").forEach(function (elem) {
                elem.style.display = "block";
            });
            document.querySelectorAll(".maps figure").forEach(function (figure) {
                let originalFigureStyle = originalFigureStyles;
                figure.style.backgroundColor = originalFigureStyle.backgroundColor;
                figure.style.border = originalFigureStyle.border;
                figure.style.borderRadius = originalFigureStyle.borderRadius;
                figure.style.padding = originalFigureStyle.padding;
                figure.style.margin = originalFigureStyle.margin;
                figure.style.textAlign = originalFigureStyle.textAlign;
            });
            document.querySelectorAll(".imagemaps").forEach(function (img) {
                img.style.maxWidth = "100%";
                img.style.height = "auto";
                img.style.width = "";
            });
        });
    });
}

onLoadHandler3();