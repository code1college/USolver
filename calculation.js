class QuadraticCalculation {
    static calculateStandard(a,b,c) {
        const negativeBS= -1 * b;
        const discriminantS = [(b * b)] - [(4 * a * c)];
        const sqrtInS = Math.sqrt(discriminantS);
    
        const xInt1S = (negativeBS + sqrtInS) / (2 * a)
        const xInt2S = (negativeBS - sqrtInS) / (2 * a)
        const vertexXS = (xInt1S + xInt2S) / 2
        //console.log(vertexXS ** 2);
        //const vertexYS = (a * (vertexXS ** 2)) + (b * vertexXS) + c;
        const vertexYS = (a * (vertexXS * vertexXS)) + (b * vertexXS) + Number(c);
        //console.log(a * vertexXS ** 2 + b * vertexXS);
        const yIntS = "(0, "+c+")";
        const axisOfSymmS = "x = "+vertexXS;
    
        if(discriminantS < 0 && a > 0) {
            const firstBS = b / a;
            const secondBS = (firstBS / 2) ** 2;
            const vertexYFinalS = c - (secondBS * a);
            const domainS = "-∞ < x < ∞";
            const rangeS = vertexYFinalS+" <= y < ∞";
    
            document.getElementById("yInterceptS").textContent = "Y Intercept: "+yIntS;
            document.getElementById("axisOfSymmS").textContent = "Axis of Symmetry: x = "+(firstBS * -1) / 2;
            document.getElementById("vertexStandard").textContent = "Vertex: ("+(firstBS * -1) / 2+", "+vertexYFinalS+")";
            document.getElementById("domainS").textContent = "Domain: "+domainS;
            document.getElementById("rangeS").textContent = "Range: "+rangeS;
            document.getElementById("standardS").textContent = "Standard: "+a+"x^2 + "+b+"x + "+c;
            document.getElementById("vertexS").textContent = "Vertex: "+a+"(x - "+(firstBS * -1) / 2+")^2 + "+vertexYFinalS;
        }
    
        else if(discriminantS < 0 && a < 0) {
            const firstBS = b / a;
            const secondBS = (firstBS / 2) ** 2;
            //const vertexYFinalS = c - (secondBS);
            const vertexYFinalS = c - (secondBS * a);
            const domainS = "-∞ < x < ∞";
            const rangeS = "-∞ < y <= "+vertexYFinalS;
    
            document.getElementById("yInterceptV").textContent = "Y Intercept: "+yIntS;
            document.getElementById("axisOfSymmS").textContent = "Axis of Symmetry: x = "+(firstBS * -1) / 2;
            document.getElementById("vertexStandard").textContent = "Vertex: ("+(firstBS * -1) / 2+", "+vertexYFinalS+")";
            document.getElementById("domainS").textContent = "Domain: "+domainS;
            document.getElementById("rangeS").textContent = "Range: "+rangeS;
            document.getElementById("standardS").textContent = "Standard: "+a+"x^2 + "+b+"x + "+c;
            document.getElementById("vertexS").textContent = "Vertex: "+a+"(x - "+(firstBS * -1) / 2+")^2 + "+vertexYFinalS;
        }
    
        else if(discriminantS == 0 && a > 0) {
            const domainS = "-∞ < x < ∞";
            const rangeS = vertexYS+" <= y < ∞";
    
            document.getElementById("xIntercept1S").textContent = "X Intercept: ("+xInt1S+", 0)";
            document.getElementById("yInterceptS").textContent = "Y Intercept: "+yIntS;
            document.getElementById("axisOfSymmS").textContent = "Axis of Symmetry: x = "+vertexXS;
            document.getElementById("vertexStandard").textContent = "Vertex: ("+vertexXS+", "+vertexYS+")";
            document.getElementById("domainS").textContent = "Domain: "+domainS;
            document.getElementById("rangeS").textContent = "Range: "+rangeS;
            document.getElementById("standardS").textContent = "Standard: "+a+"x^2 + "+b+"x + "+c;
            document.getElementById("vertexS").textContent = "Vertex: "+a+"(x - "+vertexXS+")^2 + "+vertexYS;
        }
    
        else if(discriminantS == 0 && a < 0) {
            const domainS = "-∞ < x < ∞";
            const rangeS = "-∞ < y <= "+vertexYS;
    
            document.getElementById("xIntercept1S").textContent = "X Intercept: ("+xInt1S+", 0)";
            document.getElementById("yInterceptS").textContent = "Y Intercept: "+yIntS;
            document.getElementById("axisOfSymmS").textContent = "Axis of Symmetry: x = "+vertexXS;
            document.getElementById("vertexStandard").textContent = "Vertex: ("+vertexXS+", "+vertexYS+")";
            document.getElementById("domainS").textContent = "Domain: "+domainS;
            document.getElementById("rangeS").textContent = "Range: "+rangeS;
            document.getElementById("standardS").textContent = "Standard: "+a+"x^2 + "+b+"x + "+c;
            document.getElementById("vertexS").textContent = "Vertex: "+a+"(x - "+vertexXS+")^2 + "+vertexYS;
        }
    
        if(a > 0 && discriminantS > 0) {
            const positive1S = "x > "+xInt1S;
            const positive2S = "x < "+xInt2S;
            const negativeS = xInt2S+" < x < "+xInt1S;
            const endBehaviorP1S = "X => ∞: Y => ∞";
            const endBehaviorN2S = "X => -∞: Y => ∞";
    
            const domainS = "-∞ < x < ∞";
            const rangeS = vertexYS+" <= y < ∞";
    
            document.getElementById("domainS").textContent = "Domain: "+domainS;
            document.getElementById("rangeS").textContent = "Range: "+rangeS;
            document.getElementById("positiveS").textContent = "Positive: "+positive1S+", "+positive2S;
            document.getElementById("negativeS").textContent = "Negative: "+negativeS;
            document.getElementById("increasingS").textContent = "Increasing: x > "+vertexXS;
            document.getElementById("decreasingS").textContent = "Decreasing: x < "+vertexXS;
            document.getElementById("enbHP1S").textContent = "End Behavior X: "+endBehaviorP1S;
            document.getElementById("enbHN2S").textContent = "End Behavior -X: "+endBehaviorN2S;
        }
    
        else if(a < 0 && discriminantS > 0) {
            const positiveS = xInt1S+" < x < "+xInt2S
            const negative1S = "x > "+xInt2S;
            const negative2S = "x < "+xInt1S;
            const endBehaviorP1S = "X => ∞: Y => -∞";
            const endBehaviorN2S = "X => -∞: Y => -∞";
    
            const domainS = "-∞ < x < ∞";
            const rangeS = "-∞ < y <= "+vertexYS;
    
            document.getElementById("domainS").textContent = "Domain: "+domainS;
            document.getElementById("rangeS").textContent = "Range: "+rangeS;
            document.getElementById("positiveS").textContent = "Positive: "+positiveS;
            document.getElementById("negativeS").textContent = "Negative: "+negative1S+", "+negative2S;
            document.getElementById("increasingS").textContent = "Increasing: x < "+vertexXS;
            document.getElementById("decreasingS").textContent = "Decreasing: x > "+vertexXS;
            document.getElementById("enbHP1S").textContent = "End Behavior X: "+endBehaviorP1S;
            document.getElementById("enbHN2S").textContent = "End Behavior -X: "+endBehaviorN2S;
        }
    
        if(discriminantS > 0) {
            document.getElementById("vertexStandard").textContent = "Vertex: ("+vertexXS+", "+vertexYS+")";
            document.getElementById("xIntercept1S").textContent = "X Intercept: ("+xInt1S+", 0)";
            document.getElementById("xIntercept2S").textContent = "X Intercept: ("+xInt2S+", 0)";
            document.getElementById("yInterceptS").textContent = "Y Intercept: "+yIntS;
            document.getElementById("axisOfSymmS").textContent = "Axis of Symmetry: "+axisOfSymmS;
        
            document.getElementById("standardS").textContent = "Standard: "+a+"x^2 + "+b+"x + "+c;
            document.getElementById("factoredS").textContent = "Factored: "+a+"(x - "+xInt1S+") * (x - "+xInt2S+")";
            document.getElementById("vertexS").textContent = "Vertex: "+a+"(x - "+vertexXS+")^2 + "+vertexYS;
        }
    }

    static calculateFactored(a1, x1, x2) {
        const addXINTF = (x1 + x2) * -1;
        const multiplyFinalF = x1 * x2;
    
        const bValueF = addXINTF * a1;
        const cValueF = multiplyFinalF * a1
    
        const vertexXF = (x1 + x2) / 2
        const vertexYF = (a1 * (vertexXF * vertexXF)) + (bValueF * vertexXF) + cValueF;
    
        const yIntF = "(0, "+cValueF+")";
        const axisOfSymmF = "x = "+vertexXF;
    
        if(a1 > 0) {
            const positive1F = "x > "+x1;
            const positive2F = "x < "+x2;
            const negativeF = x2+" < x < "+x1;
            const endBehaviorP1F = "X => ∞: Y => ∞";
            const endBehaviorN2F = "X => -∞: Y => ∞";
    
            const domainF = "-∞ < x < ∞";
            const rangeF = vertexYF+" <= y < ∞";
    
            document.getElementById("domainF").textContent = "Domain: "+domainF;
            document.getElementById("rangeF").textContent = "Range: "+rangeF;
            document.getElementById("positiveF").textContent = "Positive: "+positive1F+", "+positive2F;
            document.getElementById("negativeF").textContent = "Negative: "+negativeF;
            document.getElementById("increasingF").textContent = "Increasing: x > "+vertexXF;
            document.getElementById("decreasingF").textContent = "Decreasing: x < "+vertexXF;
            document.getElementById("enbHP1F").textContent = "End Behavior X: "+endBehaviorP1F;
            document.getElementById("enbHN2F").textContent = "End Behavior -X: "+endBehaviorN2F;
        }
    
        else if(a1 < 0) {
            const positiveF = x2+" < x < "+x1
            const negative1F = "x > "+x1;
            const negative2F = "x < "+x2;
            const endBehaviorP1F = "X => ∞: Y => -∞";
            const endBehaviorN2F = "X => -∞: Y => -∞";
    
            const domainF = "-∞ < x < ∞";
            const rangeF = "-∞ < y <= "+vertexYF;
            
            document.getElementById("domainF").textContent = "Domain: "+domainF;
            document.getElementById("rangeF").textContent = "Range: "+rangeF;
            document.getElementById("positiveF").textContent = "Positive: "+positiveF;
            document.getElementById("negativeF").textContent = "Negative: "+negative1F+", "+negative2F;
            document.getElementById("increasingF").textContent = "Increasing: x < "+vertexXF;
            document.getElementById("decreasingF").textContent = "Decreasing: x > "+vertexXF;
            document.getElementById("enbHP1F").textContent = "End Behavior X: "+endBehaviorP1F;
            document.getElementById("enbHN2F").textContent = "End Behavior -X: "+endBehaviorN2F;
        }
    
        document.getElementById("xIntercept1F").textContent = "X Intercept: ("+x1+", 0)";
        document.getElementById("xIntercept2F").textContent = "X Intercept: ("+x2+", 0)";
        document.getElementById("yInterceptF").textContent = "Y Intercept: "+yIntF;
        document.getElementById("axisOfSymmF").textContent = "Axis of Symmetry: "+axisOfSymmF;
    
        document.getElementById("vertexFactored").textContent = "Vertex: ("+vertexXF+", "+vertexYF+")";
        document.getElementById("standardF").textContent = "Standard: "+a1+"x^2 + "+bValueF+"x + "+cValueF;
        document.getElementById("factoredF").textContent = "Factored: "+a1+"(x - "+x1+") * (x - "+x2+")";
        document.getElementById("vertexF").textContent = "Vertex: "+a1+"(x - "+vertexXF+")^2 + "+vertexYF;
    }

    static calculateVertex(a2, vx, vy) {
        const addXINTV = (vx + vx) * -1;
        const multiplyFinalV = vx * vx;

        const bValueV = addXINTV * a2;
        const cValueV = (multiplyFinalV * a2) + vy;

        const negativeBV= -1 * bValueV;
        const discriminantV = [(bValueV * bValueV)] - [(4 * a2 * cValueV)];
        const sqrtInV = Math.sqrt(discriminantV);

        const xInt1V = (negativeBV + sqrtInV) / (2 * a2);
        const xInt2V = (negativeBV - sqrtInV) / (2 * a2);

        const yIntV = "(0, "+cValueV+")";
        const axisOfSymmV = "x = "+vx;

        if(discriminantV < 0 && a2 > 0) {
            const domainV = "-∞ < x < ∞";
            const rangeV = vy+" <= y < ∞";

            document.getElementById("yInterceptV").textContent = "Y Intercept: "+yIntV;
            document.getElementById("vertexVertex").textContent = "Vertex: ("+vx+", "+vy+")";
            document.getElementById("axisOfSymmV").textContent = "Axis of Symmetry: x = "+vx;
            document.getElementById("domainV").textContent = "Domain: "+domainV;
            document.getElementById("rangeV").textContent = "Range: "+rangeV;
            document.getElementById("standardV").textContent = "Standard: "+a2+"x^2 + "+bValueV+"x + "+cValueV;
            document.getElementById("vertexV").textContent = "Vertex: "+a2+"(x - "+vx+")^2 + "+vy;
        }

        else if(discriminantV < 0 && a2 < 0) {
            const domainV = "-∞ < x < ∞";
            const rangeV = "-∞ < y <= "+vy;

            document.getElementById("vertexVertex").textContent = "Vertex: ("+vx+", "+vy+")";
            document.getElementById("axisOfSymmV").textContent = "Axis of Symmetry: x = "+vx;
            document.getElementById("standardV").textContent = "Standard: "+a2+"x^2 + "+bValueV+"x + "+cValueV;
            document.getElementById("vertexV").textContent = "Vertex: "+a2+"(x - "+vx+")^2 + "+vy;
            document.getElementById("yInterceptV").textContent = "Y Intercept: "+yIntV;
            document.getElementById("domainV").textContent = "Domain: "+domainV;
            document.getElementById("rangeV").textContent = "Range: "+rangeV;
        }

        else if(discriminantV == 0 && a2 > 0) {
            const domainV = "-∞ < x < ∞";
            const rangeV = vy+" <= y < ∞";

            document.getElementById("xIntercept1V").textContent = "X Intercept: ("+xInt1V+", 0)";
            document.getElementById("yInterceptV").textContent = "Y Intercept: "+yIntV;
            document.getElementById("vertexVertex").textContent = "Vertex: ("+vx+", "+vy+")";
            document.getElementById("axisOfSymmV").textContent = "Axis of Symmetry: x = "+vx;
            document.getElementById("domainV").textContent = "Domain: "+domainV;
            document.getElementById("rangeV").textContent = "Range: "+rangeV;
            document.getElementById("standardV").textContent = "Standard: "+a2+"x^2 + "+bValueV+"x + "+cValueV;
            document.getElementById("vertexV").textContent = "Vertex: "+a2+"(x - "+vx+")^2 + "+vy;
        }

        else if(discriminantV == 0 && a2 < 0) {
            const domainV = "-∞ < x < ∞";
            const rangeV = "-∞ < y <= "+vy;
    
            document.getElementById("xIntercept1V").textContent = "X Intercept: ("+xInt1V+", 0)";
            document.getElementById("yInterceptV").textContent = "Y Intercept: "+yIntV;
            document.getElementById("vertexVertex").textContent = "Vertex: ("+vx+", "+vy+")";
            document.getElementById("axisOfSymmV").textContent = "Axis of Symmetry: x = "+vx;
            document.getElementById("domainV").textContent = "Domain: "+domainV;
            document.getElementById("rangeV").textContent = "Range: "+rangeV;
            document.getElementById("standardV").textContent = "Standard: "+a2+"x^2 + "+bValueV+"x + "+cValueV;
            document.getElementById("vertexV").textContent = "Vertex: "+a2+"(x - "+vx+")^2 + "+vy;
        }

        if(a2 > 0 && discriminantV > 0) {
            const positive1V = "x > "+xInt1V;
            const positive2V = "x < "+xInt2V;
            const negativeV = xInt2V+" < x < "+xInt1V;
            const endBehaviorP1V = "X => ∞: Y => ∞";
            const endBehaviorN2V = "X => -∞: Y => ∞";

            const domainV = "-∞ < x < ∞";
            const rangeV = vy+" <= y < ∞";

            document.getElementById("domainV").textContent = "Domain: "+domainV;
            document.getElementById("rangeV").textContent = "Range: "+rangeV;
            document.getElementById("positiveV").textContent = "Positive: "+positive1V+", "+positive2V;
            document.getElementById("negativeV").textContent = "Negative: "+negativeV;
            document.getElementById("increasingV").textContent = "Increasing: x > "+vx;
            document.getElementById("decreasingV").textContent = "Decreasing: x < "+vx;
            document.getElementById("enbHP1V").textContent = "End Behavior X: "+endBehaviorP1V;
            document.getElementById("enbHN2V").textContent = "End Behavior -X: "+endBehaviorN2V;
        }

        else if(a2 < 0 && discriminantV > 0) {
            const positiveV = xInt1V+" < x < "+xInt2V
            const negative1V = "x > "+xInt2V;
            const negative2V = "x < "+xInt1V;
            const endBehaviorP1V = "X => ∞: Y => -∞";
            const endBehaviorN2V = "X => -∞: Y => -∞"

            const domainV = "-∞ < x < ∞";
            const rangeV = "-∞ < y <= "+vy;

            document.getElementById("domainV").textContent = "Domain: "+domainV;
            document.getElementById("rangeV").textContent = "Range: "+rangeV;
            document.getElementById("positiveV").textContent = "Positive: "+positiveV;
            document.getElementById("negativeV").textContent = "Negative: "+negative1V+", "+negative2V;
            document.getElementById("increasingV").textContent = "Increasing: x < "+vx;
            document.getElementById("decreasingV").textContent = "Decreasing: x > "+vx;
            document.getElementById("enbHP1V").textContent = "End Behavior X: "+endBehaviorP1V;
            document.getElementById("enbHN2V").textContent = "End Behavior -X: "+endBehaviorN2V;
        }

        if(discriminantV > 0) {
            document.getElementById("xIntercept1V").textContent = "X Intercept: ("+xInt1V+", 0)";
            document.getElementById("xIntercept2V").textContent = "X Intercept: ("+xInt2V+", 0)";
            document.getElementById("yInterceptV").textContent = "Y Intercept: "+yIntV;
            document.getElementById("axisOfSymmV").textContent = "Axis of Symmetry: "+axisOfSymmV;

            document.getElementById("vertexVertex").textContent = "Vertex: ("+vx+", "+vy+")";
            document.getElementById("standardV").textContent = "Standard: "+a2+"x^2 + "+bValueV+"x + "+cValueV;
            document.getElementById("factoredV").textContent = "Factored: "+a2+"(x - "+xInt1V+") * (x - "+xInt2V+")";
            document.getElementById("vertexV").textContent = "Vertex: "+a2+"(x - "+vx+")^2 + "+vy;
        }
    }
}