import React, { Component } from 'react'

export class UserForm extends Component {

 state = {
  step:1,
  firstName: '',
  lastName: '',
  emailAddress: '',
  occupation: '',
  city: '',
  bio: ''

 }

 //method to proceed to the next step

  nextStep = () => {
    const { step } = this.state;
    this.setState ({
      step: step+1
    })
  }

//method to go to the previous step

prevStep = () => {
  const { step } = this.state;
  this.setState ({
    step: step-1
  })
}

//method to handle fields change


  render() {
    return (
      <div>
        
      </div>
    )
  }
}

export default UserForm
