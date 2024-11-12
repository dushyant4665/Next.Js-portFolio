
// import SkillsContainer from './SkillsContainer'
// import {SiJavascript} from 'react-icons/si'
// import { GiSkills } from "react-icons/gi";
import Title from "./Title";
import FoundationContainer from './FoundationContainer'


const Foundation = () => {
 
    return (
      <div className="wrapper" data-aos='fade-right'>
        <Title text="Networking" icon='' />
        <div className="flex gap-4 flex-wrap">
          <FoundationContainer
            title="HTTP" link=""/>
{/*           <NetworkingContainer 
          title="HTTPS" link="" /> */}
          <FoundationContainer 
          title="FTP" link="" />
          <FoundationContainer 
          title="TCP/IP" link="" />
          <FoundationContainer
          title="DNS"
          link=""
          />
        </div>
      </div>
    );
  };
export default Foundation
