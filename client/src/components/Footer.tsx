const Footer = () => {
  return (
    <div className='w-3/4 mx-auto my-0 p-2 text-center border-t-4 border-t-lakerPurple font-bold flex justify-center'>
      Have any feedback? <a className="text-blue-500 ml-2 underline underline-offset-2 cursor-pointer" onClick={() => {
        alert('HAYDEN')
      }}>Click to copy email address!</a>
    </div>
  )
}

export { Footer }