function App() {
    return (
        <div className="main-container">
            <div className="title">
                <h1>Topics Covered</h1>
            </div>
            <div className="topic">
                <a href="https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web">Getting started with the web</a>
                <p>Provides a practical introduction to web development for complete beginners.</p>
            </div>
            <div className="topic">
                <a href="https://developer.mozilla.org/en-US/docs/Learn/HTML">HTML — Structuring the web</a>
                <p>HTML is the language that we use to structure the different parts of our content and define what their meaning or purpose is. This topic teaches HTML in detail.</p>
            </div>
            <div className="topic">
                <a href="https://developer.mozilla.org/en-US/docs/Learn/CSS">CSS — Styling the web</a>
                <p>CSS is the language that we use to control our web content's style and layout, as well as adding behavior like animation. This topic provides comprehensive coverage of CSS.</p>
            </div>
            <div className="topic">
                <a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript">JavaScript — Dynamic client-side scripting</a>
                <p>JavaScript is the scripting language used to add dynamic functionality to web pages. This topic teaches all the essentials needed to become comfortable with writing and understanding JavaScript.</p>
            </div>
            <div className="topic">
                <a href="https://developer.mozilla.org/en-US/docs/Learn/Forms">Web forms — Working with user data</a>
                <p>Web forms are a potent tool for interacting with users — most commonly, they are used for collecting data from users, or allowing them to control a user interface. In the articles listed below, we'll cover all the essential aspects of structuring, styling, and interacting with web forms.</p>
            </div>
            <div className="topic">
                <a href="https://developer.mozilla.org/en-US/docs/Learn/Accessibility">Accessibility — make the web usable by everyone</a>
                <p>Accessibility is the practice of making web content available to as many people as possible regardless of disability, device, locale, or other differentiating factors. This topic gives you all you need to know.</p>
            </div>
            <div className="topic">
                <a href="https://developer.mozilla.org/en-US/docs/Learn/Performance">Web Performance — making websites fast and responsive</a>
                <p>Web performance is the art of making sure web applications download fast and are responsive to user interaction, regardless of a user's bandwidth, screen size, network, or device capabilities.</p>
            </div>
            <div className="topic">
                <a href="https://developer.mozilla.org/en-US/docs/Learn/MathML">MathML</a>
                <p>MathML is the language that we can use to write mathematical formulas in web pages using fractions, scripts, radicals, matrices, integrals, series, etc. This topic covers MathML.</p>
            </div>
            <div className="topic">
                <a href="https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing">Tools and testing</a>
                <p>This topic covers the tools developers use to facilitate their work, such as cross-browser testing tools, linters, formatters, transformation tools, version control systems, deployment tools, and client-side JavaScript frameworks.</p>
            </div>
            <div className="topic">
                <a href="https://developer.mozilla.org/en-US/docs/Learn/Server-side">Server-side website programming</a>
                <p>Even if you are concentrating on client-side web development, it is still useful to know how servers and server-side code features work. This topic provides a general introduction to how the server-side works and detailed tutorials showing how to build up a server-side app using two popular frameworks: Django (Python) and Express (Node.js).</p>
            </div>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));