import React from 'react'

import styled from 'styled-components'

const Card = () => {
    return (
        <>
            <StyledCard>
                <Content>
                    <Image src="https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                    <div>
                        <h3>Title</h3>
                        <h4>Date</h4>
                        <p>Short description</p>
                    </div>
                </Content>
            </StyledCard>
            <StyledCard>
                <Content>
                    <Image src="https://images.pexels.com/photos/712786/pexels-photo-712786.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                    <div>
                        <h3>Title</h3>
                        <h4>Date</h4>
                        <p>Short description</p>
                    </div>
                </Content>
            </StyledCard>
            <StyledCard>
                <Content>
                    <Image src="https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                    <div>
                        <h3>Title</h3>
                        <h4>Date</h4>
                        <p>Short description</p>
                    </div>
                </Content>
            </StyledCard>
            <StyledCard>
                <Content>
                    <Image src="https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                    <div>
                        <h3>Title</h3>
                        <h4>Date</h4>
                        <p>Short description</p>
                    </div>
                </Content>
            </StyledCard>
            <StyledCard>
                <Content>
                    <Image src="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                    <div>
                        <h3>Title</h3>
                        <h4>Date</h4>
                        <p>Short description</p>
                    </div>
                </Content>
            </StyledCard>
            <StyledCard>
                <Content>
                    <Image src="https://images.pexels.com/photos/1150988/pexels-photo-1150988.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                    <div>
                        <h3>Title</h3>
                        <h4>Date</h4>
                        <p>Short description</p>
                    </div>
                </Content>
            </StyledCard>
        </>
    )

}

const StyledCard = styled.div`
    background-color: green;
    min-height: 30vh;
    border-color: #416CD5;
    text-align: center;
    border-radius: 1rem;
    curso: pointer;
    overflow: hidden;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100%;
    height: 100%;
`;

const Image = styled.img`
    width: 100%;
`;

export default Card