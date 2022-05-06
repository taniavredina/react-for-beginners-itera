import './App.css';
import Records from './records.json';
import { FC } from 'react'; 
import { PureComponent } from 'react';

type H1Props = {Firstname: string, City: string, Age: number}
type H2Props = {Interests: string}

const AppH1: FC<H1Props> = (props) => (
  <div>
  <h1>Hello!</h1>
  <p>My name is {props.Firstname}. I live in {props.City}.</p>
  <p>I am {props.Age} years old.</p>
</div>
)

class AppH2 extends PureComponent<H2Props> {
  render() {
    return (
    <>
    <h2>My Interests:</h2>
    <p> {this.props.Interests} </p>
    </>
    )
  }

}

function App() {
return (
  <>
  <AppH1 Firstname = {Records['First name']} City = {Records['City']} Age = {Records['Age']}/>
  <AppH2 Interests = 'I like to travel, walk, pick mushrooms.'/></>  
)
}
  
export default App

