"use server";

import { revalidatePath } from "next/cache";
import { Course, User, Placement, Training, Order, Booking } from "./models";
import { connectToDB } from "./db";
import { redirect } from "next/navigation";
// import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { fetchOrder } from "@/lib/data";

export const addUser = async (formData) => {
  const { name, email, phone, isAdmin, kindeId } = Object.fromEntries(formData);

  try {
    connectToDB();

    const newUser = new User({
      name,
      email,
      phone,
      kindeId,
      isAdmin,
    });

    await newUser.save();
  } catch (err) {
    console.log(err);
    throw new Error("Failed to create user!");
  }

  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};
export const addPlacement = async (formData) => {
  const { name, email, phone, state, resume ,enrolmentId} = Object.fromEntries(formData);

  try {
    connectToDB();

    const newPlacement = new Placement({
      name,
      email,
      phone,
      state,
      resume,
      enrolmentId
      // userId
    });
    console.log({ name, email, phone, state, resume });
    await newPlacement.save();
  } catch (err) {
    console.log(err);
    throw new Error("Failed to create Placement data!");
  }
  // FormSubmit();
  revalidatePath("/careers/placementcell");
  redirect("/");
  
};
export const addBooking = async (formData) => {
  const { name, email, phone,course} = Object.fromEntries(formData);

  try {
    connectToDB();

    const newBooking = new Booking({
      name,
      email,
      phone,
      course
    });
     console.log({ name, email, phone, course });
    await newBooking.save();
  } catch (err) {
    console.log(err);
    throw new Error("Failed to create Booking data!");
  }
  // FormSubmit();
   revalidatePath("/");
  // redirect("/");
  
};


export const addTraining = async (formData) => {
  const { name, email, phone, state, resume,enrolmentId } = Object.fromEntries(formData);

  try {
    connectToDB();

    const newTraining = new Training({
      name,
      email,
      phone,
      state,
      resume,
      enrolmentId
      // userId,
    });
    await newTraining.save();
  } catch (err) {
    console.log(err);
    throw new Error("Failed to create Training data!");
  }

  revalidatePath("/careers/summertraining");
  redirect("/");
};

export const updateUser = async (formData) => {
  const { id, phone, state, courseId, mode,amount,transactionId,loginId,paymentStatus } = Object.fromEntries(formData);
  const userId = id;
  // const user = id;
  const order = await fetchOrder(courseId, id);
  
  try {
    connectToDB();
    const updateFields = {
      phone,
      state,
    };

    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || undefined) && delete updateFields[key]
    );

    await User.findByIdAndUpdate(id, updateFields);
    if (order === undefined || order === null) {
      const newOrder = new Order({
        courseId,
        mode,
        userId,
        amount,
        transactionId,
        loginId,
        paymentStatus
      });
      await newOrder.save();
    } else {
      const newOrder = {
        mode,
        amount,
      };
      Object.keys(newOrder).forEach(
        (key) => (newOrder[key] === "" || undefined) && delete newOrder[key]
      );
      await Order.findByIdAndUpdate(order._id, newOrder);
    }
  } catch (err) {
    console.log(err);
    throw new Error("Failed to update user!");
  }
  
  // revalidatePath("/dashboard/users");
    // redirect("/payment");
};

export const addCourse = async (formData) => {
  const { title, desc, price, maindesc, startDate } =
    Object.fromEntries(formData);

  try {
    connectToDB();

    const newCourse = new Course({
      title,
      desc,
      maindesc,
      price,
      startDate,
      // img,
    });

    await newCourse.save();
  } catch (err) {
    console.log(err);
    throw new Error("Failed to create product!");
  }

  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};

export const updateCourse = async (formData) => {
  const { id, title, desc, maindesc, price, startDate } =
    Object.fromEntries(formData);

  try {
    connectToDB();

    const updateFields = {
      title,
      desc,
      maindesc,
      price,
      startDate,
    };

    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || undefined) && delete updateFields[key]
    );

    await Course.findByIdAndUpdate(id, updateFields);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to update product!");
  }

  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};

export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDB();
    await User.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete user!");
  }

  revalidatePath("/dashboard/products");
};

export const deleteCourse = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDB();
    await Course.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete product!");
  }

  revalidatePath("/dashboard/products");
};
