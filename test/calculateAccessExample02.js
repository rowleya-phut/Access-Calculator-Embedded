const calculateAccess = require('../scripts/outpatientAccess/calculateAccess.js');

//set up all tests for the disableOPM7 functions
QUnit.module.only('calculateAccess');

var prevSelected = [];
var currSelected = [];
//tests

QUnit.test("prev array OPM3, current array OPM5 + OPM7 returns OP2 Level 3 Update", assert => {
    prevSelected = ["OPM3"];
    currSelected = ["OPM5", "OPM7"];
    assert.equal(calculateAccess(prevSelected, currSelected), "OP2 Level 3 Update");
});


