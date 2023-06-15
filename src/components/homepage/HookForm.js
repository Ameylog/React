import React from 'react';
import { useForm } from 'react-hook-form';

 function HookForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
    First name:-  <input type="text" placeholder="First name" {...register("First name", {required: true, maxLength: 80})} /><br/>

    Last name:-  <input type="text" placeholder="Last name" {...register("Last name", {required: true, maxLength: 100})} /><br/>
    Email:-  <input type="text" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />< br/>
    Password:-  <input type="password" placeholder="Password" {...register("Password", {required: true, min: 8})} /> <br/>
    Mobile number:-  <input type="tel" placeholder="Mobile number" {...register("Mobile number", {required: true, minLength: 6, maxLength: 12})} />< br/>

    Gender:-  <input {...register("Gender")} type="radio" value="Male" /><br/>
      <input {...register("Gender")} type="radio" value="Female" />
      <input type="text" placeholder="City" {...register("City", {})} /><br/>

    Submit  <input type="submit" /><br/>
    </form>
  );
}
export default HookForm