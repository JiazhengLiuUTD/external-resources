/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const color = '#00CED1';
    const secondaryColour = '#00CED1';

    Blockly.Blocks.tj2560RobotArm_init = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560ROBOTARM_INIT,
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.tj2560RobotArm_reset = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560ROBOTARM_RESET,
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.tj2560RobotArm_offset = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560ROBOTARM_OFFSET,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'JOINT',
                        options: [
                            ['1', 'JOINT1'],
                            ['2', 'JOINT2'],
                            ['3', 'JOINT3']]
                    },
                    {
                        type: 'input_value',
                        name: 'N'
                    }
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.tj2560RobotArm_M20 = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560ROBOTARM_M20,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'MOVE',
                        options: [
                            [Blockly.Msg.TJ2560ROBOTARM_G00, 'MOVEJ'],
                            [Blockly.Msg.TJ2560ROBOTARM_G01, 'MOVEL'],
                            [Blockly.Msg.TJ2560ROBOTARM_G05, 'JUMP']]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'POS',
                        options: [
                            [Blockly.Msg.TJ2560ROBOTARM_G90, 'GOTO'],
                            [Blockly.Msg.TJ2560ROBOTARM_G91, 'INCREMENT']]
                    },
                    {
                        type: 'input_value',
                        name: 'X'
                    },
                    {
                        type: 'input_value',
                        name: 'Y'
                    },
                    {
                        type: 'input_value',
                        name: 'Z'
                    },
                    {
                        type: 'input_value',
                        name: 'A'
                    }
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.tj2560RobotArm_Speed = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560ROBOTARM_SPEED,
                args0: [
                    {
                        type: 'input_value',
                        name: 'SPEED'
                    }
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.tj2560RobotArm_Dir_Move = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560ROBOTARM_DIR_MOVE,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'D',
                        options: [
                            [Blockly.Msg.TJ2560ROBOTARM_FORWARD, 'Y'],
                            [Blockly.Msg.TJ2560ROBOTARM_BACKWARD, 'Y-'],
                            [Blockly.Msg.TJ2560ROBOTARM_UP, 'Z'],
                            [Blockly.Msg.TJ2560ROBOTARM_DOWN, 'Z-'],
                            [Blockly.Msg.TJ2560ROBOTARM_RIGHT, 'X'],
                            [Blockly.Msg.TJ2560ROBOTARM_LEFT, 'X-']]
                    },
                    {
                        type: 'input_value',
                        name: 'N'
                    }
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.tj2560RobotArm_M21 = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560ROBOTARM_M21,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'POS',
                        options: [
                            [Blockly.Msg.TJ2560ROBOTARM_G90, 'GOTO'],
                            [Blockly.Msg.TJ2560ROBOTARM_G91, 'INCREMENT']]
                    },
                    {
                        type: 'input_value',
                        name: 'X'
                    },
                    {
                        type: 'input_value',
                        name: 'Y'
                    },
                    {
                        type: 'input_value',
                        name: 'Z'
                    },
                    {
                        type: 'input_value',
                        name: 'A'
                    }
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.tj2560RobotArm_Axis_Move = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560ROBOTARM_AXIS_MOVE,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'JOINT',
                        options: [
                            ['1', 'X'],
                            ['2', 'Y'],
                            ['3', 'Z'],
                            ['4', 'A']]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'REVOLVE',
                        options: [
                            [Blockly.Msg.TJ2560ROBOTARM_CW, '-1'],
                            [Blockly.Msg.TJ2560ROBOTARM_CCW, '1']]
                    },
                    {
                        type: 'input_value',
                        name: 'N'
                    }
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.tj2560RobotArm_Arc_Move = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560ROBOTARM_ARC_MOVE,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'REVOLVE',
                        options: [
                            [Blockly.Msg.TJ2560ROBOTARM_CW, 'CW'],
                            [Blockly.Msg.TJ2560ROBOTARM_CCW, 'CCW']]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'POS',
                        options: [
                            [Blockly.Msg.TJ2560ROBOTARM_G90, 'GOTO'],
                            [Blockly.Msg.TJ2560ROBOTARM_G91, 'INCREMENT']]
                    },
                    
                    {
                        type: 'input_value',
                        name: 'X'
                    },
                    {
                        type: 'input_value',
                        name: 'Y'
                    },
                    {
                        type: 'input_value',
                        name: 'Z'
                    },
                    {
                        type: 'input_value',
                        name: 'R'
                    }
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.tj2560RobotArm_Tool_Offset = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560ROBOTARM_TOOL_OFFSET,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'D',
                        options: [
                            ['X', 'OFFSET_X'],
                            ['Y', 'OFFSET_Y'],
                            ['Z', 'OFFSET_Z']]
                    },                   
                    {
                        type: 'input_value',
                        name: 'N'
                    }
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.tj2560RobotArm_Suction_Cup = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560ROBOTARM_SUCTION_CUP,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'STA',
                        options: [
                            [Blockly.Msg.TJ2560ROBOTARM_SUCTION_CUP_ON, 'ON'],
                            [Blockly.Msg.TJ2560ROBOTARM_SUCTION_CUP_OFF, 'OFF'],
                            [Blockly.Msg.TJ2560ROBOTARM_SUCTION_CUP_BLOW, 'BLOW']]
                    }
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.tj2560RobotArm_Angle_Move = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560ROBOTARM_ANGLE_MOVE,
                args0: [                   
                    {
                        type: 'input_value',
                        name: 'ANGLE'
                    },
                    {
                        type: 'input_value',
                        name: 'N'
                    }
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    return Blockly;
}

exports = addBlocks;
