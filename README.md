# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Nimsy Corea**

Time spent: **4:13-5:42** hours spent in total (finished at 3:13 but tried to add more until 4:42)

Link to project: <https://glitch.com/edit/#!/tangible-soapy-tuesday>

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [ ] More than 4 functional game buttons
* [ ] Playback speeds up on each turn
* [ ] Computer picks a different pattern each time the game is played
* [ ] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [x] Changed the tab name for the game

## Video Walkthrough

Here's a walkthrough of implemented user stories:
![](https://media1.giphy.com/media/kqVfslwOhBP4LNRstl/giphy.gif)


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
    - <https://cssreference.io/box-model/>
    - <https://blog.hubspot.com/website/css-id#:~:text=A%20CSS%20ID%20selector%20uses,to%20the%20element%20in%20brackets.>
    - <https://stackoverflow.com/questions/11497094/remove-border-from-buttons>
    - <https://stackoverflow.com/questions/12640718/adding-css-class-to-multiple-elements>
    - <https://stackoverflow.com/questions/38377062/how-to-make-html-button-look-pressed-in-using-css/38377286>
    - <https://stackoverflow.com/questions/31159472/how-to-make-two-buttons-the-same-size/31159582>
    - <https://stackoverflow.com/questions/9601357/placing-border-inside-of-div-and-not-on-its-edge>
    - <https://www.w3schools.com/cssref/pr_border-color.asp>
    - <https://www.w3schools.com/js/js_events.>
    - <https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing>

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words)   

I'm not too familiar with javascript and I found myself wanting to do things I didn't know how to. One aspect I didn't think about was how
important the design of a website is, as well. I knew I didn't want to use the same colors as the ones given but it took me a while to
figure out which ones look well together. I've looked at the source code of other website before, but I don't really think about how 
empty it can be. When I'm programming each individual thing and have the window maximized, it looks like I'm wasting a lot of space.
The instructions were very useful and let me have few issues when it came to getting the project done. When I wanted to add other things
I would have to look them up try to get it to work. Something easy like customizing the look of a div container and its border was easy
enough as I only had to change a value in the CSS file, but something more complicated like adding confetti when the player wins is something
that I could not get working exactly how I wanted it to.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words)   

I'm wondering what percentage of the code in bigger projects is front end and back end. For this project, it seemed as if it was
mostly coding in Javascript, then CSS, and finally HTML with the least. I usually prioritized learning HTML over anything else and
it makes me want to just learn how to do random other things with web development. There's probably a lot of organization techniques
and libraries that make web development easier too. I ended up with a long script.js and style.css file that made it harder for me to find
certain things, and also to be able to see whats going on. Although I tried to organize the files, it just feels like there's a better way.
I've recently been learning Java and it has so many intricacies and complex syntax for things that make certain coding projects
a lot easier. I assume that, much like Java, HTML, CSS, and Javascript, have something like that. While I've taken a small course online
for web development and responsive design, I'm once again surprised by how little I know about these languages, not even because I personally
don't know a lot, but because there's just so much to it.

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words)   

I tried for a long time to add confetti to the website when you win. I assumed it would be hard, but I still underestimated it. I got
other's code from online from people who made their own open source confetti javascript file. While I could get the confetti itself to work
by adding some of the code in \<script>\</script> tags, I couldn't figure out how to get it to only show up whenever the game is won. On my journey
with researching how to do it I did learn a lot, still. First I tried using document.write() to add \<script>\</script> tags to the HTML file after it has loaded,
but I learned that using document.write() can override the whole HTML file if it has already loaded. I then tried to call with innerHTML(), while that did
add the script tags to the HTML file, it didn't run the script with the confetti. At that point I was stuck, but I feel with a lot more time
researching I could get it to work. Sadly I don't have a lot of time with all the classes I have too. ~~I also wanted to add more visual effects to the buttons.
For the start and stop buttons, I wanted them to get darker on click and go back to their original color afterwards. On another website I made, there
was a glowing effect for buttons, and that would look very nice with the game buttons I implemented.~~ A lot of the optional requirements were very cool as well.
A random pattern is how I thought we were going to program it, at first. It's a little frustrating that I can explain how I could go about coding it, but
in terms of actually writing the code and implementing, I'm not familiar enough with javascript to know what I'm doing, yet. I also thought this game somewhat
resembled a "Bop it" toy, so I could've added other options such as, spinning the buttons, pressing for a certain amount, etc. ~~I also could've added
some sort of line break between the buttons so that they're always in a square format.~~ Similarly to that, I could get the size of the buttoms to change
depending on the screen size so that it's playable on mobile, too.



## License

    Copyright Nimsy Corea

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.

\ ゜o゜)ノ  ( > ' 3'>)
