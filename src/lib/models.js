import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      unique: true,
    },
    name: {
      type: String,
    },
    userId: {
      type: String,
      unique: true,
    },
    state: {
      type: String,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    phone: {
      type: Number,
    }
  },
  { timestamps: true }
);

const courseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    desc: {
      type: String,
      required: true,
    },
    // maindesc: {
    //   type: String,
    //   required: true,
    // },
    duration: {
      type: String,
      require: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      require: true,
    },
    syllabus: [
      {
        type: Array,
        require: true,
      },
    ],
    // img: {
    //   type: String,
    //   required: true,
    // },
    startDate: {
      type: Date,
      required: true,
    },
    sales: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const orderSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
    },
    courseId: {
      type: String,
    },
    mode: {
      type: String,
    },
    transactionId: {
      type: String,
    },
    loginId:{
      type: String,
    },
    amount: {
      type: String,
    },
    paymentStatus: {
      type: String,
    },
    paymentStarted:{
      type: Date,
      default: Date.now
    },
    paymentEnded:{
      type: Date,
      default: Date.now
    },
  },
  { timestamps: true }
);

const studentReviewSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    // unique: true,
  },
  review: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    require: true,
  },
  profession: {
    type: String,
    require: true,
  },
});
const professionalReviewSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    min: 3,
    max: 20,
  },
  review: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    require: true,
  },
  profession: {
    type: String,
    require: true,
  },
});
const jobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  // requirements:{type: Array, required: true},
  requirements: [{ type: Array }],
  desc: [{ type: Array }],
  about: [{ type: Array }],
});
const placementSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  // userId: {
  //   type: String,

  // },
  enrolmentId:{
    type:String,
  },
  phone: {
    type: Number,
  },
  state: {
    type: String,
  },
  resume: {
    type: String,
  },
});
const trainingSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  // userId: {
  //   type: String,
  // },
  enrolmentId:{
    type:String,
  },
  phone: {
    type: Number,
  },
  state: {
    type: String,
  },
  resume: {
    type: String,
  },
});

const bookingSchema = new mongoose.Schema(
  {
    name:{
      type:String,
      required:true,
    },
    email:{
      type:String,
      unique:true,
      required:true,
    },
    phone:{
      type:String,
      required:true,
    },
    course:{
      type:String,
    }
  },
  { timestamps: true }
)

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    desc1: {
      type: String,
    },
    desc2: {
      type: String,
    },
    desc3: {
      type: String,
    },
    desc4: {
      type: String,
    },
    desc5: {
      type: String,
    },
    heading1: {
      type: String,
    },
    heading2: {
      type: String,
    },
    heading3: {
      type: String,
    },
    heading4: {
      type: String,
    },
    heading5: {
      type: String,
    },
    maindesc: {
      type: String,
      required: true,
    },
    img1: {
      type: String,
      required: true,
    },
    img2: {
      type: String,
    },
    img3: {
      type: String,
    },
    img4: {
      type: String,
    },
    img5: {
      type: String,
    },
  },
  { timestamps: true }
);


export const User = mongoose.models.User || mongoose.model("User", userSchema);


export const Course =
  mongoose.models.Course || mongoose.model("Course", courseSchema);

export const StudentReview =
  mongoose.models.StudentReview ||
  mongoose.model("StudentReview", studentReviewSchema);

export const ProfessionalReview =
  mongoose.models.ProfessionalReview ||
  mongoose.model("ProfessionalReview", professionalReviewSchema);

export const Blog = mongoose.models.Blog || mongoose.model("Blog", blogSchema);
export const Job = mongoose.models.Job || mongoose.model("Job", jobSchema);
export const Booking = mongoose.models.Booking || mongoose.model("Booking", bookingSchema);
export const Placement =
  mongoose.models.Placement || mongoose.model("Placement", placementSchema);
export const Training =
  mongoose.models.Training || mongoose.model("Training", trainingSchema);
export const Order =
  mongoose.models.Order || mongoose.model("Order", orderSchema);