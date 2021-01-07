const calculateAccess = require('../scripts/outpatientAccess/calculateAccess.js');

//set up all tests for the disableOPM7 functions
QUnit.module.only('calculateAccess');

var prevSelected = [];
var currSelected = [];
//tests

QUnit.test("No courses selected at all returns no message", assert => {
    prevSelected = [];
    currSelected = [];
    assert.equal(calculateAccess(prevSelected, currSelected), "");
});


