"use client"
import { useRouter } from "next/navigation"
import { useEffect } from "react";
import { useDebouncedCallback } from 'use-debounce'
import Logo from "../../../../public/logo.png"
export default function Page({name,email,title,price,transactionId}) {
  // const logo = "/logo.png";
    const router = useRouter();
    const sendmail = async()=>{
      console.log("mail");
      const response = await fetch("/api/emails", {
        method: "POST",
        body: JSON.stringify({
          email: email,
          name: name,
          title:title,
          price:price,
          transactionId:transactionId,
          logo:Logo
        }),
      });
      if(response===200){
        Response.json("success")
      }
    }
    const proces = useDebouncedCallback(()=>{
        // navigate();
        
        router.push("/");
         sendmail();
        // redirect("/")
        },3000)
      
        useEffect(()=>{
          proces();
        })
    return (
       <>
        
       </>
    );
}