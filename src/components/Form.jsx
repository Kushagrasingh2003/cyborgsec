const Form = ({ textColor = 'text-white',action, view }) => {
  
  return (
    <div className="mx-auto max-w-screen-xl px-4 md:py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-lg text-center">
        <h1 className="text-red-700 text-2xl font-bold sm:text-3xl">Get placement now!</h1>

        {/* <p className={`mt-4 ${textColor}`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero nulla eaque error neque
          ipsa culpa autem, at itaque nostrum!
        </p> */}
      </div>

      <form action={action}  className="mx-auto mb-0 mt-8 max-w-md space-y-4">
      {/* {await isAuthenticated()}{
        <input type="hidden" name="userId" value={userData.id} />
      } */}
      
        <div>
          <div className="relative">
            <input
              type="text"
              className="w-full rounded-lg border-gray-200 p-4 md:pe-12 text-sm shadow-sm"
              placeholder="Full Name"
              name="name"
              required
            />
          </div>
        </div>

        <div>
          <div className="relative">
            <input
              type="email"
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="Email Address"
              name="email"
              required
            />
          </div>
        </div>

        <div>
          <div className="relative">
            <input
              type="tel"
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="Phone Number"
              required
              name="phone"
            />
          </div>
        </div>

        {/* <div className={view}> */}
          <div className="relative">
            <input
              type="text"
              className=" w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="Mcyber Academy Enrollment Number"
              required
              name="enrolmentId"
            />
          </div>
        {/* </div> */}

        <div>
          <div className="relative">
            <input
              type="text"
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="State/City"
              name="state"
              required
            />
          </div>
        </div>

        <div>
          <div className="relative">
            <input
              type="url"
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="Resume (Google Drive Link)"
              name="resume"
              required
            />
          </div>
        </div>

        <div className="flex items-center">
       
          <button
            type="submit"
            // onClick={()=>FormSubmit()}
            className="inline-block rounded-lg bg-red-700 px-5 py-3 text-sm font-medium text-white"
          >
            Apply
          </button>
         
         
        </div>
      </form>
    </div>
  );
};

export default Form;
