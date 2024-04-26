/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const colour = '#4CBFE6';
    const secondaryColour = '#2E8EB8';

    Blockly.Blocks.systemTime_MSRead = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.SYSTEMTIME_MSREAD,
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_number']
            });
        }
    };
    Blockly.Blocks.systemTime_USRead = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.SYSTEMTIME_USREAD,
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.systemTime_ProgramRunTime = {

        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.SYSTEMTIME_PROGRAMRUNTIME,
                message1: '%1',
                args0: [
                    {
                        type: 'input_value',
                        name: 'TIME'
                    }
                ],
                args1: [{
                    type: 'input_statement',
                    name: 'SUBSTACK'
                }],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    return Blockly;
}

exports = addBlocks;
