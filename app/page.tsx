import Nav from "./components/Nav"

export default function Home() {
  return (
    <div className="overflow-x-hidden relative">
      <header className="h-screen">
        <Nav/>
      </header>
      <main className="min-h-screen p-4">main</main>
      <footer className="p-4">footer</footer>
    </div>
  );
}
