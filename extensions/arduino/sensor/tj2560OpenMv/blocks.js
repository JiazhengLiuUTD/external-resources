/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const colour = '#4CBFE6';
    const secondaryColour = '#2E8EB8';

    Blockly.Blocks.tj2560OpenMv_setPort = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560OPENMV_SETPORT, // set camera module port as %1
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'PORT',
                        options: [
                            //['P3', 'P3'],
                            ['P4', 'P4'],
                            ['P5', 'P5'],
                            ['P6', 'P6']
                        ]
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.tj2560OpenMv_setMode = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560OPENMV_SETMODE, // set camera module to $1
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'MODE',
                        options: [
                            [Blockly.Msg.TJ2560OPENMV_SETMODE_COLORBLOB, '4'],
                            [Blockly.Msg.TJ2560OPENMV_SETMODE_SHAPE, '5'],
                            [Blockly.Msg.TJ2560OPENMV_SETMODE_COLORMODE, '1'],
                            [Blockly.Msg.TJ2560OPENMV_SETMODE_QRCODEMODE, '2'],
                            [Blockly.Msg.TJ2560OPENMV_SETMODE_LINEMODE, '3']
                        ]
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.tj2560OpenMv_setLight = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560OPENMV_SETLIGHT, // set camera light %1
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'MODE',
                        options: [
                            [Blockly.Msg.TJ2560OPENMV_SETLIGHT_CLOSEALLLIGHT, '0'],
                            [Blockly.Msg.TJ2560OPENMV_SETLIGHT_OPENREDLIGHT, '1'],
                            [Blockly.Msg.TJ2560OPENMV_SETLIGHT_OPENGREENLIGHT, '2'],
                            [Blockly.Msg.TJ2560OPENMV_SETLIGHT_OPENBLUELIGHT, '3'],
                            [Blockly.Msg.TJ2560OPENMV_SETLIGHT_OPENIRLIGHT, '4'],
                            [Blockly.Msg.TJ2560OPENMV_SETLIGHT_OPENALLLIGHT, '5']
                        ]
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.tj2560OpenMv_resetWhiteBalance = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560OPENMV_RESETWHITEBALANCE, // camera module reset white balance
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    // ----- 色块
    Blockly.Blocks.tj2560OpenMv_learnColorBlock = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560OPENMV_LEARNCOLORBLOCK, // camera module learn color block
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.tj2560OpenMv_getColorBlockPosition = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560OPENMV_GETCOLORBLOCKPOSITION, // camera module get color block position
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.tj2560OpenMv_colorBlockPositionX = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560OPENMV_COLORBLOCKPOSITIONX, // color block position X axis value
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.tj2560OpenMv_colorBlockPositionY = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560OPENMV_COLORBLOCKPOSITIONY, // color block position Y axis value
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_number']
            });
        }
    };

    // ----- 二维码
    Blockly.Blocks.tj2560OpenMv_getQRCodePosition = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560OPENMV_GETQRCODEPOSITION, // camera module get QR code block position
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.tj2560OpenMv_QRCodePositionX = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560OPENMV_QRCODEPOSITIONX, // QR code position X axis value
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.tj2560OpenMv_QRCodePositionY = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560OPENMV_QRCODEPOSITIONY, // QR code position Y axis value
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.tj2560OpenMv_getQRCodeWHPosition = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560OPENMV_GETQRCODEWHPOSITION, // camera module get QR code block WH position
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.tj2560OpenMv_QRCodeWHPositionX = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560OPENMV_QRCODEWHPOSITIONX, // QR code HW position X axis value
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.tj2560OpenMv_QRCodeWHPositionY = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560OPENMV_QRCODEWHPOSITIONY, // QR code HW position Y axis value
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.tj2560OpenMv_getQRCodeValue = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560OPENMV_GETQRCODEVALUE, // camera module get QR code value and version
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.tj2560OpenMv_QRCodeValueString = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560OPENMV_QRCODEVALUESTRING, // camera module QR code string
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_string']
            });
        }
    };

    Blockly.Blocks.tj2560OpenMv_QRCodeValueVersion = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560OPENMV_QRCODEVALUEVERSION, // camera module QR code version
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_string']
            });
        }
    };

    Blockly.Blocks.tj2560OpenMv_getQRCodeECCMASK = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560OPENMV_GETQRECCMASK, // camera module get QR code ECC and mask
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.tj2560OpenMv_QRCodeECC = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560OPENMV_QRCODEECC, // camera module QR ECC level
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_string']
            });
        }
    };

    Blockly.Blocks.tj2560OpenMv_QRCodeMask = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560OPENMV_QRCODEMASK, // camera module QR mask
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_string']
            });
        }
    };

    Blockly.Blocks.tj2560OpenMv_getQRCodeDataTypeAndECI = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560OPENMV_GETQRCODEDATATYPEANDECI, // camera module get QR code data type and ECI
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.tj2560OpenMv_QRCodeDataType = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560OPENMV_QRCODEDATATYPE, // camera module QR data type
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_string']
            });
        }
    };

    Blockly.Blocks.tj2560OpenMv_QRCodeDataECI = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560OPENMV_QRCODEDATAECI, // camera module QR ECI
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_string']
            });
        }
    };

    Blockly.Blocks.tj2560OpenMv_isGetQRCode = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560OPENMV_ISGETQRCODE, // camera module get valid QR?
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_boolean']
            });
        }
    };

    // 巡线
    Blockly.Blocks.tj2560OpenMv_setLineTrackMode = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560OPENMV_SETLINETRACKMODE, // camera module set line track %1 mode
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'MODE',
                        options: [
                            [Blockly.Msg.TJ2560OPENMV_SETLINETRACKMODE_GRAYSCALE, '1'],
                            [Blockly.Msg.TJ2560OPENMV_SETLINETRACKMODE_COLORFUL, '2']
                        ]
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.tj2560OpenMv_setLenFlip = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560OPENMV_SETLENFLIP, // camera module set len flip %1 %2
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'DIR',
                        options: [
                            [Blockly.Msg.TJ2560OPENMV_SETLENFLIP_VERTICAL, '1'],
                            [Blockly.Msg.TJ2560OPENMV_SETLENFLIP_HORIZONTAL, '2']
                        ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'STA',
                        options: [
                            [Blockly.Msg.TJ2560OPENMV_ON, '1'],
                            [Blockly.Msg.TJ2560OPENMV_OFF, '2']
                        ]
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.tj2560OpenMv_getLinePotion = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560OPENMV_GETLINEPOTION, // camera module line position
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.tj2560OpenMv_getLineAngle = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560OPENMV_GETLINEANGLE, // camera module line angle
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.tj2560OpenMv_getLineLength = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560OPENMV_GETLINELENGTH, // camera module line length
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.tj2560OpenMv_getLineErrorOutput = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560OPENMV_GETLINEERROROUTPUT, // camera module line error output
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.tj2560OpenMv_setLineColor = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560OPENMV_SETLINECOLOR, // camera module set line color %1
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'MODE',
                        options: [
                            [Blockly.Msg.TJ2560OPENMV_LINE_BLACK, '1'],
                            [Blockly.Msg.TJ2560OPENMV_LINE_WHITE, '2']
                        ]
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.tj2560OpenMv_setLineThreshold = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560OPENMV_SETLINETHRESHOLD, // camera module set line track threshold min %1 max %2
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
    Blockly.Blocks.tj2560OpenMv_readColorBlob = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560OPENMV_READCOLORBLOB, // camera module learn color block
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.tj2560OpenMv_locateColor = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560OPENMV_LOCATECOLOR, 
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'COLOR',
                        options: [
                            [Blockly.Msg.TJ2560OPENMV_RED, '1'],
                            [Blockly.Msg.TJ2560OPENMV_GREEN, '2'],
                            [Blockly.Msg.TJ2560OPENMV_BLUE, '3'],
                            [Blockly.Msg.TJ2560OPENMV_YELLOW, '4']
                        ]
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.tj2560OpenMv_blobColor = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560OPENMV_BLOBCOLOR, // color block position X axis value
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.tj2560OpenMv_red = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560OPENMV_RED, // color block position X axis value
                colour: '#FF0000',
                secondaryColour: secondaryColour,
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.tj2560OpenMv_green = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560OPENMV_GREEN, // color block position X axis value
                colour: '#008000',
                secondaryColour: secondaryColour,
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.tj2560OpenMv_blue = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560OPENMV_BLUE, // color block position X axis value
                colour: '#0000FF',
                secondaryColour: secondaryColour,
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.tj2560OpenMv_yellow = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560OPENMV_YELLOW, // color block position X axis value
                colour: '#FFD700',
                secondaryColour: secondaryColour,
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.tj2560OpenMv_blank = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560OPENMV_BLANK, // color block position X axis value
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_number']
            });
        }
    };
    
    Blockly.Blocks.tj2560OpenMv_getColorBlockColor = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560OPENMV_GETCOLORBLOCKCOLOR, // camera module learn color block
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.tj2560OpenMv_L = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560OPENMV_L, // color block position X axis value
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.tj2560OpenMv_A = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560OPENMV_A, // color block position X axis value
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.tj2560OpenMv_B = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560OPENMV_B, // color block position X axis value
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.tj2560OpenMv_readShape = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560OPENMV_READSHAPE, // camera module read shape
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.tj2560OpenMv_shape = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560OPENMV_SHAPE, // color block position X axis value
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.tj2560OpenMv_circle = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560OPENMV_CIRCLE, // color block position X axis value
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.tj2560OpenMv_rect = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560OPENMV_RECT, // color block position X axis value
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_number']
            });
        }
    };
    
    Blockly.Blocks.tj2560OpenMv_otherShape = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560OPENMV_OTHERSHAPE, // color block position X axis value
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.tj2560OpenMv_shapePositionX = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560OPENMV_SHAPEPOSITIONX, // color block position X axis value
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.tj2560OpenMv_shapePositionY = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560OPENMV_SHAPEPOSITIONY, // color block position Y axis value
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_number']
            });
        }
    };


    return Blockly;
}

exports = addBlocks;
