const calculateAccess = require('C:\xampp\htdocs\Access-Calculator-Embedded\scripts\outpatientAccess\calculateAccess.js');

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

//"prev array not empty, current array empty returns no message"
QUnit.test("prev array OPM3, current array empty returns no message", assert => {
    prevSelected = ["OPM3"];
    currSelected = [];
    assert.equal(calculateAccess(prevSelected, currSelected), "");
});

QUnit.test("prev array OPM5, current array empty returns no message", assert => {
    prevSelected = ["OPM5"];
    currSelected = [];
    assert.equal(calculateAccess(prevSelected, currSelected), "");
});

QUnit.test("prev array OPM3 + OPM5, current array empty returns no message", assert => {
    prevSelected = ["OPM3","OPM5"];
    currSelected = [];
    assert.equal(calculateAccess(prevSelected, currSelected), "");
});

QUnit.test("prev array OPM3 + OPM5 + OPM7, current array empty returns no message", assert => {
    prevSelected = ["OPM3","OPM5", "OPM7"];
    currSelected = [];
    assert.equal(calculateAccess(prevSelected, currSelected), "");
});

QUnit.test("prev array OPM5 + OPM7, current array empty returns no message", assert => {
    prevSelected = ["OPM5", "OPM7"];
    currSelected = [];
    assert.equal(calculateAccess(prevSelected, currSelected), "");
});

//prev array includes OPM3 + current array not empty

QUnit.test("prev array OPM3, current array OPM5 returns OP2 Level 2 Update", assert => {
    prevSelected = ["OPM3"];
    currSelected = ["OPM5"];
    assert.equal(calculateAccess(prevSelected, currSelected), "OP2 Level 2 Update");
});

QUnit.test("prev array OPM3, current array OPM5 + OPM7 returns OP2 Level 3 Update", assert => {
    prevSelected = ["OPM3"];
    currSelected = ["OPM5", "OPM7"];
    assert.equal(calculateAccess(prevSelected, currSelected), "OP2 Level 3 Update");
});

//prev array includes OPM5 + current array not empty
QUnit.test("prev array OPM5, current array OPM3 returns OP3 Level 3.  CMG/CMH denied. Update", assert => {
    prevSelected = ["OPM5"];
    currSelected = ["OPM3"];
    assert.equal(calculateAccess(prevSelected, currSelected), "OP3 Level 3.  CMG/CMH denied. Update");
});

QUnit.test("prev array OPM5, current array OPM3 + OPM7 returns OP3 Level 3 Update", assert => {
    prevSelected = ["OPM5"];
    currSelected = ["OPM3", "OPM7"];
    assert.equal(calculateAccess(prevSelected, currSelected), "OP3 Level 3 Update");
});

QUnit.test("prev array OPM5, current array OPM7 returns OP3 Level 2 Update", assert => {
    prevSelected = ["OPM5"];
    currSelected = ["OPM7"];
    assert.equal(calculateAccess(prevSelected, currSelected), "OP3 Level 2 Update");
});

//prev array includes OPM3 + OPM5 + current array includes OPM7

QUnit.test("prev array OPM3 + OPM5, current array OPM7 returns OP2 Level 3 Update", assert => {
    prevSelected = ["OPM3","OPM5"];
    currSelected = ["OPM7"];
    assert.equal(calculateAccess(prevSelected, currSelected), "OP2 Level 3 Update");
});

//prev array includes OPM5 & OPM7 + current array not empty
QUnit.test("prev array OPM5 + OPM7, current array OPM3 returns OP3 Level 3.  OP3 Level 3 Update", assert => {
    prevSelected = ["OPM5", "OPM7"];
    currSelected = ["OPM3"];
    assert.equal(calculateAccess(prevSelected, currSelected), "OP3 Level 3 Update");
});

//prev array empty + current array not empty (includes OPM3)
QUnit.test("prev array empty, current includes OPM3 - OP2 Level 1 Add.  OPR Level 2 Add", assert => {
    prevSelected = [];
    currSelected = ["OPM3"];
    assert.equal(calculateAccess(prevSelected, currSelected), "OP2 Level 1 Add.  OPR Level 2 Add");
});

QUnit.test("prev array empty, current includes OPM3 + 5 - OP2 Level 2 Add.  OPR Level 2 Add", assert => {
    prevSelected = [];
    currSelected = ["OPM3", "OPM5"];
    assert.equal(calculateAccess(prevSelected, currSelected), "OP2 Level 2 Add. OPR Level 2 Add");
});

QUnit.test("prev array empty, current includes OPM3 + 5 + 7 - OP2 Level 3 Add.  OPR Level 2 Add", assert => {
    prevSelected = [];
    currSelected = ["OPM3", "OPM5", "OPM7"];
    assert.equal(calculateAccess(prevSelected, currSelected), "OP2 Level 3 Add. OPR Level 2 Add");
});

//prev array empty + current array not empty (NOT includes OPM3)
QUnit.test("prev array empty, current includes OPM5 - OP3 Level 1 Add.  OPR Level 2 Add", assert => {
    prevSelected = [];
    currSelected = ["OPM5"];
    assert.equal(calculateAccess(prevSelected, currSelected), "OP3 Level 1 Add.  OPR Level 2 Add");
});

QUnit.test("prev array empty, current includes OPM5 + 7 - OP3 Level 2 Add.  OPR Level 2 Add", assert => {
    prevSelected = [];
    currSelected = ["OPM5", "OPM7"];
    assert.equal(calculateAccess(prevSelected, currSelected), "OP3 Level 2 Add. OPR Level 2 Add");
});

