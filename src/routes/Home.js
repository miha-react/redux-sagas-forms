import React from 'react';
import {Field, reduxForm, SubmissionError} from 'redux-form';
import {Input, Button, Message} from 'semantic-ui-react';

 class Home extends React.Component {
  constructor(props){
    super(props);
  }

  locationInput({input, meta:{touched, error}, ...custom}){
    const hasError = touched&&error !== undefined;
    return(
      <div>
        {hasError && <Message
                        error
                        header="Error"
                        content={error}
                     />}
        <Input
          error={hasError}
          fluid
          placeholder="Location..."
          {...input}
          {...custom}
        />

      </div>
    )
  }
  submit =({location}, dispatch)=>{
    //API Call
    return new Promise((resolve, reject) => {
      dispatch({
        type: "FETCH",
        location,
        resolve,
        reject
      });
    }).catch((e) => {
        throw new SubmissionError(e)
        });
  };

  render(){
    const {handleSubmit} = this.props;
    return <div>
      <h1>Home</h1>

      <form onSubmit={handleSubmit(this.submit)}>
        <Field name="location" component={this.locationInput}/>
        <br/>
        <Button fluid type="sumbit">Submit</Button>
      </form>
    </div>
  }

}

const validate = ({location}) => {
   const errors = {};
   if(!location || location.trim() === ''){
     errors.location = "Location required"
   }
   return errors;
}

export default reduxForm({
  form: 'Home',
  validate
})(Home);