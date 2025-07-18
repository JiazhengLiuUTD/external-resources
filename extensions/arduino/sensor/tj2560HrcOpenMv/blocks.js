/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const colour = '#4CBFE6';
    const secondaryColour = '#2E8EB8';

    Blockly.Blocks.tj2560HrcOpenMv_setPort = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560HRCOPENMV_SETPORT,
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.tj2560HrcOpenMv_setMode = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560HRCOPENMV_SETMODE, // set camera module to $1
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'MODE',
                        options: [
                            [Blockly.Msg.TJ2560HRCOPENMV_SETMODE_COLORBLOB, '4'],
                            [Blockly.Msg.TJ2560HRCOPENMV_SETMODE_SHAPE, '5'],
                            [Blockly.Msg.TJ2560HRCOPENMV_SETMODE_COLORMODE, '1'],
                            [Blockly.Msg.TJ2560HRCOPENMV_SETMODE_QRCODEMODE, '2'],
                            [Blockly.Msg.TJ2560HRCOPENMV_SETMODE_LINEMODE, '3']
                        ]
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.tj2560HrcOpenMv_setLight = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560HRCOPENMV_SETLIGHT, // set camera light %1
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'MODE',
                        options: [
                            [Blockly.Msg.TJ2560HRCOPENMV_SETLIGHT_CLOSEALLLIGHT, '0'],
                            [Blockly.Msg.TJ2560HRCOPENMV_SETLIGHT_OPENREDLIGHT, '1'],
                            [Blockly.Msg.TJ2560HRCOPENMV_SETLIGHT_OPENGREENLIGHT, '2'],
                            [Blockly.Msg.TJ2560HRCOPENMV_SETLIGHT_OPENBLUELIGHT, '3'],
                            [Blockly.Msg.TJ2560HRCOPENMV_SETLIGHT_OPENIRLIGHT, '4'],
                            [Blockly.Msg.TJ2560HRCOPENMV_SETLIGHT_OPENALLLIGHT, '5']
                        ]
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.tj2560HrcOpenMv_resetWhiteBalance = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560HRCOPENMV_RESETWHITEBALANCE, // camera module reset white balance
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    // ----- 色块
    Blockly.Blocks.tj2560HrcOpenMv_learnColorBlock = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560HRCOPENMV_LEARNCOLORBLOCK, // camera module learn color block
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.tj2560HrcOpenMv_getColorBlockPosition = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560HRCOPENMV_GETCOLORBLOCKPOSITION, // camera module get color block position
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.tj2560HrcOpenMv_colorBlockPositionX = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560HRCOPENMV_COLORBLOCKPOSITIONX, // color block position X axis value
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.tj2560HrcOpenMv_colorBlockPositionY = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560HRCOPENMV_COLORBLOCKPOSITIONY, // color block position Y axis value
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_number']
            });
        }
    };

    // ----- 二维码
    Blockly.Blocks.tj2560HrcOpenMv_getQRCodePosition = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560HRCOPENMV_GETQRCODEPOSITION, // camera module get QR code block position
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.tj2560HrcOpenMv_QRCodePositionX = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560HRCOPENMV_QRCODEPOSITIONX, // QR code position X axis value
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.tj2560HrcOpenMv_QRCodePositionY = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560HRCOPENMV_QRCODEPOSITIONY, // QR code position Y axis value
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.tj2560HrcOpenMv_getQRCodeWHPosition = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560HRCOPENMV_GETQRCODEWHPOSITION, // camera module get QR code block WH position
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.tj2560HrcOpenMv_QRCodeWHPositionX = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560HRCOPENMV_QRCODEWHPOSITIONX, // QR code HW position X axis value
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.tj2560HrcOpenMv_QRCodeWHPositionY = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560HRCOPENMV_QRCODEWHPOSITIONY, // QR code HW position Y axis value
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.tj2560HrcOpenMv_getQRCodeValue = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560HRCOPENMV_GETQRCODEVALUE, // camera module get QR code value and version
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.tj2560HrcOpenMv_QRCodeValueString = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560HRCOPENMV_QRCODEVALUESTRING, // camera module QR code string
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_string']
            });
        }
    };

    Blockly.Blocks.tj2560HrcOpenMv_QRCodeValueVersion = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560HRCOPENMV_QRCODEVALUEVERSION, // camera module QR code version
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_string']
            });
        }
    };

    Blockly.Blocks.tj2560HrcOpenMv_getQRCodeECCMASK = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560HRCOPENMV_GETQRECCMASK, // camera module get QR code ECC and mask
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.tj2560HrcOpenMv_QRCodeECC = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560HRCOPENMV_QRCODEECC, // camera module QR ECC level
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_string']
            });
        }
    };

    Blockly.Blocks.tj2560HrcOpenMv_QRCodeMask = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560HRCOPENMV_QRCODEMASK, // camera module QR mask
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_string']
            });
        }
    };

    Blockly.Blocks.tj2560HrcOpenMv_getQRCodeDataTypeAndECI = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560HRCOPENMV_GETQRCODEDATATYPEANDECI, // camera module get QR code data type and ECI
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.tj2560HrcOpenMv_QRCodeDataType = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560HRCOPENMV_QRCODEDATATYPE, // camera module QR data type
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_string']
            });
        }
    };

    Blockly.Blocks.tj2560HrcOpenMv_QRCodeDataECI = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560HRCOPENMV_QRCODEDATAECI, // camera module QR ECI
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_string']
            });
        }
    };

    Blockly.Blocks.tj2560HrcOpenMv_isGetQRCode = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560HRCOPENMV_ISGETQRCODE, // camera module get valid QR?
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_boolean']
            });
        }
    };

    // 巡线
    Blockly.Blocks.tj2560HrcOpenMv_setLineTrackMode = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560HRCOPENMV_SETLINETRACKMODE, // camera module set line track %1 mode
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'MODE',
                        options: [
                            [Blockly.Msg.TJ2560HRCOPENMV_SETLINETRACKMODE_GRAYSCALE, '1'],
                            [Blockly.Msg.TJ2560HRCOPENMV_SETLINETRACKMODE_COLORFUL, '2']
                        ]
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.tj2560HrcOpenMv_setLenFlip = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560HRCOPENMV_SETLENFLIP, // camera module set len flip %1 %2
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'DIR',
                        options: [
                            [Blockly.Msg.TJ2560HRCOPENMV_SETLENFLIP_VERTICAL, '1'],
                            [Blockly.Msg.TJ2560HRCOPENMV_SETLENFLIP_HORIZONTAL, '2']
                        ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'STA',
                        options: [
                            [Blockly.Msg.TJ2560HRCOPENMV_ON, '1'],
                            [Blockly.Msg.TJ2560HRCOPENMV_OFF, '2']
                        ]
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.tj2560HrcOpenMv_getLinePotion = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560HRCOPENMV_GETLINEPOTION, // camera module line position
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.tj2560HrcOpenMv_getLineAngle = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560HRCOPENMV_GETLINEANGLE, // camera module line angle
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.tj2560HrcOpenMv_getLineLength = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560HRCOPENMV_GETLINELENGTH, // camera module line length
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.tj2560HrcOpenMv_getLineErrorOutput = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560HRCOPENMV_GETLINEERROROUTPUT, // camera module line error output
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.tj2560HrcOpenMv_setLineColor = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560HRCOPENMV_SETLINECOLOR, // camera module set line color %1
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'MODE',
                        options: [
                            [Blockly.Msg.TJ2560HRCOPENMV_LINE_BLACK, '1'],
                            [Blockly.Msg.TJ2560HRCOPENMV_LINE_WHITE, '2']
                        ]
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.tj2560HrcOpenMv_setLineThreshold = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560HRCOPENMV_SETLINETHRESHOLD, // camera module set line track threshold min %1 max %2
                args0: [
                    {
                        type: 'input_value',
                        name: 'MIN'
                    },
                    {
                        type: 'input_value',
                        name: 'MAX'
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    //Color location
    Blockly.Blocks.tj2560HrcOpenMv_readColorBlob = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560HRCOPENMV_READCOLORBLOB, // camera module learn color block
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.tj2560HrcOpenMv_locateColor = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560HRCOPENMV_LOCATECOLOR, 
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'COLOR',
                        options: [
                            [Blockly.Msg.TJ2560HRCOPENMV_RED, '1'],
                            [Blockly.Msg.TJ2560HRCOPENMV_GREEN, '2'],
                            [Blockly.Msg.TJ2560HRCOPENMV_BLUE, '3'],
                            [Blockly.Msg.TJ2560HRCOPENMV_YELLOW, '4']
                        ]
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.tj2560HrcOpenMv_blobColor = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560HRCOPENMV_BLOBCOLOR, // color block position X axis value
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.tj2560HrcOpenMv_red = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560HRCOPENMV_RED, // color block position X axis value
                colour: '#FF0000',
                secondaryColour: secondaryColour,
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.tj2560HrcOpenMv_green = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560HRCOPENMV_GREEN, // color block position X axis value
                colour: '#008000',
                secondaryColour: secondaryColour,
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.tj2560HrcOpenMv_blue = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560HRCOPENMV_BLUE, // color block position X axis value
                colour: '#0000FF',
                secondaryColour: secondaryColour,
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.tj2560HrcOpenMv_yellow = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560HRCOPENMV_YELLOW, // color block position X axis value
                colour: '#FFD700',
                secondaryColour: secondaryColour,
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.tj2560HrcOpenMv_blank = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560HRCOPENMV_BLANK, // color block position X axis value
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_number']
            });
        }
    };
    
    Blockly.Blocks.tj2560HrcOpenMv_getColorBlockColor = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560HRCOPENMV_GETCOLORBLOCKCOLOR, // camera module learn color block
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.tj2560HrcOpenMv_L = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560HRCOPENMV_L, // color block position X axis value
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.tj2560HrcOpenMv_A = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560HRCOPENMV_A, // color block position X axis value
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.tj2560HrcOpenMv_B = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560HRCOPENMV_B, // color block position X axis value
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.tj2560HrcOpenMv_readShape = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560HRCOPENMV_READSHAPE, // camera module read shape
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.tj2560HrcOpenMv_shape = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560HRCOPENMV_SHAPE, // color block position X axis value
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.tj2560HrcOpenMv_circle = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560HRCOPENMV_CIRCLE, // color block position X axis value
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.tj2560HrcOpenMv_rect = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560HRCOPENMV_RECT, // color block position X axis value
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_number']
            });
        }
    };
    
    Blockly.Blocks.tj2560HrcOpenMv_otherShape = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560HRCOPENMV_OTHERSHAPE, // color block position X axis value
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.tj2560HrcOpenMv_shapePositionX = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560HRCOPENMV_SHAPEPOSITIONX, // color block position X axis value
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.tj2560HrcOpenMv_shapePositionY = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560HRCOPENMV_SHAPEPOSITIONY, // color block position Y axis value
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_number']
            });
        }
    };


    return Blockly;
}

exports = addBlocks;
