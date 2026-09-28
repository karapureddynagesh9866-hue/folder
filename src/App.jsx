import UserDirectory from "./components/userdirectory";
import ImageUploader from "./components/imageuploader";
import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="app__header">
        <h1>Hooks Workshop</h1>
        <p>useEffect fetches the team directory. useRef powers the image upload.</p>
      </header>

      <main className="app__layout">
        <section className="panel panel--directory" aria-labelledby="directory-title">
          <h2 id="directory-title">User directory</h2>
          <UserDirectory />
        </section>

        <section className="panel panel--upload" aria-labelledby="upload-title">
          <h2 id="upload-title">Profile image</h2>
          <ImageUploader />
        </section>
      </main>
    </div>
  );
}

export default App;
