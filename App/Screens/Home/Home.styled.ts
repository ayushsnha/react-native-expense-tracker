import styled from 'styled-components/native';

const Container = styled.View`
    background-color: ${(props) => props.theme.PRIMARY_BACKGROUND_COLOR};
    flex:1;
    justify-content: center;
    align-items: center;
`;

const Button = styled.TouchableOpacity`
    margin-top: 20px;
    background-color: ${(props) => props.theme.PRIMARY_BUTTON_COLOR};
    border-radius: 5px;
    padding: 10px;

`;

export default Container;
export { Button };
