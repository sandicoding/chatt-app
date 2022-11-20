import styled from 'styled-components'
import React from 'react'
import SendIcon from "@material-ui/icons/Send";


function ChatInput() {
    return (
        <Container>
            <InputContent>
                <form>
                    <input type="text" placeholder="Message here..." />
                    <SendButton>
                        <SendIcon />
                    </SendButton>
                </form>
            </InputContent>
        </Container>
        );
    }

export default ChatInput



const Container = styled.div`
    padding-left : 20px;
    padding-right : 20px;
    padding-bottom : 24px;
    
`

const InputContent = styled.div`
    border: 1px solid #8d8d8e;
    border-radius: 4px;

    

    form {
        display: flex;
        height: 42px;
        justify-content: space-between;
        align-items: center;
        padding-left: 10px;

        input {
        flex: 1;
        border: none;
        }

        input:focus {
        outline: none;
        }
    }
`;

const SendButton = styled.div`
    cursor: pointer;
    background : #007a5a;
    border-radius : 2px;
    width : 32px;
    height : 32px;
    display : flex;
    align-items : center;
    justify-content : center;
    margin-right : 5px;
    color : white;

    .MuiSvgIcon-root {
        width : 18px;
    }

    :hover {
        background : #148567;
    }
`