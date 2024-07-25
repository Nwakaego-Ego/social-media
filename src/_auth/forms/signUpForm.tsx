import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { signUpValidation } from "../../@/lib/validation";
import "./signUp.css";
import { Button } from "../../@/components/ui/button";
import Loading from "../../@/components/shared/loader";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../@/components/ui/form";
import { Input } from "../../@/components/ui/input";

const signInForm = () => {
  const loading = true;

  const form = useForm<z.infer<typeof signUpValidation>>({
    resolver: zodResolver(signUpValidation),
    defaultValues: {
      username: "",
      name: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof signUpValidation>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  console.log("Form");

  return (
    <>
      <Form {...form}>
        <div className="container">
          <div className="logo-container ">
            <img src="./images/logo.png" className="logo" />
            <h1>Snapgram</h1>
          </div>
          <p>Create a new account</p>
          <p>To use snapgram enter your details</p>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 ">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="signUpLabel signUpName">Name</FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="signUpLabel signUpUsername">
                    Username
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="signUpLabel signUpEmail">
                    Email
                  </FormLabel>
                  <FormControl>
                    <Input type="text" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="signUpLabel signUpPassword">
                    Password
                  </FormLabel>
                  <FormControl>
                    <Input type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="signUpBtn">
              {loading ? (
                <div>
                  {" "}
                  <Loading />
                </div>
              ) : (
                "Sign Up"
              )}
            </Button>
          </form>
        </div>
      </Form>
    </>
  );
};

export default signInForm;
