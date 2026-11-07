const table_string = 
    `Date; exercises
    01.11.; pushups, pullups, crunches
    03.11.; deadlifts, pushups
    06.11.; pushups, crunches, running
    08.11.; crawling, pullups
    `

    function divideString(longString) {
        return longString
            .split("\n")
            .map(line => line.trim())
            .filter(line => line.length > 0);
    }

    function test_divideString() {
        const test_string = 
        `bla
        blub`;
        const result = divideString(test_string);
        if (!Array.isArray(result)) {
            console.log("ERROR: Return type ist kein Array");
            return;    
        } else if (result.length !== 2) {
            console.log("ERROR: länge passt nicht");
        } else if (result[0] !== "bla") {
            console.log("ERROR, erstes entry nicht bla");
        } else if (result[1] !== "blub") {
            console.log("ERROR, zweites entry nicht blub");
        }
        console.log("kein Fehler");
    }

    test_divideString();