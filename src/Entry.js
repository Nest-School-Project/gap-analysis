import React from 'react'

export const Entry = () => {
  return (
    <div className='Edit'>
        <form>
            <br></br>
            <br></br>
            <br></br>
            <label className='ins' >Name</label>
            <input
            type="text"
            required
            ></input>
            <br></br>
            <label className='ins'>Class</label>
            <input
            type="text"
            required
            ></input>
            <br></br>
            <label className='ins'>Sec</label>
            <input
            type="text"
            required
            ></input>
            <br></br>
            <label className='ins'>USN No</label>
            <input
            type="text"
            required
            ></input>
        </form>


    </div>
  )
}
