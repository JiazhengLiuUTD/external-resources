/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const colour = '#4CBFE6';
    const secondaryColour = '#2E8EB8';

    Blockly.Blocks.tjabKitColorSensor_Read = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJABKITCOLORSENSOR_READ,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'PORT',
                        options: [
                            ['IIC', 'IIC']
                        ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'TIME',
                        options: [
                            ['2.4MS', 'TCS34725_INTEGRATIONTIME_2_4MS'],
                            ['24MS', 'TCS34725_INTEGRATIONTIME_24MS'],
                            ['50MS', 'TCS34725_INTEGRATIONTIME_50MS'],
                            ['101MS', 'TCS34725_INTEGRATIONTIME_101MS'],
                            ['154MS', 'TCS34725_INTEGRATIONTIME_154MS'],
                            ['700MS', 'TCS34725_INTEGRATIONTIME_700MS']
                        ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'GAIN',
                        options: [
                            ['1X', 'TCS34725_GAIN_1X'],
                            ['4X', 'TCS34725_GAIN_4X'],
                            ['16X', 'TCS34725_GAIN_16X'],
                            ['60X', 'TCS34725_GAIN_60X']
                        ]
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };
    Blockly.Blocks.tjabKitColorSensor_Red = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJABKITCOLORSENSOR_RED,
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_number']
            });
        }
    };
    Blockly.Blocks.tjabKitColorSensor_Blue = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJABKITCOLORSENSOR_BLUE,
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_number']
            });
        }
    }; 
    Blockly.Blocks.tjabKitColorSensor_Green = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJABKITCOLORSENSOR_GREEN,
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_number']
            });
        }
    };
    Blockly.Blocks.tjabKitColorSensor_Clear = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJABKITCOLORSENSOR_CLEAR,
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_number']
            });
        }
    }; 
    return Blockly;
}

exports = addBlocks;
