import React from 'react';
import { useForm } from 'react-hook-form';

 function HookForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
    First name:-  <input type="text" placeholder="First name" {...register("First name", {required: true, maxLength: 80})} />
    Last name:-  <input type="text" placeholder="Last name" {...register("Last name", {required: true, maxLength: 100})} />
    Email:-  <input type="text" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
    Password:-  <input type="password" placeholder="Password" {...register("Password", {required: true, min: 8})} />
    Mobile number:-  <input type="tel" placeholder="Mobile number" {...register("Mobile number", {required: true, minLength: 6, maxLength: 12})} />

    Gender:-  <input {...register("Gender")} type="radio" value="Male" />
      <input {...register("Gender")} type="radio" value="Female" />
      <input type="text" placeholder="City" {...register("City", {})} />

    Submit  <input type="submit" />
    </form>
  );
}
export default HookForm