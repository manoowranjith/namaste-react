const element = React.createElement("div", {id: "parent"}, [
    React.createElement("h1", {id: "heading"}, "Hello World"),
    React.createElement("h2", {id: "sub-heading"}, "I'm React")
])
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(element)