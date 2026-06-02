const savedEquationSFV = new Array();

function main() {
    const loadedStandard = localStorage.getItem("standardEq");
    const loadedFactored = localStorage.getItem("factoredEq");
    const loadedVertex = localStorage.getItem("vertexEq");

    if(loadedStandard || loadedFactored || loadedVertex) {
        savedEquationSFV.push(loadedStandard, loadedFactored, loadedVertex);
        document.getElementById("savedEquations").textContent = "["+savedEquationSFV+"]"
    }
}

function calculateFromStandard() {
    const aValueS = strToNum(getValue(document.getElementById("aInputS")));
    const bValueS = strToNum(getValue(document.getElementById("bInputS")));
    const cValueS = strToNum(getValue(document.getElementById("cInputS")));

    QuadraticCalculation.calculateStandard(aValueS, bValueS, cValueS);
}

function calculateFromFactored() {
    const aValueF = strToNum(getValue(document.getElementById("aInputF")));
    const xInt1F = strToNum(getValue(document.getElementById("xInt1")));
    const xInt2F = strToNum(getValue(document.getElementById("xInt2")));

    QuadraticCalculation.calculateFactored(aValueF, xInt1F, xInt2F);
}

function calculateFromVertex() {
    const aValueV = strToNum(getValue(document.getElementById("aInputV")));
    const vertexXV = strToNum(getValue(document.getElementById("vertexX")));
    const vertexYV = strToNum(getValue(document.getElementById("vertexY")));

    QuadraticCalculation.calculateVertex(aValueV, vertexXV, vertexYV);
}

function saveStandard() {
    const savedEquationS = getValue(document.getElementById("aInputS")) + "x^2 + " + getValue(document.getElementById("bInputS")) +"x + " + getValue(document.getElementById("cInputS"));
    savedEquationSFV.push(savedEquationS);
    document.getElementById("savedEquations").textContent = "["+savedEquationSFV+"]"
    localStorage.setItem("standardEq", savedEquationS);
}

function saveFactored() {
    const savedEquationF = getValue(document.getElementById("aInputF")) + "(x - " + getValue(document.getElementById("xInt1")) + ")" + "(x - " + getValue(document.getElementById("xInt2")) + ")";
    savedEquationSFV.push(savedEquationF);
    document.getElementById("savedEquations").textContent = "["+savedEquationSFV+"]"
    localStorage.setItem("factoredEq", savedEquationF);
}

function saveVertex() {
    const savedEquationV = getValue(document.getElementById("aInputV")) + "(x - " + getValue(document.getElementById("vertexX")) +")^2 + " + getValue(document.getElementById("vertexY"));
    savedEquationSFV.push(savedEquationV);
    document.getElementById("savedEquations").textContent = "["+savedEquationSFV+"]"
    localStorage.setItem("vertexEq", savedEquationV);
}

function deleteEquations() {
    localStorage.clear();
    document.getElementById("savedEquations").textContent = "";
}

function strToNum(str) {
    return Number(str);
}

function getValue(thing) {
    return thing.value;
}