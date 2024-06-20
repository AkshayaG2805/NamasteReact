    const heading = React.createElement("h1",{id:"heading",xyz:"abc"},"Hello world from React");
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(heading);

    console.log(heading);

    const Parent = React.createElement("div",{id:"parent"},[
        React.createElement("div",{id:"child"},[
        React.createElement("h1",{},"I'm an H1 tag"),
        React.createElement("h2",{},"I'm an h2 tag")]),
        
        React.createElement("div",{id:"child"},[
        React.createElement("h1",{},"I'm an H1 tag"),
        React.createElement("h2",{},"I'm an h2 tag")]),
    ]);
    console.log(Parent);

    const Root1 = ReactDOM.createRoot(document.getElementById("root"));
    Root1.render(Parent);