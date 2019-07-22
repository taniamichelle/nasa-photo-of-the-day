import styled from 'styled-components';

// import { Grid, Form, Input, TextArea, Button, Select } from "semantic-ui-react";
// import "semantic-ui/dist/semantic.min.css";

// import {Card, CardTitle, CardText, Button } from 'reactstrap';

//styled div
export const StyledDiv = styled.div`
    border: 2px solid #e7e0e0;
    width: 70%;
    margin-top: 2rem;
    margin-left: auto;
    margin-right: auto;
    padding-top: 1rem;
    padding-bottom: 1rem;
`;

//styled p
export const StyledP = styled.p`
    color: #e7e0e0;
`;

//styled colors

//styled h1
export const StyledHeading = styled.h1`
  color: white;
`;

//styled button
export const StyledButton = styled.button`
  color: red;
  background-color: darkgray;
  font-size: 1em;
  margin: 1rem;
  padding: 1rem 1rem;
  border: 2px solid black;
  border-radius: 8px;
`;

//styled container
export const StyledContainer = styled.div`
    background-color: black;
    margin-left: auto;
    margin-right: auto;
`;

{/* Semantic-UI:
<Grid
  textAlign="center"
  style={{ height: "100vh", width: "80%", margin: "0 auto", marginTop: "40px" }}
  verticalAlign="middle"
>

<button class="ui button">
  Button
</button>
<div class="ui button" tabindex="0">
  Focusable
</div>

  <Form>
    <Form.Group widths="equal">
      <Form.Field
        id="form-input-control-first-name"
        control={Input}
        label="First name"
        placeholder="First name"
      />
      <Form.Field
        id="form-input-control-last-name"
        control={Input}
        label="Last name"
        placeholder="Last name"
      />
      <Form.Field
        control={Select}
        options={genderOptions}
        label={{ children: "Gender", htmlFor: "form-select-control-gender" }}
        placeholder="Gender"
        search
        searchInput={{ id: "form-select-control-gender" }}
      />
    </Form.Group>
    <Form.Field
      id="form-textarea-control-opinion"
      control={TextArea}
      label="Opinion"
      placeholder="Opinion"
    />
    <Form.Field
      id="form-button-control-public"
      control={Button}
      content="Confirm"
      label="Label with htmlFor"
    />
  </Form>
</Grid> */}

{/* Styled-components:
1)

// section
const StyledSection = styled.section``;

// headers h1 - h6
const StyledHeading = styled.h1``;

// a
const StyledA = styled.a``;

const WrapperDiv = styled.div`
    width: 100%;
    height: 100%;
`;

2)
function SomeComponent() {
    return (
        <div className="wrapper">
            <h1>Hello From the Home Component</h1>
        </div>
    );
}

export default SomeComponent;


3)
const Button = styled.button`
    padding: 6px 10px;
    margin: 5px;
    border: none;
    border-radius: 3px;
    color: white;

    ${props => (props.type === 'primary' ? `background: #2196f3;` : null)}
    ${props => (props.type === 'success' ? `background: #4caf50;` : null)}
    ${props => (props.type === 'danger' ? `background: #f44336;` : null)}
    ${props => (props.type === 'warning' ? `background: #fdd835;` : null)}
`;

function SomeComponent() {
  return (
    <div>
      <Button type="primary">Primary</Button>
      <Button type="success">Success</Button>
      <Button type="danger">Danger</Button>
      <Button type="warning">Warning</Button>
    </div>
  );
}

export default SomeComponent;

4)
const Button = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

// A new component based on Button, but with some override styles
const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;

function SomeComponent() {
  return (
  <div>
    <Button>Normal Button</Button>
    <TomatoButton>Tomato Button</TomatoButton>
  </div>
);

export default SomeComponent;
*/}