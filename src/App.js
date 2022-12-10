import logo from './logo.svg';
import ProfileCard from './components/ProfileCard'
import 'bulma/css/bulma.css'


function App() {
  return (
    <div className="App">
      <section class="hero is-primary">
        <div class="hero-body">
          <p class="title">
            Hero title
          </p>
          <p class="subtitle">
            Hero subtitle
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-4">
              <ProfileCard
                image={logo}
                title="React"
                handle="@react99"
                description="React was created by Facebook"
              />
            </div>
            <div className="column is-4">
              <ProfileCard
                image={logo}
                title="React"
                handle="@react99"
                description="React was created by Facebook"
              />
            </div>
            <div className="column is-4">
              <ProfileCard
                image={logo}
                title="React"
                handle="@react99"
                description="React was created by Facebook"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
