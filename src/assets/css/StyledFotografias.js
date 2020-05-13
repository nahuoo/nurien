import styled from 'styled-components'

export const GalleryWrapper = styled.div`
    width: 100%;
    margin-top: 10%;
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    flex-wrap: wrap;
    div{
        cursor:pointer;
        margin:0.5%;
        img {
            border-radius: 5%;
        }
    }
    `
export const Titulo = styled.div`
position:absolute;
top: 15vh;
height: 10vh;
color:white;
`

export const Division = styled.div`
    position:fixed;
    background:transparent;
    top:20px;
    height:100vh;
`
