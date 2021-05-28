import React from 'react'

import styled from 'styled-components'

import { faGithubSquare, faLinkedin, faYoutubeSquare, faTelegramPlane, faInstagramSquare } from '@fortawesome/free-brands-svg-icons'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SocialNetworkSection = () => {
    return (
        <Network>
            <Social href="https://github.com/DjairCosta" target='_blank'>
                <FontAwesomeIcon icon={faGithubSquare} size='4x' />
                <h3>github.com/djaircosta</h3>
            </Social>
            <Social href="https://linkedin.com/in/DjairCosta" target='_blank'>
                <FontAwesomeIcon icon={faLinkedin} size='4x' />
                <h3>linkedin.com/djaircosta</h3>
            </Social>
            <Social href="https://youtube.com/c/DjairCostaBR" target='_blank'>
                <FontAwesomeIcon icon={faYoutubeSquare} size='4x' />
                <h3>youtube.com/djaircosta</h3>
            </Social>
            <Social href="https://t.me/djaircostabr" target='_blank'>
                <FontAwesomeIcon icon={faTelegramPlane} size='4x' />
                <h3>telegram.com/djaircosta</h3>
            </Social>
            <Social href="https://www.instagram.com/djairrobeto/" target='_blank' al>
                <FontAwesomeIcon icon={faInstagramSquare} size='4x' />
                <h3>instagram.com/djaircosta</h3>
            </Social>
        </Network>

    )
}

const Network = styled.div`
   padding: 1rem 5rem;
`;

const Social = styled.a`
   display: flex;
   flex-direction: row;
   justify-content: flex-start;
   align-items: center;
   border-radius: 15px 50px;
   padding-left: 2rem;
   text-decoration: none;
   &:hover{
       background: yellow;
       cursor: pointer;
   }
   h3{
       color: grey;
       margin: 2rem;
   }
   color inherit;   
`;

export default SocialNetworkSection