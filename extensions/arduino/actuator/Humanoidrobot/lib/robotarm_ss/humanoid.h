#include "Arduino.h"

// #define forward 1
// #define back 2
// #define Sleft 3
// #define Sright 4
// #define left 5
// #define right 6
// #define pick 7
// #define put 8
// #define stand 9
// #define bow 10
class Humanoid
{
public:
    Humanoid();
    //void info_recv();
    void begin();
    // void home();
    // void reset();
    // void status();
    // void cartesian_lin(String pos,String move,int x,int y,int z,uint32_t f);
    // void dir_move(String dir, uint32_t n,uint32_t f);
    // void suction_cup(String state);
    void action(int state);
    void head(int ha);
    void servo(int pos , int ang);
private:
    String msg="";
    String info="";
    int i=0;
};