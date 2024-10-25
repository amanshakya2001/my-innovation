function App() {
  return (
    <main>
      <header className="bg-dark py-2 fixed-top">
        <div class="container">
          <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
              <a class="navbar-brand text-white" href="#">My Innovation</a>
            </div>
          </nav>
        </div>
      </header>
      <section className="welcome vh-100 d-flex align-items-center">
        <div className="container">
          <div className="row">
            <h1 className="text-center">Welcome to My Innovation</h1>
          </div>
        </div>
      </section>
      <footer className="bg-dark text-center text-white py-1 fixed-bottom">
          <div className="container">
              <p className="mb-1">
                  &copy; 2024 Aman Shakya | Made with <span class="text-danger">❤️</span> for you!
              </p>
              <p className="small">Thank you for being a part of our journey. Stay inspired and connected!</p>
          </div>
      </footer>
    </main>
  );
}

export default App;
