import rocket from './assets/rocket.gif';
import './App.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'light');
  });
  return (
    <>
      <div>
        <div className="row">
          <div>
            <img
              className="rocket"
              src={rocket}
              alt="Software Template Rocket Animation"
            />
          </div>
          <div className="column right">
            <h1>Boosters are a go Andre Wanlin!</h1>
            <h2>
              This is the results of the demo Software Template you just
              completed.
            </h2>
            <h3>
              Based on the topics you indicated interest in, here's what to
              check out next:
            </h3>

            <ul>
            
              
              <li>
                <a
                  href="https://backstage.io/docs/features/software-templates/input-examples"
                  target="_blank"
                >
                  Input Examples
                </a>
              </li>
              
              
              
              <li>
                <a
                  href="https://backstage.io/docs/features/software-templates/writing-custom-actions"
                  target="_blank"
                >
                  Writing Custom Actions
                </a>
              </li>
              
              
              <li>
                <a
                  href="https://backstage.io/docs/features/software-templates/writing-custom-field-extensions"
                  target="_blank"
                >
                  Writing Custom Field Extension
                </a>
              </li>
              
              
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
