import React, { Component } from 'react';
import './randomgencomp.css'; // Import the CSS file

class Randomgencom extends Component {
    constructor() {
        super();
        this.state = {
            r: Math.floor(Math.random() * 256),
            g: Math.floor(Math.random() * 256),
            b: Math.floor(Math.random() * 256),
            codingQuotes: [
                { quote: "Talk is cheap. Show me the code.", writer: "Linus Torvalds" },
                { quote: "Programs must be written for people to read, and only incidentally for machines to execute.", writer: "Harold Abelson" },
                { quote: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.", writer: "Martin Fowler" },
                { quote: "First, solve the problem. Then, write the code.", writer: "John Johnson" },
                { quote: "Code is like humor. When you have to explain it, it’s bad.", writer: "Cory House" },
                { quote: "Experience is the name everyone gives to their mistakes.", writer: "Oscar Wilde" },
                { quote: "In order to be irreplaceable, one must always be different.", writer: "Coco Chanel" },
                { quote: "Java is to JavaScript what car is to carpet.", writer: "Chris Heilmann" },
                { quote: "The best error message is the one that never shows up.", writer: "Thomas Fuchs" },
                { quote: "Fix the cause, not the symptom.", writer: "Steve Maguire" },
                { quote: "Simplicity is the soul of efficiency.", writer: "Austin Freeman" },
                { quote: "Make it work, make it right, make it fast.", writer: "Kent Beck" },
                { quote: "Before software can be reusable it first has to be usable.", writer: "Ralph Johnson" },
                { quote: "Clean code always looks like it was written by someone who cares.", writer: "Robert C. Martin" },
                { quote: "Code never lies, comments sometimes do.", writer: "Ron Jeffries" },
                { quote: "Good code is its own best documentation.", writer: "Steve McConnell" },
                { quote: "Software is like entropy: It is difficult to grasp, weighs nothing, and obeys the Second Law of Thermodynamics; i.e., it always increases.", writer: "Norman Augustine" },
                { quote: "Programming isn't about what you know; it's about what you can figure out.", writer: "Chris Pine" },
                { quote: "The function of good software is to make the complex appear to be simple.", writer: "Grady Booch" },
                { quote: "The most disastrous thing you can ever learn is your first programming language.", writer: "Alan Kay" },
                { quote: "Deleted code is debugged code.", writer: "Jeff Sickel" },
                { quote: "If you think your users are idiots, only idiots will use it.", writer: "Linus Torvalds" },
                { quote: "If debugging is the process of removing software bugs, then programming must be the process of putting them in.", writer: "Edsger W. Dijkstra" },
                { quote: "It's not a bug – it's an undocumented feature.", writer: "Anonymous" },
                { quote: "In theory, theory and practice are the same. In practice, they’re not.", writer: "Yogi Berra" },
                { quote: "Weeks of programming can save you hours of planning.", writer: "Anonymous" },
                { quote: "Software is a gas; it expands to fill its container.", writer: "Nathan Myhrvold" },
                { quote: "Measuring programming progress by lines of code is like measuring aircraft building progress by weight.", writer: "Bill Gates" },
                { quote: "To iterate is human, to recurse divine.", writer: "L. Peter Deutsch" },
                { quote: "Without requirements or design, programming is the art of adding bugs to an empty text file.", writer: "Louis Srygley" },
                { quote: "The trouble with programmers is that you can never tell what a programmer is doing until it’s too late.", writer: "Seymour Cray" },
                { quote: "Most software isn’t designed. Rather, it emerges from haphazard development.", writer: "David Parnas" },
                { quote: "The best thing about a boolean is even if you are wrong, you are only off by a bit.", writer: "Anonymous" },
                { quote: "You can't have great software without a great team.", writer: "Joel Spolsky" },
                { quote: "A good programmer is someone who always looks both ways before crossing a one-way street.", writer: "Doug Linder" },
                { quote: "A primary cause of complexity is that software vendors uncritically adopt almost any feature that users want.", writer: "Niklaus Wirth" },
                { quote: "Controlling complexity is the essence of computer programming.", writer: "Brian Kernighan" },
                { quote: "If you optimize everything, you will always be unhappy.", writer: "Donald Knuth" },
                { quote: "Walking on water and developing software from a specification are easy if both are frozen.", writer: "Edward V. Berard" },
                { quote: "Programming can be fun, so can cryptography; however, they should not be combined.", writer: "Kreitzberg and Shneiderman" },
                { quote: "There are two ways to write error-free programs; only the third one works.", writer: "Alan J. Perlis" },
                { quote: "Programs grow faster than they are written.", writer: "Anonymous" },
                { quote: "Computers are good at following instructions, but not at reading your mind.", writer: "Donald Knuth" },
                { quote: "Learning to program has no more to do with designing interactive software than learning to touch type has to do with writing poetry.", writer: "Ted Nelson" },
                { quote: "Programming is the art of algorithm design and the craft of debugging errant code.", writer: "Ellen Ullman" },
                { quote: "A language that doesn’t affect the way you think about programming is not worth knowing.", writer: "Alan Perlis" },
                { quote: "Software undergoes beta testing shortly before it’s released. Beta is Latin for 'still doesn’t work'.", writer: "Anonymous" },
                { quote: "Simplicity is prerequisite for reliability.", writer: "Edsger W. Dijkstra" },
                { quote: "The goal of Computer Science is to build something that will last at least until we've finished building it.", writer: "Anonymous" },
                { quote: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.", writer: "Martin Fowler" },
                { quote: "If you don’t know what to do, go to bed and sleep. You will wake up and be full of ideas.", writer: "Anonymous" }
            ],
            random: 0,
            randomimageno: 100,
            imageError: false,
        };
    }

    handlegen = () => {
        this.setState({
            r: Math.floor(Math.random() * 256),
            g: Math.floor(Math.random() * 256),
            b: Math.floor(Math.random() * 256),
        });
    };

    getTextColor = () => {
        const { r, g, b } = this.state;
        const brightness = (r * 299 + g * 587 + b * 114) / 1000;
        return brightness > 125 ? "black" : "white";
    };

    handlerandom = () => {
        this.setState({
            random: Math.floor(Math.random() * this.state.codingQuotes.length)
        });
    };

    handlerandomimage = () => {
        this.setState(prev => ({
            randomimageno: prev.randomimageno + 1,
            imageError: false
        }));
    };

    handleImageError = () => {
        this.setState({ imageError: true });
    };

    render() {
        const { r, g, b, codingQuotes, random, randomimageno, imageError } = this.state;
        const bgColor = `rgb(${r}, ${g}, ${b})`;
        const textColor = this.getTextColor();

        return (
            <div className="container">
                {/* Random Color Generator */}
                <div className="color-generator" style={{ background: bgColor, color: textColor }}>
                    <h1>Random Color Generator</h1>
                    <p>RGB Code: R{r}, G{g}, B{b}</p>
                    <button className="generate-color" onClick={this.handlegen}>Generate Color</button>
                </div>

                {/* Random Quote Generator */}
                <div className="quote-generator">
                    <h2>Random Quote Generator</h2>
                    <blockquote>{codingQuotes[random].quote}</blockquote>
                    <p>- {codingQuotes[random].writer}</p>
                    <button className="generate-quote" onClick={this.handlerandom}>Generate Quote</button>
                </div>

                {/* Random Image Generator */}
                <div className="image-generator">
                    <h2>Random Image Generator</h2>
                    <div>
                        <img
                            src={
                                imageError
                                    ? "https://via.placeholder.com/400x300?text=Image+Not+Found"
                                    : `https://picsum.photos/id/${randomimageno}/400/300`
                            }
                            alt="Random"
                            onError={this.handleImageError}
                            className={imageError ? "error-image" : ""}
                        />
                    </div>
                    <br/>
                    <button onClick={this.handlerandomimage}>Generate Image</button>
                </div>
            </div>
        );
    }
}

export default Randomgencom;
