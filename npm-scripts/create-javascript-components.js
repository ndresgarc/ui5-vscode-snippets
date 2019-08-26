
var fs = require('fs');

var jsSnippets = {};

var ui5Data = JSON.parse(fs.readFileSync('data/1.44.12-api.json', 'utf8'));

ui5Data.symbols.forEach(symbol => {
    
    if (symbol.kind === 'class') {

        // TODO: Create snippet body dynamically reading all properties of the component

        jsSnippets[symbol.name] = {
            prefix: ['ui5-' + symbol.basename.toLowerCase(), symbol.name],
            body: [
                "var ui5" + symbol.basename + " = new " + symbol.name + "({",
                "\t...",
                "});"
            ],
            description: 'New ' + symbol.name
        };

    }

});

fs.writeFileSync('snippets/javascript-components.json', JSON.stringify(jsSnippets, null, 4));