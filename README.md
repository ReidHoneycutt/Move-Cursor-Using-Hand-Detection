# Move-Cursor-Using-Hand-Detection

This program implements a simple way (without using sockets) to affect the mouse position. Firstly it uses cvzone and mediapipe for the hand tracking. Then it uses the library pyautogui to change the position of the mouse. Once the python program is running, the visual is done using p5.js.

In this one the position of the hand dictates the position of a projection of the points obtained from the human pose tracker reflected across a poincare-disk using hyperbolic geometry, more about this in my repo entitled "Hyberbolic-Projection-of-Human-Wire-Frame".

https://user-images.githubusercontent.com/30945205/235340716-d11d47c7-26f1-41cd-baf0-3c7fe727bd37.mp4

In this one the cursor divides a rectangle-based representation of a quad tree data structure.

https://user-images.githubusercontent.com/30945205/235340705-97f550ab-19a6-4c8a-987f-0a497d66e4a0.mp4

This one draws ellipses to the cursor positions.

https://user-images.githubusercontent.com/30945205/235340465-897f9d22-ff87-4231-9a8f-d09f85b97d2a.mp4


