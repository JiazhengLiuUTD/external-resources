#ifndef IO_TJAB_H
#define IO_TJAB_H

#include <Arduino.h>


#define Left 0
#define Right 1
#define S1 0
#define S2 1

const uint8_t pinMap[2][2] =
{
    { 6,  8},   // LEFT
    {7,  5}  // RIGHT
};
/*
{
    { 5,  7},   // LEFT
    {8,  6}  // RIGHT
};
const uint8_t pinMap[2][2] =
{
    { 5,  6},   // LEFT
    {11,  10}  // RIGHT
};*/
#endif
