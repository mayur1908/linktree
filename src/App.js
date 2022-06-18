import './App.css';
import LinkCard from './LinkCard/LinkCard';

function App() {
  const data = [
    {
      title: 'Twitter',
      tagline: "follow me on twitter",
      username: '@MayurSonkusare9'

    },
    {
      title: 'Linkdin',
      tagline: "follow me on Linkdin",
      username: '@MayurSonkusare9'

    },
    {
      title: 'Git-Hub',
      tagline: "follow me on Git-Hub",
      username: 'mayur1908'

    }
  ]
  return (
    <div className="Container">
      <h1 className='app-title'>Linktree-Alt</h1>
      {
        data.map((cardinfo) => {
          return <LinkCard title={cardinfo.title}
            tagline={cardinfo.tagline}
            username={cardinfo.username}
          />
        }
        )
      }
    </div>
  );
}

export default App;
