/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {

    Blockly.Arduino.tj2560HrcOpenMv_setPort = function () {
        //const port = block.getFieldValue('PORT');

        Blockly.Arduino.includes_.tj2560HrcOpenMv_setPort = `#include <openmv.h>`;
        //Blockly.Arduino.definitions_.tj2560HrcOpenMv_setPort = `OpenMV openmv(pinMap[${port}][S2], pinMap[${port}][S1]);`;
        Blockly.Arduino.definitions_.tj2560HrcOpenMv_setPort = `OpenMV openmv;`;

        //Blockly.Arduino.includes_.arduinoTj2560Ext_onBoardDriver_io = `#include <io_tj2560.h>`;

        return `openmv.begin();\n`;
    };

    Blockly.Arduino.tj2560HrcOpenMv_setMode = function (block) {
        const mode = block.getFieldValue('MODE');
        return `openmv.setMode(${mode});\n`;
    };

    Blockly.Arduino.tj2560HrcOpenMv_setLight = function (block) {
        const mode = block.getFieldValue('MODE');
        return `openmv.setLight(${mode});\n`;
    };

    Blockly.Arduino.tj2560HrcOpenMv_resetWhiteBalance = function () {
        return `openmv.resetWhiteBalance();\n`;
    };

    Blockly.Arduino.tj2560HrcOpenMv_learnColorBlock = function () {
        return `openmv.learnColorBlock();\n`;
    };

    Blockly.Arduino.tj2560HrcOpenMv_getColorBlockPosition = function () {
        return `openmv.readColorBlockPos();\n`;
    };

    Blockly.Arduino.tj2560HrcOpenMv_colorBlockPositionX = function () {
        return [`openmv.x.toInt()`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.tj2560HrcOpenMv_colorBlockPositionY = function () {
        return [`openmv.y.toInt()`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.tj2560HrcOpenMv_getColorBlockColor = function () {
        return `openmv.readColorBlockColor();\n`;
    };

    Blockly.Arduino.tj2560HrcOpenMv_getQRCodePosition = function () {
        return `openmv.getQRCodeInfo(1);\n`;
    };

    Blockly.Arduino.tj2560HrcOpenMv_QRCodePositionX = function () {
        return [`openmv.x.toInt()`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.tj2560HrcOpenMv_QRCodePositionY = function () {
        return [`openmv.y.toInt()`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.tj2560HrcOpenMv_getQRCodeWHPosition = function () {
        return `openmv.getQRCodeInfo(2);\n`;
    };

    Blockly.Arduino.tj2560HrcOpenMv_QRCodeWHPositionX = function () {
        return [`openmv.x.toInt()`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.tj2560HrcOpenMv_QRCodeWHPositionY = function () {
        return [`openmv.y.toInt()`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.tj2560HrcOpenMv_getQRCodeValue = function () {
        return `openmv.getQRCodeInfo(3);\n`;
    };

    Blockly.Arduino.tj2560HrcOpenMv_QRCodeValueString = function () {
        return [`openmv.x`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.tj2560HrcOpenMv_QRCodeValueVersion = function () {
        return [`openmv.y`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.tj2560HrcOpenMv_getQRCodeECCMASK = function () {
        return `openmv.getQRCodeInfo(4);\n`;
    };

    Blockly.Arduino.tj2560HrcOpenMv_QRCodeECC = function () {
        return [`openmv.x`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.tj2560HrcOpenMv_QRCodeMask = function () {
        return [`openmv.y`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.tj2560HrcOpenMv_getQRCodeDataTypeAndECI = function () {
        return `openmv.getQRCodeInfo(5);\n`;
    };

    Blockly.Arduino.tj2560HrcOpenMv_QRCodeDataType = function () {
        return [`openmv.x`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.tj2560HrcOpenMv_QRCodeDataECI = function () {
        return [`openmv.y`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.tj2560HrcOpenMv_isGetQRCode = function () {
        return [`openmv.isGetQRCode()`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.tj2560HrcOpenMv_setLineTrackMode = function (block) {
        const mode = block.setLineTrackMode('MODE');
        return `openmv.setMode(${mode});\n`;
    };

    Blockly.Arduino.setFlipVertical = function (block) {
        const dir = block.setLineTrackMode('DIR');
        const sta = block.setLineTrackMode('STA');

        if (dir === '1') {
            return `openmv.setFlipVertical(${sta});\n`;
        }
        return `openmv.setFlipHorizontal(${sta});\n`;
    };

    Blockly.Arduino.tj2560HrcOpenMv_getLinePotion = function () {
        return [`openmv.readLineDistanceWithEdge()`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.tj2560HrcOpenMv_getLineAngle = function () {
        return [`openmv.readLineAngle()`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.tj2560HrcOpenMv_getLineLength = function () {
        return [`openmv.readLineLength()`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.tj2560HrcOpenMv_getLineErrorOutput = function () {
        return [`openmv.readErrorOutput()`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.tj2560HrcOpenMv_setLineColor = function (block) {
        const mode = block.setLineTrackMode('MODE');
        return `openmv.setLineTrackOpt(${mode});\n`;
    };

    Blockly.Arduino.tj2560HrcOpenMv_setLineThreshold = function (block) {
        const min = Blockly.Arduino.valueToCode(block, 'MIN', Blockly.Arduino.ORDER_ATOMIC);
        const max = Blockly.Arduino.valueToCode(block, 'MAX', Blockly.Arduino.ORDER_ATOMIC);

        return `openmv.setLineTrackThreshold(${min}, ${max});\n`;
    };

    Blockly.Arduino.tj2560HrcOpenMv_readColorBlob = function () {
        return `openmv.readBlockColor();\n`;
    };

    Blockly.Arduino.tj2560HrcOpenMv_locateColor = function (block) {
        const color = block.getFieldValue('COLOR');
        return `openmv.locateColor(${color});\n`;
    };

    Blockly.Arduino.tj2560HrcOpenMv_blobColor = function () {
        return [`openmv.z.toInt()`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.tj2560HrcOpenMv_red = function () {
        return [`1`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.tj2560HrcOpenMv_green = function () {
        return [`2`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.tj2560HrcOpenMv_blue = function () {
        return [`3`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.tj2560HrcOpenMv_yellow = function () {
        return [`4`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.tj2560HrcOpenMv_blank = function () {
        return [`0`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.tj2560HrcOpenMv_L = function () {
        return [`openmv.z.toInt()`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.tj2560HrcOpenMv_A = function () {
        return [`openmv.x.toInt()`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.tj2560HrcOpenMv_B = function () {
        return [`openmv.y.toInt()`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.tj2560HrcOpenMv_readShape = function () {
        return `openmv.readShape();\n`;
    };

    Blockly.Arduino.tj2560HrcOpenMv_shape = function () {
        return [`openmv.z.toInt()`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.tj2560HrcOpenMv_circle = function () {
        return [`1`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.tj2560HrcOpenMv_rect = function () {
        return [`2`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.tj2560HrcOpenMv_otherShape = function () {
        return [`0`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.tj2560HrcOpenMv_shapePositionX = function () {
        return [`openmv.x.toInt()`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.tj2560HrcOpenMv_shapePositionY = function () {
        return [`openmv.y.toInt()`, Blockly.Arduino.ORDER_ATOMIC];
    };

    return Blockly;
}

exports = addGenerator;
