import { updateCourse } from "@/lib/actions";
import { fetchCourse } from "@/lib/data";
import styles from "@/components/ui/dashboard/products/singleProduct/singleProduct.module.css";
import Image from "next/image";
import Link from "next/link";

const SingleProductPage = async ({ params }) => {
  const { id } = params;
  const product = await fetchCourse(id);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noavatar.png" alt="" fill />
        </div>
        {product.title}
      </div>
      <div className={styles.formContainer}>
        <form action={updateCourse} className={styles.form}>
          <input type="hidden" name="id" value={product.id} />
          <label>Title</label>
          <input type="text" name="title" placeholder={product.title} />
          <label>Price</label>
          <input type="number" name="price" placeholder={product.price} />
          <label>Stock</label>
          <input type="number" name="stock" placeholder={product.stock} />
          <label>Color</label>
          <input
            type="text"
            name="color"
            placeholder={product.color || "color"}
          />
          <label>Size</label>
          <textarea
            type="text"
            name="size"
            placeholder={product.size || "size"}
          />
          <label>Cat</label>
          <select name="cat" id="cat">
            <option value="kitchen">Kitchen</option>
            <option value="computers">Computers</option>
          </select>
          <label>Description</label>
          <textarea
            name="desc"
            id="desc"
            rows="10"
            placeholder={product.desc}
          ></textarea>
          <Link href="/dashboard/products">
            <button>Back</button>
          </Link>

          {/* <button>Update</button> */}
        </form>
      </div>
    </div>
  );
};

export default SingleProductPage;
