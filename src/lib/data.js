import {
  Course,
  User,
  Blog,
  StudentReview,
  ProfessionalReview,
  Job,
  Placement,
  Training,
  Order,
  Booking,
} from "./models";
import { connectToDB } from "./db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import Page from "@/app/success/page";

export const fetchUsers = async (q, page) => {
  const regex = new RegExp(q, "i");

  const ITEM_PER_PAGE = 5;

  try {
    connectToDB();
    const count = await User.find({ username: { $regex: regex } }).count();
    const users = await User.find({ username: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return { count, users };
  } catch (err) {
    console.log(err);
    // throw new Error("Failed to fetch users!");
  }
};

export const fetchUser = async () => {
  const { getUser } = getKindeServerSession();
  //  console.log(userId);
  const userData = await getUser();
  // console.log({userData});

  try {
    connectToDB();
    const user = await User.find({ email: userData.email });
    return user;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch user!");
  }
};
export const fetchSingleUser = async () => {
  const { getUser } = getKindeServerSession();
  //  console.log(userId);
  const userData = await getUser();
  // console.log({userData});

  try {
    connectToDB();
    const user = await User.findOne({ email: userData.email });
    return user;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch user!");
  }
};
export const fetchUserById = async (id) => {
  try {
    connectToDB();
    const user = await User.findById(id);
    return user;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch user!");
  }
};

export const fetchId = async () => {
  const { getUser } = getKindeServerSession();
  //  console.log(userId);
  const userData = await getUser();
  console.log(userData.id);

  try {
    connectToDB();
    const user = await User.findOne({ userId: userData.id });
    console.log({ user });
    return user._id.toString();
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch user!");
  }
};
export const fetchOrder = async (courseId, userId) => {
  try {
    connectToDB();
    console.log({ userId, courseId });
    const order = await Order.findOne({ userId: userId, courseId: courseId });
    console.log(order);
    return order;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch order!");
  }
};
export const fetchOrders= async (q, page) => {
  const regex = new RegExp(q, "i");

  const ITEM_PER_PAGE = 10;

  try {
    connectToDB();
    const count = await Order.find({ mode:{ $regex: regex } }).count();
    const orders = await Order.find({ mode:{ $regex: regex }})
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return { count, orders };
  } catch (err) {
    console.log(err);
    // throw new Error("Failed to fetch users!");
  }
};
export const fetchBookings= async (q, page) => {
  const regex = new RegExp(q, "i");

  // const ITEM_PER_PAGE = 10;

  try {
    connectToDB();
    const count = await Booking.find({ name:{ $regex: regex } }).count();
    const bookings = await Booking.find({ name:{ $regex: regex }})
      // .limit(ITEM_PER_PAGE)
      // .skip(ITEM_PER_PAGE * (page - 1));
    return { count, bookings };
  } catch (err) {
    console.log(err);
    // throw new Error("Failed to fetch users!");
  }
};
export const fetchUserOrder = async (userId) => {
  try {
    connectToDB();
    const order = await Order.find({ loginId: userId });
    console.log(order);
    return order;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch order!");
  }
};
export const fetchOrderById = async (transactionId) => {
  try {
    connectToDB();
    const order = await Order.findOne({ transactionId: transactionId });
    console.log({ order });
    return order;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch order!");
  }
};

export const fetchCourses = async (q) => {
  console.log(q);
  const regex = new RegExp(q, "i");

  // const ITEM_PER_PAGE = 2;

  try {
    connectToDB();
    // const count = await Course.find({ title: { $regex: regex } }).count();
    const courses = await Course.find({ title: { $regex: regex } });
    // .limit(ITEM_PER_PAGE)
    // .skip(ITEM_PER_PAGE * (page - 1));
    return { courses };
  } catch (err) {
    console.log("Failed to fetch products!");
    throw new Error("Failed to fetch courses!");
  }
};

export const fetchCourse = async (id) => {
  try {
    connectToDB();

    const course = await Course.findById(id);

    return course;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch course!");
  }
};
export const fetchCourseByName = async (q) => {
  const regex = new RegExp(q, "i");
  try {
    connectToDB();
    // const course = await Course.findById(id);
    const course = await Course.findOne({ title: { $regex: regex } });

    return course;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch course!");
  }
};

export const fetchJobs = async (q, page) => {
  console.log(q);
  const regex = new RegExp(q, "i");

  const ITEM_PER_PAGE = 5;

  try {
    connectToDB();
    const count = await Job.find({ title: { $regex: regex } }).count();
    const jobs = await Job.find({ title: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    // console.log(jobs);
    return { jobs, count };
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch jobs!");
  }
};

export const fetchJob = async (id) => {
  try {
    connectToDB();
    const job = await Job.findById(id);
    return job;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch job!");
  }
};

export const fetchBlogs = async (q, page) => {
  // console.log(q);
  const regex = new RegExp(q, "i");

  const ITEM_PER_PAGE = 6;

  try {
    connectToDB();
    const count = await Blog.find({ title: { $regex: regex } }).count();
    const blogs = await Blog.find({ title: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return { count, blogs };
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch blogs!");
  }
};

export const fetchBlog = async (id) => {
  try {
    connectToDB();
    const blog = await Blog.findById(id);
    return blog;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch blogs!");
  }
};

export const fetchStudenReviews = async (q, page, items) => {
  // console.log(q);
  const regex = new RegExp(q, "i");

  const ITEM_PER_PAGE = 3;

  try {
    connectToDB();
    const count = await StudentReview.find({
      username: { $regex: regex },
    }).count();
    const studenReviews = await StudentReview.find({
      username: { $regex: regex },
    })
      .limit(items)
      .skip(items * (page - 1));
    // console.log({studenReviews,count});
    return { studenReviews, count };
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch Reviews!");
  }
};
export const fetchStudenReviewsMobile = async (q, page, items) => {
  // console.log(q);
  const regex = new RegExp(q, "i");

  const ITEM_PER_PAGE = 3;

  try {
    connectToDB();
    const mobilecount = await StudentReview.find({
      username: { $regex: regex },
    }).count();
    const mobilestudenReviews = await StudentReview.find({
      username: { $regex: regex },
    })
      .limit(items)
      .skip(items * (page - 1));
    // console.log({studenReviews,count});
    return { mobilestudenReviews, mobilecount };
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch Reviews!");
  }
};

export const fetchProfessionalReviews = async (q, page) => {
  console.log(q);
  const regex = new RegExp(q, "i");

  const ITEM_PER_PAGE = 3;

  try {
    connectToDB();
    const count = await ProfessionalReview.find({
      title: { $regex: regex },
    }).count();
    const professionalReview = await ProfessionalReview.find({
      title: { $regex: regex },
    })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return { count, professionalReview };
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch products!");
  }
};

export const fetchPlacement = async (q, page) => {
  console.log(q);
  const regex = new RegExp(q, "i");

  const ITEM_PER_PAGE = 3;

  try {
    connectToDB();
    const count = await Placement.find({ title: { $regex: regex } }).count();
    const placements = await Placement.find({ title: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return { count, placements };
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch placements data!");
  }
};
export const fetchTraining = async (q, page) => {
  console.log(q);
  const regex = new RegExp(q, "i");

  const ITEM_PER_PAGE = 3;

  try {
    connectToDB();
    const count = await Training.find({ title: { $regex: regex } }).count();
    const training = await Training.find({ title: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return { count, training };
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch training data!");
  }
};
export const saveUser = async ({ name, email, userId, isAdmin, phone }) => {
  try {
    connectToDB();
    const newUser = new User({
      name,
      email,
      userId,
      isAdmin,
      phone,
    });
    await newUser.save();
  } catch (err) {
    console.log(err);
    throw new Error("Failed to save user in database");
  }
};

export const updateOrder = async (courseId, userId, transactionId,paymentStarted) => {
  const order = await fetchOrder(courseId, userId);
  // const user = await fetchUser();
  // console.log({user});
  console.log({ order });
  try {
    connectToDB();
    const newOrder = {
      transactionId,
      paymentStarted
    };
    Object.keys(newOrder).forEach(
      (key) => (newOrder[key] === "" || undefined) && delete newOrder[key]
    );
    await Order.findByIdAndUpdate(order._id, newOrder);

    // const updateFields =  {$push:{orders:transactionId}}
    //  await User.findByIdAndUpdate(user._id,updateFields);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to save order transaction details in database");
  }
};
export const updateOrderStatus = async (transactionId,paymentStatus,paymentEnded) => {
  const order = await fetchOrderById(transactionId);
  try {
    connectToDB();
    const newOrder = {
      paymentStatus,
      paymentEnded
    };
    Object.keys(newOrder).forEach(
      (key) => (newOrder[key] === "" || undefined) && delete newOrder[key]
    );
    await Order.findByIdAndUpdate(order._id, newOrder);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to save order status details in database");
  }
};



