

/* ***** BEGIN LICENSE BLOCK *****
 * Distributed under the BSD license:
 *
 * Copyright (c) 2012, Ajax.org B.V.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *     * Redistributions of source code must retain the above copyright
 *       notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above copyright
 *       notice, this list of conditions and the following disclaimer in the
 *       documentation and/or other materials provided with the distribution.
 *     * Neither the name of Ajax.org B.V. nor the
 *       names of its contributors may be used to endorse or promote products
 *       derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL AJAX.ORG B.V. BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 * ***** END LICENSE BLOCK ***** */

/* This file was autogenerated from ../../src/alda.JSON-tmLanguage (uuid: ) */
/****************************************************************************************
 * IT MIGHT NOT BE PERFECT ...But it's a good start from an existing *.tmlanguage file. *
 * fileTypes                                                                            *
 ****************************************************************************************/

define(function(require, exports, module) {
    "use strict";
    
    var oop = require("../lib/oop");
    var TextHighlightRules = require("./text_highlight_rules").TextHighlightRules;
    
    var AldaHighlightRules = function() {
        // regexp must not have capturing parentheses. Use (?:) instead.
        // regexps are ordered -> the first match is used
    
        this.$rules = {
            pitch: [{
                token: "variable.parameter.operator.pitch.alda",
                regex: /(?:[+\-]+|\=)/
            }, {
                token: "",
                regex: "",
                next: "timing"
            }],
            timing: [{
                token: "string.quoted.operator.timing.alda",
                regex: /\d+(?:s|ms)?/
            }, {
                token: "",
                regex: "",
                next: "start"
            }],
            start: [{
                token: [
                    "constant.language.instrument.alda",
                    "constant.language.instrument.alda",
                    "meta.part.call.alda",
                    "storage.type.nickname.alda",
                    "meta.part.call.alda"
                ],
                regex: /^([a-zA-Z]{2}[\w\-+\'()]*)((?:\s*\/\s*[a-zA-Z]{2}[\w\-+\'()]*)*)(?:(\s*)(\"[a-zA-Z]{2}[\w\-+\'()]*\"))?(\s*:)/
            }, {
                token: [
                    "text",
                    "entity.other.inherited-class.voice.alda",
                    "text"
                ],
                regex: /^(\s*)(V\d+)(:)/
            }, {
                token: "comment.line.number-sign.alda",
                regex: /#.*$/
            }, {
                token: "entity.name.function.pipe.measure.alda",
                regex: /\|/
            }, {
                token: "comment.block.inline.alda",
                regex: /\(comment\b/,
                push: [{
                    token: "comment.block.inline.alda",
                    regex: /\)/,
                    next: "pop"
                }, {
                    defaultToken: "comment.block.inline.alda"
                }]
            }, {
                token: "entity.name.function.marker.alda",
                regex: /%[a-zA-Z]{2}[\w\-+\'()]*/
            }, {
                token: "entity.name.function.at-marker.alda",
                regex: /@[a-zA-Z]{2}[\w\-+\'()]*/
            }, {
                token: "keyword.operator.octave-change.alda",
                regex: /\bo\d+\b/
            }, {
                token: "keyword.operator.octave-shift.alda",
                regex: /[><]/
            }, {
                token: "keyword.operator.repeat.alda",
                regex: /\*\s*\d+/
            }, {
                token: "string.quoted.operator.timing.alda",
                regex: /[.]|r\d*(?:s|ms)?/
            },{
                token: "text",
                regex: /([cdefgab])/,
                next: "pitch"
            }, {
                token: "string.quoted.operator.timing.alda",
                regex: /~/,
                next: "timing"
            }, {
                token: "punctuation.section.embedded.cram.alda",
                regex: /\}/,
                next: "timing"
            }, {
                token: "constant.numeric.subchord.alda",
                regex: /\//
            }, {
                todo: {
                    token: "punctuation.section.embedded.cram.alda",
                    regex: /\{/,
                    push: [{
                        token: "punctuation.section.embedded.cram.alda",
                        regex: /\}/,
                        next: "pop"
                    }, {
                        include: "$self"
                    }]
                }
            }, {
                todo: {
                    token: "keyword.control.sequence.alda",
                    regex: /\[/,
                    push: [{
                        token: "keyword.control.sequence.alda",
                        regex: /\]/,
                        next: "pop"
                    }, {
                        include: "$self"
                    }]
                }
            }, {
                token: "meta.inline.clojure.alda",
                regex: /\(/,
                push: [{
                    token: "meta.inline.clojure.alda",
                    regex: /\)/,
                    next: "pop"
                }, {
                    include: "source.clojure"
                }, {
                    defaultToken: "meta.inline.clojure.alda"
                }]
            }]
        };
        
        this.normalizeRules();
    };
    
    AldaHighlightRules.metaData = {
        scopeName: "source.alda",
        fileTypes: ["alda"],
        name: "Alda"
    };
    
    
    oop.inherits(AldaHighlightRules, TextHighlightRules);
    
    exports.AldaHighlightRules = AldaHighlightRules;
    });