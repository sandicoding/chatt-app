import React, { useEffect} from 'react'
import styled from 'styled-components'
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import { sidebarItems } from '../data/SidebarData'
import AddIcon from "@material-ui/icons/Add";
import db from '../firebase';
import { useHistory } from 'react-router-dom'

function Sidebar({rooms}) {

    useEffect(() => {

    }, [])


    const history = useHistory()


    const goToChannel = (id) => {
      if(id){
        console.log(id)
        history.push(`/room/${id}`)
      }
    }


    const addChannel = () => {
        const promptName = prompt("enter  Channel Name");
        if(promptName){
            db.collection("rooms").add({
                name: promptName
            })
        }  
        
    }

    return (
      <Container>
        <WorkSpaceContainer>
          <Name>Sandi Pratama</Name>
          <NewMessage>
            <AddCircleOutlineIcon />
          </NewMessage>
        </WorkSpaceContainer>
        <MainChannels>
          {sidebarItems.map((item) => (
            <MainChannelsItem>
              {item.icon}
              {item.text}
            </MainChannelsItem>
          ))}
        </MainChannels>
        <ChannelsContainer>
          <NewChannelContainer>
            <div>Channels</div>
            <AddIcon onClick={addChannel} />
          </NewChannelContainer>
          <ChannelsList>
            {rooms.map((item) => (
              <Channel onClick={() => goToChannel(item.id)}># {item.name}</Channel>
            ))}
          </ChannelsList>
        </ChannelsContainer>
      </Container>
    );
}

export default Sidebar


const Container = styled.div`
  background: #3F0E40;
`;

const WorkSpaceContainer = styled.div`
    color : white;
    height : 64px;
    display : flex;
    align-items : center;
    padding-left : 19px;
    justify-content : space-between;
    border-bottom : 1px solid #532753;
`

const Name = styled.div``

const NewMessage = styled.div`
  width: 36px;
  height: 36px;
  color: #3f0e40;
  background-color: white;
  fill: #3f0e40;
  display : flex;
  justify-content : center;
  align-items : center;
  border-radius : 50%;
  margin-right : 15px;
  cursor : pointer;
`;

const MainChannels = styled.div`
    padding-top : 16px;
`
const MainChannelsItem = styled.div`
  color: rgb(188, 171, 188);
  display: grid;
  grid-template-columns: 15% auto;
  height: 28px;
  align-items: center;
  padding-left: 19px;
  cursor: pointer;
  :hover {
    background: #350d36;
  }
`;

const ChannelsContainer = styled.div`
  color: rgb(188, 171, 188);
  margin-top : 10px;
`;
const NewChannelContainer = styled.div`
    justify-content : space-between;
    display: flex;
    align-items : center;
    height : 28px;
    padding-left : 16px;
    padding-right : 12px;
    cursor : pointer;
`;

const ChannelsList = styled.div`
    
`
const Channel = styled.div`
    padding-top: 5px;
    padding-left: 16px;
    height: 28px;
    display: flex;
    align-items: center;
    cursor: pointer;
    :hover {
        background: #350d36;
    }
`;
