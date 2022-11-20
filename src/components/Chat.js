
import React, { useEffect , useState } from 'react'
import styled from 'styled-components'
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import ChatInput from './ChatInput'
import ChatMessage from './ChatMessage'
import { useParams } from 'react-router-dom'
import db from '../firebase'


function Chat() {

    let {channelId} = useParams();
    const [ channel , setChannel ] = useState();
    const   [ messagess , setMessages] = useState([]);

    const getMessages = () => {
        db.collection('rooms')
        .doc(channelId)
        .collection('messages')
        .orderBy('timestamp', 'asc')
        .onSnapshot((snapshot) =>  {
            let messages = snapshot.docs.map((doc) => doc.data());
            console.log(messages);
            setMessages(messages);
            
        })
    }

    const getChannel = () => {
        db.collection('rooms')
        .doc(channelId).onSnapshot((snapshot) => {
            setChannel(snapshot.data());
        })
    }

    useEffect(() => {
        getChannel();
        getMessages();
    }, [channelId])

 


    return (
    <Container>
        <Header>
            <Channel>
                <ChannelName>
                    # {channel && channel.name}
                </ChannelName>
                <ChannelInfo>
                    {/* {messages.map((data) => (
                        <h1 key={data}>{data.text}</h1>
                    ))} */}
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                </ChannelInfo>
            </Channel>
            <ChannelDetails>
                <div>Details</div>
                <Info/>
            </ChannelDetails>
        </Header>
        <MessageContainer>
            {
                messagess.length > 0 &&
                messagess.map((data, index) => (
                    
                    
                    <ChatMessage 
                        text={data.text}
                        name={data.user}
                        image={data.userImage}
                        timestamp={new Date(data.timestamp.toDate()).toUTCString()}
                    />
                    )
                
                )
                
            }
        </MessageContainer>
        <ChatInput/>
    </Container>
    );
}

export default Chat

const Container = styled.div`
    display : grid;
    grid-template-rows : 64px auto min-content;
`
const Channel = styled.div`

`;

const ChannelName = styled.div`
    font-weight : 700;
`;
const ChannelInfo = styled.div`
    font-weight : 400;
    color : #606060;
    font-size : 13px;
    margin-top : 8px;
`;

const Info = styled(InfoOutlinedIcon)`

`;
const ChannelDetails = styled.div`
    display : flex;
    color : #606060;
    align-items : center;
    div {
        margin-right : 8px;
    }
`;
const Header = styled.div`
    padding-left : 20px;
    padding-right : 20px;
    display : flex;
    align-items : center;
    border-bottom : 1px solid rgba(83, 39, 83,.13);
    justify-content : space-between;
`
const MessageContainer = styled.div`
  
`;



