import { addCourse } from "@/lib/actions";
import styles from "@/components/ui/dashboard/products/addProduct/addProduct.module.css";

const AddProductPage = () => {
  return (
    <div className={styles.container}>
      <form action={addCourse} className={styles.form}>
        <input type="text" placeholder="title" name="title" required />

        <input type="number" placeholder="price" name="price" required />
        <input type="date" placeholder="startDate" name="startDate" required />
        {/* <input type="file" placeholder="img" name="img" required /> */}
        <textarea
          required
          name="desc"
          id="desc"
          rows="2"
          placeholder="Description"
        ></textarea>
        <textarea
          required
          name="maindesc"
          id="maindesc"
          rows="16"
          placeholder="Content"
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddProductPage;
