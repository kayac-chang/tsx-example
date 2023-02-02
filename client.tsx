import ReactDOM from "react-dom/client";

export function App() {
  return (
    <div>
      Hello, Server Side Rendering!
      <button onClick={() => console.log("hello world")}>Click me</button>
    </div>
  );
}

// run only on client side
if (globalThis["document"]) {
  ReactDOM.hydrateRoot(document.getElementById("root")!, <App />);
}
