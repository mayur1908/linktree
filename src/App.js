import './App.css';
import LinkCard from './LinkCard/LinkCard';

function App() {
  const data = [
    {
      title: 'twitter',
      tagline: "follow me on twitter",
      username: '@MayurSonkusare9',
      link:"https://twitter.com/MayurSonkusare9?t=rsFSTQThz8WrS521cGdy5A&s=09"

    },
    
    {
      title: 'github',
      tagline: "follow me on Git-Hub",
      username: 'mayur1908',
      link:"https://github.com/mayur1908",
    },
    {
      title: 'linkdin',
      tagline: "follow me on Linkdin",
      username: '@MayurSonkusare9',
      link:"https://www.linkedin.com/in/mayur-sonkusare-8305a121b"
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
            link={cardinfo.link}
          />
        }
        )
      }
    </div>
  );
}

export default App;
