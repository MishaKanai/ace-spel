creating the worker file:
Paste the below contents into 
/lib/ace/mode/spel_worker.js
and run node Makefile.dryice.js

then copy the file /build/src/worker-spel.js
and paste it into public directory in app

```javascript
define(function(require, exports, module) {
    "use strict";
    const TsSpel = require('./spel_umd');
    console.log(TsSpel)
    var oop = require("../lib/oop");
    var Mirror = require("../worker/mirror").Mirror;
    // var parse = require('./spel/ts-spel').parse;
    var parse = TsSpel['parse'];
    // var parse = require("./json/json_parse");
    
    var SpelWorker = exports.SpelWorker = function(sender) {
        Mirror.call(this, sender);
        this.setTimeout(200);
    };
    
    oop.inherits(SpelWorker, Mirror);
    
    (function() {
    
        this.onUpdate = function() {
            var value = this.doc.getValue();
            var errors = [];
            console.log(value);
            try {
                var ast = parse(value);
                console.log(ast)
            } catch (e) {
                console.error(e);
                console.log(e.index)
                console.log(e.message)
                if (typeof e.index === 'number') {
                    var pos = this.doc.indexToPosition(e.index);
                    errors.push({
                        row: pos.row,
                        column: pos.column,
                        text: e.message,
                        type: "error"
                    });
                }
            }

            // if (!value.endsWith(';')) {
            //     var pos = this.doc.indexToPosition(value.length-1);
            //     console.log(pos);
            //     errors.push({
            //         row: pos.row,
            //         column: pos.column,
            //         text: "end the doc with a semicolon",
            //         type: "error"
            //     });
            // }
            // try {
            //     if (value)
            //         parse(value);
            // } catch (e) {
            //     var pos = this.doc.indexToPosition(e.at-1);
            //     errors.push({
            //         row: pos.row,
            //         column: pos.column,
            //         text: e.message,
            //         type: "error"
            //     });
            // }
            this.sender.emit("annotate", errors);
        };
    
    }).call(SpelWorker.prototype);
    
    });
    
```