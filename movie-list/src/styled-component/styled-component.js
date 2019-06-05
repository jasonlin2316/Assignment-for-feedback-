import styled from 'styled-components';

const Title = styled.h1`
display:block
color:white
`

const Ul = styled.ul`
display:flex
justify-content:left
list-style:none
height:320px
`
const Button = styled.button`
display:none;

`
const Li = styled.li`
margin:5px
color:white
&:hover ${Button} {
    display:block;
}
`


export { Title,Ul,Li,Button }