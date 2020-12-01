import React from 'react'


const BandInput = (props) => {



    return(
      <div>
        Band Input
        <form onSubmit={props.handleSubmit} >
        <input type="text" onChange={props.handleChange} />
        <input type="submit" />
        </form>
      </div>
    )

}


export default BandInput
