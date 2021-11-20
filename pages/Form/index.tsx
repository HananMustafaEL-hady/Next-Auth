import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

interface dataType {
  Fullname: string,
  Email: string,
  Phone: number,
  Message: string
}
const FormPage = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  async function onSubmitForm(values: dataType) {
    let config = {
      headers: {
        'Content-Type': 'application/json'
      }

    }
    try {

      const response = await axios.post(`/api/contact`, values, config)
      if (response.status == 200) {
        reset()

      }

    } catch (err) {
      console.log(err)
    }



  }
  return (
    <div className="b py-16 bg-gray-50 px-4 sm:px-6 h-screen flex justify-center items-center">
      <div className="mx-auto w-full max-w-2xl rounded-xl bg-white p-8 shadow">
        <form
          onSubmit={handleSubmit(onSubmitForm)}
          className="grid grid-cols-1 gap-y-6"
        >
          <div>
            <label htmlFor="name" className="sr-only">
              Full name
            </label>
            <input
              type="text"
              className={`block w-full shadow py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md focus:outline-none focus:ring-2 
                ${errors?.Fullname ? 'ring-2 ring-red-500' : ""}
              `}
              placeholder="Full name"
              {...register('Fullname', {
                required: {
                  value: true,
                  message: 'You must enter your name'
                }
              })}
            />
            <span className="text-red-400 text-sm py-2">{errors?.Fullname?.message}</span>
          </div>
          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              {...register('Email', {
                required: {
                  value: true,
                  message: 'You must enter your email address'
                },
                minLength: {
                  value: 8,
                  message: 'This is not long enough to be an email'

                },
                maxLength: {
                  value: 120,
                  message: 'This is too long to be an email'

                },
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'This needs to be a valid email address',
                },

              })}
              type="text"
              className={`block w-full shadow py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md focus:outline-none focus:ring-2
              
              ${errors?.Email ? 'ring-2 ring-red-500' : null}

              `}
              placeholder="Email"
            />
            <span className="text-red-400 text-sm py-2">{errors?.Email?.message}</span>
          </div>
          <div>
            <label htmlFor="phone" className="sr-only">
              Phone
            </label>
            <input
              type="text"
              {...register('Phone', {
                required: {
                  value: true,
                  message: 'You must enter your phone'
                }
              })}
              className={`block w-full shadow py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md focus:outline-none focus:ring-2
              
              ${errors?.Phone ? 'ring-2 ring-red-500' : null}

              `}
              placeholder="Phone"
            />
            <span className="text-red-400 text-sm py-2">{errors?.Phone?.message}</span>

          </div>
          <div>
            <label htmlFor="message" className="sr-only">
              Message
            </label>
            <textarea
              rows={4}
              className={`block w-full shadow py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md focus:outline-none focus:ring-2
              ${errors?.Message ? 'ring-2 ring-red-500' : null}

              `}
              placeholder="Message"
              {...register('Message', {
                required: {
                  value: true,
                  message: 'You need to enter your message'
                },
                maxLength: {
                  value: 1000,
                  message: 'Your message can not be more than 1000 characters'

                }
                ,
                minLength: {
                  value: 50,
                  message: "Your message must be longer than this! "
                }
              })}

            ></textarea>
            <span className="text-red-400 text-sm py-2">{errors?.Message?.message}</span>
          </div>
          <div>
            <button
              type="submit"
              className="inline-flex justify-center py-3 px-6 border border-transparent shadow text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormPage;
